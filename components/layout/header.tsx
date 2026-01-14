import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-white backdrop-blur-sm border- py-4 px-8 flex justify-between items-center">
      
      <div className="text-2xl font-serif text-luxury-charcoal tracking-tighter">
        <Link href="/" className="text-luxury-gold font-light italic">Restaurante Gourmet</Link>
      </div>

      <nav className="flex items-center space-x-12">
        <Link href="#about" className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold  hover: transition-colors font-sans font-medium">
          Sobre Nosotros
        </Link>
        <Link href="#menu" className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold  hover:transition-colors font-sans font-medium">
          Menú
        </Link>
        <Link href="#galeria" className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold  hover: transition-colors font-sans font-medium">
          Galería
        </Link>
        
        <Link href="#reservar" className="bg-luxury-gold text-white  px-8 py-2 text-[10px] uppercase tracking-widest hover:bg-luxury-charcoal transition-all duration-300 rounded-sm">
          Reservar
        </Link>
      </nav>
    </header>
  );
}