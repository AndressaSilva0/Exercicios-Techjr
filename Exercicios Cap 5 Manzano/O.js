
function fatorial(){
    console.log("O resultado do fatorial dos números impares de 1 à 10\n");
    for (let i = 1; i < 10; i+=2){
           let resultado=1;
            for (let n = i ; n >= 1; n--){

                resultado*=n
            }
        
        console.log(`O resultado desse fatorial é:${i}, ${resultado}`)
}

}
fatorial();