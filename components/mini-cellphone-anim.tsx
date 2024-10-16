"use client"

import Image from "next/image"
import CellPhone from "/public/zapbarbearia/cell-phone.svg"

const MiniCellPhoneAnim = () => {
  return (
    <div className="relative mt-auto mx-auto">
      <div className="absolute inset-[60px_22px_auto_21px] overflow-hidden grid animate-pulse">
        <div className="bg-[#9E9E9E] h-3"></div>
        <div className="flex w-full h-3 mt-1 gap-2">
          <div className="bg-[#9E9E9E] w-[20%] h-3"></div>
          <div className="bg-[#9E9E9E] w-full h-3"></div>
        </div>
        <div className="flex w-full h-3 mt-1 gap-2">
          <div className="bg-[#9E9E9E] w-full h-3"></div>
          <div className="bg-[#9E9E9E] w-[20%] h-3"></div>
        </div>
        <div className="bg-[#9E9E9E] h-3 mt-1"></div>
        <div className="flex w-full h-3 mt-1 gap-2">
          <div className="bg-[#9E9E9E] w-[20%] h-3"></div>
          <div className="bg-[#9E9E9E] w-full h-3"></div>
        </div>
        <div className="bg-[#9E9E9E] h-3 mt-1"></div>
      </div>
      <Image
        src={CellPhone}
        alt="Celular"
      />
    </div>
  )
}

export default MiniCellPhoneAnim