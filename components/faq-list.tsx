"use client"

import { useState } from "react"
import Accordion from "./accordion"

const FaqList = () => {
  const [expanded, setExpanded] = useState<boolean | number>(false)

  const accordionData = [
    {
      title: "Como conecto o WhatsApp ao ZapBarbearia?",
      description: "A integração é simples! Você só precisa vincular o número de WhatsApp da sua barbearia no painel administrativo. Em poucos passos, o sistema já estará pronto para receber e responder mensagens automaticamente."
    },
    {
      title: "Como a I.A. do ZapBarbearia funciona?",
      description: "Nossa I.A. entende as mensagens enviadas pelos clientes e responde automaticamente a perguntas comuns, como horários de funcionamento, serviços e preços. Ela também agenda horários com base na disponibilidade da barbearia."
    },
    {
      title: "Posso personalizar as respostas enviadas pela I.A.?",
      description: "Sim! Você tem total controle sobre a forma como a I.A. se comunica. No painel administrativo, é possível ajustar o tom e o comportamento das mensagens, garantindo que elas reflitam o estilo da sua barbearia."
    },
    {
      title: "Como funciona o painel administrativo?",
      description: "O painel admin é a central de controle do ZapBarbearia. Nele, você gerencia todos os agendamentos, clientes, funcionários, comissões e faturamento. Também é possível acompanhar relatórios e fazer ajustes na agenda de forma dinâmica."
    },
    {
      title: "O sistema envia lembretes automáticos pelo WhatsApp?",
      description: "Sim. O ZapBarbearia envia lembretes automáticos antes dos agendamentos, além de confirmações e notificações. Isso ajuda a evitar faltas e manter a agenda organizada."
    },
    {
      title: "Posso agendar horários manualmente pelo painel?",
      description: "Com certeza! Além dos agendamentos automáticos via WhatsApp, o painel permite adicionar novos horários manualmente, bloqueando ou liberando slots conforme necessário."
    },
    {
      title: "Como o sistema lida com comissões e funcionários?",
      description: "No painel admin, você pode atribuir comissões específicas para cada funcionário e acompanhar o desempenho de cada um. Tudo é registrado de forma automática para facilitar o cálculo de ganhos."
    },
    {
      title: "É possível configurar pacotes e promoções?",
      description: "Sim. A barbearia pode criar e divulgar pacotes promocionais diretamente pelo painel e enviar as ofertas para os clientes via WhatsApp. Isso incentiva novos agendamentos e fideliza clientes."
    },
    {
      title: "O ZapBarbearia facilita o controle financeiro?",
      description: "Sim. O sistema registra automaticamente os serviços prestados e gera relatórios financeiros completos, mostrando faturamento diário, mensal e anual. Assim, você tem uma visão clara das suas receitas."
    },
    {
      title: "Posso ajustar os horários de funcionamento da barbearia?",
      description: "Sim! O painel oferece flexibilidade total para definir os horários de abertura e fechamento, além de bloquear ou liberar slots específicos. Isso permite que a agenda se adapte à rotina da sua barbearia."
    },
  ]

  return (
    <ul className="grid *:py-4 *:px-4 sm:*:py-7 sm:*:px-9 *:bg-secondary-white *:rounded-[.625rem] gap-[.625rem]">
      {accordionData.map((accordion, index) => (
        <Accordion
          key={index}
          index={index}
          expanded={expanded}
          setExpanded={setExpanded}
          title={accordion.title}
          description={accordion.description}
        />
      ))}
    </ul>
  )
}

export default FaqList