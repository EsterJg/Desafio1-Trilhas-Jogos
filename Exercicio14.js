// Comente seu código explicando o que cada parte faz. Crie um programa simples que calcule a soma de dois números e imprima o resultado.

// Função para somar dois números
function somarNumeros(numero1, numero2) {
    // Soma os dois números recebidos como parâmetros
    const soma = numero1 + numero2;
    return soma; // Retorna o resultado da soma
}

// Testando a função com dois números
const num1 = 25;
const num2 = 30;
const resultado = somarNumeros(num1, num2); // Chama a função para somar os números

// Exibe o resultado da soma
console.log(`A soma de ${num1} e ${num2} é: ${resultado}`);