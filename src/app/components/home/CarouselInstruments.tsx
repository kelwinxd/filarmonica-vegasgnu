"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { id: 1, image: "/card-inst.png", href: "#" },
  { id: 2, image: "/card-inst.png", href: "#" },
  { id: 3, image: "/card-inst.png", href: "#" },
  { id: 4, image: "/card-inst.png", href: "#" },
];

const CarouselInstruments = () => {
  return (
    <div className="w-full relative">
      <Swiper
           modules={[Navigation, Pagination]}
        slidesPerView={"auto"}
        spaceBetween={16}
        grabCursor
        pagination={{ clickable: true }}
        navigation={true}
        className=" !pr-10"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="!w-[85%] sm:!w-[300px] md:!w-[360px] lg:!w-[384px]"
          >
            <a href={slide.href} className="block">
              <div className="rounded-[8px] h-[400px] md:h-[500px] relative overflow-hidden shadow-md">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselInstruments;