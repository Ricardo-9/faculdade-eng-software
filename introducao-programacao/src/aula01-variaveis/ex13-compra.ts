//Exercício 13 - Calcula o preço de uma compra com base na quantidade e preço unitário

type Compra = {
  nome: string;
  quantidade: number;
  precoUnitario: number;
};

type ResultadoCompra = {
  nome: string;
  total: number;
};

export default function calcularValorDaCompra({
  nome,
  quantidade,
  precoUnitario,
}: Compra): ResultadoCompra {
  if (quantidade < 0 || precoUnitario < 0) {
    throw new Error("Quantidade e preço devem ser não negativos");
  }

  return { nome, total: quantidade * precoUnitario };
}

// const compra = calcularValorDaCompra({
//   nome: "Batatas",
//   quantidade: 12,
//   precoUnitario: 1.2,
// });

// console.log(`O valor da compra de ${compra.nome} é R$ ${compra.total}`);
