import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

import { siteConfig } from "@/data/site";

type OrderItem = {
  name: string;
  slug: string;
  price: number;
  qty: number;
};

type OrderBody = {
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state?: string;
    postcode?: string;
    notes?: string;
  };
  items: OrderItem[];
  subtotal: number;
};

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function esc(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: OrderBody;
  try {
    body = (await request.json()) as OrderBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { customer, items, subtotal } = body ?? {};
  if (
    !customer?.name ||
    !customer?.phone ||
    !customer?.address ||
    !Array.isArray(items) ||
    items.length === 0
  ) {
    return NextResponse.json(
      { error: "Please provide your details and at least one item." },
      { status: 400 }
    );
  }

  const orderRef = `ZP-${Date.now().toString(36).toUpperCase()}`;

  const rows = items
    .map(
      (it) =>
        `<tr><td style="padding:6px 10px;border:1px solid #eee">${esc(it.name)}</td><td style="padding:6px 10px;border:1px solid #eee;text-align:center">${it.qty}</td><td style="padding:6px 10px;border:1px solid #eee;text-align:right">$${Number(it.price).toFixed(2)}</td><td style="padding:6px 10px;border:1px solid #eee;text-align:right">$${(it.qty * it.price).toFixed(2)}</td></tr>`
    )
    .join("");

  const html = `
    <h2>New COD Order &mdash; ${orderRef}</h2>
    <p><strong>Payment:</strong> Cash on Delivery</p>
    <h3>Customer</h3>
    <p>
      ${esc(customer.name)}<br/>
      ${esc(customer.phone)}${customer.email ? " &middot; " + esc(customer.email) : ""}<br/>
      ${esc(customer.address)}, ${esc(customer.city)}${customer.state ? ", " + esc(customer.state) : ""} ${esc(customer.postcode ?? "")}
    </p>
    ${customer.notes ? `<p><strong>Notes:</strong> ${esc(customer.notes)}</p>` : ""}
    <h3>Items</h3>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      <thead>
        <tr>
          <th style="padding:6px 10px;border:1px solid #eee;text-align:left">Product</th>
          <th style="padding:6px 10px;border:1px solid #eee">Qty</th>
          <th style="padding:6px 10px;border:1px solid #eee;text-align:right">Unit</th>
          <th style="padding:6px 10px;border:1px solid #eee;text-align:right">Line</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <p style="font-size:16px"><strong>Estimated subtotal: $${Number(subtotal).toFixed(2)}</strong></p>
    <p style="color:#666;font-size:12px">Per-unit prices are starting estimates; final quote is confirmed after artwork review.</p>
  `;

  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.ORDER_TO || siteConfig.email,
      replyTo: customer.email || undefined,
      subject: `New COD order ${orderRef} — ${customer.name}`,
      html,
    });
    return NextResponse.json({ ok: true, orderRef });
  } catch (error) {
    console.error("Order email failed", error);
    return NextResponse.json(
      { error: "Could not place the order. Please call us to confirm." },
      { status: 500 }
    );
  }
}
