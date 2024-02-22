//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function parImpar (numero){
    if (numero%2==0){
        console.log("El número "+numero+" es par.");
    } else
        console.log("El número "+numero+" es impar.");
    return numero;
}

let numero=prompt("Ingrese un número para saber si es par o impar");
parImpar(numero);

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function mayorIguales (numero2,numero3){
    if (numero2==numero3){
        console.log(numero2+" y "+numero3+" son iguales.");
    } else if (numero2>numero3){
        console.log("El número "+numero2+" es el mayor.");
    }else
        console.log("El número "+numero3+" es el mayor.");
    return numero2,numero3;
}

let numero2=prompt("Ingrese un número para compararlo con otro y saber cuál es mayor");
let numero3=prompt("Ingrese otro número");
mayorIguales(numero2,numero3);

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploDe5 (numero4){
    if (numero4%5==0){
        console.log(numero4+" es múltiplo de 5.");
    }else{
        console.log(numero4+" no es múltiplo de 5.")
    }
}

let numero4=prompt("Ingrese un número para saber si es múltiplo de 5");
multiploDe5(numero4);

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function ceroHastaNum (numero5){
    let conteo;
    for (let i=0; i<=numero5; i++){
        conteo=i;
        console.log(conteo);
    }
return conteo;
}

let numero5=prompt("Ingrese un número para ver su distancia con el 0");
ceroHastaNum(numero5);

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function palabraYNumero (palabra1,numero6){
    for (let i=0; i<numero6; i++){
        console.log(palabra1);
    }
}

let palabra1=prompt("Ingrese una palabra");
let numero6=prompt("Ingrese un número para repetir la palabra esa cantidad de veces");
palabraYNumero(palabra1,numero6);

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function imprimirArray(array){
    for (let i=0;i<array.length;i++){
        console.log(array[i]);
    }
    return array;
}

let array=[1,2,3,4,5];
imprimirArray(array);

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo

function imprimirSegundoArray(array2){
    for (let i=0;i<array2.length;i++){
        if (i!==5){
            console.log(array2[i]); 
        }
    }
    return array2;
}

let array2=[1,2,3,4,5,6,7,8,9,10];
imprimirSegundoArray(array2);


//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function arrayMultiplicar(array3){
    for (let i=0;i<array.length;i++){
        console.log(array3[i]*numero7);
    }
    return array3,numero7;
}

let array3=[1,2,3,4,5,6,7,8,9,10];
let numero7=2;
arrayMultiplicar(array3,numero7);