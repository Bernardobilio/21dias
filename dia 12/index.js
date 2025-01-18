// Arrays para armazenar nomes e senhas
const nomes = [];
const senhas = [];

let opcao;

do {
  // Solicita ao usuário o que ele deseja fazer
  opcao = prompt(
    "O que você deseja fazer?\n1 - Cadastrar\n2 - Fazer login\n3 - Excluir um cadastro\n4 - Encerrar o programa"
  );

  switch (opcao) {
    case "1": // Cadastrar
      const nomeCadastro = prompt("Digite o nome para cadastro:");
      const senhaCadastro = prompt("Digite a senha para cadastro:");

      if (nomeCadastro && senhaCadastro) {
        nomes.push(nomeCadastro);
        senhas.push(senhaCadastro);
        alert("Cadastro realizado com sucesso!");
      } else {
        alert("Nome e senha são obrigatórios para o cadastro.");
      }
      break;

    case "2": // Fazer login
      const nomeLogin = prompt("Digite seu nome para login:");
      const senhaLogin = prompt("Digite sua senha:");

      const indiceLogin = nomes.indexOf(nomeLogin);

      if (indiceLogin !== -1 && senhas[indiceLogin] === senhaLogin) {
        alert("Login realizado com sucesso!");
      } else {
        alert("Nome ou senha inválidos.");
      }
      break;

    case "3": // Excluir um cadastro
      const nomeExclusao = prompt("Digite o nome do cadastro que deseja excluir:");

      const indiceExclusao = nomes.indexOf(nomeExclusao);

      if (indiceExclusao !== -1) {
        nomes.splice(indiceExclusao, 1);
        senhas.splice(indiceExclusao, 1);
        alert("Cadastro excluído com sucesso!");
      } else {
        alert("Nome não encontrado.");
      }
      break;

    case "4": // Encerrar o programa
      alert("Programa encerrado.");
      break;

    default:
      alert("Opção inválida. Por favor, escolha uma das opções disponíveis.");
      break;
  }
} while (opcao !== "4");
