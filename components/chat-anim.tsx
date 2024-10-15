"use client"

import WppBg from "/public/zapbarbearia/whatsapp-background.webp"
import Image from "next/image"
import { useRef } from "react"
import MessageAnim from "./message-anim"
import ClientChatAnim from "./client-chat-anim"
import { clientes } from "@/clientes"

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
      {clientes.map((chat, i) => (
        <ClientChatAnim
          key={i}
          i={i}
          container={container}
        >
          {chat.mensagens.map((message, j) => (
            <MessageAnim
              key={j}
              costumer={chat.cliente}
              message={message}
              container={container}
            />
          ))}
        </ClientChatAnim>
      ))}

    </div>
  )
}

export default ChatAnim