"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "/public/zapbarbearia/logo-preta.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="w-container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/">
          <Image src={Logo} alt="Logo Zap Barbearia" />
        </Link>
        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#funcionalidades"
            className="text-lg font-medium text-gray-700 hover:text-primary-green"
          >
            Funcionalidades
          </Link>
          <Link
            href="#plans"
            className="text-lg font-medium text-gray-700 hover:text-primary-green"
          >
            Planos
          </Link>
          <Link
            href="/fale-conosco"
            className="text-lg font-medium text-gray-700 hover:text-primary-green"
          >
            Fale Conosco
          </Link>
          <Link
            href="/login"
            className="text-lg font-medium text-white bg-primary-green hover:bg-secondary-green px-4 py-2 rounded-full transition"
          >
            Acessar Plataforma
          </Link>
        </nav>
        {/* Botão Mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            <li>
              <Link
                href="#funcionalidades"
                className="text-lg font-medium text-gray-700 hover:text-primary-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Funcionalidades
              </Link>
            </li>
            <li>
              <Link
                href="#plans"
                className="text-lg font-medium text-gray-700 hover:text-primary-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Planos
              </Link>
            </li>
            <li>
              <Link
                href="/fale-conosco"
                className="text-lg font-medium text-gray-700 hover:text-primary-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fale Conosco
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="text-lg font-medium text-white bg-primary-green hover:bg-secondary-green px-4 py-2 rounded-full transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Acessar Plataforma
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
