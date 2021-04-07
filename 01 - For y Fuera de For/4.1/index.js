// El siguiente ejercicio no mostrará nada. ¿Sabes por qué?

for (var num1=0; num1<=3; num1++){

    for (var num2=0; num2<=2; num2++){

        if (num1 == 5){

            console.log('Hola');
        }
    }
}

// Respuesta: Al no considerar el segundo FOR,
// nunca ejecutará el console.log.
