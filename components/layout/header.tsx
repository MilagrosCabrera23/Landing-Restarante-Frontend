import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b  py-4 px-8">
      <div className="max-w-6xl mx-auto">
<div className="flex justify-between items-center">
      <div className="text-2xl font-serif items-center text-luxury-charcoal tracking-tighter">
        <Link href="/" className="p-4 text-luxury-gold font-light italic">Restaurante Gourmet</Link>
      </div>

      <nav className="hidden md:flex items-center space-x-10">
        <Link href="#about" className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold hover:text-luxury-charcoal transition-colors duration-300 font-sans font-medium">
          Sobre Nosotros
        </Link>
        <Link href="#menu" className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold hover:text-luxury-charcoal transition-colors duration-300 font-sans font-medium">
          Menú
        </Link>
        <Link href="#team" className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold hover:text-luxury-charcoal transition-colors duration-300 font-sans font-medium">
          Equipo
        </Link>
        <Link href="#galeria" className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold hover:text-luxury-charcoal transition-colors duration-300 font-sans font-medium">
          Galería
        </Link>

        <Link href="#reservar" className="bg-luxury-gold text-white  px-8 py-2 text-[10px] uppercase tracking-[0.3em] hover:bg-luxury-charcoal transition-all duration-300 rounded-sm">
          Reservar
        </Link>
      </nav>
        </div>
        </div>
    </header>
  );
}