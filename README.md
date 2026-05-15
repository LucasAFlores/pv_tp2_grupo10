# pv_tp2_grupo10

Trabajo Práctico 2 — **Programación Visual**. Repositorio del **grupo 10** con ejercicios en JavaScript: consola (Parte 1) y páginas web con DOM y módulos ES (Parte 2).

## Integrantes del grupo

| Nombre completo | Usuario de GitHub |
|-----------------|-------------------|
| Gabriel Ortega | [Gabo506](https://github.com/Gabo506) |
| Lucas Alvaro Flores | [LucasAFlores](https://github.com/LucasAFlores) |
| Federico Rios Marcial | [Fede-Marcial](https://github.com/Fede-Marcial) |
| Mauro Arcangel Chauque | [Mauro006](https://github.com/Mauro006) |
| Vega Brian Agustin | [mitisbroken-debug](https://github.com/mitisbroken-debug) |

---

## Estructura del proyecto

```
pv_tp2_grupo10/
├── js/                 # Scripts de consola (1–8) y módulos (19–25)
├── css/                # Estilos de ejercicios con interfaz
├── ejercicio9.html …   # HTML de ejercicios en navegador
└── README.md
```

**Cómo ejecutar**

- **Ejercicios 1 a 8:** abrir el `.js` en VS Code y correr con **Code Runner**, o `node js/ejercicioN.js`.
- **Ejercicios con HTML:** abrir el `.html` en el navegador. Los que usan `type="module"` conviene abrirlos con **Live Server** u otro servidor local.

---

## Parte 1

### Consola (`js/ejercicio1.js` … `js/ejercicio8.js`)

Uso de `let`, `const`, funciones flecha, `console.log()` y template strings.

| Ejercicio | Archivo | Qué hicimos |
|-----------|---------|-------------|
| **1** | `js/ejercicio1.js` | Constante `integrantes` con los nombres del grupo; mensaje por consola: *Somos … y estamos aprendiendo javascript.* |
| **2** | `js/ejercicio2.js` | Bucle `while` del 1 al 10; se imprimen solo los números impares. |
| **3** | `js/ejercicio3.js` | Volumen de una esfera con radio 4 m usando `Math.pow`. |
| **4** | `js/ejercicio4.js` | Lados de un rectángulo; área y perímetro en cm con arrow functions. |
| **5** | `js/ejercicio5.js` | Variables `horas` y `minutos`; conversión a segundos y salida por consola. |
| **6** | `js/ejercicio6.js` | Array `edades` con 8 valores; listado con `forEach` y promedio con `reduce`. |
| **7** | `js/ejercicio7.js` | Array `nombres` con 6 nombres; recorrido y búsqueda del nombre más largo con `.length`. |
| **8** | `js/ejercicio8.js` | Array `notas` con 10 enteros: listado, aprobadas (≥6), desaprobadas (<6), promedio y cantidad de aprobadas. |

### Navegador (`ejercicio9.html` … `ejercicio18.html`)

Código en `<script>` dentro del HTML; `prompt`, `document.write` y template strings.

| Ejercicio | Archivo | Qué hicimos |
|-----------|---------|-------------|
| **9** | `ejercicio9.html` | Formulario con inputs de apellido y nombre; botón que muestra el saludo de bienvenida a Programación Visual (estilos en el mismo HTML). |
| **10** | `ejercicio10.html` | Cantidad de números por `prompt`, carga en array con `for` y `.push()`, promedio con función flecha `calcularPromedio` y resultado con `document.write`. |
| **11** | `ejercicio11.html` | Kilómetros y litros por `prompt`; consumo litros/km con `calcularConsumo` y template strings. |
| **12** | `ejercicio12.html` | Un número por `prompt`; `if/else` con función `esPar` para indicar par o impar. |
| **13** | `ejercicio13.html` | Función `mostrarArreglo`; el usuario define cuántos números cargar y se muestran en un `alert` línea por línea. |
| **14** | `ejercicio14.html` | Función `duplicar` que devuelve un array con cada valor ×2; carga iterativa y salida con `document.write`. |
| **15** | `ejercicio15.html` | Función `retornarMes` con array de meses; convierte un número del 1 al 12 en nombre de mes o mensaje de error. |
| **16** | `ejercicio16.html` | Función `sumarRango(inicial, final)` que suma el intervalo inclusive; valida que el inicial sea ≤ al final. |
| **17** | `ejercicio17.html` | Función `contarLetraA` que cuenta las **a** (y **á**) en un texto ingresado por `prompt`. |
| **18** | `ejercicio18.html` | Función `calcularMayor(numero1, numero2)`; compara dos números del usuario e indica cuál es mayor o si son iguales. |

---

## Parte 2

Cada ejercicio tiene su **HTML**, **CSS** (cuando aplica) y JavaScript en **`js/ejercioN.js`** + **`js/funcionesN.js`**, enlazado con:

```html
<script type="module" src="js/ejercicioN.js"></script>
```

Funciones compartidas con **`export`** e **`import`**.

| Ejercicio | Archivos | Qué hicimos |
|-----------|----------|-------------|
| **19** | `ejercicio19.html`, `css/ejercicio19.css`, `js/ejercicio19.js`, `js/funciones19.js` | Input de texto y botón **Agregar párrafo**; al hacer clic, el texto pasa al párrafo de resultado y se limpia el campo (`newparrafos`). |
| **20** | `ejercicio20.html`, `css/ejercicio20.css`, `js/ejercicio20.js`, `js/funciones20.js` | Tres inputs (nombre, apellido, libreta universitaria); con `querySelector` y `.value` se arma un `alert` con el formato de datos del alumno (`mostrarDatos`). |
| **21** | `ejercicio21.html`, `css/ejercicio21.css`, `js/ejercicio21.js`, `js/funciones21.js` | Dos `<select>`: países de América (7) y capitales; al `change` en el país se selecciona la capital automáticamente y se registra en consola país y capital. |
| **22** | `ejercicio22.html`, `css/ejercicio22.css`, `js/ejercicio22.js`, `js/funciones22.js` | `<input type="text">` que refleja el texto en un `<p>` en tiempo real con el evento `input` (`reflejarTexto`). |
| **23** | `ejercicio23.html`, `css/ejercicio23.css`, `js/ejercicio23.js`, `js/funciones23.js` | Igual que el 22; si el texto supera 20 caracteres, el fondo del contenedor de salida cambia de color. |
| **24** | `ejercicio24.html`, `css/ejercicio24.css`, `js/ejercicio24.js`, `js/funciones24.js` | Tres radios (JavaScript, C++, Python); al `change` se muestra en pantalla el lenguaje elegido con `mostrarSeleccion`. |
| **25** | `ejercicio25.html`, `css/ejercicio25.css`, `js/ejercicio25.js`, `js/funciones25.js` | Botón que cambia el fondo del `body` a un color aleatorio de una paleta; mensaje en consola en cada clic (`obtenerColorAleatorio`). |

---

## Tecnologías

HTML5 · CSS3 · JavaScript (ES6+, módulos ES) · Node.js / Code Runner (ejercicios 1–8)
