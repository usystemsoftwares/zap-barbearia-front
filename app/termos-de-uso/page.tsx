import Link from 'next/link';
import Header from '@/components/header';

const TermsOfUsePage = () => {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-40 bg-gray-50">
        <section className="w-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h1 className="mt-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Termos e Condições Gerais de Uso
              </h1>
            </div>
            <div className="mt-8 space-y-6 text-justify text-gray-700">
              <p>
                A <strong>Usystem Desenvolvimento Ágil de Softwares LTDA</strong>, pessoa jurídica de direito privado, inscrita no CNPJ/ME sob o nº <strong>36.648.450/0001-32</strong> ("<strong>Usystem</strong>"), proprietária do website <a href="https://zapbarbearia.com.br" className="text-blue-600 hover:underline">https://zapbarbearia.com.br</a> e do software <strong>ZAP Barbearia</strong>, apresenta aos usuários os presentes Termos e Condições Gerais de Uso ("<strong>Termos</strong>"), que estabelecem as condições essenciais para a utilização dos serviços prestados pelo ZAP Barbearia.
              </p>
              <p>
                Ao se cadastrar e utilizar o software, o usuário concorda e se submete às regras e condições destes Termos, bem como a todos os documentos e informações relacionadas.
              </p>

              {/* Seção 1: Definições */}
              <h2 className="text-2xl font-bold mt-8">1. Definições</h2>
              <p>
                Para os fins destes Termos, consideram-se as seguintes definições:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>"Usystem"</strong>: Empresa de desenvolvimento de soluções digitais, proprietária do website <a href="https://zapbarbearia.com.br" className="text-blue-600 hover:underline">https://zapbarbearia.com.br</a> e do software <strong>ZAP Barbearia</strong>.
                </li>
                <li>
                  <strong>"ZAP Barbearia"</strong> ou <strong>"Software"</strong>: Software desenvolvido pela Usystem voltado à automação de barbearias no WhatsApp com inteligência artificial, agendamentos e CRM, fornecendo dados mais completos e assertivos para melhores otimizações.
                </li>
                <li>
                  <strong>"Cliente"</strong>: Pessoa física ou jurídica que contrata os serviços do ZAP Barbearia e deseja conectar o Software à sua plataforma de atendimento no WhatsApp, com o intuito de utilizar os serviços para automatizar sua barbearia, otimizar agendamentos e gerenciar o relacionamento com clientes.
                </li>
                <li>
                  <strong>"Usuário"</strong>: Pessoa física, vinculada ao Cliente, que, após o cadastro no Software, terá acesso e operará o ZAP Barbearia em nome do Cliente, tendo acesso aos serviços prestados pelo Software.
                </li>
                <li>
                  <strong>"Leads"</strong>: Consumidores que, informados dos produtos e/ou serviços do Cliente por meio de canais externos, desejam contatar o Cliente por meio de sua plataforma de atendimento via WhatsApp.
                </li>
                <li>
                  <strong>"Serviços"</strong>: Os serviços oferecidos e realizados pelo ZAP Barbearia em favor de seus Clientes, cujos resultados são acessíveis ao Usuário por meio do Software.
                </li>
              </ul>

              {/* Seção 2: Do Software */}
              <h2 className="text-2xl font-bold mt-8">2. Do Software</h2>
              <p>
                2.1. A plataforma ZAP Barbearia engloba o Software, o site e subdomínios relacionados, sendo voltada à prestação de serviços de automação de barbearias no WhatsApp com inteligência artificial, agendamentos e CRM, fornecendo dados relevantes e insights para otimizações.
              </p>
              <p>
                2.2. Os presentes Termos de Uso aplicam-se:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  2.2.1. Ao Usuário ou Cliente que realizar cadastro no ZAP Barbearia, mediante identificação por login e senha, visando acesso ou contratação dos serviços providos pelo Software.
                </li>
                <li>
                  2.2.2. Ao Usuário ou Cliente que deseja receber nossas informações de marketing e utilizar dos serviços oferecidos pelo ZAP Barbearia.
                </li>
                <li>
                  2.2.3. Ao Usuário ou Cliente que já esteja cadastrado no ZAP Barbearia e já tenha ou pretenda adquirir um de seus planos de serviço.
                </li>
              </ul>
              <p>
                2.3. O Cliente ou Usuário deverá realizar a contratação do plano de serviço por meio da plataforma ZAP Barbearia.
              </p>
              <p>
                2.4. Selecionado o plano desejado pelo Cliente e indicado o meio de pagamento de sua preferência, o pedido será processado pelo ZAP Barbearia. Após a confirmação do pagamento, o Cliente receberá a confirmação do pedido no e-mail ou WhatsApp informado durante o cadastro.
              </p>
              <p>
                2.5. Todos os pagamentos e repasses de valores são realizados por meio de empresas terceiras que oferecem ao ZAP Barbearia sistemas integrados de pagamento ("Plataformas de Pagamento").
              </p>
              <p>
                2.6. O ZAP Barbearia reserva-se o direito de modificar as Plataformas de Pagamento utilizadas em seu Software, a seu exclusivo critério e a qualquer tempo, avisando previamente o Cliente sobre eventual modificação.
              </p>
              <p>
                2.7. O ZAP Barbearia disponibiliza em sua página principal os canais de atendimento (e-mail, telefone ou WhatsApp) caso o Usuário deseje entrar em contato com a equipe para quaisquer solicitações relacionadas a seus dados pessoais, inclusive o e-mail: <a href="mailto:administrativo@usystem.com.br" className="text-blue-600 hover:underline">administrativo@usystem.com.br</a>.
              </p>
              <p>
                2.8. As solicitações e dúvidas dos Usuários serão respondidas o mais breve possível, dentro do horário comercial, sendo que o tempo estimado dependerá da complexidade da dúvida ou requisição feita.
              </p>

              {/* Seção 3: Capacidade para Cadastrar-se */}
              <h2 className="text-2xl font-bold mt-8">3. Capacidade para Cadastrar-se</h2>
              <p>
                3.1. Poderão realizar a compra de planos e acessar os serviços do software ZAP Barbearia as pessoas jurídicas e físicas regularmente inscritas nos cadastros de contribuintes federal e estaduais, que tenham capacidade legal para contratá-los.
              </p>
              <p>
                3.2. É possível o cadastro de múltiplos Usuários por um só Cliente, que deverá se responsabilizar por todos. Em caso de multiplicidade de cadastros, o ZAP Barbearia reserva-se o direito, a seu exclusivo critério e sem necessidade de prévia anuência ou comunicação do Cliente, de inabilitar um ou mais cadastros existentes e impedir eventuais cadastros futuros vinculados ao Cliente.
              </p>
              <p>
                3.3. O ZAP Barbearia pode, unilateralmente, excluir o cadastro do Cliente quando verificado que a conduta deste é ou será prejudicial ou ofensiva a outros Clientes e Usuários, ao ZAP Barbearia, à Usystem e seus funcionários e colaboradores ou a terceiros.
              </p>

              {/* Continue adicionando as demais seções seguindo o mesmo padrão */}
              {/* ... */}

              {/* Seção Final: Última Atualização */}
              <h2 className="text-2xl font-bold mt-8">Última Atualização</h2>
              <p>
                Estes Termos foram atualizados em: <strong>01 de Novembro de 2024</strong>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black text-white py-8">
        <div className="w-[min(90%,50rem)] mx-auto text-center">
          <p>
            Usystem Desenvolvimento Ágil de Softwares LTDA - CNPJ: 36.648.450/0001-32
          </p>
          <p className="mt-2">
            <a href="mailto:administrativo@usystem.com.br" className="text-blue-400 hover:underline">administrativo@usystem.com.br</a> | <a href="https://wa.me/5511971570063" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">+55 11 97157-0063</a>
          </p>
          <p className="mt-4">
            <Link href="/politica-de-privacidade" className="text-blue-400 hover:underline">Política de Privacidade</Link> | <Link href="/termos-de-uso" className="text-blue-400 hover:underline">Termos de Uso</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default TermsOfUsePage;