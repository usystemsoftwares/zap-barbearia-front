import Link from "next/link"
import HeadlineAnim from "./headline-anim"
import Image from "next/image"
import ChatAnim from "./chat-anim"
import ArrowIcon from "/public/zapbarbearia/arrow.svg"

const HomeSection = () => {
  return (
    <section className="w-container mt-16 md:mt-0 relative flex flex-col md:flex-row gap-8 md:justify-between md:items-center mx-auto md:-translate-y-8" id="home">
      <div>
        <HeadlineAnim />
        <Link
          className="inline-flex shadow-xl shadow-black/20 text-white gap-4 bg-[size:400%] [background-image:linear-gradient(90deg,#4DD080,#04837D,#4DD080,#4DD080);] animate-change-gradient hover:scale-110 transition-transform duration-300 rounded-full py-2 md:py-3 px-6 md:px-8 mt-2 sm:mt-4 md:mt-9 text-3xl md:text-4xl font-semibold"
          href="#plans"
        >
          Planos
          <Image
            className="w-[min(100%,1.5rem)] md:w-auto"
            src={ArrowIcon}
            alt="Seta"
          />
        </Link>
      </div>
      <ChatAnim />
    </section>
  )
}

export default HomeSection