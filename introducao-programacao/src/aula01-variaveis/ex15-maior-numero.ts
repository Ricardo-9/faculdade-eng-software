//Exercício 15 - Compare dois números e mostre entre eles, o menor e o maior

function compararDoisNumeros(a: number, b: number): string {
  if (a > b) {
    return `${a} é maior que ${b}`;
  }

  if (a < b) {
    return `${b} é maior que ${a}`;
  }

  return `${a} e ${b} são iguais`;
}

console.log(compararDoisNumeros(7, 7));
