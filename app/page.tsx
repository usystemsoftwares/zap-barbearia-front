import Image from "next/image";
import Logo from "/public/zapbarbearia/logo.svg"
import WhiteLogo from "/public/zapbarbearia/white-logo.svg"
import CellPhone from "/public/zapbarbearia/cell-phone.svg"
import WppBg from "/public/zapbarbearia/whatsapp-background.webp"
import ArrowIcon from "/public/zapbarbearia/arrow.svg"
import Robot from "/public/zapbarbearia/robot.svg"
import Package from "/public/zapbarbearia/package.svg"
import RectangleBlur from "/public/zapbarbearia/rectangle-blur.svg"
import Link from "next/link";
import PlanSection from "@/components/plan-section";
import FaqList from "@/components/faq-list";

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
        <section className="w-container flex justify-between items-center mx-auto -translate-y-8" id="home">
          <div className="">
            <h1 className="text-6xl max-w-[15ch] font-extrabold">Sua barbearia autônoma com <span className="bg-gradient-to-r from-[#4CCF80] to-[#06857E] bg-clip-text text-transparent">I.A</span></h1>
            <Link
              className="inline-flex shadow-xl shadow-black/20 text-white gap-4 bg-gradient-to-r from-primary-green to-[#04837D] rounded-full py-3 px-8 mt-9 text-4xl font-semibold"
              href="#plans"
            >
              Planos
              <Image
                src={ArrowIcon}
                alt="Seta"
              />
            </Link>
          </div>
          <div className="">
            <Image
              src={WppBg}
              alt="Whatsapp background"
            />
          </div>
        </section>
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
            <div className="bg-white pt-20 pb-14 lg:px-14 rounded-[1.25rem] relative">
              <h3 className="text-5xl font-bold max-w-[19ch] mx-auto">Deixe o atendimento com a gente!</h3>
              <p className="mt-12 mb-5 leading-[1.2]">Com o ZapBarbearia, seu tempo é dedicado ao que importa: o atendimento ao cliente. Nossa Inteligência Artificial cuida de todo o resto. Agendamentos, respostas automáticas e lembretes para os clientes, tudo funcionando de maneira autônoma no WhatsApp. Nunca mais perca controle da agenda ou deixe clientes esperando. Você foca no serviço, a tecnologia faz o restante.</p>
              <ul className="*:bg-gradient-to-r grid md:grid-cols-2 leading-[1.2] gap-5 *:px-5 *:rounded-2xl *:pt-5 text-start">
                <li className="from-[#E0FFEF] to-[#F5FBD9]">
                  <article className="flex overflow-hidden">
                    <div>
                      <h4 className="text-2xl font-semibold mb-4">Mais produtividade</h4>
                      <p>Clientes não querem complicação. Com 3 mensagens no WhatsApp, o agendamento está feito. Com uma integração simples e automática, eles recebem respostas, lembretes e você mantém o controle total da sua agenda.</p>
                    </div>
                    <Image
                      className="w-[min(100%,11.25rem)] translate-y-[10%]"
                      src={WppBg}
                      alt="Celular"
                    />
                  </article>
                </li>
                <li className="from-[#D6FFF2] to-[#DBFDFF]">
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
                </li>
                <li className="from-[#FFEFCF] to-[#F8FACC]">
                  <article className="flex flex-col">
                    <div>
                      <h4 className="text-2xl font-semibold mb-3">Ofereça pacotes!</h4>
                      <p>Faça pacotes para seus clientes e deixe que nossa IA identifique quem faz parte dos pacotes e gerencie as reservas de forma automática.</p>
                    </div>
                    <Image
                      className="self-end"
                      src={Package}
                      alt="Pacote"
                    />
                  </article>
                </li>
                <li className="from-[#003D3D] text-white to-[#008861]">
                  <article className="flex">
                    <div>
                      <h4 className="text-2xl font-semibold pb-4">Customize sua abordagem com nosso robô.</h4>
                      <p>Faça pacotes para seus clientes e deixe que nossa IA identifique quem faz parte dos pacotes e gerencie as reservas de forma automática.</p>
                    </div>
                    <Image
                      className="self-end"
                      src={Robot}
                      alt="Robô"
                    />
                  </article>
                </li>
              </ul>
            </div>
            <p className="text-[3.5rem] my-24 leading-[1.1] font-medium text-start">Com o <span className="bg-gradient-to-r from-[#04837D] to-primary-green bg-clip-text text-transparent">ZapBarbearia</span>, o controle de agendamentos, respostas e notificações automáticas para seus clientes é feito de forma inteligente e eficiente. Enquanto você se concentra no que faz de melhor – cortar e cuidar dos cabelos – nossa I.A. organiza sua agenda, garante que seus clientes sejam avisados e evita erros de agendamento. Mais tempo para você, mais satisfação para seus clientes.</p>
          </div>
        </section>
        <section className="w-container mx-auto bg-white rounded-[1.25rem] px-14 pb-16 pt-20">
          <h2 className="text-center text-5xl font-bold mb-28">CRM integrado</h2>
          <ul className="grid md:grid-cols-2 *:h-52 *:bg-[#D9D9D9] leading-[1.2] gap-5 *:px-5 *:rounded-2xl *:pt-5 text-start">
            <li className="">
              <article className="flex">
                <div>
                  <h4 className="text-2xl font-semibold pb-4"></h4>
                  <p></p>
                </div>
              </article>
            </li>
            <li className="">
              <article>
                <div>
                  <h4 className="text-2xl font-semibold pb-[.625rem]"></h4>
                  <p></p>
                </div>
              </article>
            </li>
            <li className="">
              <article>
                <div>
                  <h4 className="text-2xl font-semibold pb-3"></h4>
                  <p></p>
                </div>
              </article>
            </li>
            <li className="">
              <article className="flex">
                <div>
                  <h4 className="text-2xl font-semibold pb-4"></h4>
                  <p></p>
                </div>
              </article>
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
          <div className="flex relative z-10">
            <div>
              <Link className="block" href="#">
                <Image src={WhiteLogo} alt="Home" />
              </Link>
            </div>
            <nav className="ml-32">
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