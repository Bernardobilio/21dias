// Função principal que solicita o nome e salário do colaborador
function solicitarInformacoes() {
    const nome = prompt("Qual é o nome do colaborador?");
    const salario = parseFloat(prompt("Qual é o salário do colaborador?"));

    if (isNaN(salario) || salario <= 0) {
        console.log("Por favor, insira um salário válido.");
        return;
    }

    calcularReajuste(nome, salario);
}

// Função que calcula o reajuste salarial
function calcularReajuste(nome, salario) {
    let percentual = 0;

    if (salario <= 1500) {
        percentual = 0.20;
    } else if (salario <= 2000) {
        percentual = 0.15;
    } else if (salario <= 3000) {
        percentual = 0.10;
    } else {
        percentual = 0.05;
    }

    const salarioReajustado = salario * (1 + percentual);

    console.log(`Nome: ${nome}`);
    console.log(`Salário atual: R$${salario.toFixed(2)}`);
    console.log(`Percentual de aumento: ${(percentual * 100).toFixed(0)}%`);
    console.log(`Salário reajustado: R$${salarioReajustado.toFixed(2)}`);

    perguntarNovamente();
}

// Função que pergunta se o usuário deseja calcular novamente
function perguntarNovamente() {
    const resposta = prompt("Deseja calcular novamente com novas informações? (sim/não)").toLowerCase();

    if (resposta === "sim") {
        solicitarInformacoes();
    } else if (resposta === "não") {
        console.log("Operação finalizada.");
    } else {
        console.log("Resposta inválida. Operação finalizada.");
    }
}

// Chamada inicial da função
solicitarInformacoes();
