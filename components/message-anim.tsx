"use client"

import { cn } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react";

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
  index: number;
}

const childrenMessageAnimVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 5
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 1
    }
  })
}

const MessageAnim = ({ container, message, index }: MessageAnimProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    root: container
  })

  return (
    <motion.li
      ref={ref}
      className={cn("rounded-[.9375rem] px-4 py-3 leading-[1.25]  w-fit max-w-[80%]", message.barbearia ? "bg-dark-green self-end" : "bg-dark-gray flex-col")}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={childrenMessageAnimVariants}
    >
      {message.barbearia ?? message.cliente} {/* <span className="text-sm opacity-50 text-end">{message.time}</span> */}
    </motion.li>
  )
}

export default MessageAnim