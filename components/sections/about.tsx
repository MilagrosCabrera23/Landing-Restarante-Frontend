export default function About() {
	return (
		<section id="about" className="py-24 bg-white">
			<div className="max-w-5xl mx-auto px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

					{/* Lado Izquierdo: Texto Narrativo */}
					<div className="space-y-6">
						<span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold">
							Nuestra Esencia
						</span>
						<h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal leading-tight">
							Tradición que <br /> <span className="italic">Innova</span>
						</h2>
						<div className="space-y-4 text-gray-600 leading-relaxed">
							<p>
								En el corazón de <strong>Mendoza</strong>, Restaurante Gourmet nace como un tributo a la alta cocina de autor, fusionando la riqueza de las tradiciones locales con técnicas de vanguardia.
							</p>
							<p>
								Nuestros valores se fundamentan en el respeto absoluto por la materia prima y la búsqueda constante de la excelencia, creando una experiencia sensorial única para cada comensal.
							</p>
						</div>
					</div>

					{/* Lado Derecho: Info y Horarios */}
					<div className="bg-luxury-ivory p-10 border border-luxury-gold/10 rounded-sm">
						<h3 className="font-serif text-2xl text-luxury-charcoal mb-6 text-center">Visítenos</h3>

						<div className="space-y-6">
							<div>
								<p className="text-luxury-gold uppercase tracking-widest text-[10px] mb-1 font-semibold">Ubicación</p>
								<p className="text-gray-700">Peatonal Sarmiento, Mendoza, Argentina</p>
							</div>

							<div>
								<p className="text-luxury-gold uppercase tracking-widest text-[10px] mb-1 font-semibold">Horarios de atención</p>
								<ul className="text-gray-700 space-y-1">
									<li className="flex justify-between">
										<span>Martes a Domingo</span>
										<span>12:30pm - 02:00am</span>
									</li>
								</ul>
							</div>

							<div className="pt-4">
								<a
									href="https://www.google.com/maps/search/?api=1&query=Peatonal+Sarmiento+Mendoza+Argentina"
									target="_blank"
									rel="noopener noreferrer"
									className="text-luxury-gold border-b border-luxury-gold pb-1 text-center"
								>
									Cómo llegar
								</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}
