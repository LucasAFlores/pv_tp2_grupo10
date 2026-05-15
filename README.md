# pv_tp2_grupo10

## Integrantes del Grupo

**Ejercicios realizado por Flores ,Lucas Alvaro Lautaro id en github @LucasAFlores**

### Ejercicio 10: Ingreso iterativo y Promedio
* Acción: Captura de una cantidad de números definida por el usuario a través de `prompt`.
* Lógica: Uso de un bucle `for` para iterar el ingreso de datos, guardando cada valor en un *array* con el método `.push()`. Se realiza la sumatoria acumulativa para calcular el promedio aritmético.
* Resultado: Impresión del array completo y el promedio final utilizando `document.write`.

### Ejercicio 11: Cálculo de Consumo de Combustible
* Acción: Solicitud de datos de entrada en este caso son kilómetros recorridos y litros consumidos  a traves del `prompt`.
* Lógica: Implementación de un algoritmo de cálculo secuencial y asignación a una constante.
* Resultado: Muestra en pantalla de los datos ingresados y el ratio de consumo (litros por kilómetro) empleando *template strings* y `document.write`.

### Ejercicio 12: Determinación de Paridad (Par o Impar)
* Acción: Ingreso de un número entero por parte del usuario.
* Lógica: Aplicación del operador módulo (`%`) dentro de una estructura condicional `if/else` para evaluar estrictamente (`===`) si el resto de la división por 2 es cero.
* Resultado: Impresión en el documento indicando la paridad exacta del valor evaluado.

### Ejercicio 22: Reflejo de Texto en Tiempo Real
Se desarrolló una interfaz que permite la sincronización inmediata de datos.
* Acción: Se capturó el evento `input` en un campo de texto.
* Lógica: A medida que el usuario escribe, el valor se obtiene mediante `event.target.value` y se inyecta dinámicamente en un párrafo de la página utilizando la propiedad `textContent`.
* Resultado: Se logra una respuesta visual instantánea del sistema ante la entrada del usuario.

### Ejercicio 23: Validación Dinámica y Feedback Visual
* Acción: Se monitorea la longitud de la cadena de texto ingresada en tiempo real.
* Lógica: Se implementó una estructura condicional que evalúa la propiedad `.length`. Si el texto supera el límite de 20 caracteres, se modifica directamente el objeto `style` del elemento para cambiar su color de fondo.
* Resultado: El usuario recibe una alerta visual automática (feedback) cuando los datos ingresados cumplen una condición específica.