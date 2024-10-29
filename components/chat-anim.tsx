"use client";

import WppBg from "/public/zapbarbearia/whatsapp-background.webp";
import Image from "next/image";
import React, { useRef } from "react";
import MessageAnim from "./message-anim";
import ClientChatAnim from "./client-chat-anim";
import { clientes } from "@/clientes";

import { motion } from "framer-motion";

import Plus from "/public/zapbarbearia/icons/plus.svg";
import CameraIcon from "/public/zapbarbearia/icons/camera.svg";
import Microphone from "/public/zapbarbearia/icons/audio.svg";

import ArrowZap from "/public/zapbarbearia/icons/arrow-zap.svg";
import ProfilePhoto from "/public/zapbarbearia/icons/profile-photo.svg";
import CellPhoneIcon from "/public/zapbarbearia/icons/telephone.svg";
import VideoCallIcon from "/public/zapbarbearia/icons/video.svg";

const WppHeader = () => {
  return (
    <div className="bg-[#222222] flex justify-between items-center pt-6 md:pt-5 lg:pt-6 pb-3 px-6 md:px-3 lg:px-6 *:flex *:items-center *:gap-4 md:*:gap-2 lg:*:gap-4">
      <div className="flex">
        <div className="flex gap-1 items-center">
          <Image
            className="w-3 lg:w-auto"
            src={ArrowZap}
            alt="Seta para esquerda"
          />
          3
        </div>
        <Image
          className="md:w-9 lg:w-auto"
          src={ProfilePhoto}
          alt="Foto de perfil"
        />
        <motion.span className="sm:text-xl md:text-lg lg:text-xl sm:font-medium">
          Cliente
        </motion.span>
      </div>
      <div>
        <Image
          className="md:w-7 lg:w-auto"
          src={VideoCallIcon}
          alt="Ícone de vídeo chamada"
        />
        <Image
          className="md:w-7 lg:w-auto"
          src={CellPhoneIcon}
          alt="Ícone de ligação"
        />
      </div>
    </div>
  );
};

const WppFooter = () => {
  return (
    <div className="flex flex-col mt-auto px-6 md:px-3 lg:px-6 pb-2 bg-[#242625]">
      <div className="flex items-center gap-3 pt-3 md:pt-2 lg:pt-3">
        <Image src={Plus} alt="Ícone de mais" />
        <div className="w-full h-8 bg-[#3A3C3B] rounded-full"></div>
        <Image src={CameraIcon} alt="Ícone de câmera" />
        <Image src={Microphone} alt="Ícone de microfone" />
      </div>
      <div className="w-[45%] mt-6 md:mt-3 lg:mt-6 rounded-full mx-auto bg-white h-1"></div>
    </div>
  );
};

const ChatAnim = () => {
  const container = useRef(null);

  const shuffleArray = (array: any) => {
    return array
      .map((item: any) => ({ item, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ item }: any) => item);
  };

  const shuffledClientes = shuffleArray(clientes);

  return (
    <div
      ref={container}
      className="w-[min(100%,25rem)] rounded-[47px] md:rounded-[35px] lg:rounded-[47px] shadow-[0_0_1rem_rgba(0,0,0,.75)] bg-black select-none overflow-hidden self-center md:self-auto relative"
    >
      <Image src={WppBg} alt="Whatsapp background" />
      <div className="absolute inset-0 text-white font-medium md:text-sm lg:text-lg flex flex-col">
        <WppHeader />
        {shuffledClientes.map((chat: any, i: number) => (
          <ClientChatAnim
            index={i}
            key={i}
            costumerName={chat.cliente}
            container={container}
          >
            <div className="w-fit text-base mx-auto bg-[#D9D9D9] bg-opacity-25 py-2 px-4 backdrop-blur-lg rounded-2xl">
              {chat.peculiaridade}
            </div>
            {chat.mensagens.map((message: any, j: number) => (
              <React.Fragment key={j}>
                <MessageAnim
                  index={j}
                  costumer={chat.cliente}
                  message={message}
                  container={container}
                />
              </React.Fragment>
            ))}
          </ClientChatAnim>
        ))}
        <WppFooter />
      </div>
    </div>
  );
};

export default ChatAnim;
