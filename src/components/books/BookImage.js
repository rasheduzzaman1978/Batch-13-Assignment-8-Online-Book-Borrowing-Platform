"use client";

import Image from "next/image";

export default function BookImage({ image, title }) {
  return (
    <div className="relative w-full h-80 overflow-hidden rounded">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}