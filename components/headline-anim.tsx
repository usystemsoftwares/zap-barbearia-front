"use client"

import { motion } from "framer-motion"

const HeadlineAnim = () => {
  const headline = "Sua barbearia autônoma com I.A"
  const words = headline.split(" ")

  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <h1 className="text-3xl sm:text-5xl md:text-6xl max-w-[15ch] font-extrabold">
      <span className="sr-only">Sua barbearia autônoma com I.A</span>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: .05
        }}
        aria-hidden
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block"
          >
            {word.split("").map((char, j) => (
              <motion.span
                key={j}
                className="inline-block"
                variants={defaultAnimations}
              >{char}</motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </h1>
  )
}

export default HeadlineAnim