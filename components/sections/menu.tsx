import { CardMenuProps } from "../ui/cardMenu";

const menuItems = [
  {
    id: 1,
    titulo: "Ojo de Bife Abrasado",
	imageSrc: "/plato-carne.jpg",
    ingredientes: ["Ojo de bife premium con sal marina", "romero fresco y ajo confitado", "papa andina al manteca", "un toque de pimienta negra"], 
  },
  {
    id: 2,
    titulo: "Trucha Patagónica",
    imageSrc: "/plato-trucha.jpg",
    ingredientes: ["Trucha fresca con limón sutil", "alcaparras y eneldo aromático", "crema de hinojo suave", "aceite de oliva extra virgen"]
  },
  {
	id: 3,
	titulo: "Risotto de Hongos Silvestres",
	imageSrc: "/plato-rissoto.jpg",
	ingredientes: ["Arroz arborio cremoso", "con hongos silvestres salteados", "Parmesano reggiano rallado", "Reducción de vino blanco"]
  },
{
	id: 4,
	titulo: "Ensalada Gourmet",
	imageSrc: "/plato-ensalada.jpg",
	ingredientes: ["Mix de lechugas frescas", "tomate cherry y pepino crocante", "queso feta griego y aceitunas", "vinagreta balsámica artesanal"]
  },
  {
	id:5,
	titulo: "Lasaña Vegetariana",
	imageSrc: "/plato-lasaña.jpg",
  ingredientes: ["Pasta fresca artesanal", "berenjena, calabacín y espinaca", "ricota cremosa italiana", "salsa de tomate casera y mozzarella"]
  },
  {
	id:6,
	titulo: "Pastel de Cordero Patagónico",
	imageSrc: "/plato-cordero.jpg",
	ingredientes: ["Cordero patagónico braseado", "puré de papas con manteca", "vegetales de estación asados", "reducción de vino tinto"]
  }
];


export default function Menu() {
	return (
		<section id="menu" className="w-full py-2 max-w-6xl mx-auto px-4  bg-luxury-ivory">
      <div className="">
        <div className="text-center m-2">
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
