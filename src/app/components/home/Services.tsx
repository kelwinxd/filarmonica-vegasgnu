import React from 'react'
import CarouselInstruments from './CarouselInstruments'

const Services = () => {
  return (

     
     <section className=" px-5 md:px-10 lg:px-26 " id="cursos">

    
    <div>
       <div className="w-fit h-[39px] p-2.5 bg-[#CDE8FF] flex justify-center items-center">
      <h1 className=" text-[15px] uppercase font-medium text-[#080708] megatitle"> Instrumentos que Ensinamos</h1>
        </div>
     </div>

      <div className="flex gap-[41px] mt-[46px]">
        <img src="/arrow.png" alt="" className="h-[34px] mt-2" />
        <p className="text-3xl md:text-3xl font-medium text-parag">
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