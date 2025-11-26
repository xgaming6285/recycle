"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-20 flex items-center justify-between px-8 py-6 lg:px-16">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/images/logo-Photoroom.png"
          alt="Recycle Logo"
          width={50}
          height={50}
          className="h-auto w-30 lg:w-30"
        />
      </div>

      {/* Navigation (Desktop) */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12">
        <a
          href="#about"
          className="text-white text-base lg:text-lg font-medium hover:text-green-400 transition-colors"
        >
          За Нас
        </a>
        <a
          href="#services"
          className="text-white text-base lg:text-lg font-medium hover:text-green-400 transition-colors"
        >
          Услуги
        </a>
        <a
          href="#contacts"
          className="text-white text-base lg:text-lg font-medium hover:text-green-400 transition-colors"
        >
          Контакти
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white p-2 z-30 relative"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-20 bg-black/95 md:hidden flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            <a
              href="#about"
              className="text-white text-2xl font-medium hover:text-green-400 transition-colors"
              onClick={toggleMenu}
            >
              За Нас
            </a>
            <a
              href="#services"
              className="text-white text-2xl font-medium hover:text-green-400 transition-colors"
              onClick={toggleMenu}
            >
              Услуги
            </a>
            <a
              href="#contacts"
              className="text-white text-2xl font-medium hover:text-green-400 transition-colors"
              onClick={toggleMenu}
            >
              Контакти
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

