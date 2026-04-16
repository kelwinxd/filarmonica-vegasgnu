"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import EventCard from "./EventCard";
import { EventComponent } from "../../../../types/event";


const events : EventComponent[] = [
  {
    id: 1,
    image: "/eventfolder.png",
    date: "20/08/2026",
    time: "20h",
    address: "Teatro Municipal de Americana",
    link: "#",
  },
  {
    id: 2,
    image: "/eventfolder2.png",
    date: "24/08/2026",
    time: "19h30",
    address: "Centro Cultural de Santa Bárbara D'Oeste",
    link: "#",
  },
  {
    id: 3,
    image: "/eventfolder2.png",
    date: "20/08/2026",
    time: "20h",
    address: "Teatro Municipal de Americana",
    link: "#",
  },
    {
    id: 4,
    image: "/eventfolder2.png",
    date: "20/08/2026",
    time: "20h",
    address: "Teatro Municipal de Americana",
    link: "#",
  }
];

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
        className=" !pr-10"

       

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