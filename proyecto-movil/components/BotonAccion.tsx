import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

export type AparienciaBoton = 'principal' | 'alternativa' | 'destructiva' | 'enlace';

export type TamanoBoton = 'pequeno' | 'mediano' | 'grande';

export type BotonAccionProps = {
  texto: string;
  onPress: () => void;
  apariencia?: AparienciaBoton;
  tamano?: TamanoBoton;
  anchoCompleto?: boolean;
  inhabilitado?: boolean;
  enProceso?: boolean;
};

export default function BotonAccion({
  texto,
  onPress,
  apariencia = 'principal',
  tamano = 'mediano',
  anchoCompleto = false,
  inhabilitado = false,
  enProceso = false,
}: BotonAccionProps) {
  const noResponde = inhabilitado || enProceso;

  return (
    <Pressable
      onPress={onPress}
      disabled={noResponde}
      accessibilityRole="button"
      accessibilityLabel={texto}
      accessibilityState={{ disabled: noResponde, busy: enProceso }}
      style={({ pressed }) => [
        styles.boton,
        estilosTamano[tamano],
        estilosApariencia[apariencia],
        anchoCompleto && styles.anchoCompleto,
        inhabilitado && styles.inhabilitado,
        pressed && styles.presionado,
      ]}
    >
      {enProceso ? (
        <ActivityIndicator color={colorIndicador[apariencia]} />
      ) : (
        <Text style={[styles.texto, estilosTextoApariencia[apariencia], estilosTextoTamano[tamano]]}>
          {texto}
        </Text>
      )}
    </Pressable>
  );
}

const colorPrincipal = '#6F4E37';
const colorDestructivo = '#C0392B';

const colorIndicador: Record<AparienciaBoton, string> = {
  principal: '#FFFFFF',
  alternativa: colorPrincipal,
  destructiva: '#FFFFFF',
  enlace: colorPrincipal,
};

const styles = StyleSheet.create({
  boton: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  anchoCompleto: {
    alignSelf: 'stretch',
  },
  inhabilitado: {
    opacity: 0.4,
  },
  presionado: {
    opacity: 0.7,
  },
  texto: {
    fontWeight: '600',
  },
});

const estilosApariencia = StyleSheet.create({
  principal: {
    backgroundColor: colorPrincipal,
    borderColor: colorPrincipal,
  },
  alternativa: {
    backgroundColor: 'transparent',
    borderColor: colorPrincipal,
  },
  destructiva: {
    backgroundColor: colorDestructivo,
    borderColor: colorDestructivo,
  },
  enlace: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    paddingHorizontal: 0,
  },
});

const estilosTextoApariencia = StyleSheet.create({
  principal: {
    color: '#FFFFFF',
  },
  alternativa: {
    color: colorPrincipal,
  },
  destructiva: {
    color: '#FFFFFF',
  },
  enlace: {
    color: colorPrincipal,
    textDecorationLine: 'underline',
  },
});

const estilosTamano = StyleSheet.create({
  pequeno: {
    minHeight: 32,
    paddingHorizontal: 12,
  },
  mediano: {
    minHeight: 42,
    paddingHorizontal: 16,
  },
  grande: {
    minHeight: 52,
    paddingHorizontal: 20,
  },
});

const estilosTextoTamano = StyleSheet.create({
  pequeno: {
    fontSize: 13,
  },
  mediano: {
    fontSize: 15,
  },
  grande: {
    fontSize: 17,
  },
});
