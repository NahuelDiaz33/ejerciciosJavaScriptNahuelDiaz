// Ejercicio 1  FINALIZADO
// let numero =parseInt(prompt("Ingrese un numero para multiplicar"))

// for (let i = 1; i <=10; i++){
//     console.log(numero * (i) )    
// }

//Ejercicio 2  FINALIZADO

// let numero=parseInt(prompt("Ingrese un numero"))
// let suma=0

// while (numero != 0 ) {
//     if(numero){
//         suma+= numero
//     }else{
//         console.log("Se ingreso un 0")
//     }
//     console.log(suma)
//     numero=parseInt(prompt("Ingrese un numero"))
// }
// console.log(suma)

//Ejercicio 3 FINALIZADO

// let numAdivinar = 50
// let numeroIngresar;
// let intentos = 0

// while (numeroIngresar != numAdivinar) {
//     numeroIngresar = parseInt(prompt("Ingresar un numero alazar del 1 al 100"))
//     intentos++
//     if (numeroIngresar > numAdivinar) {
//         alert("Tu numero es mas grande, intenta de nuevo")
//     } else if (numeroIngresar < numAdivinar) {
//         alert("Tu numero es mas chiquito, intenta de nuevo")
//     } else {
//         alert("Felicitaciones encontraste el numero ,tus intentos fueron: " + intentos)
//     }
// }

//Ejercicio 4 FINALIZADO

// let numero = parseInt(prompt("Ingrese un numero"))
// let esPrimo = true

// if (numero <= 1) {
//     console.log("Este numero no es Primo");
// } else {
//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) {
//             esPrimo = false
//         }
//     }
//     if (esPrimo) {
//         console.log("Este numero es Primo " + numero);
//     } else {
//         console.log("Este numero no es Primo " + numero);
//     }
// }



// Ejercicio 5 FINALIZADO

// let numero = parseInt(prompt("Ingrese un número: "));

// if (numero) {
//     for (let i = 1; i <= numero; i++) {
//         if (numero % i === 0) {
//             console.log(i);
//         }
//     }
// }

// Ejercicio 6  FINALIZADO

// let elementos=["Manzana","Banana","Frutilla","Pera","Tomate","Limon","Moneda","Pelota","Espejo","Celular"]


// for (let i = 0; i < elementos.length; i++) {
//     console.log(elementos[i])
// }

// Ejercicio 7   FINALIZADO

// let numeros=[1,2,3,4,5,6,7,8,9,10]


// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]*2)
// }

//Ejercicio 8 FINALIZADO

// let grupoFamiliar=[
//     {nombre:"Nahuel", Apellido: "Diaz",edad:24,tipo:"Hijo"},
//     {nombre:"Juana", Apellido: "Zapata",edad:59,tipo:"Madre"},
//     {nombre:"Quique", Apellido: "Diaz",edad:54,tipo:"Padre"},
//     {nombre:"Jossy", Apellido: "Zapata",edad:33,tipo:"Hija"},
//     {nombre:"Blacky ", Apellido: "Diaz Zapata",edad:16,tipo:"Perro"},
// ]

// for (let i = 0; i < grupoFamiliar.length; i++) {
//     console.log(grupoFamiliar[i])
// }

// // Ejercicio 9 FINALIZADO
// let numeros = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] %2==0) {
//         console.log(numeros[i])
//      }

// }


// Ejercicios 10 FINALIZADO

// let numeros=[1,2,3,4,5,6,7,8,9,10]
// let numeros = parseInt(prompt("Ingrese numeros"))
// let sumaImpar = 0
// let sumaPar = 0

// for (let i = 0; i < numeros; i++) {
//     if (numeros !== 0) {
//         if (numeros % 2 == 0) {
//             sumaImpar += numeros
//         } else {
//             sumaPar += numeros
//         }
//     }
//     numeros = parseInt(prompt("Ingrese otros"))
// }

// console.log("Suma de numeros pares " + sumaImpar);
// console.log("Suma de numeros impares " + sumaPar);

// // // Ejercicio 11 FINALIZADO
// let numeros=[1,2,3,4,5,2,7,8,9,10]

// let numeroMaximo=0

// for (let i = 0; i < numeros.length; i++) {
//         if(numeros[i]> numeroMaximo){
//             numeroMaximo = numeros[i]
//         }
// }
// console.log(numeroMaximo);

// //Ejercicio 12 FINALIZADO
// let numeros=[13,12,34,44,52,25,77,89,90,100]
// // let numeros=parseInt(prompt("Ingrese"))

// let numeroMinimo=numeros[0]

// for (let i = 0; i < numeros.length; i++) {
//     if(numeroMinimo!==0){
//         if(numeros[i]<numeroMinimo){
//             numeroMinimo = numeros[i]
//         }
//     }
// }
// console.log(numeroMinimo);

// Ejercicio 13 FINALIZADO

// let jugador1 = prompt("Ingrese el nombre del jugador 1: ")
// let jugador2 = prompt("Ingrese el nombre del jugador 2: ")
// let empate = true

// while (empate) {
//     let opcion1 = prompt(jugador1 + " Elegir la opcion con la que queres jugar (Piedra,Papel o Tijera)")
//     let opcion2 = prompt(jugador2 + " Elegir la opcion con la que queres jugar (Piedra,Papel o Tijera)")

//     if (opcion1 === opcion2) {
//         alert("Empate. Juga de nuevo")
//     } else if (
//         (opcion1 == "Piedra" && opcion2 == "Tijera") ||
//         (opcion1 == "Papel" && opcion2 == "Piedra") ||
//         (opcion1 == "Tijera" && opcion2 == "Papel")
//     ) {
//         console.log(jugador1 + " Gano")
//         empate = false
//     }
//     else {
//         console.log(jugador2 + " Gano")
//         empate = false
//     }
// }

// Ejercicio 14 FINALIZADO

// for (let i = 0; i <5; i++) {
//     let linea = ""
//     for (let j = 0; j <= i; j++) {
//         linea += "*"
//     }
//     console.log(linea)
// }

// Ejercicio 15  FINALIZADO

// for (let i = 5; i > 0; i--) {
//     let linea = '';
//     for (let j = 1; j <= i; j++) {
//         linea += '*';
//     }
//     console.log(linea);
// }

// Ejercicio 16 proxima semana

let numeros=[10,50,30,1,6,7,5,1,33,100]

