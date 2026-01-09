// 2. TIPOS DE DATOS PARA RESERVAS
export type ReservationStatus = 'pendiente' | 'confirmada' | 'cancelada' | 'completada';


export interface ReservationForm{
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  fecha: Date; 
  hora: Date;
  cant_personas: number;
  comentarios?: string;
}

//CREACION,ELIMINACION Y ACTUALIZACIÓN DE ITEMS DEL MENÚ
export type CreateReservation = Omit<ReservationForm, 'id'| 'status' | 'createdAt' >

export type UpdateReservation = Partial<CreateReservation> & { id: number };

export type DeleteReservation = Pick<ReservationForm, 'id'>;