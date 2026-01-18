import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Phone, Users, Calendar } from "lucide-react"

export default function Contact() {
	return (
		<section id="reservar" className="w-full py-6 px-4 bg-luxury-ivory">
			<div className="max-w-4xl mx-auto px-8">

				<div className="text-center mb-6">
					<span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
						Disponibilidad Exclusiva
					</span>
					<h2 className="text-3xl md:text-5xl text-luxury-charcoal font-serif mt-4">
						Reserva tu <span className="italic">Mesa</span>
					</h2>
				</div>

				<form className="p-8 md:p-12 rounded-sm border border-luxury-gold/10 shadow-sm space-y-8 bg-white">

					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

						<div className="space-y-3 label-nombre">
							<Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
								<User className="w-3 h-3" /> Nombre completo
							</Label>
							<Input
								id="name"
								type="text"
								placeholder="Ej: Milagros Cabrera"
								className="bg-white/50 border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-none"
								required
							/>
						</div>

						<div className="space-y-3 label-telefono">
							<Label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
								<Phone className="w-3 h-3" /> Número de contacto
							</Label>
							<Input
								id="phone"
								type="tel"
								placeholder="+54 261 ..."
								className="bg-white/50 border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-none"
								required
							/>
						</div>

						<div className="space-y-3">
							<Label htmlFor="cantidad-personas" className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
								<Users className="w-3 h-3" /> Cantidad de personas
							</Label>
							<Input
								id="cantidad-personas"
								type="number"
								min="1"
								max="90"
								placeholder="Máximo 90 personas"
								className="bg-white/50 border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-none"
								required
							/>
						</div>

						<div className="space-y-3 label-fecha-hora">
							<Label htmlFor="date" className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
								<Calendar className="w-3 h-3" /> Fecha y Hora deseada
							</Label>
							<Input
								id="date"
								type="datetime-local"
								className="bg-white/50 border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-none"
								required
							/>
						</div>
					</div>

					<div className="">
						<button
							type="submit"
							className="w-full bg-luxury-gold text-white py-4 px-6 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-charcoal transition-all duration-500 rounded-sm shadow-sm"
						>
							Confirmar Reserva
						</button>
						<p className="text-[9px] text-gray-400 text-center mt-4 uppercase tracking-widest">
							Sujeto a disponibilidad del salón.
						</p>
					</div>
				</form>
			</div>
		</section>
	);
}
