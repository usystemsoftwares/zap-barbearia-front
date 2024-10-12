"use client"

import { motion, AnimatePresence } from "framer-motion"
import FaqDropDownIcon from "/public/zapbarbearia/dropdown-icon-black.svg"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import { cn } from "@/lib/utils"

type Accordion = {
  index: number;
  setExpanded: Dispatch<SetStateAction<boolean | number>>;
  expanded: boolean | number;
  title: string;
  description: string;
}

const descVariants = {
  open: { height: "auto" },
  collapsed: { height: 0 }
}

const Accordion = ({ index, title, expanded, setExpanded, description }: Accordion) => {
  const isOpen = index === expanded

  return (
    <motion.li
      initial={false}
    >
      <button className="w-full" onClick={
        () => setExpanded(isOpen ? false : index)
      }>
        <h3 className="flex gap-6 font-medium text-[1.75rem]">
          <Image
            className={cn("transition-transform", isOpen && "-rotate-180")}
            src={FaqDropDownIcon}
            alt="Ícone de expansão"
          /> {title}</h3>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={descVariants}
            transition={{ duration: .2 }}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export default Accordion