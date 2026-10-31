# Semana 3 · Laboratorio 1: Componentes reutilizables para CampusCafé

## E1

Cambio: data/menu.ts, línea 7, `'bebida'` → `'bebidas'`.

```
Type '"bebidas"' is not assignable to type 'Categoria'. Did you mean '"bebida"'?
menu.ts(8, 3): The expected type comes from property 'categoria' which is declared here on type 'Producto'
```

Explicación: el error aparece en data/menu.ts, línea 7. La lista de categorías ya está definida en types/menu.ts, línea 1, y es singular: solo acepta `'bebida'`, `'comida'` y `'postre'`, por eso `'bebidas'` no es válido.

## E2

Cambio: data/menu.ts, se eliminó `precio: 35,` (línea 8) del Café americano.

```
Property 'precio' is missing in type '{ id: string; nombre: string; categoria: "bebida"; disponibilidad: "disponible"; }' but required in type 'Producto'.
menu.ts(9, 3): 'precio' is declared here.
```

Explicación: `precio` es requerido porque no es opcional, no tiene el `?` (types/menu.ts, línea 9). En cambio, `esNuevo` sí tiene el `?` (types/menu.ts, línea 12), por eso al eliminarlo no aparece ningún error.

## E3

Cambio: App.tsx, se comentó `formatearPrecio={formatearPrecio}` (línea 56) de la TarjetaProducto del Menú del día.

```
Property 'formatearPrecio' is missing in type '{ key: string; producto: Producto; onPresionarBoton: (producto: Producto) => void; }' but required in type 'TarjetaProductoProps'.
TarjetaProducto.tsx(9, 3): 'formatearPrecio' is declared here.
```

Explicación: falta un prop de TarjetaProducto que es requerido, `formatearPrecio` (components/TarjetaProducto.tsx, línea 9). Lo hice requerido porque, si no lo fuera y una pantalla no lo pasara, la tarjeta no podría escribir el precio (components/TarjetaProducto.tsx, línea 41).

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

El precio final se calcula en la función `calcularPrecioFinal` de utils/precios.ts, líneas 7-9, y la tarjeta solo la llama en components/TarjetaProducto.tsx, línea 41.

La forma de escribir el precio se decide en App.tsx, líneas 10-14, con `simboloMoneda` y `formatearPrecio`. La tarjeta la recibe como prop en components/TarjetaProducto.tsx, línea 9.

Si otra sede usa otra moneda, solo cambiaría App.tsx, línea 10, el `simboloMoneda`. No se toca ningún archivo de components.

Si el cálculo o el formato estuvieran dentro de la tarjeta, se necesitaría cambiar components/TarjetaProducto.tsx para cada moneda, y eso es lo que el laboratorio pide evitar: la tarjeta debe funcionar sin modificar su archivo.

## P4

En components/EncabezadoSeccion.tsx, línea 18, se revisa si el componente padre le pasa el prop `onVerTodo`. Si se cumple, se mostrará el enlace "Ver todo"; si no, no se dibuja nada.

El prop es de tipo `(() => void) | undefined` (línea 8): una función que no recibe nada y no devuelve nada, o nada si no se pasa.

Es opcional porque no todas las secciones tendrán más elementos de los que ya se muestran. Por ejemplo, "Sus favoritos" y "Su pedido" no lo pasan, y por eso la línea 18 oculta el enlace.

## P5

## P6
