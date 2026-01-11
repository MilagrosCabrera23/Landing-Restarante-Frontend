export default function Hero() {
	return (
		<section className="hero bg-cover bg-center py-20 text-center text-white" style={{backgroundImage: 'url(/public/hero-bg.jpg)'}}>
			<h1 className="text-5xl font-bold mb-4">Restaurante Gourmet</h1>
			<p className="text-xl mb-8">Disfruta de una experiencia culinaria única en el corazón de la ciudad.</p>
			<a href="#reservar" className="bg-primary px-8 py-3 rounded font-semibold text-white hover:bg-primary-dark transition">Reserva tu mesa</a>
		</section>
	);
}
