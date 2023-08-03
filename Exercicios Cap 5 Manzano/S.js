const prompt = require("prompt-sync")();

function quociente(){
console.log("Digite os valores do dividendo e Divisor\n")
let dividendo = prompt("Digite um valor: ")
let divisor = prompt("Digite um valor: ")
if (divisor == 0) {
    console.log("Erro! O divisor não pode ser zero.\n");   
}
let i = 0
while (dividendo >= divisor) {
    dividendo -= divisor;
    i++;
}
console.log({i});
}
quociente();