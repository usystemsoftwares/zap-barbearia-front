"use client"

import Image from "next/image"
import Link from "next/link"
import BestSellingIcon from "/public/zapbarbearia/best-selling-icon.svg"
import AttendantIcon from "/public/zapbarbearia/atendentes-icon.svg"
import WhiteDropdownIcon from "/public/zapbarbearia/dropdown-icon-white.svg"
import BasicVerifyIcon from "/public/zapbarbearia/verify-icon-basic.svg"
import ProfessionalVerifyIcon from "/public/zapbarbearia/verify-icon-professional.svg"
import PremiumVerifyIcon from "/public/zapbarbearia/verify-icon-premium.svg"

const PlanSection = () => {

  return (
    <section className="bg-black font-bold text-white pt-16 pb-28 relative overflow-hidden" id="plans">
      <div className="absolute aspect-square top-0 left-[-10%] w-[40%] [background-image:radial-gradient(circle,rgba(5,132,126,1)_0%,rgba(255,255,255,0)_75%)] opacity-50"></div>
      <div className="absolute aspect-square top-0 right-[-10%] w-[40%] [background-image:radial-gradient(circle,rgba(5,132,126,1)_0%,rgba(255,255,255,0)_75%)] opacity-50"></div>
      <div className="w-[min(77.5rem,90%)] mx-auto relative">
        <h2 className="mx-auto text-5xl text-center">Escolha seu plano ideal</h2>
        <div className="bg-font-green my-7 rounded-full text-xl w-fit mx-auto p-[.4375rem] gap-1">
          <button className="rounded-full bg-cyan py-1 px-5">Mensal</button>
          <button className="py-1 px-5">Anual</button>
        </div>
        <ul className="flex justify-between *:border-2 *:flex *:flex-col *:items-center *:py-7 *:px-9 *:rounded-xl">
          <li className="self-end">
            <h3 className="text-center text-4xl">Plano Básico</h3>
            <p className="line-through mt-4 text-center text-3xl text-white/50">Total R$ 828/<span className="text-[1.625rem]">ano</span></p>
            <p className="text-3xl mt-[.625rem]">Total R$ 62/<span className="text-[1.625rem]">mensal</span></p>
            <button className="py-2 px-4 mt-5 bg-black rounded-full inline-flex items-center gap-[.625rem]"><Image src={WhiteDropdownIcon} alt="Ícone de expansão" /> 1 atendente <Image src={AttendantIcon} alt="Ícone de um atendente" /></button>
            <ul className="self-start my-5 space-y-[.125rem] *:flex *:items-center *:gap-[.625rem]">
              <li><Image src={BasicVerifyIcon} alt="verify icon" /> Acesso a relatórios</li>
              <li><Image src={BasicVerifyIcon} alt="verify icon" /> Suporte</li>
              <li><Image src={BasicVerifyIcon} alt="verify icon" /> Acesso a blogs</li>
              <li><Image src={BasicVerifyIcon} alt="verify icon" /> Acesso a relatórios</li>
              <li><Image src={BasicVerifyIcon} alt="verify icon" /> Suporte</li>
              <li><Image src={BasicVerifyIcon} alt="verify icon" /> Acesso a blogs</li>
            </ul>
            <Link
              className="inline-block border-2 py-1 text-center text-[1.625rem] font-semibold border-white w-full rounded-full"
              href={""}
            >Contratar</Link>
          </li>
          <li>
            <p className="bg-[#1B4228] flex gap-3 py-1 px-4 text-white w-fit mx-auto text-xl rounded-full">
              <Image src={BestSellingIcon} alt="Ícone de uma coroa verde" />
              MAIS VENDIDO
              <Image src={BestSellingIcon} alt="Ícone de uma coroa verde" />
            </p>
            <h3 className="text-4xl text-center bg-gradient-to-r from-primary-green to-cyan bg-clip-text text-transparent leading-normal">Plano Profissional</h3>
            <p className="text-3xl mt-4 text-center line-through text-primary-green/50">Total R$ 828/<span className="text-[1.625rem]">ano</span></p>
            <p className="text-primary-green mt-[.625rem] text-3xl">Total R$ 158/<span className="text-[1.625rem]">mensal</span></p>
            <button className="bg-[#1B4228] mt-5 py-2 px-4 rounded-full inline-flex items-center gap-[.625rem]"><Image src={WhiteDropdownIcon} alt="Ícone de expansão" /> 5 atendentes <Image src={AttendantIcon} alt="Ícone de um atendente" /></button>
            <ul className="self-start text-primary-green my-5 space-y-[.125rem] *:flex *:items-center *:gap-[.625rem]">
              <li><Image src={ProfessionalVerifyIcon} alt="verify icon" /> Acesso a relatórios</li>
              <li><Image src={ProfessionalVerifyIcon} alt="verify icon" /> Suporte</li>
              <li><Image src={ProfessionalVerifyIcon} alt="verify icon" /> Acesso a blogs</li>
              <li><Image src={ProfessionalVerifyIcon} alt="verify icon" /> Acesso a relatórios</li>
              <li><Image src={ProfessionalVerifyIcon} alt="verify icon" /> Suporte</li>
              <li><Image src={ProfessionalVerifyIcon} alt="verify icon" /> Acesso a blogs</li>
            </ul>
            <Link
              className="inline-block border-2 py-1 text-center text-[1.625rem] font-semibold border-white w-full rounded-full bg-gradient-to-r from-primary-green to-cyan bg-clip-text text-transparent"
              href={""}
            >Contratar</Link>
          </li>
          <li>
            <h3 className="text-4xl text-center bg-gradient-to-r from-primary-golden to-secondary-golden bg-clip-text text-transparent">Plano Premium</h3>
            <p className="text-3xl mt-4 text-center text-secondary-golden/50 line-through">Total R$ 828/<span className="text-[1.625rem]">ano</span></p>
            <p className="text-3xl mt-[.625rem] bg-gradient-to-r from-primary-golden to-secondary-golden bg-clip-text text-transparent">Total R$ 218/<span className="text-[1.625rem]">mensal</span></p>
            <button className="bg-gradient-to-r mt-[.9375rem] from-primary-golden to-secondary-golden py-2 px-4 rounded-full inline-flex items-center gap-[.625rem]"><Image src={WhiteDropdownIcon} alt="Ícone de expansão" /> 10 atendentes <Image src={AttendantIcon} alt="Ícone de um atendente" /></button>
            <ul className="self-start my-5 space-y-[.125rem] *:flex *:items-center *:gap-[.625rem] *:bg-gradient-to-r *:from-primary-golden *:to-secondary-golden *:bg-clip-text *:text-transparent">
              <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Acesso a relatórios</li>
              <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Suporte</li>
              <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Acesso a blogs</li>
              <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Acesso a relatórios</li>
              <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Suporte</li>
              <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Acesso a blogs</li>
              <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Suporte</li>
              <li><Image src={PremiumVerifyIcon} alt="verify icon" /> Acesso a relatórios</li>
            </ul>
            <Link
              className="inline-block border-2 py-1 text-center text-[1.625rem] font-semibold border-white w-full bg-gradient-to-r from-primary-golden to-secondary-golden bg-clip-text text-transparent rounded-full"
              href={""}
            >Contratar</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default PlanSection