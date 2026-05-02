//Exercício 16 - divisão entre dois números inteiros

export default function divisaoDeDoisNumeros(a: number, b: number): number {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Os valores inseridos devem ser números do tipo inteiro");
  }

  return a / b;
}

// const resultadoDivisao = divisaoDeDoisNumeros(3, 2);

// console.log(`Resultado: ${resultadoDivisao}`);
