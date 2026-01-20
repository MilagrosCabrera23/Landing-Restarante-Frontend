import { z } from 'zod';

export const ContactSchema = z.object({
  nombre: z.string().min(3, 'El nombre es obligatorio y debe tener al menos 3 caracteres'),
  telefono: z.string().min(8, 'El número de teléfono es obligatorio'),
  personas: z.number({ coerce: true }).min(1, 'El número de personas mínimas es 1').max(90, 'El número de personas máximas es 90'),
  fecha: z.string()
    .refine((value) => !isNaN(Date.parse(value)), "Fecha inválida")
    .refine((value) => {
      const fechaSeleccionada = new Date(value);
      const dia = fechaSeleccionada.getDay();
      const hora = fechaSeleccionada.getHours();
      const minutos = fechaSeleccionada.getMinutes();
      const tiempoEnMinutos = (hora * 60) + minutos;

      if ( dia === 1) {
        return false;
      }
      // // 12:30 PM = 750 minutos | 02:00 AM = 120 minutos
      const RangoAlmuerzoCena = tiempoEnMinutos >= 750
      const RangoCena = tiempoEnMinutos <= 120;

      return RangoAlmuerzoCena || RangoCena;
    }, 'El restaurante abre de Martes a Domingo, de 12:30 PM a 02:00 AM'),
  observaciones: z.string().max(500, "Las observaciones no pueden exceder los 500 caracteres").optional(),
});

export type ContactFormData = z.infer<typeof ContactSchema>;