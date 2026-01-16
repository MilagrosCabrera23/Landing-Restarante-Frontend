import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-150 w-full flex items-center justify-center">
      <Image
        src="/background-restaurant.jpg" 
        alt="Experiencia Gourmet en Restaurante Gourmet"
        fill
        className="object-cover"
        priority 
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block font-semibold">
          Desde el corazón de Mendoza
        </span>
        
        <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1] font-extrabold">
          El Arte de la <br /> 
          <span className="font-extrabold">Alta Cocina</span>
        </h1>
        
        <p className="font-light md:text-lg text-gray-200 mb-10 max-w-xl mx-auto leading-relaxed tracking-widest">
          Descubra una sinfonía de sabores diseñados para cautivar los sentidos en un ambiente de distinción única.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link 
            href="#menu" 
            className="bg-luxury-gold text-white px-10 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 font-bold shadow-xl"
          >
            Explorar Menú
          </Link>
          <Link 
            href="#reservar" 
            className="backdrop-blur-sm border border-white/50 text-white px-10 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 font-bold"
          >
            Reservar Mesa
          </Link>
        </div>
      </div>
    </section>
  );
}