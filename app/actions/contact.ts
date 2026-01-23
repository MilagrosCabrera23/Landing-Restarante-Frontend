"use server";
import { ContactFormData, ContactSchema } from "@/schemas/contact";


export async function enviarFormAction(data: ContactFormData) {
   const validationForm = ContactSchema.safeParse(data);
   if (!validationForm.success) {
      const errorMessages = validationForm.error.issues.map(issue => issue.message);

      return {
         success: false,
         errors: errorMessages
      }
   }
   return {
      success: true,
      message: "Formulario enviado con éxito"
   }
}
