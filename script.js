const perguntas = [
    {
        pergunta: "Qual das seguintes atividades é uma das mais perigosas ao dirigir?",
        respostas: [
            "Enviar mensagens de texto",
            "Falar ao telefone",
            "Ouvir música no celular",
        ],
        correta: 0 // A resposta correta é enviar mensagens de texto
    },
    {
        pergunta: "Por que é perigoso usar o celular enquanto se dirige?",
        respostas: [
            "Porque distrai o motorista e pode levar a acidentes",
            "Porque o celular pode superaquecer e causar incêndios no carro",
            "Porque o sinal do celular interfere no funcionamento do veículo",
        ],
        correta: 0 // A resposta correta é porque distrai o motorista e pode levar a acidentes
    },
    {
        pergunta: "Qual é uma consequência comum do uso do celular ao volante?",
        respostas: [
            "Multas elevadas",
            "Perda da carteira de motorista",
            "Acidentes de trânsito",
        ],
        correta: 2 // A resposta correta é acidentes de trânsito
    },
    {
        pergunta: "O que os motoristas devem fazer para evitar distrações pelo celular?",
        respostas: [
            "Desligar o celular enquanto dirige",
            "Usar um dispositivo de viva-voz",
            "Estacionar o veículo para usar o celular",
        ],
        correta: 2 // A resposta correta é estacionar o veículo para usar o celular
    },
    {
        pergunta: "Quem está mais em risco quando um motorista usa o celular ao dirigir?",
        respostas: [
            "O motorista",
            "Os pedestres",
            "Todos os envolvidos no trânsito",
        ],
        correta: 2 // A resposta correta é todos os envolvidos no trânsito
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

