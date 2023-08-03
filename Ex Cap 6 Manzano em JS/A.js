const prompt = require('prompt-sync')()

function leitura_nomes(){
  let nomes = [];

 for (let i= 0; i < 10; i++) {
    nomes.push(prompt("Adicione um nome: "))
    nomes[i];
 }
 console.table([nomes])
}
leitura_nomes();