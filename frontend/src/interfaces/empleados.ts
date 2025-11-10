export interface Empleado {
  _id?: string;
  codigo: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  codigo_departamento: {
    codigo: string;
    nombre: string;
  };
  createdAt?: string;
  updatedAt?: string; 
}
