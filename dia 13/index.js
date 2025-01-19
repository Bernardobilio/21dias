// Classe Carro
class Carro {
    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
      this.nome = nome; // Nome da equipe do carro
      this.potencia = potencia; // Potência em cavalos
      this.velocidadeMaxima = velocidadeMaxima; // Velocidade máxima em km/h
      this.aceleracao = aceleracao; // Tempo para atingir 100 km/h em segundos
    }
  
    // Método para calcular o tempo para percorrer uma distância
    calcularTempo(distancia) {
      // Fórmula: resultado = distância / (VelocidadeMaxima / Aceleracao)
      const resultado = distancia / (this.velocidadeMaxima / this.aceleracao);
      return resultado;
    }
  }
  
  // Classe Corrida
  class Corrida {
    constructor(nome, tipo, distancia, participantes) {
      this.nome = nome; // Nome do local da corrida
      this.tipo = tipo; // Tipo da corrida (Fórmula 1, Stock Car, Rally, etc.)
      this.distancia = distancia; // Distância total da corrida em metros
      this.participantes = participantes; // Array de objetos da classe Carro
      this.vencedor = null; // Equipe que ganhou a corrida
    }
  
    // Método para determinar o vencedor da corrida
    determinarVencedor() {
      let menorTempo = Infinity;
      let equipeVencedora = null;
  
      this.participantes.forEach((carro) => {
        const tempo = carro.calcularTempo(this.distancia);
        if (tempo < menorTempo) {
          menorTempo = tempo;
          equipeVencedora = carro.nome;
        }
      });
  
      this.vencedor = equipeVencedora;
      return equipeVencedora;
    }
  }
  
  // Função para coletar dados do usuário
  function coletarDadosCarro() {
    const nome = prompt("Digite o nome da equipe do carro:");
    const potencia = parseFloat(prompt("Digite a potência do carro (em cavalos):"));
    const velocidadeMaxima = parseFloat(prompt("Digite a velocidade máxima do carro (em km/h):"));
    const aceleracao = parseFloat(prompt("Digite o tempo para atingir 100 km/h (em segundos):"));
    return new Carro(nome, potencia, velocidadeMaxima, aceleracao);
  }
  
  function coletarDadosCorrida() {
    const nome = prompt("Digite o nome do local da corrida:");
    const tipo = prompt("Digite o tipo da corrida (Fórmula 1, Stock Car, Rally, etc.):");
    const distancia = parseFloat(prompt("Digite a distância total da corrida (em metros):"));
  
    const numeroParticipantes = parseInt(prompt("Digite o número de participantes na corrida:"));
    const participantes = [];
  
    for (let i = 0; i < numeroParticipantes; i++) {
      alert(`Digite os dados do carro ${i + 1}:`);
      participantes.push(coletarDadosCarro());
    }
  
    return new Corrida(nome, tipo, distancia, participantes);
  }
  
  // Execução principal
  const corrida = coletarDadosCorrida();
  alert(`Vencedor da corrida em ${corrida.nome}: ${corrida.determinarVencedor()}`);
  