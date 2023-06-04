//Imprimir los 100 primeros números de la sucesión de Fibonacci.


function fibonacci(n):number {
    if (n <= 1){
        return n;
    } else {
        n = fibonacci(n - 1) + fibonacci(n - 2);
        return n;
    }

}

for (let i:number = 0; i <= 100; i++){
    console.log(fibonacci(i));
}