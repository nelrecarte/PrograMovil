import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';

import BotonAccion from './components/BotonAccion';
import EncabezadoSeccion from './components/EncabezadoSeccion';
import TarjetaProducto from './components/TarjetaProducto';
import { idsFavoritos, productosMenuDelDia } from './data/menu';
import { Producto } from './types/menu';

const simboloMoneda = 'L';

function formatearPrecio(precio: number): string {
  return `${simboloMoneda} ${precio.toFixed(2)}`;
}

function verMenuCompleto(): void {
  Alert.alert('Mostrando el menú completo');
}

function agregarAlPedido(producto: Producto): void {
  Alert.alert(`${producto.nombre} agregado al pedido`);
}

function pedirOtraVez(producto: Producto): void {
  Alert.alert(`Pedido rápido: ${producto.nombre}`);
}

function confirmarPedido(): void {
  Alert.alert('Pedido confirmado');
}

function vaciarPedido(): void {
  Alert.alert('Se vació el pedido');
}

export default function App() {
  const productosFavoritos = productosMenuDelDia.filter((producto) =>
    idsFavoritos.includes(producto.id),
  );

  return (
    <View style={styles.pantalla}>
      <ScrollView contentContainerStyle={styles.contenido}>
        <Text style={styles.tituloApp}>CampusCafé</Text>

        <View style={styles.seccion}>
          <EncabezadoSeccion
            titulo="Menú del día"
            cantidad={productosMenuDelDia.length}
            onVerTodo={verMenuCompleto}
          />
          {productosMenuDelDia.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              producto={producto}
              formatearPrecio={formatearPrecio}
              onPresionarBoton={agregarAlPedido}
            />
          ))}
        </View>

        <View style={styles.seccion}>
          <EncabezadoSeccion titulo="Sus favoritos" cantidad={productosFavoritos.length} />
          {productosFavoritos.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              producto={producto}
              formatearPrecio={formatearPrecio}
              onPresionarBoton={pedirOtraVez}
              textoBoton="Pedir otra vez"
            />
          ))}
        </View>

        <View style={styles.seccion}>
          <EncabezadoSeccion titulo="Su pedido" />
          <BotonAccion texto="Confirmar pedido" onPress={confirmarPedido} anchoCompleto />
          <BotonAccion
            texto="Vaciar pedido"
            onPress={vaciarPedido}
            apariencia="destructiva"
            anchoCompleto
          />
          <BotonAccion texto="Enviando..." onPress={confirmarPedido} enProceso anchoCompleto />
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#FAF6F2',
  },
  contenido: {
    paddingTop: 64,
    paddingHorizontal: 16,
    paddingBottom: 40,
    gap: 28,
  },
  tituloApp: {
    fontSize: 28,
    fontWeight: '800',
    color: '#6F4E37',
  },
  seccion: {
    gap: 12,
  },
});
