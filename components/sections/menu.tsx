import { CardMenuProps } from "../ui/cardMenu";

const menuItems = [
  {
    id: 1,
    titulo: "Ojo de Bife Abrasado",
	imageSrc: "/plato-carne.jpg",
    ingredientes: ["Ojo de bife", "Sal marina", "Romero", "Ajo confitado", "Papa andina", "Manteca", "Pimienta"]
  },
  {
    id: 2,
    titulo: "Trucha Patagónica",
    imageSrc: "/plato-trucha.jpg",
    ingredientes: ["Trucha", "Limón sutil", "Alcaparras", "Eneldo", "Crema de hinojo", "Aceite de oliva"]
  },
  {
	id: 3,
	titulo: "Risotto de Hongos Silvestres",
	imageSrc: "/plato-rissoto.jpg",
	ingredientes: ["Arroz arborio", "Hongos silvestres", "Queso parmesano", "Caldo de verduras", "Cebolla", "Ajo", "Vino blanco"]
  },
{
	id: 4,
	titulo: "Ensalada Gourmet",
	imageSrc: "/plato-ensalada.jpg",
	ingredientes: ["Lechuga", "Tomate", "Pepino", "Aceitunas", "Queso feta", "Aceite de oliva", "Vinagre balsámico"]
  },
  {
	id:5,
	titulo: "Lasaña Vegetariana",
	imageSrc: "/plato-lasaña.jpg",
	ingredientes: ["Pasta para lasaña", "Berenjena", "Calabacín", "Espinaca", "Ricota", "Salsa de tomate", "Queso mozzarella"]
  },
  {
	id:6,
	titulo: "Pastel de Cordero Patagónico",
	imageSrc: "/plato-cordero.jpg",
	ingredientes: ["Carne de cordero", "Papas", "Zanahorias", "Cebolla", "Ajo", "Hierbas provenzales", "Vino tinto"]
  }
];


export default function Menu() {
	return (
		<section id="menu" className="w-full py-24 bg-luxury-ivory">
      <div className="max-w-6xl mx-auto px-8">
        
        <div className="text-center mb-20 space-y-4">
          <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold">
            Experiencia Culinaria
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal">
            Nuestro <span className="italic font-light">Menú</span>
          </h2>
          <div className="w-12 h-px bg-luxury-gold mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          {menuItems.map((item) => (
            <CardMenuProps 
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
