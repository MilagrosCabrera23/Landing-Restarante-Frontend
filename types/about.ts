export interface AboutInfo {
    nombre: string;
    eslogan ?: string;              
    especialidad?: string;        
    mision?: string;             
    vision?: string;              
    valores?: string[]; 
}
export interface TeamMember {
    id: number;
    nombre: string;
    cargo: string;                
    foto?: string;                
    descripcion?: string;          
}
export interface ContactInfo {
    direccion: string;
    ciudad: string;
    pais: string;
    telefono: string;
    email: string;
    sitioWeb?: string;
}

export interface SocialMedia {
    plataforma: string;
    url: string;
    nombreUsuario?: string; 
    icono ?: string; 
}

