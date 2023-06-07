/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal.
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 
*/

function daysDifference(date1, date2) {
  var date1 = date1 instanceof Date ? date1 : new Date(date1);
  var date2 = date2 instanceof Date ? date2 : new Date(date2);

  const milisecondsDifference = Math.abs(date1.getTime() - date2.getTime());

  const days = Math.floor(milisecondsDifference / (1000 * 60 * 60 * 24));

  return "The difference are " + days + " days";
}

console.log(daysDifference("Dec 1, 2023", "Dec 24, 2023"));
console.log(daysDifference("2023-12-1", "2023-12-16"));
