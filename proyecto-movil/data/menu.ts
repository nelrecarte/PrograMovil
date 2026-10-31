import { Producto } from '../types/menu';

export const productosMenuDelDia: Producto[] = [
  {
    id: 'cafe-americano',
    nombre: 'Café americano',
    categoria: 'bebida',
    precio: 35,
    disponibilidad: 'disponible',
  },
  {
    id: 'licuado-fresa',
    nombre: 'Licuado de fresa',
    categoria: 'bebida',
    precio: 55,
    disponibilidad: 'pocasUnidades',
    esNuevo: true,
  },
  {
    id: 'empanada-queso',
    nombre: 'Empanada de queso',
    categoria: 'comida',
    precio: 30,
    disponibilidad: 'disponible',
    porcentajeDescuento: 10,
  },
  {
    id: 'sandwich-pollo',
    nombre: 'Sándwich de pollo',
    categoria: 'comida',
    precio: 75,
    disponibilidad: 'agotado',
  },
  {
    id: 'pastel-chocolate',
    nombre: 'Pastel de chocolate',
    categoria: 'postre',
    precio: 45,
    disponibilidad: 'pocasUnidades',
    porcentajeDescuento: 20,
  },
  {
    id: 'galleta-avena',
    nombre: 'Galleta de avena',
    categoria: 'postre',
    precio: 20,
    disponibilidad: 'disponible',
    esNuevo: true,
  },
];

export const idsFavoritos: string[] = ['cafe-americano', 'galleta-avena'];
