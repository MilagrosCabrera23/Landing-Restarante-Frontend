export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4 px-12 flex justify-between items-center">
      
      <div className="text-2xl font-serif text-luxury-charcoal tracking-tighter">
         <span className="text-luxury-gold font-light italic">Restaurante Gourmet</span>
      </div>

      <nav className="flex items-center space-x-12">
        <a href="#about" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-luxury-gold transition-colors font-sans font-medium">
          Sobre Nosotros
        </a>
        <a href="#menu" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-luxury-gold transition-colors font-sans font-medium">
          Menú
        </a>
        <a href="#galeria" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-luxury-gold transition-colors font-sans font-medium">
          Galería
        </a>
        
        <a href="#reservar" className="bg-luxury-gold text-white px-8 py-2 text-[10px] uppercase tracking-widest hover:bg-luxury-charcoal transition-all duration-300 rounded-sm">
          Contacto
        </a>
      </nav>
    </header>
  );
}