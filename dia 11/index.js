// Arrays para armazenar os dados dos carros
let modelos = [];
let anos = [];
let valores = [];

// Função para ordenar os carros com base no preço (sem usar sort)
function ordenarCarros(modelos, anos, valores) {
  for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - 1 - i; j++) {
      if (valores[j] > valores[j + 1]) {
        // Troca os valores
        let tempValor = valores[j];
        valores[j] = valores[j + 1];
        valores[j + 1] = tempValor;

        // Troca os modelos
        let tempModelo = modelos[j];
        modelos[j] = modelos[j + 1];
        modelos[j + 1] = tempModelo;

        // Troca os anos
        let tempAno = anos[j];
        anos[j] = anos[j + 1];
        anos[j + 1] = tempAno;
      }
    }
  }
}

// Loop para inserir carros
while (true) {
  let modelo = prompt("Digite o modelo do carro (ou 'sair' para encerrar):");
  if (modelo.toLowerCase() === "sair") break;

  let ano = parseInt(prompt("Digite o ano do carro:"));
  let valor = parseFloat(prompt("Digite o valor do carro:"));

  // Adiciona os dados aos arrays
  modelos.push(modelo);
  anos.push(ano);
  valores.push(valor);
}

// Ordena os carros com base nos valores
ordenarCarros(modelos, anos, valores);

// Exibe os carros em ordem de preço
console.log("Carros cadastrados em ordem de preço:");
for (let i = 0; i < modelos.length; i++) {
  console.log(`Modelo: ${modelos[i]}, Ano: ${anos[i]}, Valor: R$ ${valores[i].toFixed(2)}`);
}
