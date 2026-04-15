import React from 'react'

type AboutCardType = {
    children: React.ReactNode,
    title: string
}

const AboutCard = ({children, title} : AboutCardType) => {
  return (
    <div className=" flex-1">
        <h1 className="megatitle text-4xl md:text-5xl font-medium text-btn">{title}</h1>
        <div className="border-2 border-[#CFD0D0] w-full mt-8 mb-6"></div>
        {children}
    </div>
  )
}

export default AboutCard