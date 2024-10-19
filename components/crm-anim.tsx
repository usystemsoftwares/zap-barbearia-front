"use client"

import CRMCalendar from "/public/zapbarbearia/crm-calendar.webp"
import CRMWhatsapp from "/public/zapbarbearia/crm-whatsapp.webp"
import CRMPanel from "/public/zapbarbearia/crm-panel.webp"
import CRMCostumers from "/public/zapbarbearia/crm-customers.webp"
import Image from "next/image"
import { motion } from "framer-motion"
import FadeUp from "./fade-up"

const CRMAnim = () => {
  return (
    <motion.ul
      className="grid lg:grid-cols-2 leading-[1.2] gap-3 *:rounded-[.9375rem] *:border-2 *:border-[#D9D9D9] *:overflow-hidden text-start relative"
    >
      <FadeUp className="">
        <Image
          className="-translate-y-[1px]"
          src={CRMCalendar}
          alt="Calendário do CRM"
        />
      </FadeUp>
      <FadeUp className="">
        <Image
          src={CRMWhatsapp}
          alt="Tela de Whatsapp do CRM"
        />
      </FadeUp>
      <FadeUp className="">
        <Image
          className="-translate-y-[1px]"
          src={CRMPanel}
          alt="Painel do CRM"
        />
      </FadeUp>
      <FadeUp className="">
        <Image
          className="-translate-y-[1px]"
          src={CRMCostumers}
          alt="CLientes"
        />
      </FadeUp>
    </motion.ul>
  )
}

export default CRMAnim