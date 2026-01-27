"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { toast } from "sonner"
import { User, Phone, Users, Calendar } from "lucide-react"

import { ContactFormData, ContactSchema } from "@/schemas/contact"
import { enviarFormAction } from "@/app/actions/contact";
import { ContactData } from "@/types/contact";
import contactDataRaw from "@/data/contact.json";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormError } from "../ui/formError";


export default function Contact() {
	const { encabezado, formulario } = contactDataRaw as ContactData;
	
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
		resolver: standardSchemaResolver(ContactSchema),
		mode: "onChange"
	});

	const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        const loadingToast = toast.loading("Procesando tu reserva...");
        try {
            const response = await enviarFormAction(data);
            toast.dismiss(loadingToast);

            if (response.success) {
                toast.success("¡Reserva enviada con éxito! Nos pondremos en contacto contigo pronto.");
                reset();
            } else {
                toast.error(response.message || "Error al enviar la reserva. Por favor, intenta nuevamente.");
            }
        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error("Error al enviar la reserva. Por favor, intenta nuevamente.");
        }
    };

    return (
				<section id="reservar" className="w-full py-16 px-8 bg-luxury-ivory">
					<div className="max-w-4xl mx-auto px-8">

						<div className="text-center mb-10 ">
							<span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
								{encabezado.subtitulo}
							</span>
							<h2 className="text-3xl md:text-5xl text-luxury-charcoal font-serif">
								{encabezado.titulo} <span className="italic">{encabezado.tituloItalic}</span>
							</h2>
						</div>

						<form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12 rounded-sm border border-luxury-gold/10 shadow-sm space-y-8 bg-white">

							<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

								<div className="space-y-3 label-nombre">
									<Label htmlFor="name" className="text-[12px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
										<User className="w-3 h-3" />
										{formulario.campos.nombre}
									</Label>
									<Input
										id="name" {...register("nombre")}
										type="text"
										placeholder={formulario.placeholders.nombre}
										className="bg-white/50 border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-none"
										required
									/>
									<FormError message={errors.nombre?.message} />
								</div>

								<div className="space-y-3 label-telefono">
									<Label htmlFor="phone" className="text-[12px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
										<Phone className="w-3 h-3" /> {formulario.campos.telefono}
									</Label>
									<Input
										id="phone" {...register("telefono")}
										type="tel"
										placeholder={formulario.placeholders.telefono}
										className="bg-white/50 border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-none"
										required
									/>
									<FormError message={errors.telefono?.message} />
								</div>

								<div className="space-y-3">
									<Label htmlFor="cantidad-personas" className="text-[12px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
										<Users className="w-3 h-3" /> {formulario.campos.personas}
									</Label>
									<Input
										id="cantidad-personas" {...register("personas")}
										type="number"
										min={1}
										max={90}
										placeholder={formulario.placeholders.personas}
										className="bg-white/50 border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-none"
										required
									/>
									<FormError message={errors.personas?.message} />
								</div>

								<div className="space-y-3 label-fecha-hora">
									<Label htmlFor="date" className="text-[12px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
										<Calendar className="w-3 h-3" /> {formulario.campos.fecha}
									</Label>
									<Input
										id="date" {...register("fecha")}
										type="datetime-local"
										placeholder={formulario.placeholders.fecha}
										className="bg-white/50 border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-none"
										required
									/>
									<FormError message={errors.fecha?.message} />
								</div>
							</div>

							<div className="space-y-3 label-observaciones">
								<Label htmlFor="observaciones" className="text-[12px] uppercase tracking-[0.2em] font-bold text-luxury-gold flex items-center gap-2">
									{formulario.campos.observaciones}
								</Label>
								<textarea
									id="observaciones" {...register("observaciones")}
									className="w-full h-24 md:h-32 bg-white/50 border border-luxury-gold/20 focus-visible:ring-luxury-gold rounded-sm p-3 resize-none placeholder:text-gray-400"
									placeholder={formulario.placeholders.observaciones}
								/>
								<FormError message={errors.observaciones?.message} />
							</div>


							<div className="">
								<button
									type="submit" disabled={isSubmitting}
									className="w-full bg-luxury-gold text-white py-4 px-6 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-charcoal transition-all duration-500 rounded-sm shadow-sm"
								>
									{isSubmitting ? formulario.botonEnviando : formulario.boton}
								</button>
								<p className="text-[12px] text-gray-500 text-center mt-4 uppercase tracking-widest">
									{formulario.nota}
								</p>
							</div>
						</form>
					</div>
				</section>
			);
		}
