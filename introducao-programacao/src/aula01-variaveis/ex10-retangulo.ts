//Exercício 10 - calcula a área de um retângulo

export default function areaRetangulo(largura: number, altura: number): number {
  if (largura < 0 || altura < 0) {
    throw new Error("As medidas não podem ser negativas");
  }

  return largura * altura;
}

// const areaCalculada = areaRetangulo(10.6, 20)

// console.log(`A área do retângulo é : ${areaCalculada}`);
