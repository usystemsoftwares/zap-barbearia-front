"use client"

import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import Link from "next/link"

import { motion } from "framer-motion"

import BestSellingIcon from "/public/zapbarbearia/best-selling-icon.svg"
import AttendantIcon from "/public/zapbarbearia/atendentes-icon.svg"
import WhiteDropdownIcon from "/public/zapbarbearia/dropdown-icon-white.svg"
import BasicVerifyIcon from "/public/zapbarbearia/verify-icon-basic.svg"
import ProfessionalVerifyIcon from "/public/zapbarbearia/verify-icon-professional.svg"
import PremiumVerifyIcon from "/public/zapbarbearia/verify-icon-premium.svg"
import PlansDetails from "/public/zapbarbearia/plans-details.svg"
import ProfessionalIcon from "/public/zapbarbearia/professional-icon.svg"
import PremiumIcon from "/public/zapbarbearia/premium-plan.svg"
import { cn } from "@/lib/utils"
import { TabContext } from "@/contexts/tab-ctx"

const tabs = [
  { label: "Mensal" },
  { label: "Anual" }
]

const Tab = () => {
  const tabCtx = useContext(TabContext)
  useEffect(() => {
    tabCtx?.setActiveTab(tabs[0].label)
  }, [])

  return (
    <div className="relative bg-font-green my-7 rounded-full text-xl w-fit mx-auto p-[.4375rem] gap-1">
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => tabCtx?.setActiveTab(tab.label)}
          className={cn("relative rounded-full z-10 px-5 py-1", tabCtx?.activeTab !== tab.label ? "z-20" : "")}
        >
          {tabCtx?.activeTab === tab.label && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-cyan"
              style={{
                borderRadius: 9999
              }}
            />
          )}
          <span className="relative">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}

const PlanList = () => {
  const tabCtx = useContext(TabContext)

  return (
    <ul className="max-lg:w-[min(100%,22.25rem)] max-lg:mx-auto flex flex-col-reverse max-lg:gap-20 gap-4 lg:flex-row lg:justify-between mt-16 *:flex *:flex-col *:place-content-between *:items-center *:py-7 *:px-9 *:border-2 *:rounded-xl *:relative plan-ul">
      <li className="lg:self-end">
        <h3 className="text-center text-4xl">Pacote Navalha</h3>
        <p className="font-normal text-base xl:text-lg mt-2 leading-[1.75rem]">Para barbearias que buscam precisão e simplicidade na organização do dia a dia. Ideal para começar com automatização inteligente.</p>
        <p className={cn("text-3xl lg:text-2xl xl:text-3xl mt-4 text-center relative transition-all duration-500", tabCtx?.activeTab === "Mensal" ? "text-white/50 before:absolute before:bottom-1/2 before:translate-y-1/2 before:w-full before:h-[0.125rem] before:bg-white" : "")}>Total R$ 1.010/<span className="text-[1.625rem] lg:text-[1.125rem] xl:text-[1.625rem]">ano</span></p>
        <p className={cn("text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mt-[.625rem] relative transition-all duration-500", tabCtx?.activeTab === "Anual" ? "text-white/50 before:absolute before:bottom-1/2 before:translate-y-1/2 before:w-full before:h-[0.125rem] before:bg-white" : "")}>Total R$ 99/<span className="text-xl sm:text-[1.625rem] lg:text-[1.125rem] xl:text-[1.625rem]">mensal</span></p>
        <button className="py-2 px-4 mt-5 bg-black rounded-full inline-flex items-center gap-[.625rem]"><Image src={WhiteDropdownIcon} alt="Ícone de expansão" /> 1 atendente <Image src={AttendantIcon} alt="Ícone de um atendente" /></button>
        <ul className="self-start mx-3 my-5 space-y-[.125rem] *:flex *:items-center *:gap-[.625rem]">
          <li><Image src={BasicVerifyIcon} alt="verify icon" /> 1 usuário</li>
          <li><Image src={BasicVerifyIcon} alt="verify icon" /> Gestão financeira básica</li>
          <li><Image src={BasicVerifyIcon} alt="verify icon" /> Integração I.A com WhatsApp</li>
          <li><Image src={BasicVerifyIcon} alt="verify icon" /> Agendamento dinâmico</li>
          <li><Image src={BasicVerifyIcon} alt="verify icon" /> Integração com Google Calendar</li>
          <li><Image src={BasicVerifyIcon} alt="verify icon" /> Lembretes automáticos de agendamento</li>
        </ul>
        <Link
          className="inline-block relative border-2 py-2 text-center text-[1.625rem] font-semibold border-white w-[min(100%,14.375rem)] rounded-full contract-button"
          href={""}
        >Contratar</Link>
      </li>
      <li className="border-transparent before:bg-gradient-to-b before:from-primary-green before:to-cyan">
        <div className="absolute w-[min(100%,14.75rem)] -top-[4.8%] bg-black right-1/2 translate-x-1/2">
          <Image
            src={ProfessionalIcon}
            alt="Coroa verde"
          />
        </div>
        <p className="bg-[#1B4228] flex gap-3 py-1 px-4 text-white w-fit mx-auto text-xl rounded-full mt-14">
          <Image src={BestSellingIcon} alt="Ícone de uma coroa verde" />
          MAIS VENDIDO
          <Image src={BestSellingIcon} alt="Ícone de uma coroa verde" />
        </p>
        <h3 className="text-4xl leading-[2.5rem] text-center bg-gradient-to-r from-primary-green to-cyan bg-clip-text text-transparent">Pacote Tesoura de Ouro</h3>
        <p className="bg-gradient-to-r from-primary-green to-cyan bg-clip-text text-transparent mt-2 xl:text-xl">Pensado para barbearias em crescimento, que precisam gerir múltiplos funcionários e organizar a agenda com eficiência.</p>
        <p className={cn("text-3xl lg:text-2xl xl:text-3xl mt-4 text-center text-primary-green relative transition-all duration-500", tabCtx?.activeTab === "Mensal" ? "before:absolute before:bottom-1/2 before:translate-y-1/2 before:w-full before:h-[0.125rem] before:bg-primary-green text-primary-green/50" : "")}>Total R$ 2.029/<span className="text-[1.625rem] lg:text-[1.125rem] xl:text-[1.625rem]">ano</span></p>
        <p className={cn("text-2xl sm:text-3xl lg:text-2xl xl:text-3xl text-primary-green mt-[.625rem] relative transition-all duration-500", tabCtx?.activeTab === "Anual" ? "before:absolute before:bottom-1/2 before:translate-y-1/2 before:w-full before:h-[0.125rem] before:bg-primary-green text-primary-green/50" : "")}>Total R$ 199/<span className="text-xl sm:text-[1.625rem] lg:text-[1.125rem] xl:text-[1.625rem]">mensal</span></p>
        <button className="bg-[#1B4228] mt-5 py-2 px-4 rounded-full inline-flex items-center gap-[.625rem]"><Image src={WhiteDropdownIcon} alt="Ícone de expansão" /> 5 atendentes <Image src={AttendantIcon} alt="Ícone de um atendente" /></button>
        <ul className="self-start mx-3 text-primary-green my-5 space-y-[.125rem] *:flex *:items-center *:gap-[.625rem]">
          <li><Image src={ProfessionalVerifyIcon} alt="verify icon" /> 3 usuários</li>
          <li><Image src={ProfessionalVerifyIcon} alt="verify icon" /> Gestão financeira</li>
          <li><Image src={ProfessionalVerifyIcon} alt="verify icon" /> Comissões personalizadas</li>
          <li><Image src={ProfessionalVerifyIcon} alt="verify icon" /> Integração I.A com WhatsApp</li>
          <li><Image src={ProfessionalVerifyIcon} alt="verify icon" /> Agendamento dinâmico com múltiplas agendas</li>
          <li><Image src={ProfessionalVerifyIcon} alt="verify icon" /> Integração com Google Calendar</li>
          <li><Image src={ProfessionalVerifyIcon} alt="verify icon" /> Lembretes automáticos de agendamento</li>
        </ul>
        <Link
          className="relative inline-block border-2 py-2 text-center text-[1.625rem] font-semibold border-transparent w-[min(100%,14.375rem)] rounded-full bg-gradient-to-r from-primary-green to-cyan bg-clip-text text-transparent contract-button before:bg-gradient-to-r before:from-primary-green before:to-cyan"
          href={""}
        >Contratar</Link>
      </li>
      <li className="border-transparent relative before:bg-gradient-to-b before:from-primary-golden before:to-secondary-golden">
        <div className="absolute w-[min(100%,14.25rem)] -top-[5%] right-1/2 translate-x-1/2">
          <Image
            className="max-lg:bg-black"
            src={PremiumIcon}
            alt="Coroa dourada"
          />
        </div>
        <h3 className="mt-14 text-4xl text-center bg-gradient-to-r from-primary-golden to-secondary-golden bg-clip-text text-transparent">Pacote Barba Premium</h3>
        <p className="bg-gradient-to-r from-primary-golden to-secondary-golden bg-clip-text text-transparent mt-2">A solução completa para barbearias de alto nível que precisam de controle avançado e relatórios detalhados para gestão estratégica.</p>
        <p className={cn("text-3xl lg:text-2xl xl:text-3xl mt-4 text-center text-secondary-golden relative transition-all duration-500", tabCtx?.activeTab === "Mensal" ? "before:absolute before:bottom-1/2 before:translate-y-1/2 before:w-full before:h-[0.125rem] before:bg-gradient-to-r before:from-primary-golden before:to-secondary-golden text-secondary-golden/50" : "")}>Total R$ 4.069/<span className="text-[1.625rem] lg:text-[1.125rem] xl:text-[1.625rem]">ano</span></p>
        <p className={cn("text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mt-[.625rem] bg-gradient-to-r from-primary-golden to-secondary-golden bg-clip-text text-transparent relative transition-all duration-500", tabCtx?.activeTab === "Anual" ? "before:absolute before:bottom-1/2 before:translate-y-1/2 before:w-full before:h-[0.125rem] before:bg-gradient-to-r before:from-primary-golden before:to-secondary-golden from-primary-golden/50 to-secondary-golden/50" : "")}>Total R$ 399/<span className="text-xl sm:text-[1.625rem] lg:text-[1.125rem] xl:text-[1.625rem]">mensal</span></p>
        <button className="bg-gradient-to-r mt-[.9375rem] from-primary-golden to-secondary-golden py-2 px-4 rounded-full inline-flex items-center gap-[.625rem]"><Image src={WhiteDropdownIcon} alt="Ícone de expansão" /> 10 atendentes <Image src={AttendantIcon} alt="Ícone de um atendente" /></button>
        <ul className="self-start mx-3 my-5 space-y-[.125rem] *:flex *:items-center *:gap-[.625rem] *:bg-gradient-to-r *:from-primary-golden *:to-secondary-golden *:bg-clip-text *:text-transparent">
          <li><Image src={PremiumVerifyIcon} alt="verify icon" /> 10 usuários</li>
          <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Gestão financeira com relatórios detalhados</li>
          <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Comissões com relatórios avançados</li>
          <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Integração I.A com WhatsApp</li>
          <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Agendamento dinâmico com múltiplas agendas</li>
          <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Integração com Google Calendar</li>
          <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Lembretes automáticos de agendamento</li>
          <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Logs completos do sistema</li>
        </ul>
        <Link
          className="relative inline-block border-2 py-2 text-center text-[1.625rem] font-semibold border-transparent w-[min(100%,14.375rem)] bg-gradient-to-r from-primary-golden to-secondary-golden bg-clip-text text-transparent rounded-full contract-button before:bg-gradient-to-r before:from-primary-golden before:to-secondary-golden"
          href={""}
        >Contratar</Link>
      </li>
    </ul>
  )
}

const PlanSection = () => {

  return (
    <div className="bg-white">
      <section className="bg-black font-bold text-white pt-16 pb-36 relative overflow-hidden [clip-path:polygon(0%_0%,100%_0%,100%_98.75%,0%_100%)] lg:[clip-path:polygon(0%_0%,100%_0%,100%_88%,0%_100%)]" id="plans">
        <Image className="w-[50%] sm:w-auto absolute bottom-0 left-0 z-10" src={PlansDetails} alt="listra verde clara, branca e verde escura" />
        <div className="absolute max-lg:hidden aspect-square top-0 left-[-10%] w-[40%] [background-image:radial-gradient(circle,rgba(5,132,126,1)_0%,rgba(255,255,255,0)_75%)] opacity-50"></div>
        <div className="absolute max-lg:hidden aspect-square top-0 right-[-10%] w-[40%] [background-image:radial-gradient(circle,rgba(5,132,126,1)_0%,rgba(255,255,255,0)_75%)] opacity-50"></div>
        <div className="w-[min(77.5rem,90%)] mx-auto relative">
          <h2 className="mx-auto text-5xl text-center">Escolha seu plano ideal</h2>
          <Tab />
          <PlanList />
        </div>
      </section>
    </div>
  )
}

export default PlanSection