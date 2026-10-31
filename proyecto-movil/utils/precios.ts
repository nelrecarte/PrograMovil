import { Producto } from '../types/menu';

export function tieneDescuento(producto: Producto): boolean {
  return producto.porcentajeDescuento !== undefined && producto.porcentajeDescuento > 0;
}

export function calcularPrecioFinal(producto: Producto): number {
  const porcentaje = producto.porcentajeDescuento ?? 0;
  return producto.precio * (1 - porcentaje / 100);
}
