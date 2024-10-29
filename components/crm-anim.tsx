"use client";

import CRMCalendar from "/public/zapbarbearia/crm-calendar.webp";
import CRMWhatsapp from "/public/zapbarbearia/crm-whatsapp.webp";
import CRMPanel from "/public/zapbarbearia/crm-panel.webp";
import CRMCostumers from "/public/zapbarbearia/crm-customers.webp";
import MyBarbershop from "/public/zapbarbearia/crm-my-barbershop.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeUp from "./fade-up";

const CRMAnim = () => {
  return (
    <motion.ul
      className="grid w-[min(100%,35rem)] mx-auto leading-[1.2] gap-6 lg:gap-3 lg:mx-0 lg:w-auto lg:grid-cols-[repeat(30,minmax(0,1fr))] *:flex *:flex-col *:rounded-[1.2rem] *:px-[.4rem] *:pt-4 *:pb-2 *:overflow-hidden *:bg-white *:shadow-md text-start relative [&_p]:pt-2 [&_p]:pb-4 [&_p]:mx-4 [&_p]:leading-[1.1] [&_h3]:mx-4"
    >
      <FadeUp className="lg:[grid-area:span_1/span_15]">
        <h3 className="text-3xl font-semibold">Agenda</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur,
          omnis exercitationem
        </p>
        <div className="bg-gradient-to-tr py-6 lg:py-8 flex-1 grid place-items-center rounded-[.5rem] to-[#cdfbcd] from-[#9ef1ce]">
          <div className="overflow-hidden w-[90%] lg:w-4/5 rounded-[.4rem]">
            <Image
              className="-translate-y-[.125rem]"
              src={CRMCalendar}
              alt="Calendário do CRM"
            />
          </div>
        </div>
      </FadeUp>
      <FadeUp className="lg:[grid-area:span_1/span_15]">
        <h3 className="text-3xl font-semibold">Conexão com Whatsapp</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur,
          omnis exercitationem
        </p>
        <div className="bg-gradient-to-tr py-6 lg:py-8 flex-1 grid place-items-center rounded-[.5rem] to-[#94ebe8] from-[#b1f0e8]">
          <div className="overflow-hidden w-[90%] lg:w-4/5 rounded-[.4rem]">
            <Image src={CRMWhatsapp} alt="Tela de Whatsapp do CRM" />
          </div>
        </div>
      </FadeUp>
      <FadeUp className="lg:[grid-area:span_1/span_10]">
        <h3 className="text-3xl font-semibold">Painel</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur,
          omnis exercitationem
        </p>
        <div className="bg-gradient-to-tr py-6 flex-1 grid place-items-center rounded-[.5rem] to-[#fce1d4] from-[#fff3c3]">
          <div className="overflow-hidden w-[90%] rounded-[.4rem]">
            <Image
              className="-translate-y-[.125rem]"
              src={CRMPanel}
              alt="Painel do CRM"
            />
          </div>
        </div>
      </FadeUp>
      <FadeUp className="lg:[grid-area:span_1/span_10]">
        <h3 className="text-3xl font-semibold">Tabela de clientes</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur,
          omnis exercitationem
        </p>
        <div className="bg-gradient-to-tr py-6 flex-1 grid place-items-center rounded-[.5rem] to-[#d6ddf9] from-[#eedbfa]">
          <div className="overflow-hidden w-[90%] rounded-[.4rem]">
            <Image
              className="-translate-y-[.125rem]"
              src={CRMCostumers}
              alt="CLientes"
            />
          </div>
        </div>
      </FadeUp>
      <FadeUp className="lg:[grid-area:span_1/span_10]">
        <h3 className="text-3xl font-semibold">Minha Barbearia</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur,
          omnis exercitationem
        </p>
        <div className="bg-gradient-to-tr py-6 flex-1 grid place-items-center rounded-[.5rem] to-[#fdd8eb] from-[#fee5ff]">
          <div className="overflow-hidden w-[90%] rounded-[.4rem]">
            <Image src={MyBarbershop} alt="Minha Barbearia" />
          </div>
        </div>
      </FadeUp>
    </motion.ul>
  );
};

export default CRMAnim;
