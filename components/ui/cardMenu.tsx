import Image from "next/image";

interface CardMenuProps {
    imageSrc: string;
    id: number;
    titulo: string;
    ingredientes: string[];
}

export const CardMenuProps = ({ imageSrc, titulo, ingredientes, id }: CardMenuProps) => {
    return (
        <div className="group cursor-default">
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-sm mb-6 shadow-sm bg-gray-100">
                <Image
                    src={imageSrc}
                    alt={titulo}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-serif text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300">
                        {titulo}
                    </h3>
                    <div className="flex-row border-b border-dotted border-gray-300 mx-4 mb-2"></div>
                </div>


                <p className="text-gray-600 font-sans italic text-sm">
                    {ingredientes.join(", ")}
                </p>
            </div>
        </div>
    );
};