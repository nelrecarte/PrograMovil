import { StyleSheet, Text, View } from 'react-native';

type EtiquetaProps = {
  texto: string;
  colorFondo: string;
};

export default function Etiqueta({ texto, colorFondo }: EtiquetaProps) {
  return (
    <View style={[estilos.pildora, { backgroundColor: colorFondo }]}>
      <Text style={estilos.texto}>{texto}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  pildora: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  texto: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
