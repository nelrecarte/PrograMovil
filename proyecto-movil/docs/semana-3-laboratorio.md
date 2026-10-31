# Semana 3 · Laboratorio 1: Componentes reutilizables para CampusCafé

## E1

## E2

## E3

## P1

```ts
export type BotonAccionProps = {
  texto: string;
  onPress: () => void;
  apariencia?: AparienciaBoton;
  tamano?: TamanoBoton;
  anchoCompleto?: boolean;
  inhabilitado?: boolean;
  enProceso?: boolean;
};
```

`apariencia`, `tamano`, `anchoCompleto`, `inhabilitado` y `enProceso` son los props opcionales (components/BotonAccion.tsx, líneas 20-24). Son opcionales porque así cada pantalla puede definir este botón según lo necesite.

El botón es `principal` si no se especifica, para mantener una consistencia, así como el tamaño es `mediano`. No es necesario que `anchoCompleto` empiece en `true`, porque el botón tomaría todo el ancho de su contenedor. Y los botones están habilitados mientras ningún otro estado los cambie.

En components/BotonAccion.tsx, línea 26, se guarda un valor en `noResponde`: es `true` si `inhabilitado` o `enProceso` es verdadero, y entonces el botón no funciona. La línea 31 pasa el valor de `noResponde` a la prop `disabled` del `Pressable`. Así el botón ignora cualquier pulsación y nunca llama a `onPress` mientras está en estado `noResponde`.

Reducir la opacidad (components/BotonAccion.tsx, líneas 77-79) no sería suficiente: si el botón no tiene `disabled`, aún respondería.

## P2

## P3

## P4

## P5

## P6
