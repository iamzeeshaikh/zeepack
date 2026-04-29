import Image from "next/image";

const showcaseItems = [
  {
    title: "Rigid presentation box",
    image: "/images/curated/rigid-setup-box.webp",
    className: "lg:row-span-2",
  },
  {
    title: "Structured interior packaging",
    image: "/images/curated/retail-insert-tray.webp",
    className: "",
  },
  {
    title: "Mailer for elevated delivery",
    image: "/images/curated/foldable-mailer-box.webp",
    className: "",
  },
];

export function ProductShowcase() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
      {showcaseItems.map((item) => (
        <div
          key={item.title}
          className={`group editorial-image-frame min-h-[300px] ${item.className} ${item.title === "Rigid presentation box" ? "lg:min-h-[640px]" : "min-h-[308px]"}`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            unoptimized
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(17,17,17,0.72))] p-5">
            <p className="text-sm font-semibold tracking-[0.02em] text-white">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
