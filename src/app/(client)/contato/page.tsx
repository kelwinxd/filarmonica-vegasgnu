import React from 'react'
import { EventComponent } from '../../../../types/event';
import { EventMap } from '@/app/components/EventMap';
import Image from 'next/image'
const contato: EventComponent = {
  id: 100001,
  title: "Vegas Card - Cartões Benefícios",
  image: "",
  date: "",
  time: "",
  place: "Vegas Card - Cartões Benefícios",
  address: {
    street: "R. Tamôio",
    number: "526",
    neighborhood: "Vila Santa Catarina",
    city: "Americana",
    state: "SP",
    zipCode: "13466-250",
  },
  link: "https://share.google/5G3dDzJXVPjbWrB7U",
  lat: -22.74786396191474,
  lng: -47.328218658668746,
  mapUrl: "https://share.google/5G3dDzJXVPjbWrB7U",
};

const Page = () => {
  return (
    <div className="px-5 md:px-10 lg:px-26">
        
        <div className="mt-40 mb-14 flex flex-col items-center">
            <h1 className="text-3xl text-blackmain mb-10 font-medium">Contate-nos</h1>
            <div className="flex flex-col md:flex-row justify-between w-full  lg:w-[792px] gap-4">
               <div className="">
                <h2 className="mb-4 text-sm md:text-[20px] font-medium text-blackmain">Telefone</h2>
                <p className="text-subparag font-medium">+55 19 2108-2900</p>
            </div>

             <div className="">
                <h2 className="mb-4 text-sm md:text-[20px] font-medium text-blackmain">Email</h2>
                <p className="text-subparag font-medium">atendimento@vegascard.com.br</p>
            </div>

             <div className="">
                <h2 className="mb-4 text-sm md:text-[20px] font-medium text-blackmain">Redes Sociais</h2>
                 <div className="flex gap-6 relative">
                                    <Image alt="redesocial" src="/icons/insta-icon-black.png" width={26} height={26}/>
                                    <Image alt="redesocial" src="/icons/face-icon-black.png" width={26} height={26}/>
                                    </div>
            </div>
            </div>
         
        </div>

        <div className="bg-[#F1F1F1] px-10 py-10 flex flex-col items-center justify-center rounded-[8px] mb-14">
            <div className=" w-full max-w-175 mb-7">
                <h1 className="megatitle text-blackmain font-medium text-left text-[24px] lg:text-3xl mb-5">Entre em contato com a gente</h1>

                <p className="text-subparag text-sm md:text-[16px] font-medium w-[80%]">
                    Estamos à disposição para tirar dúvidas, receber inscrições ou  conversar sobre formas de apoio ao projeto. Preencha o formulário ou utilize nossos canais de atendimento.
                </p>
            </div>

            <form>
              <div className="flex flex-col md:flex-row max-w-175 gap-5">
                

                <div>

                
            <label className="text-sm md:text-[20px] font-medium text-blackmain">Nome completo</label>
            <input
          type="text"
          placeholder="Digite seu nome completo"
          className="w-full mt-1 text-subparag bg-white border-2 border-[#D4D4D4] rounded-[6px] px-3 py-2 "
            />
                </div>

                <div>     
            <label className="text-sm md:text-[20px] font-medium text-blackmain">Telefone</label>
            <input
          type="text"
          placeholder="(DDD) 00000 - 0000"
          className="w-full mt-1 text-subparag bg-white border-2 border-[#D4D4D4] rounded-[6px] px-3 py-2 "
            />
                </div>
            </div>
            <div className="mt-5">

                
            <label className="text-sm md:text-[20px] font-medium text-blackmain">Email</label>
            <input
          type="email"
          placeholder="Digite seu email"
          className="label-text w-full mt-1 text-subparag bg-white border-2 border-[#D4D4D4] rounded-[6px] px-3 py-2 "
            />
                </div>

                  <div className="mt-5 font-fam-main">
        <label className="text-sm md:text-[20px] font-medium text-blackmain">Mensagem (opcional)</label>
        <textarea
          placeholder="Como podemos ajudar?"
        className="w-full mt-1 text-subparag bg-white border-2 border-[#D4D4D4] rounded-[6px] px-3 py-2 h-50 font-fam-main resize-none"
        
        />
      </div>
               <button
        type="submit"
        className="mt-4 bg-main text-white btn-text py-3 rounded-[6px] cursor-pointer hover:brightness-120 w-full"
      >
        Enviar
      </button>
            </form>
        </div>

        <div className="mt-20 w-[153px] h-[39px] p-2.5 bg-[#CDE8FF] flex justify-center items-center">
              <h1 className=" text-[15px] uppercase font-medium text-[#080708] megatitle">LOCAL</h1>
                </div>
        
              <p className="mt-8 text-blackmain text-sm md:text-[16px] font-medium">
                {contato.place}
              </p>
              <div className="mt-4 mb-10 flex items-center gap-3">
         <Image src="/icons/pin.png" width={26} height={26} alt="" />
              <p className="text-subparag text-sm md:text-[16px] font-medium">
          {`${contato.address.street}, ${contato.address.number}, ${contato.address.neighborhood}`}
        </p>
              </div>

        <div className="z-1 mb-14">
            <EventMap event={contato} />
        </div>
        
    </div>
  )
}

export default Page