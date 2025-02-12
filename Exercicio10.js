// Usando um loop while para pedir ao usuário para digitar um número até que seja 5
// Use o npm i prompt-sync no terminal

const prompt = require('prompt-sync')();


let numero = prompt("Digite um número de 1 a 10: ");


while (numero !== "5") {
    console.log("Número errado. Tente novamente!");
    numero = prompt("Digite um número de 1 a 10: "); 
}

console.log("Você digitou o número certo. Parabens!");