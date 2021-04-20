f// Foreach ejecutará una función para cada número del arreglo

function printSumArray(x){
        
  var sum = 0;
  
  x.forEach (function(num){
      sum += num;
  });
  
  return sum;
  
}

numeros = [1,2,3];
var suma = printSumArray(numeros);
console.log(suma);