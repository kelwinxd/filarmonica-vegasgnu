import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="mt-[24px] h-[64px] w-full max-w-[792px] flex justify-between items-center bg-black rounded-[8px] mx-auto px-[22px] py-[6px]" >
        <div className="flex gap-1 h-full items-center">
            <Image src="/hamb-menu.svg" alt="" width={20} height={20} className=" h-6 w-6" />
            <span className="text-[16px]">Menu</span>
        </div>

        <div className="">
            <Image src="/logo-preto.png" alt="logo" width={82} height={52} className="w-20.5 h-13"/>
        </div>

        <a href="#contato" className="flex items-center justify-center text-white rounded-[6px] p-2.5 w-[83px] h-10 bg-[#316998]">
                Contato
            </a>
    </header>
  )
}

export default Header