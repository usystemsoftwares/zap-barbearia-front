"use client"

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

type FadeUpProps = {
  children: ReactNode;
  className?: string
}


const fadeAnimVariants = {
  hidden: {
    opacity: 0,
    scale: "110%",
    filter: "blur(5px)"
  },
  visible: {
    opacity: 1,
    scale: "100%",
    filter: "blur(0px)"
  }
}

const FadeUp = ({
  children,
  className
}: FadeUpProps) => {
  let ref = useRef(null)
  let isInView = useInView(ref, {
    once: true,
    amount: .25
  })

  return (
    <motion.li
      ref={ref}
      transition={{
        duration: .7,
        delay: .2
      }}
      className={className}
      variants={fadeAnimVariants}
      initial={false}
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.li>
  )
}

export default FadeUp