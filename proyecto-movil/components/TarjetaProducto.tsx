import { StyleSheet, Text, View } from 'react-native';

import { Categoria, Producto } from '../types/menu';
import { calcularPrecioFinal, tieneDescuento } from '../utils/precios';
import BotonAccion from './BotonAccion';

export type TarjetaProductoProps = {
  producto: Producto;
  formatearPrecio: (precio: number) => string;
  onPresionarBoton: (producto: Producto) => void;
  textoBoton?: string;
};

export default function TarjetaProducto({
  producto,
  formatearPrecio,
  onPresionarBoton,
  textoBoton = 'Agregar',
}: TarjetaProductoProps) {
  const estaAgotado = producto.disponibilidad === 'agotado';
  const quedanPocas = producto.disponibilidad === 'pocasUnidades';

  return (
    <View style={[styles.tarjeta, estaAgotado && styles.tarjetaAgotada]}>
      <Text style={styles.nombre}>{producto.nombre}</Text>

      <View style={styles.filaEtiquetas}>
        <Text style={[styles.etiqueta, estilosCategoria[producto.categoria]]}>
          {nombresCategoria[producto.categoria]}
        </Text>
        {producto.esNuevo && <Text style={[styles.etiqueta, styles.etiquetaNuevo]}>Nuevo</Text>}
        {quedanPocas && (
          <Text style={[styles.etiqueta, styles.etiquetaUltimas]}>Últimas unidades</Text>
        )}
      </View>

      <View style={styles.filaPrecio}>
        {tieneDescuento(producto) && (
          <Text style={styles.precioOriginal}>{formatearPrecio(producto.precio)}</Text>
        )}
        <Text style={styles.precioFinal}>{formatearPrecio(calcularPrecioFinal(producto))}</Text>
      </View>

      <BotonAccion
        texto={estaAgotado ? 'Agotado' : textoBoton}
        onPress={() => onPresionarBoton(producto)}
        inhabilitado={estaAgotado}
        tamano="pequeno"
        anchoCompleto
      />
    </View>
  );
}

const nombresCategoria: Record<Categoria, string> = {
  bebida: 'Bebida',
  comida: 'Comida',
  postre: 'Postre',
};

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    gap: 10,
    borderWidth: 1,
    borderColor: '#EADFD6',
  },
  tarjetaAgotada: {
    opacity: 0.55,
  },
  nombre: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2B1D14',
  },
  filaEtiquetas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  etiqueta: {
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    overflow: 'hidden',
  },
  etiquetaNuevo: {
    backgroundColor: '#E3F2FD',
    color: '#1565C0',
  },
  etiquetaUltimas: {
    backgroundColor: '#FFF3E0',
    color: '#E65100',
  },
  filaPrecio: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  precioOriginal: {
    fontSize: 14,
    color: '#8A7F78',
    textDecorationLine: 'line-through',
  },
  precioFinal: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6F4E37',
  },
});

const estilosCategoria = StyleSheet.create({
  bebida: {
    backgroundColor: '#E0F2F1',
    color: '#00695C',
  },
  comida: {
    backgroundColor: '#FCE4EC',
    color: '#AD1457',
  },
  postre: {
    backgroundColor: '#F3E5F5',
    color: '#6A1B9A',
  },
});
