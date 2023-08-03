const prompt = require('prompt-sync')();

let A = [];
let B = [];
let C = [];

function analise(matriz){
    if(matriz % 2 == 0 && matriz % 3 == 0){
      A.push(matriz)
    }else if(matriz % 5 == 0){
        B.push(matriz)
    }
}

console.log("Digite numeros inteiros que serão formados segundo o que foi pedido: ")
for(let i = 0; i < 24; i++){
    analise(prompt('Digite um numero: '))
}
C = A.concat(B);

console.log("Os valores da Matriz A, são apenas divisiveis por 2 e 3: ")
console.table(A);
console.log("Os valores da Matriz B, são apenas divisiveis por 5: ")
console.table(B);
console.log("Os valores da Matriz C, são a junção da Matriz A e B: ")
console.table(C);
