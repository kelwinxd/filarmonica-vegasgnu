import React from 'react'

const Header = () => {
  return (
    <div className="bg-[#0d0d0d] p-6 flex justify-between h-20">
        <div className=" bg-grayadmin flex p-5 items-center rounded-full gap-4">
        <img src="/icons/search.svg" className="w-5 h-5" alt="" />
        <input type="text" name="" id="" className="outline-none" />
        </div>
        

        <div className="flex gap-4 items-center">
            <div>
                <img src="/icons/bell.png" className="w-6 h-6" alt="" />
            </div>
            <div>
                <h2 className="text-[16px]">Maestro Admin</h2>
                <p className="text-sm">Administrador</p>
            </div>
            <div className="bg-white w-10 h-10 rounded-full">
                
                {/* Profile photo  */}

            </div>

            <div>
                <img src="/icons/logout.png" alt="" className="w-5 h-5" />
            </div>
        </div>
    </div>
  )
}

export default Header