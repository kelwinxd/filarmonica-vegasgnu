import React from 'react'
import CarouselInstruments from './CarouselInstruments'

const Services = () => {
  return (
    <>
     {/* Instruments */}
    <div>
       <div className="w-fit h-[39px] p-2.5 bg-[#CDE8FF] flex justify-center items-center">
      <h1 className=" text-[15px] uppercase font-medium text-[#080708] megatitle"> Instrumentos que Ensinamos</h1>
        </div>
     </div>

      <div className="flex gap-[41px] mt-[46px]">
        <img src="/arrow.png" alt="" className="h-[34px] mt-2" />
        <p className="text-3xl md:text-4xl text-parag">
          Conheça os instrumentos de metais que fazem parte do nosso projeto e descubra qual combina com você.
        </p>
      </div>
       {/* Carrossel Instruments */}
      <div className="mt-[72px]">
        <CarouselInstruments />
      </div>

    </>
  )
}

export default Services