//Exercício 4 - Conversão de metros para centímetros

function metroParaCentimetro(medidaEmMetros: number):number {
  if (medidaEmMetros < 0) {
    throw new Error("A medida em metros não pode ser negativa");
  }

  return medidaEmMetros * 100;
}

console.log(`Valor em centímetros : ${metroParaCentimetro(26)}`);
