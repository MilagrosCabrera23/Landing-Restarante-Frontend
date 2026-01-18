import Link from 'next/link';
import { GoogleMapsIcon } from '../ui/socialLinks';
import { MapPin, Clock } from "lucide-react";
import aboutData from '@/data/about.json';


export default function About() {
	const { historia, contacto } = aboutData;

	return (
		<section
			id="about"
			className="w-full py-16 max-w-6xl mx-auto px-8"
		>
			<div className="">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
					<div className="space-y-8">
						<div className="text-center space-y-4">
							<span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold block">
								{historia.subtitulo}
							</span>
							<h2 className="text-4xl md:text-5xl text-luxury-charcoal leading-tight">
								{historia.titulo} {' '}
							</h2>
						</div>

						<div className="space-y-6 text-gray-600 leading-relaxed tracking-widest md:pl-6 ">
							{historia.parrafos.map((p, index) => (
								<p key={index} className="text-balance text-base font-light">
									{p}
								</p>
							))}
						</div>
					</div>

					<div className="bg-luxury-ivory/30 p-8 md:p-10 rounded-sm border border-luxury-gold/10 space-y-10 shadow-sm">

						<div className="text-center border-b border-luxury-gold/20 pb-6">
							<h3 className="text-2xl text-luxury-charcoal uppercase tracking-[0.2em] font-light font-serif">
								{contacto.titulo}
							</h3>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

							<div className="space-y-4">
								<div className="flex items-center justify-center sm:justify-start gap-3 ">
									<MapPin className="w-6 h-6 text-luxury-gold shrink-0" />
									<p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold ">
										<span className=" bg-luxury-gold "></span>
										{contacto.ubicacion.titulo}
									</p>
								</div>
								<div className="pl-4 text-center md:text-start sm:pl-9">
									<p className="text-luxury-charcoal leading-tight">
										{contacto.ubicacion.direccion}{' '}
										<span className=" text-gray-600">
											{contacto.ubicacion.ciudad}
										</span>
									</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className="flex items-center justify-center sm:justify-start gap-3">
									<Clock className="w-6 h-6 text-luxury-gold shrink-0 " />
									<p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold ">
										<span className="w-14x bg-luxury-gold"></span>
										{contacto.horarios.titulo}
									</p>
								</div>
								
									<div className="flex flex-col items-center gap-1 text-center sm:text-start sm:pl-9">
										<span className="font-medium text-gray-600 ">{contacto.horarios.dias}</span>
										<span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
											{contacto.horarios.rango}
										</span>
									</div>
								</div>
							

							<div className="pt-6 border-t border-luxury-gold/10 sm:col-span-2">
								<Link
									href={contacto.ubicacion.mapaUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center justify-center gap-3 bg-luxury-gold text-white py-4 px-6 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-luxury-charcoal transition-all duration-300 rounded-sm"
								>
									<span>{contacto.ubicacion.comoLlegar}</span>
									<GoogleMapsIcon className="w-4 h-4 fill-white group-hover:fill-luxury-gold transition-colors duration-300" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

