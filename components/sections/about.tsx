import Image from 'next/image';
import Link from 'next/link';

const team = [
  {
    name: "Marco De la Vega",
    role: "Chef Ejecutivo",
    bio: "Especialista en cocina de vanguardia con raíces mendocinas.",
    image: "/CHEF.jpg"
  },
  {
    name: "Lucía Sanchez",
    role: "Sommelier",
    bio: "Curadora de nuestra cava, experta en maridajes de altura.",
    image: "/chica1.jpg"
  },
  {
    name: "Andrés Silva",
    role: "Jefe de Salón",
    bio: "Dedicado a que cada visita sea una experiencia impecable.",
    image: "/chico2.jpg"
  },
  {
    name: "Elena Martínez",
    role: "Pastelera",
    bio: "Transforma ingredientes locales en arte dulce de autor.",
    image: "/chica2.jpg"
  }
]

export default function TeamSection() {

  return (
    <section id="about" className="w-full py-24 border-t border-luxury-gold/10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center ">
          <div className="space-y-6">
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
              Nuestra Esencia
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal leading-tight">
              Tradición que <br /> <span className="italic">Innova</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed font-sans">
              <p className='text-balance text-base font-light'>
                En el corazón de Mendoza, Restaurante Gourmet nace como un tributo a la alta cocina de autor en abril del año 2009, fusionando la riqueza de las tradiciones locales con técnicas de vanguardia.
              </p>
              <p className='text-balance text-base font-light'>
                Nuestros valores se fundamentan en el respeto absoluto por la materia prima y la búsqueda constante de la excelencia. Cada plato es una obra maestra que refleja nuestra pasión por la gastronomía y nuestro compromiso con la innovación culinaria.
              </p>
            </div>
          </div>

          <div className="pl-6 border-l-2 border-luxury-gold space-y-10 py-6">

            <div className="group space-y-4">
              <h3 className="font-serif text-3xl text-luxury-charcoal  italic mb-4">Visítenos</h3>
              <p className="text-luxury-gold uppercase tracking-[0.2em] text-[10px] font-bold mb-1">Ubicación</p>
              <p className="text-luxury-charcoal font-serif text-lg leading-tight">
                Peatonal Sarmiento, <br /> Mendoza
              </p>
            </div>

            <div>
              <p className="text-luxury-gold uppercase tracking-[0.2em] text-[10px] font-bold mb-1">Horarios</p>
              <span>Martes - Domingo: 12:30 pm - 02:00 am</span>
            </div>

            <div >
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Peatonal+Sarmiento+Mendoza+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-luxury-charcoal font-bold uppercase tracking-widest text-[10px] hover:text-luxury-gold transition-colors"
              >
                <span>Ver en Mapa</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

      </div>



      <div className="text-center my-14 space-y-4">

        <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold">

          El Alma de Restaurante Gourmet

        </span>

        <h2 className="text-4xl font-serif text-luxury-charcoal">

          Nuestro <span className="not-italic">Equipo</span>

        </h2>

        <div className="w-12 h-px mx-auto mt-4"></div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            <div className="w-40 h-40 p-1 border border-luxury-gold/20 rounded-full group-hover:border-luxury-gold transition-colors duration-500">
              <div className="relative w-full h-full overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl text-luxury-charcoal">
                {member.name}
              </h3>
              <p className="text-luxury-gold uppercase tracking-widest text-[9px] font-bold">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm font-sans leading-relaxed max-w-50 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

}

