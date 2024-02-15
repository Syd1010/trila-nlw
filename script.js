const perguntas = [
    {
        pergunta: "Qual é a linguagem de programação mais utilizada para desenvolvimento web?",
        respostas: [
            "Java",
            "Python",
            "JavaScript",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o sistema operacional desenvolvido pela Apple para seus dispositivos móveis?",
        respostas: [
            "iOS",
            "Android",
            "Windows",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a principal função do HTML?",
        respostas: [
            "Estilizar páginas da web",
            "Programar funcionalidades interativas",
            "Definir a estrutura de uma página da web",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do comando 'git commit'?",
        respostas: [
            "Criar um novo branch",
            "Enviar alterações para o repositório remoto",
            "Registrar mudanças no repositório local",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o componente principal de um computador responsável por processar dados?",
        respostas: [
            "Memória RAM",
            "Placa de vídeo",
            "Processador (CPU)",
        ],
        correta: 2
    },
    {
        pergunta: "O que é CSS em desenvolvimento web?",
        respostas: [
            "Uma linguagem de marcação",
            "Uma linguagem de programação",
            "Um estilo de linguagem",
        ],
        correta: 2
    },
    {
        pergunta: "Qual das seguintes opções não é um tipo de variável em JavaScript?",
        respostas: [
            "String",
            "Integer",
            "Boolean",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do comando 'npm install'?",
        respostas: [
            "Iniciar um novo projeto Node.js",
            "Instalar dependências de um projeto Node.js",
            "Executar testes em um projeto Node.js",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a linguagem de programação mais usada para desenvolvimento de aplicativos móveis?",
        respostas: [
            "C++",
            "Java",
            "Swift",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do banco de dados amplamente utilizado em aplicativos da web?",
        respostas: [
            "SQLite",
            "MongoDB",
            "Oracle",
        ],
        correta: 1
    },
    {
        pergunta: "O que é um loop 'for' em programação?",
        respostas: [
            "Um mecanismo para manipulação de strings",
            "Um tipo de dado em JavaScript",
            "Uma estrutura de repetição",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do serviço de computação em nuvem fornecido pela Amazon?",
        respostas: [
            "Azure",
            "Google Cloud Platform",
            "Amazon Web Services (AWS)",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função da tag '<canvas>' em HTML?",
        respostas: [
            "Inserir imagens em uma página da web",
            "Criar gráficos e animações interativas",
            "Definir estilos de fonte",
        ],
        correta: 1
    },
    {
        pergunta: "O que é um 'bug' em programação?",
        respostas: [
            "Um inseto irritante",
            "Um erro ou falha em um programa de computador",
            "Um tipo de algoritmo",
        ],
        correta: 1
    },
    {
        pergunta: "O que é a linguagem de marcação XML?",
        respostas: [
            "Uma linguagem de programação",
            "Uma linguagem de marcação de texto",
            "Um formato de arquivo de áudio",
        ],
        correta: 1
    }
];
//  1 declarando uma palavra chave, para buscar um id / ou class
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

// 3 loop ou laço de repetição das perguntas 
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta


  //4 loop ou laço de repetição das respostas 
  for (let resposta of item.respostas) {
    // 5 pesquisando filho dentro do pai
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
     
    }

    // 6 colocando as opçoes de resposta na tela , procurando pelo pai e adcionando o filho
    quizItem.querySelector('dl').appendChild(dt)
  }
  // 6 removendo a primeira opçao depois de copiar
  quizItem.querySelector('dl dt').remove()


  // 2 coloca a pergunta na tela
  quiz.appendChild(quizItem)
}

