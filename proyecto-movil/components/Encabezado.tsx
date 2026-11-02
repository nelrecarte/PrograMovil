import { StyleSheet, Text, View } from 'react-native';

type EncabezadoProps = {
  titulo: string;
  subtitulo: string;
};

export default function Encabezado({ titulo, subtitulo }: EncabezadoProps) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>{titulo}</Text>
      <Text style={estilos.subtitulo}>{subtitulo}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1B1F3B',
    textAlign: 'left',
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: '500',
    color: '#6B7280',
    marginTop: 4,
  },
});
