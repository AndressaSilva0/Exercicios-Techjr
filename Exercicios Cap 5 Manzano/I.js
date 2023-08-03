let atual; atual = 0;
let anterior; anterior = 0;
let proximo; proximo = 1;
let i;

for (i = 1; i < 15; i++) {

    console.log("A sequencia de Fibonacci "+ proximo);
    anterior = atual;
    atual = proximo;
    proximo = anterior + atual;
    
}