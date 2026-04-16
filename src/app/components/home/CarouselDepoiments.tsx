"use client";
import "./sliderdepo.css"

import Image from "next/image";

type Slide = {
  id: number;
  image: string;
  alt: string;
};

const slides: Slide[] = [
  { id: 1, image: "/depo1.jpg", alt: "Imagem 1" },
  { id: 2, image: "/depo2.jpg", alt: "Imagem 2" },
  { id: 3, image: "/depo3.jpg", alt: "Imagem 3" },
  { id: 4, image: "/depo1.jpg", alt: "Imagem 4" },
];

export default function CarouselDepoiments() {
  return (
    <div className="w-full overflow-hidden">
      <div className="slider-track">
        
        {/* 🔁 duplicação para loop infinito */}
        {[...slides, ...slides].map((slide, index) => (
          <div key={index} className="slide-item">
            <Image
              src={slide.image}
              alt={slide.alt}
              width={486}
              height={320}
              className="object-cover h-full rounded-lg"
            />
          </div>
        ))}

      </div>
    </div>
  );
}