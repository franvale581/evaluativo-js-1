//ejercicio 1:

function verificarPares(numero) {
    if (numero % 2 === 0) {
        console.log(numero + ' es un número par.');
    }

    else {
        console.log(numero + ' es un número impar.');
    }

}

//verificamos que funciona

verificarPares(10); //número par

verificarPares(5); //número impar

// ejercicio 2:

function verificarMayor (num1, num2) {
    if (num1 > num2) {
        console.log(num1 + ' es mayor que ' + num2);
    }

    else if (num2 > num1) {
        console.log(num2 + ' es mayor que ' + num1);
    }

    else {
        console.log(' los numeros son iguales ');
    }
}


// verificamos que funciona

verificarMayor (20, 18); // 20 es mayor que 18

verificarMayor (10, 15); // 15 es mayor que 10

verificarMayor (10, 10); // los numeros son iguales


// ejercicio 3:

function multiploCinco (numero) {
    if (numero % 5 === 0) {
        console.log(numero + ' es multiplo de 5 ');
    }

    else {
        console.log(numero + ' no es multiplo de 5 ');
    }
}


//verificamos que funicona

multiploCinco (50); // 50 es multiplo de 5

multiploCinco (12); // 12 no es multiplo de 5


// ejercicio 4:

function imprimirNumeros (numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}

//verificamos que funciona 

imprimirNumeros (5); // imprime numeros hasta llegar al 5


// ejercicio 5:

function imprimirPalabra (palabra, cantidad) {
    for (let i = 1; i <= cantidad; i++ ) {
        console.log(palabra);
    }
}


//verificamos que funciona 

imprimirPalabra ('Hola', 5) // imprime la palabra 5 veces


// ejercicio 6:

function imprimirArray (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let Array = ['A','B','C'];

//verificamos que funciona

imprimirArray (Array); //imprime A, B, y C correctamente


// ejercicio 7:

function imprimirArrayMenos5to (array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) {
            console.log(array[i]);
        }
    }
}

let ArrayDos = [1,2,3,4,5,6,7,8,9,10];

//verificamos que funciona

imprimirArrayMenos5to (ArrayDos);// imprime todos los valores menos el 5to


// ejercicio 8:

function imprimirArrayMultiplicado (array, numero) {
    for (let i = 0; i < array.length; i++) {
        let resultado = array[i] * numero;
        console.log(resultado);
    }
}

let ArrayTres = [1,2,3,4,5];
let numero = [2];

//verificamos que funciona

imprimirArrayMultiplicado (ArrayTres, numero);//imprime el resultado entre el numero del array y el segundo parametro definido con el numero 2