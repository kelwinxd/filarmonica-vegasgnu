import React from 'react'
import Button from './Button'
import Link from 'next/link'

const CtaFinal = () => {
  return (
    <section className="mt-30 mb-30 px-5 md:px-10 lg:px-26">
        <div className="max-w-[792px] mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl text-blackmain uppercase font-medium text-center mb-8">
        <span className="text-main">Tem interesse no projeto?</span> Estamos prontos para te atender
        </h2>

        <Link href="/contato">
        <Button variant="primary">
            Entrar em Contato
        </Button>
        </Link>
        </div>
        
    </section>
  )
}

export default CtaFinal