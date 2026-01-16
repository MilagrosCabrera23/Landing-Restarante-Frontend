export default function Contact() {
	return (
		<section id="reservar" className="contact py-16 max-w-6xl mx-auto px-8 bg-luxury-ivory">
			<h2 className="text-4xl text-luxury-gold text-center font-semibold">Reserva tu mesa</h2>
			<form className="flex flex-col gap-4 bg-white p-6 rounded shadow">
				<label htmlFor="name" className="sr-only">Nombre</label>
				<input id="name" type="text" placeholder="Ingrese su nombre" className="border p-2 rounded" required />
				<label htmlFor="email" className="sr-only">Correo electrónico</label>
				<input id="email" type="email" placeholder="Correo electrónico" className="border p-2 rounded" required />
				<label htmlFor="date" className="sr-only">Fecha</label>
				<input id="date" type="date" className="border p-2 rounded" required />
				<label htmlFor="time" className="sr-only">Hora</label>
				<input id="time" type="time" className="border p-2 rounded" required />
				<button type="submit" className="bg-primary py-2 rounded text-white font-semibold hover:bg-primary-dark transition">Reservar</button>
			</form>
		</section>
	);
}
