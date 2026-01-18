import { CardMenuProps } from "../ui/cardMenu";
import menuItems from "../../data/menu.json";

export default function Menu() {
	return (
		<section id="menu" className="w-full py-2 max-w-6xl mx-auto  bg-luxury-ivory">
      <div className="">
        <div className="text-center">
          <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold">
            Experiencia Culinaria
          </span>
          <h2 className="text-4xl md:text-3xl text-luxury-charcoal">
            Nuestro <span className="italic font-light">Menú</span>
          </h2>
          <div className="w-12 h-px bg-luxury-gold mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
          {menuItems.map((item) => (
            <CardMenuProps 
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
