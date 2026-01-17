
import Link from 'next/link';

export default function About() {
	return (
		<section
			id="about"
			className="w-full bg-white py-16 max-w-6xl mx-auto px-8"
		>
			<div className="">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-20">
					<div className="space-y-6">
						<div className="text-center">
							<span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
								Nuestra Esencia
							</span>
							<h2 className="text-4xl md:text-5xl text-luxury-charcoal leading-tight text-start">
								Tradición que {' '}
								<span className="italic">Innova</span>
							</h2>
						</div>

						<div className="space-y-4 text-gray-600 leading-relaxed tracking-widest  pl-6 ">
							<p className="text-balance text-base font-light">
								En el corazón de Mendoza, Restaurante Gourmet nace como un
								tributo a la alta cocina de autor en abril del año 2009,
								fusionando la riqueza de las tradiciones locales con técnicas de
								vanguardia.
							</p>
							<p className="text-balance text-base font-light">
								Nuestros valores se fundamentan en el respeto absoluto por la
								materia prima y la búsqueda constante de la excelencia.
							</p>
							<p className="text-balance text-base font-light">
								Cada plato es una obra maestra que refleja nuestra pasión por la
								gastronomía y nuestro compromiso con la innovación culinaria.
							</p>
						</div>
					</div>

					<div className="bg-luxury-ivory/30 p-10 rounded-sm border border-luxury-gold/10 space-y-10">
						<div className="text-center border-b border-luxury-gold/20">
							<h3 className="text-3xl text-luxury-charcoal italic">
								Visítenos
							</h3>
						</div>

						<div className="">
							<div className="group m-2">
								<p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold ">
									<span className="w-8 h-px bg-luxury-gold"></span>
									Ubicación
								</p>
								<p className="text-luxury-charcoal leading-tight group-hover:text-luxury-gold transition-colors duration-300">
									Peatonal Sarmiento,
									<span className="text-base text-gray-600">
										Mendoza, Argentina
									</span>
								</p>
							</div>

							<div>
								<p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold ">
									<span className="w-14 h-px bg-luxury-gold"></span>
									Horarios
								</p>
								<div className="pl-11 space-y-2">
									<div className="flex items-center justify-between text-gray-700">
										<span className="text-sm">Martes - Domingo</span>
										<span className="text-sm font-medium">
											12:30 PM - 02:00 AM
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="pt-6 border-t border-luxury-gold/10">
							<Link
								href="https://www.google.com/maps/search/?api=1&query=Peatonal+Sarmiento+Mendoza+Argentina"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center justify-center gap-2 w-full bg-luxury-gold text-white py-3 px-6 text-xs uppercase tracking-widest font-bold hover:bg-luxury-charcoal transition-all duration-300 rounded-sm"
							>
								<span>Cómo llegar</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-4 h-4 group-hover:translate-x-1 transition-transform"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

