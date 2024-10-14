"use client"

import { cn } from "@/lib/utils"
import WppBg from "/public/zapbarbearia/whatsapp-background.webp"
import { motion } from "framer-motion"
import Image from "next/image"

const messageAnimVariants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const MessageAnim = () => {
  let messages = [
    {
      user: "first guy",
      text: "Olá, quero agendar meu corte hoje para às 18h",
      time: "12:21"
    },
    {
      user: "first guy",
      text: "Como posso agendar?",
      time: "12:21"
    },
    {
      user: "bot",
      text: "Olá, seu horário foi agendado com sucesso!",
      time: "12:21"
    },
    {
      user: "bot",
      text: "Nós usamos a ZapBarbearia para fazer nossos agendamentos diretamente no WhatsApp.",
      time: "12:21"
    },
    {
      user: "first guy",
      text: "Perfeito!",
      time: "12:21"
    }
  ]

  return (
    <div className="w-[min(100%,25rem)] rounded-[47px] shadow-[0_0_1rem_rgba(0,0,0,.75)] bg-black select-none overflow-hidden self-center md:self-auto relative">
      <Image
        src={WppBg}
        alt="Whatsapp background"
      />
      <motion.ul
        className="absolute inset-0 px-4 py-6 text-white font-medium flex flex-col justify-end gap-2"
        initial="hidden"
        animate="visible"
        variants={messageAnimVariants}
        transition={{
          delayChildren: 1,
          staggerChildren: 1
        }}
      >
        {messages.map((message, i) => (
          <motion.li
            className={cn("rounded-[.9375rem] px-4 py-3 leading-[1.25]  w-fit max-w-[80%]", message.user === "bot" ? "bg-dark-green self-end" : "bg-dark-gray")}
            key={i}
            variants={messageAnimVariants}
          >
            {message.text} <span className="text-sm opacity-50 text-end">{message.time}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default MessageAnim