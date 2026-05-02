//Exercício 15 - Compare dois números e mostre entre eles, o menor e o maior

export default function compararDoisNumeros(a: number, b: number): string {
  if (a > b) {
    return `${a} é maior que ${b}`;
  }

  if (a < b) {
    return `${b} é maior que ${a}`;
  }

  return `${a} e ${b} são iguais`;
}

// const resultadoDaComparacao = compararDoisNumeros(7, 7);

// console.log(resultadoDaComparacao);
