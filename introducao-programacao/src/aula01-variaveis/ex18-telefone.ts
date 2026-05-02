//Exercício 18 - Retornar o número e o nome do usuário

type nomeNumero = {
  nome: string;
  telefone: string;
};

function formatarNomeNumero({ nome, telefone }: nomeNumero): string {
  return `nome: ${nome},
telefone: +${telefone}`;
}

const dadosFormatados = formatarNomeNumero({
  nome: "Ricardo",
  telefone: "88999891052",
});

console.log(dadosFormatados);
