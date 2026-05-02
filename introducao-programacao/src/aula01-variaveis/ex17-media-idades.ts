//Exercício 17 - Calcula a média entre 3 idades

export default function mediaDeIdades(idade1: number, idade2: number, idade3: number): number {
  if (idade1 < 0 || idade2 < 0 || idade3 < 0) {
    throw new Error("As idades devem ser valores não negativos");
  }
  if (
    !Number.isInteger(idade1) ||
    !Number.isInteger(idade2) ||
    !Number.isInteger(idade3)
  ) {
    throw new Error("As idades devem ser números inteiros");
  }

  return (idade1 + idade2 + idade3) / 3;
}

// const mediaCalculada = mediaDeIdades(23, 45, 34);

// console.log(`A média de idades calculada é : ${mediaCalculada}`);
