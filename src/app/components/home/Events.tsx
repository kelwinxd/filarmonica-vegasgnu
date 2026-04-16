import Button from "./Button"
import CarouselEvents from "./CarouselEvents"



const Events = () => {
  return (
    <section className="pl-5 md:pl-10 lg:pl-26">
    {/* Eventos */}
    <div className="w-full mt-[60px] mb-[50px]">
        <div className="w-fit h-[39px] p-2.5 bg-[#CDE8FF] flex justify-center items-center">
      <h1 className=" text-[15px] uppercase font-medium text-[#080708] megatitle">Próximos eventos</h1>
    </div>

     <div className="flex gap-[41px] mt-[46px]">
        <img src="/arrow.png" alt="" className="h-[34px] mt-2" />
        <p className="text-3xl md:text-4xl text-parag">
          Confira nossa programação e participe dos próximos momentos do projeto.
        </p>
    </div>
  
      
      </div>
    <CarouselEvents />
    <div className="flex justify-center mt-[60px]">
    <Button variant="primary">
      Ver mais eventos
    </Button>
    </div>

    </section>
  )
}

export default Events