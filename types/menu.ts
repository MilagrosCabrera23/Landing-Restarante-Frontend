export interface CardMenuProps {
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
    platos: CardMenuProps[];
}

