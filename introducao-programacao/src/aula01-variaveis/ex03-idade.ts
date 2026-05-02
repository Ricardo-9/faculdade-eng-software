//Exercício 3 - Cáculo aproximado da idade do usuário com base no ano de nascimento

function calcularIdade(dataDeNascimento: number, anoAtual?: number):number {
  const dataAtual = anoAtual ?? new Date().getFullYear();

  if (!Number.isInteger(dataDeNascimento) || !Number.isInteger(dataAtual)) {
    throw new Error("As datas devem ser valores inteiros");
  }
  if (dataDeNascimento > dataAtual) {
    throw new Error("O ano de nascimento não pode ser um valor futuro");
  }

  return dataAtual - dataDeNascimento;
}

//O parãmetro de ano atual é opcional, caso não seja definido manualmente pelo usuário, será calculado internamente pela função
console.log(`A idade é : ${calcularIdade(2008, 2026)}`);
console.log(`A idade é : ${calcularIdade(2008)}`);
