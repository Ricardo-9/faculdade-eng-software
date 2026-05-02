//Exercício 19 - Lê e confirma o nome e código de matrícula do aluno

type DadosDoAluno = {
  nome: string;
  matricula: string;
};

function confirmacaoMatricula({ nome, matricula }: DadosDoAluno): string {
  if (!/^\d{6}$/.test(matricula)) {
    throw new Error("Matrícula deve conter exatamente 6 dígitos numéricos");
  }

  return `Dados do aluno ${nome} confirmados`;
}

const checagemAluno = confirmacaoMatricula({
  nome: "Ricardo",
  matricula: "005678",
});

console.log(checagemAluno);
