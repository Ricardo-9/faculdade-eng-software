//Exercício 11 - Calcula a área de um círculo

function areaCirculo(raio: number): number {
  if (raio < 0) {
    throw new Error("O raio de um cículo não pode assumir valores negativos");
  }

  return (3.14 * raio) ^ 2;
}

const areaCalculada = areaCirculo(6);

console.log(`A área do círculo é : ${areaCalculada}`);
