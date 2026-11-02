import { StyleSheet, Text, View } from 'react-native';
import Etiqueta from './Etiqueta';

type TarjetaEjercicioProps = {
  nombre: string;
  series: number;
  repeticiones: number;
  grupoMuscular: string;
  destacado?: boolean;
};

export default function TarjetaEjercicio({
  nombre,
  series,
  repeticiones,
  grupoMuscular,
  destacado = false,
}: TarjetaEjercicioProps) {
  return (
    <View style={[estilos.tarjeta, destacado && estilos.tarjetaDestacada]}>
      <View style={estilos.filaSuperior}>
        <Text style={estilos.nombre}>{nombre}</Text>
        <Etiqueta texto={grupoMuscular} colorFondo={destacado ? '#E8590C' : '#3B4BD8'} />
      </View>
      <Text style={estilos.detalle}>
        {series} series × {repeticiones} repeticiones
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  tarjetaDestacada: {
    backgroundColor: '#FFF4E6',
    borderColor: '#E8590C',
    borderWidth: 2,
  },
  filaSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  nombre: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: '#1B1F3B',
  },
  detalle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
  },
});
