"use client"

import WppBg from "/public/zapbarbearia/whatsapp-background.webp"
import Image from "next/image"
import React, { useRef } from "react"

import ArrowZap from "/public/zapbarbearia/icons/arrow-zap.svg"
import ProfilePhoto from "/public/zapbarbearia/icons/profile-photo.svg"
import CellPhoneIcon from "/public/zapbarbearia/icons/telephone.svg"
import VideoCallIcon from "/public/zapbarbearia/icons/video.svg"

const WppHeader = () => {
  return (
    <div className="bg-[#222222] flex justify-between items-center pt-4 pb-2 px-3 *:flex *:items-center *:gap-2">
      <div className="flex">
        <div className="flex gap-1 items-center">
          <Image
            className="w-2"
            src={ArrowZap}
            alt="Seta para esquerda"
          />
        </div>
        <Image
          className="w-6"
          src={ProfilePhoto}
          alt="Foto de perfil"
        />
        <span className="text-sm">João</span>
      </div>
      <div>
        <Image
          className="w-4"
          src={VideoCallIcon}
          alt="Ícone de vídeo chamada"
        />
        <Image
          className="w-4"
          src={CellPhoneIcon}
          alt="Ícone de ligação"
        />
      </div>
    </div>
  )
}

const MiniChat = () => {
  const container = useRef(null)

  return (
    <div
      ref={container}
      className="w-[min(100%,11.25rem)] self-center translate-y-[10%] rounded-3xl shadow-[0_0_.5rem_rgba(0,0,0,1)] bg-black select-none overflow-hidden md:self-auto relative"
    >
      <Image
        src={WppBg}
        alt="Whatsapp background"
      />
      <div className="absolute inset-0 text-white flex flex-col">
        <WppHeader />
        <ul className="flex flex-col mx-2 my-2 gap-2 *:rounded-[.25rem] text-[.875rem] *:px-2 *:py-1 *:leading-[1.25] *:w-fit *:max-w-[80%]">
          <li className="bg-dark-gray flex-col">E aí, mano! Queria marcar um corte pra amanhã de tarde.</li>
          <li className="bg-dark-green self-end">Fala, João! Temos disponível amanhã às 15h. Pode ser?</li>
          <li className="bg-dark-gray flex-col">Fechou!</li>
        </ul>
      </div>
    </div>
  )
}

export default MiniChat