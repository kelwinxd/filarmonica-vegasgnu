"use client"
import Link from "next/link"
import Button from "./Button"
import CarouselEvents from "./CarouselEvents"
import { Arrow } from "./Arrow"



const Events = () => {

  
  return (
    <section className="px-5 md:px-10 lg:px-26" id="eventos">
    {/* Eventos */}

    
    <div className="w-full mt-[60px] mb-[50px]">
        <div className="w-fit h-[39px] p-2.5 bg-[#CDE8FF] flex justify-center items-center">
      <h1 className=" text-[15px] uppercase font-medium text-[#080708] megatitle">Próximos eventos</h1>
    </div>

     <div className="flex gap-2 md:gap-5 mt-[46px]">
        <Arrow />
        <p className="text-2xl md:text-[28px] font-medium text-parag">
          Confira nossa programação e <span className="text-mainblue">participe dos próximos momentos</span> do projeto.
        </p>
    </div>
  
      
      </div>
    <CarouselEvents />
    <div className="flex justify-center mt-[60px]">
      <Link href={`/eventos`}>
      
    <Button variant="primary">
      Ver mais eventos
    </Button>
    </Link>
    </div>

    </section>
  )
}

export default Events