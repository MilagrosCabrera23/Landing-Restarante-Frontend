export default function Menu() {
	return (
		<section className="menu py-16 bg-gray-50 px-4">
			<h2 className="text-3xl font-bold mb-8 text-center">Nuestro Menú</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
				<div className="bg-white p-6 rounded shadow">
					<h3 className="font-semibold text-xl mb-2">Entradas</h3>
					<ul>
						<li>Carpaccio de res</li>
						<li>Ensalada gourmet</li>
						<li>Bruschettas variadas</li>
					</ul>
				</div>
				<div className="bg-white p-6 rounded shadow">
					<h3 className="font-semibold text-xl mb-2">Platos Principales</h3>
					<ul>
						<li>Risotto de hongos</li>
						<li>Salmón a la plancha</li>
						<li>Filete mignon</li>
					</ul>
				</div>
				<div className="bg-white p-6 rounded shadow">
					<h3 className="font-semibold text-xl mb-2">Postres</h3>
					<ul>
						<li>Tiramisú</li>
						<li>Cheesecake de frutos rojos</li>
						<li>Helado artesanal</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
