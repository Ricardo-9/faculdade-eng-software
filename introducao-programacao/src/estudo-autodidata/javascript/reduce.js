//Exercício 1: Dado um array de números, utilize o método reduce para calcular a soma de todos os elementos.

const numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12];

const soma = numeros.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(soma);

//Exercício 2: Dado um array de números, utilize o método reduce para calcular a multiplicação de todos os elementos

const multiplicacao = numeros.reduce((acc, cur) => {
  acc.push(cur * 2);
  return acc;
}, []);

console.log(multiplicacao);

//Exercício 3: Dado um array, conte quantos elementos existem usando reduce

const tamanho = numeros.reduce((acc, cur) => {
  return acc + 1;
}, 0);

console.log(tamanho);

//Exercício 4: Dado um array de números, use map para dobrar seus elementos, depois refaça usando reduce

const dobroComMap = numeros.map((num) => num * 2);
const dobroComReduce = numeros.reduce((acc, cur) => {
  acc.push(cur * 2);
  return acc;
}, []);

console.log(dobroComMap);
console.log(dobroComReduce);

//Exercício 5: Dado um aray de números, retorne os elemntos maiores que 10 usando o filter e refaça usando o reduce

const maiorFilter = numeros.filter((num) => num > 10);
const maiorReduce = numeros.reduce((acc, cur) => {
  if (cur > 10) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(maiorFilter);
console.log(maiorReduce);

//Exercício 6: Bado um array de números, retorne especificamente o 2 e o 4

const doisNumeros = numeros.reduce((acc, cur) => {
  if (cur === 2 || cur === 4) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(doisNumeros);

//Exercício 7: Some o preço e retorne o total


//Exercício 8: agrupe por categoria

const produtos = [
  { nome: "Mouse", categoria: "eletronico" },
  { nome: "Camisa", categoria: "roupa" },
  { nome: "Teclado", categoria: "eletronico" },
];

const groupByCategory = produtos.reduce((acc, cur) => {
  if(!acc[cur.categoria]){
    acc[cur.categoria] = []
  }

  acc[cur.categoria].push(cur.nome)

  return acc
}, {});

console.log(groupByCategory)

//