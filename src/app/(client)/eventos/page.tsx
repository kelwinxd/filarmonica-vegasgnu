import Footer from "@/app/components/Footer";
import Carousel from "@/app/components/home/Carousel";
import CarouselEvents from "@/app/components/home/CarouselEvents";
import CtaFinal from "@/app/components/home/CtaFinal";
import Events from "@/app/components/home/Events";
import EventsGrid from "@/app/components/home/EventsGrid";
import Header from "@/app/components/home/Header";


export default function Page(){


    return (
        <div className="bg-white w-full min-h-screen relative ">
          {/* HEADER SOBREPOSTO */}
  <div className="absolute top-4 left-0 w-full z-10 flex justify-center px-8 lg:p-0">
    <Header />
  </div>
  <Carousel />
  <div className="px-5 md:px-10 lg:px-26 mt-[60px]">
    <EventsGrid />
  </div>
  
  <CtaFinal /> 

        
    </div>
    )
}