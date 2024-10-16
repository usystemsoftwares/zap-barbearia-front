"use client"

import Image from "next/image"
import RectangleBlur from "/public/zapbarbearia/rectangle-blur.svg"
import ServiceAnim from "@/components/service-anim";
import DiscoveredTextAnim from "@/components/discovered-text-anim";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

const ServiceContainer = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start .7', "start end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0", "150px"])
  const opacity = useTransform(scrollYProgress, [0, 1], [.7, .1])
  const txtOpacity = useTransform(scrollYProgress, [0, 1], [.85, .4])

  return (
    <div className="w-container mx-auto text-center pt-24">
      <motion.div
        className="absolute top-[5%] sm:top-[3.5%] md:top-0 w-[110%] xl:w-full right-1/2 translate-x-1/2"
        style={{
          opacity: opacity
        }}>
        <Image
          className="absolute top-0 w-full"
          src={RectangleBlur}
          alt="blur verde"
          draggable={false}
        />
      </motion.div>
      <motion.h2
        style={{ opacity: txtOpacity }}
        className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-8 relative md:whitespace-nowrap"
      >Preocupe-se somente em cortar</motion.h2>
      <motion.div
        ref={ref}
        initial={false}
        style={{ y }}
        className="bg-white pt-20 pb-14 px-6 xl:px-14 rounded-[1.25rem] relative"
      >
        <h3 className="text-5xl font-bold max-w-[19ch] mx-auto">Deixe o atendimento com a gente!</h3>
        <p className="mt-12 mb-5 leading-[1.2]">Com o ZapBarbearia, seu tempo é dedicado ao que importa: o atendimento ao cliente. Nossa Inteligência Artificial cuida de todo o resto. Agendamentos, respostas automáticas e lembretes para os clientes, tudo funcionando de maneira autônoma no WhatsApp. Nunca mais perca controle da agenda ou deixe clientes esperando. Você foca no serviço, a tecnologia faz o restante.</p>
        <ServiceAnim />
      </motion.div>
      <DiscoveredTextAnim className="text-3xl max-w-[56.25rem] mx-auto sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] my-24 leading-[1.1] font-medium text-start" />
    </div>
  )
}

export default ServiceContainer