// Declaração dos arrays
let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

// Função para encontrar números em comum entre dois arrays
function numerosEmComum(arrayA, arrayB) {
    // Filtra os números que aparecem em ambos os arrays sem repetição
    let numerosComuns = arrayA.filter((numero) => {
        // Verifica se o número está no segundo array
        return arrayB.includes(numero);
    });

    // Remove duplicados do array de números comuns
    let unicos = [...new Set(numerosComuns)];

    // Retorna apenas os números que aparecem exatamente uma vez em ambos os arrays
    return unicos.filter((numero) => {
        return (
            arrayA.filter((n) => n === numero).length === 1 &&
            arrayB.filter((n) => n === numero).length === 1
        );
    });
}

// Chamada da função
let resultado = numerosEmComum(arrayA, arrayB);

// Exibe o resultado
console.log("Números em comum:", resultado);
