import Image from "next/image";
import Logo from "/public/zapbarbearia/logo.svg"
import WhiteLogo from "/public/zapbarbearia/white-logo.svg"
import Link from "next/link";
import PlanSection from "@/components/plan-section";
import FaqList from "@/components/faq-list";
import CRMAnim from "@/components/crm-anim";
import ServiceContainer from "@/components/service-container";
import HomeSection from "@/components/home-section";

import Checklist from "/public/zapbarbearia/checklist.webp"
import BarberIcon from "/public/zapbarbearia/barber-icon.webp"
import Gear from "/public/zapbarbearia/gear.webp"
import WppCheckIcon from "/public/zapbarbearia/wpp-check.webp"
import CheckIcon from "/public/zapbarbearia/check-icon.svg"

const Home = () => {
  return (
    <>
      <header className="w-container mx-auto pt-10">
        <Image
          src={Logo}
          alt="Logo"
        />
      </header>
      <main>
        <div className="relative">
          <div className="absolute aspect-square bottom-0 left-0  w-[75%] md:w-[60%] opacity-50">
            <div className="absolute -bottom-[25%] md:-bottom-[35%] -left-[50%] w-full h-full [background-image:radial-gradient(circle,#42E0AF_0%,rgba(255,255,255,0)_75%)]"></div>
          </div>
          <HomeSection />
        </div>
        <section className="w-[min(100%,90rem)] mx-auto relative overflow-hidden">
          <ServiceContainer />
        </section>
        <section className="w-container mx-auto bg-white relative rounded-[1.25rem] px-6 xl:px-14 pb-16 pt-20 crm-section before:bg-gradient-to-b before:from-primary-green">
          <h2 className="text-center text-5xl font-bold mb-12 lg:mb-28 relative">CRM integrado</h2>
          {/* <div className="absolute [background-image:radial-gradient(circle,#2200FF_0%,rgba(255,255,255,0)_75%)] rounded-full right-1/2 translate-x-1/2 w-[25rem] aspect-square"></div> */}
          <CRMAnim />
        </section>
        <section className="w-lg-container mx-auto mt-36 mb-16" id="step-by-step">
          <h2 className="text-center font-bold text-5xl">Como usar o <span className="bg-gradient-to-r from-[#04837D] to-primary-green bg-clip-text text-transparent">ZapBarbearia?</span></h2>
          <ul className="relative *:flex max-md:*:flex-col md:*:items-center md:*:justify-between py-20 md:py-80 font-medium text-3xl">
            <li className="md:*:w-1/2 md:flex-row-reverse">
              <div className="max-w-[23ch]">
                <h3 className="text-5xl font-bold text-center">Passo 1</h3>
                <h4 className="text-3xl font-bold text-center my-8">Adquira sua licença</h4>
                <p>Escola o plano que melhor atende às necessidades da sua barbearia e adquira sua licença de uso de forma rápida e segura</p>
              </div>
              <div>
                <Image
                  className="mx-auto md:mx-0 mt-12 md:mt-0"
                  src={Checklist}
                  alt="Checklist"
                />
              </div>
            </li>
            <li className="md:*:w-1/2 my-44">
              <div className="max-w-[23ch]">
                <h3 className="text-5xl font-bold text-center">Passo 2</h3>
                <h4 className="text-3xl font-bold text-center my-8">Configure Sua Barbearia</h4>
                <p>Cadastre os dados da sua empresa, incluindo horários de funcionamento, serviços oferecidos e informações dos barbeiros.</p>
              </div>
              <div>
                <div className="max-w-[11.813rem] mx-auto md:ml-auto md:mr-20 mt-12 md:mt-0 relative">
                  <Image
                    className="absolute top-[10%] -right-[50%]"
                    src={Gear}
                    alt="Ícone de engrenagem"
                  />
                  <Image
                    src={BarberIcon}
                    alt="Ícone de barbeiro"
                  />
                  <Image
                    className="absolute max-w-[3.75rem] -left-[35%] bottom-0"
                    src={Gear}
                    alt="Ícone de engrenagem"
                  />
                </div>
              </div>
            </li>
            <li className="md:*:w-1/2 md:flex-row-reverse">
              <div className="max-w-[24ch]">
                <h3 className="text-5xl font-bold text-center">Passo 3</h3>
                <h4 className="text-3xl font-bold text-center my-8">Integre o WhatsApp</h4>
                <p>Vincule seu WhatsApp escaneando o QR Code fornecido e comece a interagir com seus clientes instantaneamente</p>
              </div>
              <div>
                <Image
                  className="mx-auto md:mx-0 mt-12 md:mt-0"
                  src={WppCheckIcon}
                  alt="Whatsapp check"
                />
              </div>
            </li>
          </ul>
          <div className="relative text-center">
            <div className="max-w-[58ch] mx-auto text-center">
              <h3 className="text-5xl font-bold">Pronto!</h3>
              <p className="text-3xl font-medium mt-8">Sua barbearia está pronta para oferecer uma experiência moderna e eficiente aos seus clientes com a ajuda da inteligência artificial e integração com o WhatsApp.</p>
            </div>
            <div className="w-[min(100%,8.75rem)] mt-20 grid place-items-center rounded-full aspect-square bg-gradient-to-t from-cyan to-primary-green mx-auto">
              <Image
                src={CheckIcon}
                alt="Ícone de verificado"
              />
            </div>
          </div>
        </section>
        <PlanSection />
        <section className="bg-white py-28" id="faq">
          <div className="w-[min(56.25rem,90%)] mx-auto">
            <p className="text-base font-light text-center">FAQ ZAP BARBEARIA</p>
            <h2 className="text-2xl text-center md:text-5xl font-extrabold lg:text-6xl mt-[.625rem] mb-12">DÚVIDAS FREQUENTES</h2>
            <FaqList />
          </div>

        </section>
      </main>
      <footer className="bg-black text-white pt-24 pb-8 relative overflow-hidden">
        <div className="w-[min(56.25rem,90%)] mx-auto">
          <div className="flex flex-col gap-12 md:gap-0 md:flex-row items-center md:items-start relative z-10">
            <div>
              <Link className="block" href="#">
                <Image src={WhiteLogo} alt="Home" />
              </Link>
            </div>
            <nav className="md:ml-32">
              <ul className="text-xl font-semibold *:mb-5">
                <li><Link href={"#home"}>Início</Link></li>
                <li><Link href={"#step-by-step"}>Passo a passo</Link></li>
                <li><Link href={"#faq"}>Dúvidas</Link></li>
                <li><Link href={"#plans"}>Planos</Link></li>
                <li className="last:mb-0"><Link href={""}>Como funciona</Link></li>
              </ul>
            </nav>
          </div>
          <div className="my-14 bg-gradient-to-r from-cyan to-primary-green h-[.0625rem]"></div>
          <p className="text-center z-10 relative">Todos os direitos reservados.</p>
        </div>
        <div className="absolute aspect-square w-[50rem] right-1/2 translate-x-1/2 bottom-[-90%] [background-image:radial-gradient(circle,rgba(77,208,128,1)_0%,rgba(255,255,255,0)_70%)] opacity-40"></div>
      </footer>
    </>
  );
}

export default Home