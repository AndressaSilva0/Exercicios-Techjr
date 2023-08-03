const prompt = require("prompt-sync")();


console.log("Digite os valores positivos, o programa será pausado quando o numero negativo for informado\n")
let numero = prompt("Digite um valor: ")

let maior = numero;
let menor = numero;

while(numero>=0){
    if (numero > maior) {
        maior = numero;
    }
    if (numero < menor) {
         menor = numero;
        
        }

       numero = prompt("Digite outro valor: ")
}

console.log({maior, menor})

   