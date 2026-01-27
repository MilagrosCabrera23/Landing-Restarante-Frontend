import teamDataRaw from '@/data/team.json';
import { TeamData } from '@/types/team';
import Image from 'next/image';

export default function Team() {

    const { encabezado, miembros } = teamDataRaw as TeamData;

    return (
        <section
            id="team"
            className="w-full bg-white py-16 max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
                <span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px]md:text-xs font-bold">
                   { encabezado.titulo }
                </span>
                <h2 className="text-4xl md:text-5xl text-luxury-charcoal leading-tight">
                    { encabezado.subtitulo }
                </h2>
                <div className="w-12 h-px bg-luxury-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {miembros.map((member, index) => (
                    <div
                        key={member.id}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="relative w-48 h-48 mb-6 p-1.5 border-2 border-luxury-gold/20 rounded-full group-hover:border-luxury-gold transition-all duration-500 group-hover:shadow-lg">
                            <div className="relative w-full h-full overflow-hidden rounded-full">
                                <Image
                                    src={member.foto}
                                    alt={member.nombre}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300">
                                {member.nombre}
                            </h3>
                            <p className="text-luxury-gold uppercase tracking-[0.2em] text-[12px] font-bold">
                                {member.cargo}
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-55 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {member.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}
