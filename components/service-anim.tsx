"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import WppBg from "/public/zapbarbearia/whatsapp-background.webp"
import CellPhone from "/public/zapbarbearia/cell-phone.svg"
import Robot from "/public/zapbarbearia/robot.svg"
import Package from "/public/zapbarbearia/package.svg"
import React from "react"
import FadeUp from "./fade-up"


const ServiceAnim = () => {

  return (
    <motion.ul
      className="*:bg-gradient-to-r grid max-lg:w-[min(35rem,100%)] max-lg:mx-auto lg:grid-cols-[repeat(30,minmax(0,1fr))] leading-[1.2] gap-5 *:px-5 *:rounded-2xl *:pt-5 text-start"
      initial={false}
      animate="visible"
      transition={{
        staggerChildren: 1
      }}
    >
      <FadeUp className="from-[#E0FFEF] to-[#F5FBD9] lg:[grid-area:span_1/span_17]">
        <article className="flex flex-col md:flex-row lg:gap-6 justify-between overflow-hidden">
          <div>
            <h4 className="text-2xl font-semibold mb-4">Mais produtividade</h4>
            <p className="max-w-[27ch]">Clientes não querem complicação. Com 3 mensagens no WhatsApp, o agendamento está feito. Com uma integração simples e automática, eles recebem respostas, lembretes e você mantém o controle total da sua agenda.</p>
          </div>
          <Image
            className="w-[min(100%,11.25rem)] self-center translate-y-[10%]"
            src={WppBg}
            alt="Celular"
          />
        </article>
      </FadeUp>
      <FadeUp className="from-[#D6FFF2] to-[#DBFDFF] lg:[grid-area:span_1/span_13]">
        <article className="flex min-h-full flex-col">
          <div>
            <h4 className="text-2xl font-semibold mb-[.625rem]">Sem formulários</h4>
            <p>Esqueça os formulários, aplicativos e links confusos. No ZapBarbearia, seus clientes agendam o serviço em 3 mensagens rápidas no WhatsApp, e a I.A. cuida do resto!</p>
          </div>
          <Image
            className="mt-auto mx-auto"
            src={CellPhone}
            alt="Celular"
          />
        </article>
      </FadeUp>
      <FadeUp className="from-[#FFEFCF] pb-4 to-[#F8FACC] lg:[grid-area:span_1/span_14]">
        <article className="flex flex-col gap-4 md:gap-0">
          <div className="max-w-[31ch]">
            <h4 className="text-2xl font-semibold mb-3">Ofereça pacotes!</h4>
            <p>Faça pacotes para seus clientes e deixe que nossa IA identifique quem faz parte dos pacotes e gerencie as reservas de forma automática.</p>
          </div>
          <Image
            className="self-end"
            src={Package}
            alt="Pacote"
          />
        </article>
      </FadeUp>
      <FadeUp className="from-[#003D3D] max-lg:pb-4 text-white to-[#008861] lg:[grid-area:span_1/span_16]">
        <article className="flex flex-col md:flex-row gap-4 md:gap-0 lg:gap-6 justify-between">
          <div className="max-w-[26ch]">
            <h4 className="text-2xl font-semibold pb-4">Customize sua abordagem com nosso robô.</h4>
            <p className="max-w-[22ch]">Faça pacotes para seus clientes e deixe que nossa IA identifique quem faz parte dos pacotes e gerencie as reservas de forma automática.</p>
          </div>
          <Image
            className="self-center"
            src={Robot}
            alt="Robô"
          />
        </article>
      </FadeUp>
    </motion.ul>
  )
}

export default ServiceAnim