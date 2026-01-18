export interface GalleryItem {
  src: string;
  alt: string;
  className?: string;
}

export interface GalleryData {
  encabezado: {
  titulo: string;
  subtitulo: string;
};
  items: GalleryItem[];
}