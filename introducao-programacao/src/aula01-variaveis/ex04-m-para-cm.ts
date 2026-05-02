//Exercício 4 - Conversão de metros para centímetros

export default function metroParaCentimetro(medidaEmMetros: number): number {
  if (medidaEmMetros < 0) {
    throw new Error("A medida em metros não pode ser negativa");
  }

  return medidaEmMetros * 100;
}

// const medidaEmCentimetros = metroParaCentimetro(26);

// console.log(`Valor em centímetros : ${medidaEmCentimetros}`);
