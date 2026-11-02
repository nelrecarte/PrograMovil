import { StyleSheet, Text, View } from 'react-native';

type CajaEstadisticaProps = {
  valor: string;
  etiqueta: string;
};

export default function CajaEstadistica({ valor, etiqueta }: CajaEstadisticaProps) {
  return (
    <View style={estilos.caja}>
      <Text style={estilos.valor}>{valor}</Text>
      <Text style={estilos.etiqueta}>{etiqueta}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  caja: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  valor: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3B4BD8',
    textAlign: 'center',
  },
  etiqueta: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
  },
});
