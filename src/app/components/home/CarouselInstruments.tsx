"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from 'next/image'
import "swiper/css";

const slides = [
  { id: 1, image: "/card-inst.png", href: "#" },
  { id: 2, image: "/card-inst.png", href: "#" },
  { id: 3, image: "/card-inst.png", href: "#" },
  { id: 4, image: "/card-inst.png", href: "#" },
];

const loopedSlides = [...slides, ...slides, ...slides];

const CarouselInstruments = () => {
  return (
    <div className="w-screen overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={"auto"}
        spaceBetween={16}
        loop={true}
      
        loopAdditionalSlides={slides.length}
        speed={6000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        grabCursor={true}
        className="!pl-4"
      >
        {loopedSlides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!w-[307.2px] md:!w-[384px]"
          >
            <a href={slide.href} className="block">
              <div className="rounded-[8px] h-[400px] md:h-[500px] relative overflow-hidden shadow-md">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  className="w-full h-full object-cover"
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