const prompt = require('prompt-sync')();

   
    console.log("Escolha os itens, Pedra = 0, Papel = 1, Tesoura = 2\n");

    let jogador = ['pedra', 'papel', 'tesoura'];
    let computador = ['pedra', 'papel', 'tesoura'];
    let empate = 0;
    let vitoria_jogador=0;
    let vitoria_computador=0;

    
    do {
    
    let escolha = parseInt(prompt("Digite um valor: "))

    const Number = () =>  Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    const Maquina = computador[Number(0, computador.length - 1)];
    const Usuario = jogador[escolha];
    
    if (Usuario == Maquina) {
        console.log("Empate!\n");
       empate++
    }else if (Usuario == 'pedra' && Maquina == 'tesoura'){
        console.log("Você venceu!\n");
         vitoria_jogador++
    }else if (Usuario == 'tesoura' && Maquina == 'papel'){
    console.log("Você venceu!\n");
    vitoria_jogador++
    }else if (Usuario == 'papel' && Maquina == 'pedra'){
    console.log("Você venceu!\n");
    vitoria_jogador++
    }else if (Usuario == 'pedra' && Maquina == 'papel'){
    console.log("Computador venceu!\n");
      vitoria_computador++
    }else if (Usuario == 'papel' && Maquina == 'tesoura'){
    console.log("Computador venceu!\n");
    vitoria_computador++
    }else if (Usuario == 'tesoura' && Maquina == 'pedra'){
        console.log("Computador venceu!\n");
     vitoria_computador++
    }

console.log(`O jogador escolheu ${Usuario}, o Computador escolheu ${Maquina}`)


continuar = parseInt(prompt("\nDeseja continuar? 1 - Sim, 0 - Não: \n"));
   
}while(continuar == 1);


console.log("Jogo encerrado. Resultados finais:");
console.log({empate, vitoria_jogador, vitoria_computador})


