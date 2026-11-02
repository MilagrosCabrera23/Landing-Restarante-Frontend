export interface CardMenuProps {
    id: number;
    titulo: string;
    imageSrc: string;
    categoria: MenuCategory;
    descripcion: string;
    precio: number;
    ingredientes?: string[];
}

export type MenuCategory =
    | "entradas"
    | "principales"
    | "vegetarianos"
    | "veganos"
    | "postres"
    | "bebidas";

export interface MenuData {
    encabezado: {
        subtitulo: string;
        titulo: string;
    };
    categorias: {
        id: MenuCategory;
        label: string;
    }[];
    platos: CardMenuProps[];
}
