// Aquí tenemos un caso particular. Si sumamos una función
// con la misma función, pasarán cosas diferentes
// basadas en la definición de la función.

var x=10;

function abc(x){

    console.log(x);
    return x*10;
}

var z = abc(x) + abc(x);
console.log(z);

// En éste caso, repetira 2 veces el console.log
// y además sumará el valor del retorno dos veces.
// O sea, el resultado será:
// 10
// 10
// 200
