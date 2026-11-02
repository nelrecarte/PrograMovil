# Semana 3 · Tarea 1: Investigación de estilos en React Native

## A1. Flexbox

**1. Valor por defecto de flexDirection.**
En React Native el valor por defecto es `column`, así que los elementos se acomodan de arriba hacia abajo. En CSS para la web el valor por defecto es `row`, y los elementos se acomodan de izquierda a derecha.

**2. justifyContent vs. alignItems.**
`justifyContent` acomoda a los hijos sobre el eje principal y `alignItems` los acomoda sobre el eje secundario (el cruzado). Con `flexDirection: 'column'`, `justifyContent` trabaja en vertical y `alignItems` en horizontal. Con `flexDirection: 'row'` es al revés: `justifyContent` trabaja en horizontal y `alignItems` en vertical.

**3. Valores de justifyContent.**
- `flex-start`: junta a los hijos al inicio del eje principal (es el valor por defecto).
- `flex-end`: los junta al final del eje.
- `center`: los pone en el centro del eje.
- `space-between`: deja el primero al inicio, el último al final y reparte el espacio sobrante entre ellos.
- `space-around`: le da a cada hijo el mismo espacio a sus dos lados, por eso en los extremos queda la mitad.
- `space-evenly`: deja exactamente el mismo espacio entre todos, incluidos los bordes.

**4. flex: 1.**
`flex: 1` hace que el componente se estire para ocupar el espacio que queda disponible en el eje principal de su padre. Si dos `View` hermanos tienen `flex: 1` y `flex: 2`, el espacio se divide en 3 partes: el primero toma 1/3 y el segundo 2/3.

## A2. Estilos de View

**5. padding vs. margin.**
`padding` es el espacio por dentro del componente, entre su borde y su contenido. `margin` es el espacio por fuera, entre el componente y los elementos que lo rodean. `paddingHorizontal` aplica el padding a la izquierda y a la derecha al mismo tiempo, y `marginVertical` aplica el margen arriba y abajo al mismo tiempo.

**6. Bordes y esquinas.**
Para dibujar un borde se usan `borderWidth` (el grosor) y `borderColor` (el color); también existe `borderStyle` (`solid`, `dashed` o `dotted`). Para redondear las esquinas se usa `borderRadius`, o una esquina específica con `borderTopLeftRadius`, `borderBottomRightRadius`, etc.

## A3. Estilos de Text

**7. Propiedades básicas de texto.**
- `fontSize`: el tamaño de la letra.
- `fontWeight`: el grosor de la letra (normal o negrita). Recibe texto: `'normal'`, `'bold'` o un número escrito como texto, de `'100'` a `'900'`.
- `color`: el color del texto.
- `textAlign`: la alineación horizontal del texto (`left`, `center`, `right`, `justify`).
- `lineHeight`: la altura de cada línea, o sea, el espacio vertical entre líneas.
- `letterSpacing`: el espacio extra entre cada letra.

**8. textTransform y textDecorationLine.**
`textTransform` cambia cómo se muestran las mayúsculas sin cambiar el texto original; por ejemplo, `'uppercase'` muestra todo en mayúsculas. `textDecorationLine` agrega líneas al texto; por ejemplo, `'underline'` lo subraya y `'line-through'` lo tacha.

**9. Herencia de estilos.**
En React Native los estilos de texto solo se heredan dentro de un árbol de `Text`: un `Text` anidado dentro de otro `Text` toma su color, tamaño, etc. Un `View` no es un componente de texto, así que no puede pasar estilos de texto a sus hijos. La documentación explica que esto es intencional: se evita la herencia en cascada de la web para que cada texto sea predecible y no dependa de dónde esté colocado.

## A4. StyleSheet

**10. Ventajas de StyleSheet.create.**
Separa los estilos del JSX, lo que hace el componente más fácil de leer y mantener. Permite ponerles nombres descriptivos y reutilizarlos en varios elementos. Además, el editor valida las propiedades con TypeScript y avisa si escribimos mal alguna, y evita crear un objeto nuevo en cada renderizado como pasa con los estilos escritos dentro del JSX.

**11. Arreglo de estilos.**
Cuando se pasa un arreglo como `[estilos.tarjeta, estilos.tarjetaDestacada]`, React Native lo combina de izquierda a derecha y el último estilo tiene prioridad. Si los dos definen `backgroundColor`, gana el de `estilos.tarjetaDestacada`, porque está después en el arreglo y sobrescribe el valor anterior.
