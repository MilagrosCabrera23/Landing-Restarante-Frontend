import Image from "next/image";
import { CardMenuProps } from "@/types/menu";

export const CardMenu = ({ imageSrc, titulo, ingredientes, id }: CardMenuProps) => {
    return (
        <div className="group flex flex-col cursor-default">
            <div className="relative h-54 md:h-60 w-full overflow-hidden rounded-sm shadow-sm bg-gray-100">
                <Image
                    src={imageSrc}
                    alt={titulo}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 border"
                />
            </div>

            <div className="space-y-3 px-2">
                <div className="flex justify-center items-center">
                    <h3 className="text-lg font-serif font-bold text-luxury-gold italic  group-hover: transition-colors duration-500">
                        {titulo}
                    </h3>

                </div>


                <p className="text-gray-600 text-balance tracking-widest text-sm text-center">
                    {ingredientes.join(", ")}
                </p>
            </div>
        </div>
    );
};