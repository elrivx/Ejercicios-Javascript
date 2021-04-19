// El siguiente ejercicio muestra una función que
// mostrará por consola los números de 0 a X,
// así como el resultado de la sumatoria entre ellos.

function printSum(x){
  var sum = 0;
 
  for (i=0; i<=x; i++){
    console.log(i);
    sum = sum + i;
  }
  return sum;
}
 
y = printSum(255);
console.log(y);