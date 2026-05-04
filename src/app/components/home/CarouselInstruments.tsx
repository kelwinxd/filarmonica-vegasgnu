"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { instrumentos } from "@/app/data/instrumentsData";
import Link from "next/link";

const linkIntruments = "#forms"



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
        className=" !pr-10 !pb-10"
      >
        {instrumentos.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="!w-[85%] sm:!w-[300px] md:!w-[360px] lg:!w-[384px]"
          >
            <Link href={"/instrumentos/"+slide.slug} className="block">
              <div className="rounded-[8px] h-[400px] md:h-[500px] relative overflow-hidden shadow-md">
                <Image
                  src={slide.imagem}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselInstruments;