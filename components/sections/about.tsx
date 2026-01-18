import Link from 'next/link';
import { GoogleMapsIcon } from '../ui/socialLinks';
import { MapPin, Clock } from "lucide-react";
import aboutData from '@/data/about.json';


export default function About() {
	const { historia, contacto } = aboutData;

	return (
		<section
			id="about"
			className="w-full py-14 max-w-6xl mx-auto px-8"
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
							{historia.parrafos.map((p, index) => (
								<p key={index} className="text-balance text-base font-light">
									{p}
								</p>
							))}
						</div>
					</div>

					<div className="bg-luxury-ivory/30 p-10 rounded-sm border border-luxury-gold/10 space-y-10 shadow-sm">

						<div className="text-center border-b border-luxury-gold/20">
							<h3 className="text-2xl text-luxury-charcoal uppercase tracking-tight font-light font-serif">
								{contacto.titulo}
							</h3>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

							<div className="space-y-4">
								<div className="flex items-center justify-center gap-3 ">
									<MapPin className="w-7 h-7 text-luxury-gold shrink-0" />
									<p className="text-luxury-gold uppercase tracking-[0.3em] text-[12px] font-bold ">
										<span className=" bg-luxury-gold"></span>
										{contacto.ubicacion.titulo}
									</p>
								</div>
								<div className="pl-4 text-center">
									<p className="text-luxury-charcoal leading-tight group-hover:text-luxury-gold transition-colors duration-300">
										{contacto.ubicacion.direccion}{' '}
										<span className="text-base text-gray-600 racking-widest">
											{contacto.ubicacion.ciudad}
										</span>
									</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className="flex items-center justify-center gap-3">
									<Clock className="w-7 h-7 text-luxury-gold shrink-0 " />
									<p className="text-luxury-gold uppercase tracking-[0.3em] text-[12px] font-bold ">
										<span className="w-14 h-px bg-luxury-gold"></span>
										Horarios
									</p>
								</div>
								<div className="pl-4">
									<div className="flex flex-col items-center gap-1">
										<span className="text-base text-gray-600 text-balance block">{contacto.horarios.dias}</span>
										<span className="text-sm text-balance block">
											{contacto.horarios.rango}
										</span>
									</div>
								</div>
							</div>

							<div className=" flex justify-center items-center border-t  md:col-span-2 border-luxury-gold/10">
								<Link
									href={contacto.ubicacion.mapaUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="-2 group flex items-center justify-center   bg-luxury-gold text-white py-3 px-4 text-xs uppercase tracking-widest font-bold hover:bg-luxury-charcoal transition-all duration-300 rounded-sm"
								>
									<span>Cómo llegar</span>
									<GoogleMapsIcon className="w-5 h-5 fill-white group-hover:fill-luxury-gold transition-colors duration-300" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

