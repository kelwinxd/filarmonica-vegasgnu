import React from 'react'
import CardDepoimento from './CardDepoimento';

const depoimentos = [
  {
    id: 1,
    text: "Eu nunca tinha tocado um instrumento antes...",
    name: "Lucas Oliveira",
    role: "Aluno",
    avatar: "/avatar1.png",
  },
  {
    id: 2,
    text: "É gratificante ver a evolução dos alunos...",
    name: "Carlos Mendes",
    role: "Professor",
    avatar: "/avatar1.png",
  },
  {
    id: 3,
    text: "O projeto vai muito além da música...",
    name: "Juliana Rocha",
    role: "Mãe de aluna",
    avatar: "/avatar1.png",
  },
];

const Depoimentos = () => {
  return (
    <section className="max-w-full overflow-x-hidden mx-auto px-5 md:px-10 lg:px-26 mt-[60px]">
          {/* Texto Quem Somos */}
      <div className="w-full">
        <div className="w-[153px] h-[39px] p-2.5 bg-[#CDE8FF] flex justify-center items-center">
      <h1 className=" text-[15px] uppercase font-medium text-[#080708] megatitle">QUEM SOMOS</h1>
        </div>
  
      
      </div>
      {/* Quem Somos */}
      <div className="flex gap-[41px] mt-[46px]">
        <img src="/arrow.png" alt="" className="h-[34px] mt-2" />
        <p className="text-3xl md:text-4xl text-parag">
          A Filarmônica de Metais Gnu/Vegas é um projeto social que oferece ensino gratuito de instrumentos de metais, promovendo desenvolvimento musical e humano.
        </p>
      </div>

      <div className="mt-10">
         <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
        {depoimentos.map((item) => (
          <CardDepoimento key={item.id} {...item} />
        ))}
      </div>
      </div>
    </section>
  )
}

export default Depoimentos