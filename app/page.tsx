import Image from "next/image";
import Logo from "/public/zapbarbearia/logo.svg"
import WhiteLogo from "/public/zapbarbearia/white-logo.svg"
import Link from "next/link";
import PlanSection from "@/components/plan-section";
import FaqList from "@/components/faq-list";
import CRMAnim from "@/components/crm-anim";
import ServiceContainer from "@/components/service-container";
import HomeSection from "@/components/home-section";
import StepSection from "@/components/step-section";
import { TabProvider } from "@/contexts/tab-ctx";

/* 
TODO:
- CONFETTI ANIMATION INVIEW IN "Como usar o ZapBarbearia"? SECTION
- PLAN SECTION FUNCTIONALITY
- PLAN SECTION COPY (ask to Raphael)
- FAQ SECTION COPY (ask to Raphael)
*/

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
        <StepSection />
        <TabProvider>
          <PlanSection />
        </TabProvider>
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