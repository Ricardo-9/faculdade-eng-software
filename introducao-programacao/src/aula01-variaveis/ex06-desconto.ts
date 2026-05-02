//Exercício 6 - Desconto de 10% no valor de um produto

export default function descontoDeDezPorcento(valorBase: number): number {
  if (valorBase < 0) {
    throw new Error("O valor base não pode ser negativo");
  }

  return valorBase * 0.9;
}

// const valorComDesconto = descontoDeDezPorcento(100);

// console.log(`O valor com desconto é: ${valorComDesconto}`);
