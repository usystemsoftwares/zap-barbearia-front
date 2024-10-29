"use client"

import { cn } from "@/lib/utils";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"

type DiscoveredTextProps = {
  className: string;
}

const WordAnim: any = ({ word, progress, range }: { word: string, progress: MotionValue, range: number[] }) => {
  const opacity = useTransform(progress, range, [.16, 1])

  return (
    <motion.span
      className={cn("inline-block transition-opacity duration-700", word == "ZapBarbearia" ? "bg-gradient-to-r from-[#04837D] to-primary-green bg-clip-text text-transparent" : "")}
      style={{
        opacity: opacity
      }}
    >
      {word}
      <span>&nbsp;</span>
    </motion.span>
  )
}

const DiscoveredTextAnim = ({ className }: DiscoveredTextProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "start 0.25"]
  })

  const text = "Com o ZapBarbearia o controle de agendamentos, respostas e notificações automáticas para seus clientes é feito de forma inteligente e eficiente. Enquanto você se concentra no que faz de melhor – cortar e cuidar dos cabelos – nossa I.A. organiza sua agenda, garante que seus clientes sejam avisados e evita erros de agendamento. Mais tempo para você, mais satisfação para seus clientes."
  const words = text.split(" ")

  return (
    <motion.p
      ref={ref}
      className={className}
    >
      <span className="sr-only">Com o ZapBarbearia, o controle de agendamentos, respostas e notificações automáticas para seus clientes é feito de forma inteligente e eficiente. Enquanto você se concentra no que faz de melhor – cortar e cuidar dos cabelos – nossa I.A. organiza sua agenda, garante que seus clientes sejam avisados e evita erros de agendamento. Mais tempo para você, mais satisfação para seus clientes.</span>
      <span
        aria-hidden
      >
        {words.map((word, i) => {
          const start = i / words.length
          const end = start + (1 / words.length)
          return <WordAnim
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            word={word}
          >
          </WordAnim>
        })}
      </span>
    </motion.p>
  )
}

export default DiscoveredTextAnim