"use client"

import { cn } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"

type MessageAnimProps = {
  container: React.MutableRefObject<null>;
  costumer: string;
  message: ({
    cliente: string;
    barbearia?: undefined;
  } | {
    barbearia: string;
    cliente?: undefined;
  });
}

const childrenMessageAnimVariants: Variants = {
  initial: {
    opacity: 0,
    y: 5
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

const MessageAnim = ({ costumer, container, message }: MessageAnimProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    root: container,
    amount: .8
  })

  return (
    <motion.li
      className={cn("rounded-[.9375rem] px-4 py-3 leading-[1.25]  w-fit max-w-[80%]", message.barbearia ? "bg-dark-green self-end" : "bg-dark-gray flex-col")}
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={childrenMessageAnimVariants}
    >
      {message.barbearia ?? message.cliente} {/* <span className="text-sm opacity-50 text-end">{message.time}</span> */}
    </motion.li>
  )
}

export default MessageAnim