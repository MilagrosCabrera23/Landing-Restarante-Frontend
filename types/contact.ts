export interface ContactData{
    encabezado: {
        subtitulo: string;
        titulo: string;
        tituloItalic: string;
    };
    formulario: {
        campos: {
            nombre: string;
            telefono: string;
            personas: string;
            fecha: string;
            observaciones: string;
        };
        placeholders:{
            nombre: string;
            telefono: string;
            personas: string;
            fecha: string;
            observaciones: string;
        }
        boton: string;
        botonEnviando: string;
        nota: string;
    };
}
