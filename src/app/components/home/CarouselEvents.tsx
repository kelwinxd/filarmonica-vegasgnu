"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import EventCard from "./EventCard";
import { events } from "@/app/data/eventsData";




 function CarouselEvents() {
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
    
        {events.map((event) => (
          <SwiperSlide
            key={event.id}
            className="!w-[280px] md:!w-[340px] lg:!w-[380px]"
          >
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
      {
        /* <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black opacity-40 to-transparent z-10" />
 */
      }
      {/* Setas - só aparecem no large */}
    
    </div>
  );
}

export default CarouselEvents