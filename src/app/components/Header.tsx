"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

  const [open, setOpen] = useState(false)
  return (
    <header className="mt-[24px] h-[64px] w-full max-w-[792px]  bg-black rounded-[8px] mx-auto  py-[6px] relative" >
     
    <div className="flex justify-between items-center px-[22px]">
        <div className="flex gap-1 h-full items-center" onClick={() => setOpen(prev => !prev)}>
          {open ? <Image src="/icons/close.png" alt="" width={20} height={20} className=" h-6 w-6" /> : <Image src="/hamb-menu.svg"  alt="" width={20} height={20} className=" h-6 w-6" /> }
            
            <span className="text-[16px]">Menu</span>
            
        </div>

      

        <Link href="/">
            <Image src="/logo-preto.png" alt="logo" width={82} height={52} className="w-20.5 h-13"/>
        </Link>

        <a href="#contato" className="flex items-center justify-center text-white rounded-[6px] p-2.5 w-[83px] h-10 bg-[#316998] hover:brightness-120">
                Contato
            </a>

    </div>
    
               {/* DROPDOWN ANIMADO */}
      <div
        className={`
          transition-all duration-300 ease-in-out
          overflow-hidden bg-black px-[22px] rounded-b-[8px]
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="text-white flex flex-col gap-2 pb-4">
          <li>Home</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </div>
         
    </header>
  )
}

export default Header