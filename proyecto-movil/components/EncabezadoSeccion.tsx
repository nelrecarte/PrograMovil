import { StyleSheet, Text, View } from 'react-native';

import BotonAccion from './BotonAccion';

export type EncabezadoSeccionProps = {
  titulo: string;
  cantidad?: number;
  onVerTodo?: () => void;
};

export default function EncabezadoSeccion({ titulo, cantidad, onVerTodo }: EncabezadoSeccionProps) {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.titulo}>
        {titulo}
        {cantidad !== undefined && <Text style={styles.cantidad}> ({cantidad})</Text>}
      </Text>
      {onVerTodo !== undefined && (
        <BotonAccion texto="Ver todo" onPress={onVerTodo} apariencia="enlace" tamano="pequeno" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  titulo: {
    flexShrink: 1,
    fontSize: 20,
    fontWeight: '700',
    color: '#2B1D14',
  },
  cantidad: {
    fontWeight: '400',
    color: '#8A7F78',
  },
});
