
let somatorio = 0;
let fat;
const prompt = require('prompt-sync')();

console.log("Digite apenas valores inteiros:\n");

for (let i = 0; i < 15; i++){
fat=1;
const valor = prompt('Digite o valor: ');

for (let n = valor; n >= 1; n--)
{
fat*=n;
console.log(fat);
}
somatorio+=fat;
}


console.log(`resultado do somatorio é: ${somatorio}`);