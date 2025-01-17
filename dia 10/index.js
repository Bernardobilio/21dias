const array = [];
const indices = [];
let contadorIndice = 0 

const numeroProcurado = parseInt(prompt("Digite o numero a ser procurado"))

for (let i = 0; i < 10; i++) { // SUPOMOS QUE O ARRAY TEM ATÉ 10 ELEMENTOS 
      const elemento = parseInt(prompt(`Digite o elemento ${i=1}:`));
      array[i] = elemento;   
}

for (let i=0; i < 10; i++) {//Supomos que o array tem 10 elementos 
      if(array[i] === numeroProcurado) {
        indices[contadorIndice] = 1 
        contadorIndice++
      }    
}

console.log(`O numero ${numeroProcurado} foi econtrado nos indices: ${indices}`);

//Criando variaveis
let array = []
let arayInvertido = []

//Populando array

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("digite o" + (i + 1) +"o numero"))
    array[i] = numero
} 

console.log("array original: " + array)

//Invertendo array

let contador = 4
for (let i = 0; i < 5; i++ ) {
    arrayInvertido[i] = array[contador]
    contador--

}

console.log("array invertido" + arrayInvertido)

// Criando variaveis

let array = []
let arrayInvertido = []
let quantidade = parseInt(prompt("Digite a quantidade de numero para inserir no array"))

//Populando Array
for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt("digite o" + (i + 1) +"o numero"))
    array[i] = numero

}

console.log("array original: " + array)

//Invertendo array

let contador = quantidade - 1
for (let i = 0; i < 5; i++ ) {
    arrayInvertido[i] = array[contador]
    contador--

}

console.log("array invertido" + arrayInvertido)

//Criando variaveis 

let numero = parseInt(prompt("Digite um numero inteiro e positivo"))
let fibonacci = []
fibonacci [0] = numero -1
fibonacci [1] = numero

//criando loop

for(let i = 2; i<10; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}

console.log("fibonacci" + fibonacci)