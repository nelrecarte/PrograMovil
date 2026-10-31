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

1. En App.tsx, línea 24, se define la función `pedirOtraVez`, que es lo que ocurre al tocar el botón.
2. En App.tsx, línea 69, la pantalla le pasa `pedirOtraVez` a la tarjeta en el prop `onPresionarBoton`.
3. En components/TarjetaProducto.tsx, línea 46, la tarjeta le pasa al botón una función que llama a `onPresionarBoton` y le agrega el producto de esa tarjeta.
4. En components/BotonAccion.tsx, línea 30, el botón le pasa esa función al `Pressable` en su `onPress`.
5. Al presionar el botón se activa `pedirOtraVez` y se ejecuta la alerta en App.tsx, línea 25, que muestra "Pedido rápido: <producto>" en pantalla.

## P3

## P4

En components/EncabezadoSeccion.tsx, línea 18, se revisa si el componente padre le pasa el prop `onVerTodo`. Si se cumple, se mostrará el enlace "Ver todo"; si no, no se dibuja nada.

El prop es de tipo `(() => void) | undefined` (línea 8): una función que no recibe nada y no devuelve nada, o nada si no se pasa.

Es opcional porque no todas las secciones tendrán más elementos de los que ya se muestran. Por ejemplo, "Sus favoritos" y "Su pedido" no lo pasan, y por eso la línea 18 oculta el enlace.

## P5

## P6
