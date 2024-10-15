"use client"

import { clientes } from "@/clientes";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion"
import { useState } from "react";

/* 
depois da animação ser completada, ela será excluída do dom e outra animação acontecerá no lugar dela e o processo se repetirá infinitamente.
Fazer um delay de acordo com o index da animação. Se a animação dura 8 segundos, a primeira animação acontecerá imediatamente pois o index dela é 0, e a segunda animação acontecerá após 8 segundos porque o index dela é 1, e o cálculo vai ser (index * 8). e ela vai ser removida do dom depois de concluída. cada animação vai ter um animatepresence
*/

const messageAnimVariants: Variants = {
  hidden: {
    y: "100%"
  },
  visible: (i: number) => ({
    y: "20%",
    transition: {
      delay: i * 10,
      duration: 10,
      ease: "linear"
    }
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: .55
    }
  }
}

type ClientChatAnimProps = {
  container: React.MutableRefObject<null>;
  children: React.ReactNode;
  i: number;
}

const ClientChatAnim = ({ container, children, i }: ClientChatAnimProps) => {
  const [animCompleted, setAnimCompleted] = useState(false)
  const isInView = useInView(container, {
    once: true
  })


  return (
    <AnimatePresence
      key={i}
    >
      {!animCompleted &&
        <motion.ul
          className="absolute inset-0 px-4 py-6 text-white font-medium flex flex-col gap-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="exit"
          onAnimationComplete={() => {
            if (clientes.length - 1 > i) {
              setAnimCompleted(true)
            }
          }
          }
          custom={i}
          variants={messageAnimVariants}
        >
          {children}
        </motion.ul>
      }
    </AnimatePresence>
  )
}

export default ClientChatAnim