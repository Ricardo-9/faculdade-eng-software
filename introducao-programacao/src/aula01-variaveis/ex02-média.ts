//Exercício 2 - Média de três notas

export default function calcularMedia(nota1: number, nota2: number, nota3: number): number {
  if (nota1 < 0 || nota2 < 0 || nota3 < 0) {
    throw new Error("O valor de uma nota não pode ser negativo");
  }

  return (nota1 + nota2 + nota3) / 3;
}

// const mediaCalculada = calcularMedia(2, 3, 4);

// console.log(`A média é : ${mediaCalculada}`);
