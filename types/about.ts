export interface AboutData {
  historia: {
        subtitulo: string;
        titulo: string;
        parrafos: string[];
    };
    contacto: {
        titulo: string;
        ubicacion: {
            titulo: string;
            direccion: string;
            ciudad: string;
            mapaUrl: string;
        };
        horarios: {
            dias: string;
            rango: string;
        };
    };
}