import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CajaEstadistica from './components/CajaEstadistica';
import Encabezado from './components/Encabezado';
import TarjetaEjercicio from './components/TarjetaEjercicio';

export default function App() {
  return (
    <View style={estilos.pantalla}>
      <ScrollView contentContainerStyle={estilos.contenido}>
        <Encabezado titulo="Mi rutina de hoy" subtitulo="Lunes · Tren superior" />

        <View style={estilos.filaEstadisticas}>
          <CajaEstadistica valor="4" etiqueta="ejercicios" />
          <CajaEstadistica valor="45" etiqueta="minutos" />
          <CajaEstadistica valor="320" etiqueta="kcal" />
        </View>

        <Text style={estilos.tituloSeccion}>Ejercicios</Text>

        <TarjetaEjercicio nombre="Press de banca" series={4} repeticiones={10} grupoMuscular="pecho" />
        <TarjetaEjercicio nombre="Remo con barra" series={4} repeticiones={12} grupoMuscular="espalda" destacado />
        <TarjetaEjercicio nombre="Press militar" series={3} repeticiones={10} grupoMuscular="hombro" />
        <TarjetaEjercicio nombre="Curl de bíceps" series={3} repeticiones={12} grupoMuscular="brazos" />
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#F3F4F8',
  },
  contenido: {
    paddingTop: 64,
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  filaEstadisticas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 24,
  },
  tituloSeccion: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1B1F3B',
    textAlign: 'left',
    marginBottom: 12,
  },
});
