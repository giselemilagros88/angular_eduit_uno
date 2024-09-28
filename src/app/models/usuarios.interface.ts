
export interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    dni: string;
    imagen?: string;
    programa?: boolean;
    lenguajes?: string[];
}