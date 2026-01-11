import Image from "next/image";
import React from "react";

type HeroProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  align?: "left" | "center";
  children?: React.ReactNode; // buttons etc.
};

export default function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  align = "left",
  children,
}: HeroProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section className="relative overflow-hidden rounded-2xl border border-gray-200">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay gradient (the fade) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/20 md:from-white/90 md:via-white/60 md:to-white/10" />

        {/* Subtle top-to-bottom wash (nice with your teal->white page bg) */}
        <div className="absolute inset-0 bg-gradient-to-b from-gracelife-teal/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative px-6 py-10 md:px-10 md:py-14">
        <div className={`flex max-w-3xl flex-col gap-4 ${alignClasses}`}>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
          {subtitle ? <p className="text-gray-700">{subtitle}</p> : null}
          {children ? <div className="flex flex-wrap gap-3 pt-2">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
