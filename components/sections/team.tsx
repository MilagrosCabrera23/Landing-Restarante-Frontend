import team from '@/data/team.json';
import Image from 'next/image';

export default function Team() {
    return (
        <section
            id="team"
            className="w-full bg-white py-16 max-w-6xl mx-auto px-8">
            <div className="text-center m-8">
                <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold">
                    El Alma de Restaurante Gourmet
                </span>
                <h2 className="text-4xl text-luxury-charcoal">
                    Nuestro <span className="font-normal">Equipo</span>
                </h2>
                <div className="w-16 h-px bg-luxury-gold mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="relative w-48 h-48 mb-6 p-1.5 border-2 border-luxury-gold/20 rounded-full group-hover:border-luxury-gold transition-all duration-500 group-hover:shadow-lg">
                            <div className="relative w-full h-full overflow-hidden rounded-full">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300">
                                {member.name}
                            </h3>
                            <p className="text-luxury-gold uppercase tracking-widest text-[9px] font-bold">
                                {member.role}
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-55 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {member.bio}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}
