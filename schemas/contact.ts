import { z } from 'zod';

export const ContactSchema = z.object({
  nombre: z.string().min(3, 'El nombre es obligatorio y debe tener al menos 3 caracteres'),
  telefono: z.string().min(8, 'El número de teléfono es obligatorio y debe tener al menos 8 caracteres'),
  personas: z.coerce.number().min(1, 'El número de personas minimas es 1').max(90, 'El número de personas máximas es 90'),
  fecha: z.coerce.date({
  message: "Por favor selccione una fecha y hora válida",
    })
    .refine((date) =>!isNaN(date.getTime()), 'La fecha y hora deben ser válidas')
    .refine((date) => date > new Date(), 'La fecha y hora deben ser en el futuro')
    .refine((date) => {
     
      const dia = date.getDay();
      const hora = date.getHours();
      const minutos = date.getMinutes();
      const tiempoEnMinutos = (hora * 60) + minutos;

      if (dia === 1) {
        return false;
      }
      // // 12:30 PM = 750 minutos | 02:00 AM = 120 minutos
      const RangoServicio = tiempoEnMinutos >= 750    || tiempoEnMinutos <= 120;

      return RangoServicio;
    }, 'El restaurante abre de Martes a Domingo, de 12:30 PM a 02:00 AM'),
  observaciones: z.string().max(500, "Las observaciones no pueden exceder los 500 caracteres").optional(),
});

export type ContactFormData = z.infer<typeof ContactSchema>;