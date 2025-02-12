//  Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções:

// x = 10

// y = 20

// z = x+y

// console.log(z)

// Função para somar dois números
function somarNumeros(numero1, numero2) {
    return numero1 + numero2; // Retorna a soma dos dois números
}

// Função para exibir o resultado da soma
function exibirResultado(soma) {
    console.log(`O resultado da soma é: ${soma}`);
}

// Função principal que organiza a execução do programa
function calcularSoma() {
    const numero1 = 10;
    const numero2 = 20;

    // Realiza a soma chamando a função somarNumeros
    const resultadoSoma = somarNumeros(numero1, numero2);

    // Exibe o resultado chamando a função exibirResultado
    exibirResultado(resultadoSoma);
}

// Chama a função principal para executar o código
calcularSoma();