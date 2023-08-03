const prompt = require('prompt-sync')();

function matrizes(){
    let A = [];
    let B = [];
    let C = [];
   
console.log("\nDigite os valores da Matriz A: ");
for(let i = 0; i < 10; i++){
    A.push(prompt("Digite um elemento: "));
    A[i];
    if (A[i]%2 !==0 && A[i]%3 !==0 )
    {
      console.log("Valor inválido, apenas números divisiveis por 2 e 3:\n");
      i--;
    }
    }

    console.log("\nDigite os valores da Matriz B: ");
    for(let i = 0; i < 10; i++){
        B.push(prompt("Digite um elemento: "));
        B[i];

        if (B[i]%5 !==0){
      printf("Valor inválido, apenas multiplos de 5:\n");
      i--;
    }

    }

  console.log("\nApresentação da Matriz C\n");
  for(let i = 0; i < 20; i++){
    C = A.concat(B);
  }
console.table(C);
}
matrizes();