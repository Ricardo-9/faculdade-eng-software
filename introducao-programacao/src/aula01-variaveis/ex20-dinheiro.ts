//Exercício 20 - Lê a quantidade e o preço unitário de um produto e calcula o valor total

type Compra = {
  precoUnitario: number;
  quantidade: number;
};

function calcularValorTotal({ precoUnitario, quantidade }: Compra): number {
  if (precoUnitario < 0 || quantidade < 0) {
    throw new Error("Os valores inseridos devem ser números não negativos");
  }

  return precoUnitario * quantidade;
}

const valorDaCompra = calcularValorTotal({
  precoUnitario: 13.4,
  quantidade: 20,
});

console.log(`O valor total da compra é : ${valorDaCompra}`);
