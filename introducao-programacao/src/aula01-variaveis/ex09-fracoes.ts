//Exercício 9 - Retorna o dobro, triplo e metade do valor lido

function dobroTriploMetade(valorBase: number): [number, number, number] {
  return [valorBase * 2, valorBase * 3, valorBase * 0.5];
}

const [dobro, triplo, metade] = dobroTriploMetade(10);

console.log(
  `O dobro do número é : ${dobro}, o triplo é : ${triplo}, e a metade é : ${metade}`,
);
