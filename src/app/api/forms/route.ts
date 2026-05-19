import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

import {
  buildFormEmailHtml,
  buildFormEmailText,
  getFormSubject,
  type FormType,
} from "@/lib/form-mail";

type JsonFormRequestBody = {
  formType: FormType;
  payload: Record<string, string>;
};

function isFormType(value: string): value is FormType {
  return value === "contact" || value === "lead" || value === "quote";
}

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

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let formType: FormType | undefined;
    let payload: Record<string, string> | undefined;
    let attachments: nodemailer.SendMailOptions["attachments"];

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const rawType = formData.get("formType");

      if (typeof rawType !== "string" || !isFormType(rawType)) {
        return NextResponse.json({ error: "Invalid form type." }, { status: 400 });
      }

      formType = rawType;
      payload = {};

      for (const [key, value] of formData.entries()) {
        if (key === "formType" || key === "file") continue;
        if (typeof value === "string") payload[key] = value;
      }

      const file = formData.get("file");
      if (file instanceof File && file.size > 0) {
        if (file.size > 5 * 1024 * 1024) {
          return NextResponse.json(
            { error: "Please upload a file smaller than 5MB." },
            { status: 400 },
          );
        }

        const bytes = await file.arrayBuffer();
        attachments = [
          {
            filename: file.name,
            content: Buffer.from(bytes),
            contentType: file.type || undefined,
          },
        ];
        payload.uploadedFile = file.name;
      }
    } else {
      const body = (await request.json()) as JsonFormRequestBody;
      if (!body?.formType || !body?.payload || typeof body.payload !== "object") {
        return NextResponse.json({ error: "Invalid form request." }, { status: 400 });
      }
      formType = body.formType;
      payload = body.payload;
    }

    if (!formType || !payload) {
      return NextResponse.json({ error: "Invalid form request." }, { status: 400 });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured yet. Add SMTP credentials to enable form sending.",
        },
        { status: 500 },
      );
    }

    const from = `${process.env.SMTP_FROM_NAME || "ZEE Pack"} <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`;
    const to = process.env.SMTP_TO || process.env.SMTP_USER;
    const replyTo = payload.email?.trim() || undefined;

    const transporter = createTransporter();

    await transporter.sendMail({
      from,
      to,
      replyTo,
      subject: getFormSubject(formType, payload),
      html: buildFormEmailHtml(formType, payload),
      text: buildFormEmailText(formType, payload),
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[forms] SMTP error:", err);
    return NextResponse.json(
      { error: "Unexpected error while sending your request." },
      { status: 500 },
    );
  }
}
