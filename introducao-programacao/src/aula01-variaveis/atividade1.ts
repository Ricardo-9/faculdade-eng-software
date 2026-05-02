//Arquivo que reúne um exemplo de aplicação de todas as questões da atividade 1

import somar from "./ex01-soma";
import calcularMedia from "./ex02-média";
import calcularIdade from "./ex03-idade";
import metroParaCentimetro from "./ex04-m-para-cm";
import reajusteSalarial from "./ex05-reajuste";
import descontoDeDezPorcento from "./ex06-desconto";
import trocaDeValor from "./ex07-troca";
import antecessorSucessor from "./ex08-ant-suc";
import dobroTriploMetade from "./ex09-fracoes";
import areaRetangulo from "./ex10-retangulo";
import areaCirculo from "./ex11-circulo";
import celsiusEmFahrenheit from "./ex12-fahrenheit";
import calcularValorDaCompra from "./ex13-compra";
import formatarDadosPessoais from "./ex14-dados";
import compararDoisNumeros from "./ex15-maior-numero";
import divisaoDeDoisNumeros from "./ex16-divisao";
import mediaDeIdades from "./ex17-media-idades";
import formatarNomeNumero from "./ex18-telefone";
import confirmacaoMatricula from "./ex19-codigo-matricula";
import calcularValorTotal from "./ex20-dinheiro";

function main() {

  console.log("## Atividade 1 - Tipos e variáveis ##")

  console.log("\n >>> Questão 1 <<<");
  console.log(`O resultado da soma é : ${somar(15, 89)}`);

  console.log("\n >>> Questão 2 <<<");
  console.log(`O valor médio das notas é : ${calcularMedia(6, 7, 9)}`);

  console.log("\n >>> Questão 3 <<<");
  console.log(`O valor aproximado da idade é : ${calcularIdade(2008)}`);
  console.log(`O valor aproximado da idade é : ${calcularIdade(2008, 2026)}`);

  console.log("\n >>> Questão 4 <<<");
  console.log(`O valor em centimetros é : ${metroParaCentimetro(25)}`);

  console.log("\n >>> Questão 5 <<<");
  console.log(
    `O salário após  o reajuste de 15,3% é : ${reajusteSalarial(1518)}`,
  );

  console.log("\n >>> Questão 6 <<<");
  console.log(
    `O valor final após o desconto de 10% é : ${descontoDeDezPorcento(1000)}`,
  );

  console.log("\n >>> Questão 7 <<<");
  console.log(
    `O valor do novo A e novo B são, respectivamente : ${trocaDeValor(1, 2)}`,
  );

  console.log("\n >>> Questão 8 <<<");
  console.log(
    `O antecessor, o valor e o seu sucessor são, respectivamente : ${antecessorSucessor(10)}`,
  );

  console.log("\n >>> Questão 9 <<<");
  console.log(
    `O dobro, o triplo e a metade do valor são, respectivamente : ${dobroTriploMetade(10)}`,
  );

  console.log("\n >>> Questão 10 <<<");
  console.log(`A ára do retângulo é : ${areaRetangulo(12, 20)}`);

  console.log("\n >>> Questão 11 <<<");
  console.log(`A área do círculo é : ${areaCirculo(16)}`);

  console.log("\n >>> Questão 12 <<<");
  console.log(`A média em fahrenheit é : ${celsiusEmFahrenheit(35)}`);

  console.log("\n >>> Questão 13 <<<");
  console.log(
    `O valor total da compra é : ${calcularValorDaCompra({ nome: "Frango", quantidade: 13, precoUnitario: 35 })}`,
  );

  console.log("\n >>> Questão 14 <<<");
  console.log(
    ` ${formatarDadosPessoais({
      nome: "Ricardo",
      idade: 18,
      altura: 1.83,
      cidade: "Barro",
    })}`,
  );

  console.log("\n >>> Questão 15 <<<");
  console.log(` ${compararDoisNumeros(4, 5)}`);

  console.log("\n >>> Questão 16 <<<");
  console.log(` ${divisaoDeDoisNumeros(10, 3)}`);

  console.log("\n >>> Questão 17 <<<");
  console.log(`A média de idades calculada é : ${mediaDeIdades(3, 5, 34)}`);

  console.log("\n >>> Questão 18 <<<");
  console.log(
    ` ${formatarNomeNumero({
      nome: "Jonas",
      telefone: "88999781052",
    })}`,
  );

  console.log("\n >>> Questão 19 <<<");
  console.log(
    `${confirmacaoMatricula({
      nome: "Kaiky",
      matricula: "005458",
    })}`,
  );

  console.log("\n >>> Questão 20 <<<");
  console.log(
    `O valor total da compra é : ${calcularValorTotal({ precoUnitario: 10, quantidade: 1.5 })}`,
  );
}

main();
