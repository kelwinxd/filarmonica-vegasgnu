"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const handleClose = () => {
    setTimeout(() => {
      setOpen(false)
    }, 700);
  }



   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header ref={headerRef} className="z-30 mt-[24px] h-[64px] w-full max-w-[792px]  bg-black rounded-[8px] mx-auto relative" >
     
    <div className="flex justify-between items-center px-[22px] py-1">
        <div className="flex gap-1 h-full items-center cursor-pointer" onClick={() => setOpen(prev => !prev)}>
          {open ? <Image src="/icons/close.png" alt="" width={20} height={20} className=" h-6 w-6" /> : <Image src="/hamb-menu.svg"  alt="" width={20} height={20} className=" h-6 w-6" /> }
            
            <span className="text-[16px]">Menu</span>
            
        </div>

      

        <Link href="/">
            <Image src="/logo-preto.png" alt="logo" width={82} height={52} className="w-20.5 h-13"/>
        </Link>

        <Link href="/contato" className="flex items-center justify-center text-white rounded-[6px] p-2.5 w-[83px] h-10 bg-[#316998] hover:brightness-120">
                Contato
            </Link>

    </div>
    
             {/* DROPDOWN ANIMADO */}
<div
 onClick={handleClose} 
  className={`
    transition-all duration-300 ease-in-out mt-[-8px] 
    overflow-hidden bg-black px-[22px] rounded-b-[8px]
    ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
  `}
>
  <div className="bg-[#7C7D7D] w-full h-0.5 mb-3 mt-2.5"></div>
  <div className="flex flex-col gap-2 md:flex-row md:gap-8">

    <ul className="flex-1 text-white flex flex-col gap-2 px-4.5 py-2.5 mb-4 bg-[#181618] rounded-[8px]">
    
      <li className="border-b border-gray-800 "><Link href="/#hero">Home</Link></li>
      <li className="border-b border-gray-800 mt-2"><Link href="/#sobre">Sobre nós</Link></li>
      <li className="border-b border-gray-800 mt-2"><Link href="/#cursos">Cursos</Link></li>
      <li className="mt-2"><Link href="/#eventos">Eventos</Link></li>
    </ul>

    <ul className="flex-1 text-white flex flex-col justify-between px-4.5 py-2.5 mb-4 rounded-[8px]">
      <div className="flex flex-col gap-2">
        
        <li className="border-b border-gray-700 mt-2"><Link href="/#forms">Quero Participar</Link></li>
        <li className="border-b border-gray-700 mt-2"><a href="/contato">Contato</a></li>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <p>Redes Sociais</p>
    
        <div className="flex gap-6">
          <Image alt="Facebook" src="/icons/facebook.png" width={26} height={26}/>
          <Image alt="Instagram" src="/icons/instagram.png" width={26} height={26}/>
        </div>
      </div>
    </ul>

  </div>
</div>
         
    </header>
  )
}

export default Header