"use server";

import { supabase } from "@/lib/supabase";
import { ContactFormData, ContactSchema } from "@/schemas/contact";


export async function enviarFormAction(data: ContactFormData) {
   const validationForm = ContactSchema.safeParse(data);

   if (!validationForm.success) {
      const errorMessages = validationForm.error.issues.map(issue => issue.message);

      return {
         success: false,
         errors: errorMessages
      };
   }
   try {
      const { error } = await supabase.from("reservas").insert([
         {
            nombre: validationForm.data.nombre,
            telefono: validationForm.data.telefono,
            personas: validationForm.data.personas,
            fecha: validationForm.data.fecha,
            observaciones: validationForm.data.observaciones
         }
      ]);

      if (error) {
         return {
            success: false,
            message: "Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde."
         };
      }

      return {
         success: true,
         message: "Formulario enviado con éxito"
      };
   } catch (error) {
      return {
         success: false,
         message: "Error inesperado. Por favor, inténtalo de nuevo más tarde."
      };
   }
}