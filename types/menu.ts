export interface Plato {
    id: number;
    titulo: string;
    imageSrc: string;
    ingredientes: string[];
}

export interface MenuData {
    encabezado: {
        subtitulo: string;
        titulo: string;
    };
    platos: Plato[];
}