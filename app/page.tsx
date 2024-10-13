import Image from "next/image";
import Logo from "/public/zapbarbearia/logo.svg"
import WhiteLogo from "/public/zapbarbearia/white-logo.svg"
import WppBg from "/public/zapbarbearia/whatsapp-background.webp"
import ArrowIcon from "/public/zapbarbearia/arrow.svg"
import RectangleBlur from "/public/zapbarbearia/rectangle-blur.svg"
import Link from "next/link";
import PlanSection from "@/components/plan-section";
import FaqList from "@/components/faq-list";
import HeadlineAnim from "@/components/headline-anim";
import ServiceAnim from "@/components/service-anim";

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
          <section className="w-container mt-16 md:mt-0 relative flex flex-col md:flex-row gap-8 md:justify-between md:items-center mx-auto md:-translate-y-8" id="home">
            <div className="">
              <HeadlineAnim />
              <Link
                className="inline-flex shadow-xl shadow-black/20 text-white gap-4 bg-gradient-to-r from-primary-green to-[#04837D] rounded-full py-2 md:py-3 px-6 md:px-8 mt-2 sm:mt-4 md:mt-9 text-3xl md:text-4xl font-semibold"
                href="#plans"
              >
                Planos
                <Image
                  className="w-[min(100%,1.5rem)] md:w-auto"
                  src={ArrowIcon}
                  alt="Seta"
                />
              </Link>
            </div>
            <div className="w-[min(100%,25rem)] relative">
              <Image
                src={WppBg}
                alt="Whatsapp background"
              />
            </div>
          </section>
        </div>
        <section className="w-[min(100%,90rem)] mx-auto relative overflow-hidden">
          <div className="w-container mx-auto text-center pt-24">
            <div className="absolute top-0 w-[110%] xl:w-full right-1/2 translate-x-1/2">
              <Image
                className="absolute top-0 w-full"
                src={RectangleBlur}
                alt=""
                draggable={false}
              />
            </div>
            <h2 className="text-5xl xl:text-6xl font-bold mb-5">Preocupe-se somente em cortar</h2>
            <div className="bg-white pt-20 pb-14 px-6 xl:px-14 rounded-[1.25rem] relative">
              <h3 className="text-5xl font-bold max-w-[19ch] mx-auto">Deixe o atendimento com a gente!</h3>
              <p className="mt-12 mb-5 leading-[1.2]">Com o ZapBarbearia, seu tempo é dedicado ao que importa: o atendimento ao cliente. Nossa Inteligência Artificial cuida de todo o resto. Agendamentos, respostas automáticas e lembretes para os clientes, tudo funcionando de maneira autônoma no WhatsApp. Nunca mais perca controle da agenda ou deixe clientes esperando. Você foca no serviço, a tecnologia faz o restante.</p>
              <ServiceAnim />
            </div>
            <p className="text-3xl sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] my-24 leading-[1.1] font-medium text-start">Com o <span className="bg-gradient-to-r from-[#04837D] to-primary-green bg-clip-text text-transparent">ZapBarbearia</span>, o controle de agendamentos, respostas e notificações automáticas para seus clientes é feito de forma inteligente e eficiente. Enquanto você se concentra no que faz de melhor – cortar e cuidar dos cabelos – nossa I.A. organiza sua agenda, garante que seus clientes sejam avisados e evita erros de agendamento. Mais tempo para você, mais satisfação para seus clientes.</p>
          </div>
        </section>
        <section className="w-container mx-auto bg-white relative rounded-[1.25rem] px-6 xl:px-14 pb-16 pt-20 crm-section before:bg-gradient-to-b before:from-primary-green">
          <h2 className="text-center text-5xl font-bold mb-12 lg:mb-28">CRM integrado</h2>
          {/* <div className="absolute [background-image:radial-gradient(circle,#2200FF_0%,rgba(255,255,255,0)_75%)] rounded-full right-1/2 translate-x-1/2 w-[25rem] aspect-square"></div> */}
          <ul className="grid lg:grid-cols-[repeat(30,minmax(0,1fr))] *:h-52 *:bg-[#D9D9D9] leading-[1.2] gap-5 *:px-5 *:rounded-2xl *:pt-5 text-start relative">
            <li className="lg:[grid-area:span_1/span_17]">
            </li>
            <li className="lg:[grid-area:span_1/span_13]">
            </li>
            <li className="lg:[grid-area:span_1_/_span_14]">
            </li>
            <li className="lg:[grid-area:span_1/span_16]">
            </li>
          </ul>
        </section>
        <section className="w-lg-container mx-auto my-16" id="step-by-step">
          <h2 className="text-center font-bold text-5xl">Como usar o ZapBarbearia?</h2>
          <div></div>
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