const prompt = require('prompt-sync')();

function matriz(){
    let matrizA = [];
    let matrizB = [];
   
    console.log("\nDigite os elementos da Matriz A: \n")
    for(let i = 0; i < 12; i++){
     matrizA.push(prompt("Digite um elemento: "));
     matrizA[i];

     if (matrizA[i]%2 !==0)
    {
        matrizB[i] = matrizA[i]*2;
    }else
    {
        matrizA[i]%2===0;
        matrizB[i] = matrizA[i];
    }
}
console.log("\nElementos da matriz B\n");
console.table(matrizB);
}
matriz();