"use client";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { ContactFormData, ContactSchema } from "@/schemas/contact"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Phone, Users, Calendar } from "lucide-react"

export default function Contact() {

	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
		resolver: zodResolver(ContactSchema)
	});

	const onSubmit = async (data: ContactFormData) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			toast.success("¡Reserva enviada con éxito! Nos pondremos en contacto contigo pronto.");
			reset();
		}
		catch (error) {
			toast.error("Hubo un error al enviar tu reserva. Por favor, inténtalo de nuevo más tarde.");
		}
	};

	return (
			<section id="reservar" className="w-full py-16 px-4 bg-luxury-ivory">
				<div className="max-w-4xl mx-auto px-8">

					<div className="text-center mb-10">
						<span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
							Disponibilidad Exclusiva
						</span>
						<h2 className="text-3xl md:text-5xl text-luxury-charcoal font-serif">
							Reserva tu <span className="italic">Mesa</span>
						</h2>
					</div>

					<form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12 rounded-sm border border-luxury-gold/10 shadow-sm space-y-8 bg-white">

						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

							<div className="space-y-3 label-nombre">
								<Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
									<User className="w-3 h-3" /> Nombre completo
								</Label>
								<Input
									id="name" {...register("nombre")}
									type="text"
									placeholder="Ej: Milagros Cabrera"
									className="bg-white/50 border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-none"
									required
								/>
								{errors.nombre && <p className="text-sm text-red-600">{errors.nombre.message}</p>}
							</div>

							<div className="space-y-3 label-telefono">
								<Label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
									<Phone className="w-3 h-3" /> Número de contacto
								</Label>
								<Input
									id="phone" {...register("telefono")}
									type="tel"
									placeholder="+54 261 ..."
									className="bg-white/50 border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-none"
									required
								/>
								{errors.telefono && <p className="text-sm text-red-600">{errors.telefono.message}</p>}
							</div>

							<div className="space-y-3">
								<Label htmlFor="cantidad-personas" className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
									<Users className="w-3 h-3" /> Cantidad de personas
								</Label>
								<Input
									id="cantidad-personas" {...register("personas")}
									type="number"
									min={1}
									max={90}
									placeholder="Máximo 90 personas"
									className="bg-white/50 border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-none"
									required
								/>
								{errors.personas && <p className="text-sm text-red-600">{errors.personas.message}</p>}
							</div>

							<div className="space-y-3 label-fecha-hora">
								<Label htmlFor="date" className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
									<Calendar className="w-3 h-3" /> Fecha y Hora deseada
								</Label>
								<Input
									id="date" {...register("fecha")}
									type="datetime-local"
									className="bg-white/50 border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-none"
									required
								/>
								{errors.fecha && <p className="text-sm text-red-600">{errors.fecha.message}</p>}
							</div>
						</div>

						<div className="space-y-3 label-observaciones">
							<Label htmlFor="observaciones" className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
								Observaciones
							</Label>
							<textarea
								id="observaciones" {...register("observaciones")}
								placeholder="Escribe aquí cualquier detalle adicional..."
								className="w-full h-24 md:h-32 bg-white/50 border border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-sm p-3 resize-none placeholder:text-gray-400"
							/>
							{errors.observaciones && <p className="text-sm text-red-600">{errors.observaciones.message}</p>}
						</div>


						<div className="">
							<button
								type="submit" disabled={isSubmitting}
								className="w-full bg-luxury-gold text-white py-4 px-6 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-charcoal transition-all duration-500 rounded-sm shadow-sm"
							>
								{isSubmitting ? "Enviando..." : "Reservar Mesa"}
							</button>
							<p className="text-[10px] text-gray-500 text-center mt-4 uppercase tracking-widest">
								Sujeto a disponibilidad del salón.
							</p>
						</div>
					</form>
				</div>
			</section>
	);
}
