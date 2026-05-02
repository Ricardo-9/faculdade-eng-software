//Exercício 13 - Calcula o preço de uma compra com base na quantidade e preço unitário

function valorDaCompra(quantidade: number, preçoUnitário: number): number {
  if (quantidade < 0 || preçoUnitário < 0) {
    throw new Error(
      "A quantidade ou o preço unitário não podem assumir valores negativos",
    );
  }

  return quantidade * preçoUnitário;
}

console.log(`O preço total é : ${valorDaCompra(12, 24.6)}`);
