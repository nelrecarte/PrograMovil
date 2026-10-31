export type Categoria = 'bebida' | 'comida' | 'postre';

export type Disponibilidad = 'disponible' | 'pocasUnidades' | 'agotado';

export type Producto = {
  id: string;
  nombre: string;
  categoria: Categoria;
  precio: number;
  disponibilidad: Disponibilidad;
  porcentajeDescuento?: number;
  esNuevo?: boolean;
};
