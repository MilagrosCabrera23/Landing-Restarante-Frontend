"use client";

import Link from "next/link";
import { HeaderData } from "../../types/header";
import headerData from "../../data/header.json";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { logo, links, cta } = headerData as HeaderData;

  const toggleMenu = () => setIsOpenMenu((v) => !v);

  const LinksNav = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} onClick={() => isMobile && setIsOpenMenu(false)} className={isMobile ? "block text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold border-b border-luxury-gold/10 w-full text-center pb-4" : "text-[10px] uppercase tracking-[0.3em] text-luxury-gold hover:text-luxury-charcoal transition-colors duration-500 font-sans font-medium"
          }
          >
            {link.label}
          </Link>
        </li>
    ))}

      <li>
        <Link href={cta.href} onClick={() => isMobile && setIsOpenMenu(false)} className={isMobile ? "w-full inline-block bg-luxury-gold text-white text-center py-4 text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm" : "bg-luxury-gold text-white px-8 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-luxury-charcoal transition-all duration-500 rounded-sm shadow-sm"
        }
        >
          {cta.label}
        </Link>
      </li>
    </>
);

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-luxury-gold/10 py-4 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">

          <div className="text-2xl font-serif text-luxury-charcoal tracking-tighter">
            <Link href="/" className="text-luxury-gold font-light italic">
              {logo}
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            <ul className="flex items-center gap-8">
              <LinksNav />
            </ul>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-luxury-gold text-2xl hover:text-luxury-charcoal transition-colors"
              aria-label={isOpenMenu ? "Cerrar menú" : "Abrir menú"} aria-expanded={isOpenMenu} aria-controls="mobile-menu"
            >
              {isOpenMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out bg-white/95 backdrop-blur-md
          ${isOpenMenu ? "max-h-150 opacity-100 py-8" : "max-h-0 opacity-0"}`} aria-hidden={!isOpenMenu}
      >
        <nav className="flex flex-col items-center space-y-8 px-8">
            <ul className="flex-col items-center space-y-8 px-8">
          <LinksNav isMobile />
          </ul>
        </nav>
      </div>
    </header>
  );
}