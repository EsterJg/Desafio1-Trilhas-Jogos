// Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.

function calcularAreaCirculo(raio) {
    const area = Math.PI * Math.pow(raio, 2); // Fórmula da área: π * raio^2
    return area;
}

// Testando a função com um raio de 5
const raio = 5;
const area = calcularAreaCirculo(raio);

console.log(`A área do círculo com raio ${raio} é: ${area.toFixed(2)}`);