"use client"

import Image from "next/image"
import FaqDropDownIcon from "/public/zapbarbearia/dropdown-icon-black.svg"

const FaqList = () => {
  return (
    <ul className="grid *:py-7 *:px-9 *:bg-secondary-white *:rounded-[.625rem] gap-[.625rem]">
      <li>
        <button>
          <h3 className="flex gap-6 font-medium text-[1.75rem]"><Image src={FaqDropDownIcon} alt="Ícone de expansão" /> Como funciona a zap barbearia?</h3>
        </button>
      </li>
      <li>
        <button>
          <h3 className="flex gap-6 font-medium text-[1.75rem]"><Image src={FaqDropDownIcon} alt="Ícone de expansão" /> Como funciona a zap barbearia?</h3>
        </button>
      </li>
      <li>
        <button>
          <h3 className="flex gap-6 font-medium text-[1.75rem]"><Image src={FaqDropDownIcon} alt="Ícone de expansão" /> Como funciona a zap barbearia?</h3>
        </button>
      </li>
      <li>
        <button>
          <h3 className="flex gap-6 font-medium text-[1.75rem]"><Image src={FaqDropDownIcon} alt="Ícone de expansão" /> Como funciona a zap barbearia?</h3>
        </button>
      </li>
      <li>
        <button>
          <h3 className="flex gap-6 font-medium text-[1.75rem]"><Image src={FaqDropDownIcon} alt="Ícone de expansão" /> Como funciona a zap barbearia?</h3>
        </button>
      </li>
    </ul>
  )
}

export default FaqList