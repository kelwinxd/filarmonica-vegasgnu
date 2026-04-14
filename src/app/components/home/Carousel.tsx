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


const slides = [
  {
    id: 1,
    image: "/banner01.png",
    title: "Evento 1",
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem saepe nobis commodi id eius illum, labore omnis unde reprehenderit perspiciatis!"
  },
  { 
    id: 2,
    image: "/slide02.png",
    title: "Evento 2",
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem saepe nobis commodi id eius illum, labore omnis unde reprehenderit perspiciatis!"
  },
];

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      loop
      autoplay={{ delay: 4000 }}
       modules={[Navigation, Autoplay, Pagination]}
        navigation
        speed={900}
        className="w-full"
        pagination={{ clickable: true }}
       
    >
      
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full overflow-hidden h-[500px] md:h-screen ">
              <Image
    src={slide.image}
    alt={slide.title}
    fill
    sizes="100vw"
    priority
    className="object-cover object-top"
  />
          <div className="flex flex-col gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
           <h2 className=" text-white text-center text-4xl megatitle font-medium uppercase">
              {slide.title}
            </h2>
            <p className=" text-white text-center text-[16px] font-fam-parag">
              {slide.desc}
            </p>
          </div>
           
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}