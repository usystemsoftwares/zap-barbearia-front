"use client"

import WppBg from "/public/zapbarbearia/whatsapp-background.webp"
import Image from "next/image"
import React, { useRef } from "react"
import MessageAnim from "./message-anim"
import ClientChatAnim from "./client-chat-anim"
import { clientes } from "@/clientes"

import { motion } from "framer-motion"

import Plus from "/public/zapbarbearia/icons/plus.svg"
import CameraIcon from "/public/zapbarbearia/icons/camera.svg"
import Microphone from "/public/zapbarbearia/icons/audio.svg"

import ArrowZap from "/public/zapbarbearia/icons/arrow-zap.svg"
import ProfilePhoto from "/public/zapbarbearia/icons/profile-photo.svg"
import CellPhoneIcon from "/public/zapbarbearia/icons/telephone.svg"
import VideoCallIcon from "/public/zapbarbearia/icons/video.svg"

const WppHeader = () => {
  return (
    <div className="bg-[#222222] flex justify-between items-center pt-6 pb-3 px-6 *:flex *:items-center *:gap-4">
      <div className="flex">
        <div className="flex gap-1 items-center">
          <Image
            src={ArrowZap}
            alt="Seta para esquerda"
          />
          3
        </div>
        <Image
          src={ProfilePhoto}
          alt="Foto de perfil"
        />
        <motion.span className="sm:text-xl sm:font-medium">Cliente</motion.span>
      </div>
      <div>
        <Image
          src={VideoCallIcon}
          alt="Ícone de vídeo chamada"
        />
        <Image
          src={CellPhoneIcon}
          alt="Ícone de ligação"
        />
      </div>
    </div>
  )
}

const WppFooter = () => {
  return (
    <div className="flex flex-col mt-auto px-6 pb-2 bg-[#242625]">
      <div className="flex items-center gap-3 pt-3">
        <Image
          src={Plus}
          alt="Ícone de mais"
        />
        <div className="w-full h-8 bg-[#3A3C3B] rounded-full"></div>
        <Image
          src={CameraIcon}
          alt="Ícone de câmera"
        />
        <Image
          src={Microphone}
          alt="Ícone de microfone"
        />
      </div>
      <div className="w-[45%] mt-6 rounded-full mx-auto bg-white h-1"></div>
    </div>
  )
}

const ChatAnim = () => {
  const container = useRef(null)

  return (
    <div
      ref={container}
      className="w-[min(100%,25rem)] rounded-[47px] shadow-[0_0_1rem_rgba(0,0,0,.75)] bg-black select-none overflow-hidden self-center md:self-auto relative"
    >
      <Image
        src={WppBg}
        alt="Whatsapp background"
      />
      <div
        className="absolute inset-0 text-white font-medium flex flex-col"
      >
        <WppHeader />
        {clientes.map((chat, i) => (
          <ClientChatAnim
            index={i}
            key={i}
            costumerName={chat.cliente}
            container={container}
          >
            {chat.mensagens.map((message, j) => (
              <MessageAnim
                key={j}
                index={j}
                costumer={chat.cliente}
                message={message}
                container={container}
              />
            ))}
          </ClientChatAnim>
        ))}
        <WppFooter />
      </div>
    </div>
  )
}

export default ChatAnim