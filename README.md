# Faculdade - Engenharia de Software

Repositório dedicado ao registro das atividades, exercícios e práticas desenvolvidas durante o curso de Engenharia de Software.

---

#  Estrutura

* Cada exercício será isolado em um arquivo próprio
* O arquivo `atividade[número].ts` funciona como agregador para execução de todos

---

#  Como executar a atividade

##  Pré-requisitos

* Node.js instalado
* npm ou yarn

---

##  Instalação

```bash
npm install
```

---

##  Rodando a atividade

Você pode executar o arquivo principal com o script registrado:

```bash
npm run atividade[número]
```

Ou diretamente com o TSX:

```bash
npx tsx src/aula01-variaveis/atividade[número].ts
```

---

##  Modo watch (reexecução automática)

```bash
npx tsx watch src/aula01-variaveis/atividade[número].ts
```

Assim, sempre que salvar um arquivo, o código será executado novamente automaticamente. O mesmo vale para os arquivos individuais de cada exercício.

---

#  Organização 

* Cada exercício contém apenas a lógica (funções puras)
* O arquivo principal (`atividade[número].ts`) é responsável pela execução e exibição
* Separação entre **lógica** e **apresentação**

---

#  Autor

Ricardo Rocha Alves
