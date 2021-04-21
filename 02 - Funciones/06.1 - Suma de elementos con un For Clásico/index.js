// Aquí vemos como sumar los elementos de un
// arreglo dado. La diferencia con el ejercicio
// 06 es que aquí usamos un bucle For.

function iterArr(arr){
  var sum = 0;
  for (var i = 0; i<arr.length; i++){
    
    sum = sum + arr[i];
    
    
  }
  return sum;
}
 
y = iterArr([-5,2,5,12]);
console.log(y);

// Nota: Javascript por si solo no muestra automáticamente el resultado 
// cuando se lanza un return. Para no tener ese inconveniente existen dos opciones:
// 1) Cambiar el return por un console.log
// 2) al momento de llamar a la función, hacer un console.log a la función
// o a la variable que contiene el valor que devuelve la función.