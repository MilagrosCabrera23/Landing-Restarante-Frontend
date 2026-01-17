import Link from 'next/link';
import {GoogleMapsIcon} from '../ui/socialLinks';
import aboutData from '@/data/about.json';


export default function About() {
	const { historia, contacto } = aboutData;

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
								{historia.subtitulo}
							</span>
							<h2 className="text-4xl md:text-5xl text-luxury-charcoal leading-tight text-start">
								{historia.titulo} {' '}
							</h2>
						</div>

						<div className="space-y-4 text-gray-600 leading-relaxed tracking-widest  pl-6 ">
							{historia.parrafos.map((p,index) => (
								<p key={index} className="text-balance text-base font-light">
									{p}
								</p>
							))}
						</div>
					</div>

					<div className="bg-luxury-ivory/30 p-10 rounded-sm border border-luxury-gold/10 space-y-10">
						<div className="text-center border-b border-luxury-gold/20">
							<h3 className="text-3xl text-luxury-charcoal italic">
								{contacto.titulo}
							</h3>
						</div>

						<div className="">
							<div className="group m-2">
								<p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold ">
									<span className="w-8 h-px bg-luxury-gold"></span>
									{contacto.ubicacion.direccion}
								</p>
								<p className="text-luxury-charcoal leading-tight group-hover:text-luxury-gold transition-colors duration-300">
									{contacto.ubicacion.direccion}{' '}
									<span className="text-base text-gray-600">
										{contacto.ubicacion.ciudad}
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
										<span className="text-sm">{contacto.horarios.dias}</span>
										<span className="text-sm font-medium">
											{contacto.horarios.rango}
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="pt-6 border-t border-luxury-gold/10">
							<Link
								href={contacto.ubicacion.mapaUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center justify-center gap-2 w-full bg-luxury-gold text-white py-3 px-6 text-xs uppercase tracking-widest font-bold hover:bg-luxury-charcoal transition-all duration-300 rounded-sm"
							>
								<span>Cómo llegar</span>
								<GoogleMapsIcon className="w-5 h-5 fill-white group-hover:fill-luxury-gold transition-colors duration-300" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

