//Exercício 14 - Organiza os dados pessoais do usuário

type DadosPessoais = {
  nome: string;
  idade: number;
  altura: number;
  cidade: string;
};

function formatarDadosPessoais({
  nome,
  idade,
  altura,
  cidade,
}: DadosPessoais): string {
  if (altura < 0 || idade < 0) {
    throw new Error("Os valores de altura e idade devem não ser negativos");
  }

  return `Nome: ${nome}
Idade: ${idade} anos
Altura: ${altura}
Cidade: ${cidade}
`;
}

const dadosDoUsuario = formatarDadosPessoais({
  nome: "Ricardo",
  idade: 18,
  altura: 1.83,
  cidade: "Barro",
});

console.log(dadosDoUsuario);
