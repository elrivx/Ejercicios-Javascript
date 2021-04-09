function sum_even_numbers(){

    var sum = 0;

    for (i=0; i<=1000; i =i+2){

        sum +=i;
    }

    return sum;
}

y = sum_even_numbers();

console.log(y);
