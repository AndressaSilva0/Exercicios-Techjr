const prompt = require('prompt-sync')()


class Pessoa {
    constructor(name, age) {
        this.name = name;
        this.age = age;  
    }
    speak() {
        console.log(`Olá, senhor(a) ${this.name}`);
    }

   happybirtday(){
    this.age++
    console.log(`Feliz aniversário!! Você tem ${this.age} anos`);
   }
}

const pessoa1 = new Pessoa(prompt("Digite o seu nome: "), parseInt(prompt("Digite a sua idade: ")));
const pessoa2 = new Pessoa(prompt("Digite o seu nome: "), parseInt(prompt("Digite a sua idade: ")));



console.log("Informações da pessoa 1:", pessoa1);
console.log("Informações da pessoa 2:", pessoa2);

pessoa1.speak();
pessoa1.happybirtday();

console.log('--------------------------------');

pessoa2.speak();
pessoa2.happybirtday();


