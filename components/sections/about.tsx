import Image from 'next/image';

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
];

export default function TeamSection() {
  return (
    <section className="w-full py-24 bg-white border-t border-luxury-gold/10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20 space-y-4">
          <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold">
            El Alma de Restaurante 	Gourmet
          </span>
          <h2 className="text-4xl font-serif text-luxury-charcoal">
            Nuestro <span className="not-italic">Equipo</span>
          </h2>
          <div className="w-12 h-[1px] bg-luxury-gold mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative w-40 h-40 mb-6 p-1 border border-luxury-gold/20 rounded-full group-hover:border-luxury-gold transition-colors duration-500">
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
                <p className="text-gray-500 text-sm font-sans leading-relaxed max-w-[200px] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
