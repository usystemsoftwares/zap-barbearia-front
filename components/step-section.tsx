"use client"

import Image from "next/image"
import Checklist from "/public/zapbarbearia/checklist.webp"
import BarberIcon from "/public/zapbarbearia/barber-icon.webp"
import Gear from "/public/zapbarbearia/gear.webp"
import WppCheckIcon from "/public/zapbarbearia/wpp-check.webp"
import CheckIcon from "/public/zapbarbearia/check-icon.svg"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import ReactConfetti from "react-confetti"

const StepSection = () => {
  const ref = useRef(null)
  const amountNumber = .4

  let isInView = useInView(ref, {
    amount: amountNumber,
    once: true
  })

  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (isInView) {
      setShowConfetti(true)
      setTimeout(() => {
        isInView = false
        setShowConfetti(false)
      }, 2500)
    }
  }, [isInView, setShowConfetti])

  return (
    <section className="relative w-[min(90%,69.375rem)] mx-auto mt-28 lg:mt-36 mb-32 lg:mb-40 overflow-hidden" id="step-by-step">
      <AnimatePresence>
        {showConfetti &&
          <motion.div
            className="fixed inset-0"
            exit={{
              opacity: 0
            }}
          >
            <ReactConfetti
              style={{
                inset: "0",
                position: "fixed",
              }}
            />
          </motion.div>
        }
      </AnimatePresence>
      <h2 className="text-center font-bold text-5xl">Como usar o <span className="bg-gradient-to-r from-[#04837D] to-primary-green bg-clip-text text-transparent">ZapBarbearia?</span></h2>
      <div className="relative py-20 lg:py-52">
        <div className="hidden lg:block absolute right-1/2 translate-x-1/2 top-0 w-[.0625rem] h-1/2">
          <div className="absolute h-[calc(50%-1.75rem)] w-full top-0 bg-gradient-to-b from-transparent to-primary-green" />
          <div className="absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 bg-[#E1F9EB] w-[1.875rem] rounded-full aspect-square grid place-items-center">
            <div className="w-1/3 bg-primary-green aspect-square rounded-full"></div>
          </div>
          <div className="absolute h-[calc(50%-3.5rem)] w-full bottom-[1.75rem] bg-primary-green" />
        </div>
        <div className="hidden lg:grid place-items-center absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 bg-[#E1F9EB] w-[1.875rem] rounded-full aspect-square">
          <div className="w-1/3 bg-primary-green aspect-square rounded-full"></div>
        </div>
        <div className="hidden lg:block absolute right-1/2 translate-x-1/2 w-[.0625rem] bottom-0 h-1/2">
          <div className="absolute h-[calc(50%-3.5rem)] w-full top-[1.75rem] bg-primary-green" />
          <div className="absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 bg-[#E1F9EB] w-[1.875rem] rounded-full aspect-square grid place-items-center">
            <div className="w-1/3 bg-primary-green aspect-square rounded-full"></div>
          </div>
          <div className="absolute h-[calc(50%-1.75rem)] w-full bottom-0 bg-gradient-to-t from-transparent to-primary-green" />
        </div>
        <ul className="*:flex max-lg:*:flex-col-reverse *:items-center *:justify-between *:gap-12 font-medium text-xl md:text-3xl">
          <motion.li
            className="lg:*:w-1/2 lg:flex-row-reverse"
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: .5
              }
            }}
            viewport={{
              amount: .3,
              once: true
            }}
          >
            <div className="max-w-[23ch]">
              <h3 className="text-4xl sm:text-5xl font-bold text-center">Passo 1</h3>
              <h4 className="text-2xl sm:text-3xl font-bold text-center my-4 md:my-8">Adquira sua licença</h4>
              <p className="">Escolha o plano que melhor atende às necessidades da sua barbearia e adquira sua licença de uso de forma rápida e segura</p>
            </div>
            <div className="w-2/5 sm:w-auto">
              <Image
                className="mx-auto lg:mx-0 lg:mt-0"
                src={Checklist}
                alt="Checklist"
              />
            </div>
          </motion.li>
          <motion.li
            className="lg:*:w-1/2 my-20 lg:my-44"
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: .5
              }
            }}
            viewport={{
              amount: .3,
              once: true
            }}
          >
            <div className="max-w-[23ch]">
              <h3 className="text-4xl sm:text-5xl font-bold text-center">Passo 2</h3>
              <h4 className="text-2xl sm:text-3xl font-bold text-center my-4 md:my-8">Configure Sua Barbearia</h4>
              <p>Cadastre os dados da sua empresa, incluindo horários de funcionamento, serviços oferecidos e informações dos barbeiros.</p>
            </div>
            <div>
              <div className="w-2/5 sm:w-auto max-w-[11.813rem] ml-auto mr-auto lg:ml-auto lg:mr-24 relative">
                <Image
                  className="absolute top-[10%] -right-[37.5%] sm:-right-1/2 animate-spin-slow"
                  src={Gear}
                  alt="Ícone de engrenagem"
                />
                <Image
                  src={BarberIcon}
                  alt="Ícone de barbeiro"
                />
                <Image
                  className="absolute max-w-[3.75rem] -left-[35%] bottom-0 animate-reverse-spin-slow"
                  src={Gear}
                  alt="Ícone de engrenagem"
                />
              </div>
            </div>
          </motion.li>
          <motion.li
            className="lg:*:w-1/2 lg:flex-row-reverse"
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: .5
              }
            }}
            viewport={{
              amount: .3,
              once: true
            }}
          >
            <div className="max-w-[24ch]">
              <h3 className="text-4xl sm:text-5xl font-bold text-center">Passo 3</h3>
              <h4 className="text-2xl sm:text-3xl font-bold text-center my-4 md:my-8">Integre o WhatsApp</h4>
              <p>Vincule seu WhatsApp escaneando o QR Code fornecido e comece a interagir com seus clientes instantaneamente</p>
            </div>
            <div className="w-2/5 sm:w-auto">
              <Image
                className="mx-auto md:mx-0"
                src={WppCheckIcon}
                alt="Whatsapp check"
              />
            </div>
          </motion.li>
        </ul>
      </div>
      <motion.div
        ref={ref}
        className="relative overflow-hidden text-center"
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: .5
          }
        }}
        viewport={{
          amount: amountNumber,
          once: true
        }}
      >

        <div className="max-w-[58ch] mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold">Pronto!</h3>
          <p className="text-xl md:text-3xl font-medium mt-8">Sua barbearia está pronta para oferecer uma experiência moderna e eficiente aos seus clientes com a ajuda da inteligência artificial e integração com o WhatsApp.</p>
        </div>
        <div className="w-[min(100%,8.75rem)] mt-20 grid place-items-center rounded-full overflow-hidden aspect-square relative mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-primary-green to-cyan animate-[spin_4s_linear_infinite] rounded-full"></div>
          <Image
            draggable={false}
            className="relative select-none"
            src={CheckIcon}
            alt="Ícone de verificado"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default StepSection