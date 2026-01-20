import Link from "next/link";
import { HeaderData } from "../../types/header";
import headerData from "../../data/header.json";

export default function Header() {

  const { logo, links, cta } = headerData as HeaderData;

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b  py-4 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">

          <div className="text-2xl font-serif items-center text-luxury-charcoal tracking-tighter">

            <Link href="/" className="p-4 text-luxury-gold font-light italic">{logo}</Link>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            {links.map((links) => (
              <Link key={links.href} href={links.href} className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold hover:text-luxury-charcoal transition-colors duration-500 font-sans font-medium">
                {links.label}
              </Link>
            ))}
            <Link href={cta.href} className="bg-luxury-gold text-white px-8 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-luxury-charcoal transition-all duration-500 rounded-sm shadow-sm">
              {cta.label}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}