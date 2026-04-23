import React from 'react'
import CarouselInstruments from './CarouselInstruments'
import { Arrow } from './Arrow'

const Services = () => {
  return (

     
     <section className=" px-5 md:px-10 lg:px-26 " id="cursos">

    
    <div>
       <div className="w-fit h-[39px] p-2.5 bg-[#CDE8FF] flex justify-center items-center">
      <h1 className=" text-[15px] uppercase font-medium text-[#080708] megatitle"> Instrumentos que Ensinamos</h1>
        </div>
     </div>

      <div className="flex gap-2 md:gap-5 mt-[46px]">
        <Arrow />
        <p className="text-2xl md:text-[28px] font-medium text-parag">
          Conheça os <span className="text-mainblue">instrumentos de metais</span> que fazem parte do nosso projeto e descubra <span className="text-mainblue">qual combina com você.</span>
        </p>
      </div>
       {/* Carrossel Instruments */}
      <div className="mt-[72px] mb-[72px]">
        <CarouselInstruments />
      </div>
 </section>
  
  )
}

export default Services