import Image from "next/image";
import Logo from "/public/zapbarbearia/logo.svg"
import CellPhone from "/public/zapbarbearia/cell-phone.svg"
import WppBg from "/public/zapbarbearia/whatsapp-background.webp"
import ArrowIcon from "/public/zapbarbearia/arrow.svg"
import Link from "next/link";

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
        <section className="w-container flex items-center mx-auto">
          <div className="">
            <h1 className="text-6xl max-w-[20ch] font-extrabold">Sua barbearia autônoma com <span className="">I.A</span></h1>
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
          <div>
            <Image
              src={WppBg}
              alt="Whatsapp background"
            />
          </div>
        </section>
        <section>
          <h2 className="text-6xl font-bold">Preocupe-se somente em cortar</h2>
          <div>
            <h3 className="text-5xl font-bold">Deixe o atendimento com a gente!</h3>
            <p>Com o ZapBarbearia, seu tempo é dedicado ao que importa: o atendimento ao cliente. Nossa Inteligência Artificial cuida de todo o resto. Agendamentos, respostas automáticas e lembretes para os clientes, tudo funcionando de maneira autônoma no WhatsApp. Nunca mais perca controle da agenda ou deixe clientes esperando. Você foca no serviço, a tecnologia faz o restante.</p>
            <ul>
              <li>
                <div>
                  <h4>Mais produtividade</h4>
                  <p>Clientes não querem complicação. Com 3 mensagens no WhatsApp, o agendamento está feito. Com uma integração simples e automática, eles recebem respostas, lembretes e você mantém o controle total da sua agenda.</p>
                </div>
                {/* <Image src={} alt="" /> */}
              </li>
              <li>
                <div>
                  <h4>Sem formulários</h4>
                  <p>Esqueça os formulários, aplicativos e links confusos. No ZapBarbearia, seus clientes agendam o serviço em 3 mensagens rápidas no WhatsApp, e a I.A. cuida do resto!</p>
                </div>
                <Image
                  src={CellPhone}
                  alt="Celular"
                />
              </li>
              <li>
                <div>
                  <h4>Ofereça pacotes!</h4>
                  <p>Faça pacotes para seus clientes e deixe que nossa IA identifique quem faz parte dos pacotes e gerencie as reservas de forma automática.</p>
                </div>
                {/* <Image src={} alt="" /> */}
              </li>
              <li>
                <div>
                  <h4>Customize sua abordagem com nosso robô.</h4>
                  <p>Faça pacotes para seus clientes e deixe que nossa IA identifique quem faz parte dos pacotes e gerencie as reservas de forma automática.</p>
                </div>
                {/* <Image src={} alt="" /> */}
              </li>
            </ul>
          </div>
          <p className="">Com o <span className="">ZapBarbearia</span>, o controle de agendamentos, respostas e notificações automáticas para seus clientes é feito de forma inteligente e eficiente. Enquanto você se concentra no que faz de melhor – cortar e cuidar dos cabelos – nossa I.A. organiza sua agenda, garante que seus clientes sejam avisados e evita erros de agendamento. Mais tempo para você, mais satisfação para seus clientes.</p>
        </section>
        <section>
          <h2>CRM integrado</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
        <section>
          <h2>Como usar o ZapBarbearia?</h2>
          <div></div>
        </section>
        <section className="" id="plans">
          <h2>Escolha seu plano ideal</h2>
          <div>
            <button>Mensal</button>
            <button>Anual</button>
          </div>
          <div className="flex">
            <div>
              <h3>Plano Básico</h3>
              <p>Total R$ 62/mensal</p>
              <ul>
                <li>Acesso a relatórios</li>
                <li>Suporte</li>
                <li>Acesso a blogs</li>
                <li>Acesso a relatórios</li>
                <li>Suporte</li>
                <li>Acesso a blogs</li>
              </ul>
            </div>
            <div>
              <h3>Plano Profissional</h3>
              <p>Total R$ 158/mensal</p>
              <ul>
                <li>Acesso a relatórios</li>
                <li>Suporte</li>
                <li>Acesso a blogs</li>
                <li>Acesso a relatórios</li>
                <li>Suporte</li>
                <li>Acesso a blogs</li>
              </ul>
            </div>
            <div>
              <h3>Plano Premium</h3>
              <p>Total R$ 218/mensal</p>
              <ul>
                <li>Acesso a relatórios</li>
                <li>Suporte</li>
                <li>Acesso a blogs</li>
                <li>Acesso a relatórios</li>
                <li>Suporte</li>
                <li>Acesso a blogs</li>
                <li>Suporte</li>
                <li>Acesso a relatórios</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <p className="text-sm">FAQ ZAP BARBEARIA</p>
          <h2 className="text-2xl md:text-5xl lg:text-6xl">DÚVIDAS FREQUENTES</h2>

        </section>
      </main>
      <footer>
        <div className="">
          <div>
            <Link className="block" href="#">
              <Image src={Logo} alt="Home" />
            </Link>
          </div>
          <div>
            <nav>
              <ul>
                <li>Início</li>
                <li>Passo a passo</li>
                <li>Dúvidas</li>
                <li>Planos</li>
                <li>Como funciona</li>
              </ul>
            </nav>
          </div>
        </div>
        <p>Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default Home