//Exercício 5 - Reajusta o salário informado após um aumento de 15,3%

export default function reajusteSalarial(salárioBase: number): number {
  if (salárioBase < 0) {
    throw new Error("O valor base de um salário não pode ser negativo");
  }

  return salárioBase * 1.153;
}

// const salarioReajustado = reajusteSalarial(1000);

// console.log(`O salário após o reajuste é : ${salarioReajustado}`);
