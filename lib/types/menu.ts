// 1. TIPOS PARA EL MENÚ DEL RESTAURANTE

export interface Categoria {
id:number;
nombre: string;
orden: number;
}

export interface DetalleItemMenu {
  id: string;             
  nombre: string;         
  descripcion: string;   
  precio: number;         
  imagen: string;  
  disponible: boolean;
  destacado: boolean;
  categoriaId: number;
}

//CREACION,ELIMINACION Y ACTUALIZACIÓN DE ITEMS DEL MENÚ
export type CreateItemMenu = Omit<DetalleItemMenu, 'id'>

export type UpdateItemMenu = Partial<CreateItemMenu> & { id: string };

export type DeleteItemMenu = Pick<DetalleItemMenu, 'id'>;