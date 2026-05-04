"use client";
import "./home.css"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slide } from "../../../../types/slides";



const slides : Slide[] = [

  {
    id: 1,
    image: "/banner01.png",
    title: "Formação musical {gratuita} que vai além da sala de aula",
    desc:"Participe de um projeto que une ensino de instrumentos de metais, desenvolvimento pessoal e acompanhamento especializado para crianças, jovens e adultos.",
    primaryButton: {
    label: "Quero me Inscrever",
    href: "#forms"
  },
  secondaryButton: {
    label: "Saiba Mais",
    href: "#sobre"
  }
  },
  { 
    id: 2,
    image: "/slide02.png",
    title: "Evento 2",
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem saepe nobis commodi id eius illum, labore omnis unde reprehenderit perspiciatis!"
  },

];

export default function Carousel() {

  function highlightText(text: string) {
  const parts = text.split(/(\{.*?\})/g);

  return parts.map((part, index) => {
    if (part.startsWith("{") && part.endsWith("}")) {
      return (
        <span key={index} className="text-main">
          {part.slice(1, -1)}
        </span>
      );
    }
    return part;
  });
}
  return (
    <Swiper
      slidesPerView={1}
      loop
      autoplay={{ delay: 12000 }}
       modules={[ Autoplay, Pagination, Navigation]}
         navigation={true}
        speed={900}
        className="w-full"
        pagination={{ clickable: true }}
     id="hero"  
    >
      
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full overflow-hidden h-[700px] md:h-[80vh] ">
              <Image
    src={slide.image}
    alt={slide.title}
    fill
    sizes="100vw"
    priority
    className="object-cover object-top"
  />
          <div className="flex flex-col gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 md:px-10  lg:px-75">
           <h2 className=" text-white text-center text-[20px] md:text-3xl megatitle font-medium uppercase w-full">
               {highlightText(slide.title)}
            </h2>
            <p className=" text-white text-center text-[16px] md:text-[18px] font-fam-parag leading-4">
              {slide.desc}
            </p>
          {(slide.primaryButton || slide.secondaryButton) && (
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-4">

    {slide.primaryButton && (
      <a
        href={slide.primaryButton.href}
        className="btn-primary order-1 md:order-2"
      >
        {slide.primaryButton.label}
      </a>
    )}

    {slide.secondaryButton && (
      <a
        href={slide.secondaryButton.href}
        className="btn-secondary order-2 md:order-1"
      >
        {slide.secondaryButton.label}
      </a>
    )}

  </div>
)}
          </div>
           
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}