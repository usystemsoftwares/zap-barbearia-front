"use client"

import { clientes } from "@/clientes";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion"

import { useState } from "react";

const messageAnimVariants: Variants = {
  hidden: {
    display: "none"
  },
  visible: (index: number) => ({
    display: "flex",
    transition: {
      delay: index * 10,
      duration: 9,
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
  index: number;
  costumerName: string;
}

const ClientChatAnim = ({ container, children, index, costumerName }: ClientChatAnimProps) => {
  const [animCompleted, setAnimCompleted] = useState(false)
  const isInView = useInView(container, {
    once: true
  })

  return (
    <div>
      <AnimatePresence
        key={index}
      >
        {!animCompleted &&
          <motion.ul
            initial="hidden"
            className="flex flex-col mx-3 md:mx-2 lg:mx-3 my-2 md:my-1 lg:my-2 gap-2 md:gap-1 lg:gap-2"
            animate={isInView ? "visible" : "hidden"}
            exit="exit"
            onAnimationComplete={() => {
              if (clientes.length - 1 > index) {
                setAnimCompleted(true)
              }
            }
            }
            custom={index}
            variants={messageAnimVariants}
          >
            {children}
          </motion.ul>
        }
      </AnimatePresence>
    </div>
  )
}

export default ClientChatAnim