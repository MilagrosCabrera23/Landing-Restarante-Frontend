import Image from 'next/image';
import Link from 'next/link';
import heroData from '@/data/hero.json';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-screen w-full flex items-center justify-center py-20 md:py-0">
      <Image
        src={heroData.imagenFondo} 
        alt="Experiencia Gourmet en Restaurante Gourmet"
        fill
        className="object-cover"
        priority 
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-8 max-w-7xl mx-auto">
        <span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block font-semibold">
          {heroData.subtitulo}
        </span>
        
        <h1 className="text-5xl md:text-7xl text-white mb-8 leading-[1.1] font-serif font-extrabold">
          {heroData.tituloPrincipal} <br /> 
          <span className="font-extrabold">{heroData.tituloResaltado}</span>
        </h1>
        
        <p className="font-light md:text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed tracking-widest">
          {heroData.descripcion}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href={heroData.botones.primario.link} 
            className="bg-luxury-gold w-full sm:w-auto text-white px-12 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 font-bold shadow-xl"
          >
            {heroData.botones.primario.texto}
          </Link>
          <Link 
            href={heroData.botones.secundario.link}
            className="w-full sm:w-auto backdrop-blur-sm border border-white/50 text-white px-12 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 font-bold"
          >
            {heroData.botones.secundario.texto}
          </Link>
        </div>
      </div>
    </section>
  );
}