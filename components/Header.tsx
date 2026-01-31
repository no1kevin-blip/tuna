'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeaderProps {
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
  companyName: string;
  nav: {
    about: string;
    products: string;
    services: string;
    contact: string;
  };
}

export default function Header({ lang, setLang, companyName, nav }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    // Set initial state
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'text-white py-3' : 'header-transparent text-white py-5'
      }`}
      style={scrolled ? {
        background: 'linear-gradient(180deg, rgba(0,18,76,0.97) 0%, rgba(0,18,76,0.92) 100%)',
      } : {
        backdropFilter: 'blur(4px)',
      }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo with decorative element */}
          <div className="flex items-center gap-3">
            <div className={`relative transition-all duration-500 ${
              scrolled ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12'
            }`}>
              <Image
                src="/logo.png"
                alt="BigEye International Logo"
                fill
                className="object-contain transition-all duration-700"
                style={{
                  filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                }}
                priority
              />
            </div>
            <h1 className={`font-serif font-bold tracking-wider transition-all duration-500 ${
              scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
            }`}>
              {companyName}
            </h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="group relative text-sm uppercase tracking-widest transition-all duration-300 hover:text-sky-300 font-light"
              >
                {nav.about}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#products"
                className="group relative text-sm uppercase tracking-widest transition-all duration-300 hover:text-sky-300 font-light"
              >
                {nav.products}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#services"
                className="group relative text-sm uppercase tracking-widest transition-all duration-300 hover:text-sky-300 font-light"
              >
                {nav.services}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="group relative text-sm uppercase tracking-widest transition-all duration-300 hover:text-sky-300 font-light"
              >
                {nav.contact}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className={`group relative px-5 py-2 text-xs uppercase tracking-widest font-semibold transition-all duration-500 overflow-hidden ${
                scrolled
                  ? 'bg-sky-400/15 hover:bg-sky-400/25 text-white border border-sky-400/40'
                  : 'bg-white/5 hover:bg-white/15 text-white border border-white/20'
              }`}
            >
              <span className="relative z-10">{lang === 'zh' ? 'EN' : '中文'}</span>
              <div className="absolute inset-0 bg-linear-to-r from-sky-400/0 via-sky-400/20 to-sky-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 transition-all duration-300 hover:bg-white/10 rounded border border-white/20"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 pt-6 border-t border-white/10 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                className="group flex items-center gap-3 py-2 text-sm uppercase tracking-widest transition-all duration-300 hover:text-sky-300 font-light hover:translate-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="w-0 h-px bg-sky-400 transition-all duration-300 group-hover:w-8"></span>
                {nav.about}
              </a>
              <a
                href="#products"
                className="group flex items-center gap-3 py-2 text-sm uppercase tracking-widest transition-all duration-300 hover:text-sky-300 font-light hover:translate-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="w-0 h-px bg-sky-400 transition-all duration-300 group-hover:w-8"></span>
                {nav.products}
              </a>
              <a
                href="#services"
                className="group flex items-center gap-3 py-2 text-sm uppercase tracking-widest transition-all duration-300 hover:text-sky-300 font-light hover:translate-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="w-0 h-px bg-sky-400 transition-all duration-300 group-hover:w-8"></span>
                {nav.services}
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-3 py-2 text-sm uppercase tracking-widest transition-all duration-300 hover:text-sky-300 font-light hover:translate-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="w-0 h-px bg-sky-400 transition-all duration-300 group-hover:w-8"></span>
                {nav.contact}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
