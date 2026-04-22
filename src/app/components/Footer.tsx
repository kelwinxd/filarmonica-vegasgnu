import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className=" w-full bg-blackmain">
        <div className="px-5 md:px-10 lg:px-26 h-full">
            {/* Cima */}
          

            
            <div className="h-full flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col justify-between min-h-[200px] lg:min-h-[300px] pt-8 pb-10 h-full">
                    
                    {/* logo e redes sociais */}
                    <Image src="/logo-preto.png" alt="logo" width={82} height={52} className="w-20.5 h-13"/>

                    <p className="text-white text-[16px]">Educação musical com propósito</p>

                    <div className=" hidden lg:flex gap-6">
                    <Image alt="redesocial" src="/icons/facebook.png" width={26} height={26}/>
                    <Image alt="redesocial" src="/icons/facebook.png" width={26} height={26}/>
                    </div>
                  
                </div>

                 <div className="flex flex-col lg:flex-row gap-12 pt-8 pb-10 h-full">
                    {/* links e contato */}
                    <div>
      <h3 className="font-semibold mb-4">Links rápidos</h3>
      <ul className="space-y-2 text-gray-300">
        <li><a href="#hero" className="hover:text-white">Home</a></li>
        <li><a href="#sobre" className="hover:text-white">Sobre nós</a></li>
        <li><a href="#cursos" className="hover:text-white">Cursos</a></li>
        <li><a href="#forms" className="hover:text-white">Quero participar</a></li>
        <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
      </ul>
    </div>

 
    <div>
      <h3 className="font-semibold mb-4">Contato</h3>
      <ul className="space-y-2 text-gray-300">
        <li>Telefone: (00) 00 00000 - 0000</li>
        <li>Email: seueemailqui@gmail.com</li>
        <li>Endereço:</li>
        <li>Seu endereço aqui</li>
      </ul>
    </div>

     <div className="flex lg:hidden gap-6 relative">
                    <Image alt="redesocial" src="/icons/facebook.png" width={26} height={26}/>
                    <Image alt="redesocial" src="/icons/facebook.png" width={26} height={26}/>
                    </div>
                </div>
            </div>
           
   {/* Rodape */}
            <div className="h-full py-6 border-t-2 border-white">
                {/* direitos reservados */}
                <p className="text-white text-[16px] text-left lg:text-center">
                    © 2026 Filarmônica de Metais Gnu/Vegas. Todos os direitos reservados. Desenvolvido por Lymoria.
                </p>

            </div>

        </div>
    </section>
  )
}

export default Footer