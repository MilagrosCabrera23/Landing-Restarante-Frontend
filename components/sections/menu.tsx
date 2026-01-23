import { CardMenu } from "../ui/cardMenu";
import menuDataRaw from "../../data/menu.json";
import { MenuData } from "@/types/menu";

export default function Menu() {

  const { encabezado, platos } = menuDataRaw as MenuData;

  return (
    <section id="menu" className="w-full py-16 max-w-6xl mx-auto px-8 bg-luxury-ivory">
      <div className="space-y-16">

        <div className="text-center space-y-4">
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
            {encabezado.subtitulo}
          </span>
          <h2 className="text-3xl md:text-5xl text-luxury-charcoal leading-tight">
            {encabezado.titulo} <span className="italic font-light">Menú</span>
          </h2>

          <div className="w-12 h-px bg-luxury-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platos.map((item) => (
            <CardMenu
              key={item.id}
              id={item.id}
              titulo={item.titulo}
              imageSrc={item.imageSrc}
              ingredientes={item.ingredientes}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
