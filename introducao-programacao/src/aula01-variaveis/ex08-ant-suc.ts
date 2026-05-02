//Exercício 8 - Antecessor e Sucessor de um número inteiro

function antecessorSucessor(valor: number) {
  if (!Number.isInteger(valor)) {
    throw new Error("O valor inserido deve ser um número do tipo inteiro");
  }

  return [valor - 1, valor, valor + 1];
}

const [antecessor, valorBase, sucessor] = antecessorSucessor(10);

console.log(
  `Número : ${valorBase}, Antecessor: ${antecessor}, Sucessor: ${sucessor}`,
);
