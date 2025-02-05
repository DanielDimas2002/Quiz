const perguntasPorCategoria = {
    HTML: [
      {
        category: "HTML",
        pergunta: "Qual tag usamos para criar um parágrafo em HTML?",
        respostas: ["<p>", "<h1>", "<div>"],
        correta: "<p>",
        dica: "É a tag usada para textos comuns."
      },
      {
        category: "HTML",
        pergunta: "Qual atributo define o texto alternativo de uma imagem?",
        respostas: ["alt", "title", "src"],
        correta: "alt",
        dica: "Esse atributo ajuda na acessibilidade."
      }
    ],
    CSS: [
      {
        category: "CSS",
        pergunta: "Qual propriedade CSS define o tamanho da fonte?",
        respostas: ["font-size", "text-size", "size"],
        correta: "font-size",
        dica: "Começa com 'font'."
      },
      {
        category: "CSS",
        pergunta: "O que significa a sigla CSS?",
        respostas: [
          "Cascading Style Sheet",
          "Creative Style System",
          "Computer Styled Syntax"
        ],
        correta: "Cascading Style Sheet",
        dica: "O nome fala sobre estilos em cascata."
      }
    ],
    JavaScript: [
      {
        category: "JavaScript",
        pergunta: "Qual operador é usado para comparar valores sem converter tipos?",
        respostas: ["==", "===", "="],
        correta: "===",
        dica: "É o mais restrito de todos."
      },
      {
        category: "JavaScript",
        pergunta: "Qual destes NÃO é um tipo de dado em JavaScript?",
        respostas: ["Number", "Boolean", "Character"],
        correta: "Character",
        dica: "JavaScript usa 'String' para representar caracteres."
      }
    ]
  };
  
  export default perguntasPorCategoria;
  