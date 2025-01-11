//CRIANDO VARIAVEIS
let num1 = parseInt(prompt("Digite o primeiro Numero"))
let num2 = parseInt(prompt("Digite o segundo Numero"))
let opcao = parseInt(prompt("Escolha a operação que deseja realizar:"
    + "\n1 = +; \n2 = -; \n3 = *; \n4 = /"))

//CRIANDO SWITCHCAS
switch (opcao) {
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break;
    case 4:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break;
}