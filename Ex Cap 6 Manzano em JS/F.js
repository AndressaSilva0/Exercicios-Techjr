const prompt = require('prompt-sync')();

function matrizes(){
    let A = [];
    let B = [];
    let C = [];

   console.log("\nDigite os elementos da matriz A\n")
    for (let i= 0; i < 15; i++) {
       A.push(prompt("Digite um elemento: "))
        A[i]; 
    }

    console.log("\nDigite os elementos da matriz B\n")

    for (let j= 0; j < 15; j++) {
        B.push(prompt("Digite um elemento: "))
        B[j];
}
console.log('\nApresentação da Matriz C')
for (let i= 0; i < 30; i++) {
    C = A.concat(B);
}
console.table(C);

}

matrizes();