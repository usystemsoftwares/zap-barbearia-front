import Link from 'next/link';
import Header from '@/components/header';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-40 bg-gray-50">
        <section className="w-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h1 className="mt-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Política de Privacidade
              </h1>
            </div>
            <div className="mt-8 space-y-6 text-justify text-gray-700">
              <p>
                Esta Política de Privacidade descreve como a <strong>Usystem Desenvolvimento Ágil de Softwares LTDA</strong>, inscrita no CNPJ/ME sob o nº <strong>36.648.450/0001-32</strong> (“<strong>Usystem</strong>”, “nós”, “nosso” ou “conosco”), coleta, utiliza, armazena, divulga e protege as informações pessoais dos usuários (“<strong>Usuários</strong>”, “você” ou “seu”) ao acessar e utilizar nosso software <strong>ZAP Barbearia</strong> (“<strong>Software</strong>”).
              </p>
              <p>
                Ao utilizar o ZAP Barbearia, você concorda com a coleta e uso das informações de acordo com esta Política. Se você não concorda com esta Política, por favor, não utilize nossos serviços.
              </p>
              <p>
                Caso queira entrar em contato com nossa equipe de privacidade para tirar dúvidas sobre o tratamento de dados, privacidade e direitos dos titulares dos dados, envie um e-mail para: <a href="mailto:administrativo@usystem.com.br" className="text-blue-600 hover:underline">administrativo@usystem.com.br</a> ou WhatsApp <a href="https://wa.me/5511971570063" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">+55 11 97157-0063</a>.
              </p>

              <h2 className="text-2xl font-bold mt-8">1. Informações que Coletamos</h2>
              <p>
                Podemos coletar vários tipos de informações pessoais para proporcionar e melhorar nossos serviços:
              </p>
              <h3 className="text-xl font-semibold mt-6">1.1. Informações Fornecidas por Você</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Dados de Cadastro:</strong> Nome completo, e-mail, número de telefone, endereço, CPF ou CNPJ, informações de pagamento e outros dados necessários para criar e gerenciar sua conta.
                </li>
                <li>
                  <strong>Comunicações:</strong> Informações que você fornece ao entrar em contato conosco, como feedback, solicitações de suporte ou participação em pesquisas.
                </li>
              </ul>
              <h3 className="text-xl font-semibold mt-6">1.2. Informações Coletadas Automaticamente</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Dados de Uso:</strong> Informações sobre como você acessa e utiliza o Software, incluindo interações, preferências e tempos de acesso.
                </li>
                <li>
                  <strong>Dados de Dispositivo:</strong> Informações sobre o dispositivo utilizado para acessar o Software, como endereço IP, tipo de navegador, idioma, sistema operacional e identificadores exclusivos.
                </li>
                <li>
                  <strong>Cookies e Tecnologias Semelhantes:</strong> Utilizamos cookies e tecnologias similares para coletar dados sobre sua atividade de navegação, personalizar sua experiência e analisar tendências.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">2. Como Utilizamos Suas Informações</h2>
              <p>
                Utilizamos as informações coletadas para diversas finalidades, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Fornecer, manter e melhorar o Software e seus recursos.</li>
                <li>Processar transações e enviar informações relacionadas, incluindo confirmações e faturas.</li>
                <li>Personalizar e melhorar sua experiência com o Software.</li>
                <li>Responder a comentários, dúvidas e fornecer suporte ao cliente.</li>
                <li>Enviar comunicados técnicos, atualizações, alertas de segurança e mensagens administrativas.</li>
                <li>Monitorar e analisar tendências, uso e atividades em conexão com o Software.</li>
                <li>Detectar, prevenir e combater fraudes ou outras atividades ilegais.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">3. Compartilhamento de Informações</h2>
              <p>
                Podemos compartilhar suas informações pessoais nas seguintes circunstâncias:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Com Prestadores de Serviços:</strong> Compartilhamos informações com terceiros que executam serviços em nosso nome, como processamento de pagamentos, hospedagem, análise de dados e marketing.
                </li>
                <li>
                  <strong>Por Motivos Legais:</strong> Podemos divulgar informações se exigido por lei ou em resposta a solicitações legais, como intimações ou ordens judiciais.
                </li>
                <li>
                  <strong>Para Proteger Nossos Direitos:</strong> Quando acreditarmos que é necessário investigar, prevenir ou tomar medidas relacionadas a atividades ilegais, suspeita de fraude ou para proteger os direitos, propriedade e segurança da Usystem, de nossos usuários ou de terceiros.
                </li>
                <li>
                  <strong>Com Seu Consentimento:</strong> Podemos compartilhar informações para outros fins com o seu consentimento ou mediante sua direção.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">4. Segurança de Dados</h2>
              <p>
                Implementamos medidas de segurança apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro, e não podemos garantir segurança absoluta.
              </p>

              <h2 className="text-2xl font-bold mt-8">5. Seus Direitos de Privacidade</h2>
              <p>
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Acessar seus dados pessoais e solicitar informações sobre seu tratamento.</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
                <li>Solicitar a portabilidade dos dados a outro fornecedor de serviço ou produto.</li>
                <li>Solicitar a eliminação dos dados pessoais tratados com base no seu consentimento.</li>
                <li>Revogar o consentimento, nos termos da lei.</li>
              </ul>
              <p>
                Para exercer seus direitos, entre em contato conosco através do e-mail: <a href="mailto:administrativo@usystem.com.br" className="text-blue-600 hover:underline">administrativo@usystem.com.br</a>.
              </p>

              <h2 className="text-2xl font-bold mt-8">6. Retenção de Dados</h2>
              <p>
                Reteremos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais as coletamos, incluindo para satisfazer quaisquer requisitos legais, contábeis ou de relatório.
              </p>

              <h2 className="text-2xl font-bold mt-8">7. Cookies e Tecnologias Semelhantes</h2>
              <p>
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, analisar tráfego e entender de onde vêm nossos visitantes. Você pode gerenciar as preferências de cookies através das configurações do seu navegador.
              </p>

              <h2 className="text-2xl font-bold mt-8">8. Links para Outros Sites</h2>
              <p>
                Nosso Software pode conter links para outros sites que não são operados por nós. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
              </p>

              <h2 className="text-2xl font-bold mt-8">9. Alterações nesta Política de Privacidade</h2>
              <p>
                Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política nesta página e atualizando a data de "Última atualização" abaixo.
              </p>

              <h2 className="text-2xl font-bold mt-8">10. Contato</h2>
              <p>
                Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco:
              </p>
              <p>
                <strong>Usystem Desenvolvimento Ágil de Softwares LTDA</strong><br />
                CNPJ: 36.648.450/0001-32<br />
                E-mail: <a href="mailto:administrativo@usystem.com.br" className="text-blue-600 hover:underline">administrativo@usystem.com.br</a><br />
                WhatsApp: <a href="https://wa.me/5511971570063" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">+55 11 97157-0063</a>
              </p>

              <h2 className="text-2xl font-bold mt-8">Última Atualização</h2>
              <p>
                Esta Política de Privacidade foi atualizada em: <strong>01 de Novembro de 2024</strong>
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
            <Link href="/termos-de-uso" className="text-blue-400 hover:underline">Termos de Uso</Link> | <Link href="/politica-de-privacidade" className="text-blue-400 hover:underline">Política de Privacidade</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default PrivacyPolicyPage;