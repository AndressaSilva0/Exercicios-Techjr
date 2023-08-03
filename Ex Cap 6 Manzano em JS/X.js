const prompt = require('prompt-sync')();

let A = [];
let B = [];


console.log("Digite um valor inteiro nos elementos da Matriz A: ")
for (let i = 0; i < 6; i++) {
    A[i] = parseInt(prompt(("Digite um valor: ")));

    }
    
    for (let i = 0; i < 6; i++) {
        if (i % 2 == 0) {
            B[i] = A[i + 1]; // Elementos de índice par de A vão para índices pares de B
        } else {
            B[i] = A[i - 1]; // Elementos de índice ímpar de A vão para índices ímpares de B
        }
    }


console.log("Os valores da Matriz A: ")
console.table(A);
console.log("Os valores da Matriz B: ")
console.table(B);