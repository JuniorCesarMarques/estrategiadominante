const chat = document.getElementById("chat");
const commentInput = document.getElementById("comment");
const button = document.getElementById("button");

const nomes = ["João", "Maria", "Pedro", "Ana", "Carlos", "Lucas", "Cesar Soares", "Junior", "Cesar Soares", "Cleiton Silva", "Junior"];
let nomeIndex = 0; // Índice do próximo nome a ser escolhido

function getNextName() {
  const name = nomes[nomeIndex];
  nomeIndex = (nomeIndex + 1) % nomes.length; // Avança para o próximo nome ou volta ao início do array
  return name;
}

function addComment(comment, name) {
  const newComment = document.createElement("div");
  newComment.classList.add("container-avatar");

  const avatarImg = document.createElement("img");
  avatarImg.classList.add("avatar-img");
  avatarImg.src = "img/photo.png"; // Adicione a URL da imagem do avatar aqui
  newComment.appendChild(avatarImg);

  const avatarNomeElement = document.createElement("div");
  avatarNomeElement.classList.add("avatar-nome");
  avatarNomeElement.innerHTML = `<p>${name || "Anônimo"}</p>`;
  newComment.appendChild(avatarNomeElement);

  const avatarComentarioElement = document.createElement("div");
  avatarComentarioElement.classList.add("avatar-comentario");
  avatarComentarioElement.innerHTML = `<p>${comment}</p>`;
  newComment.appendChild(avatarComentarioElement);

  chat.appendChild(newComment);
  chat.scrollTop = chat.scrollHeight; // Rolagem automática para o final
}

button.addEventListener("click", () => {
  const newComment = commentInput.value;
  if (newComment) {
    addComment(newComment);
    commentInput.value = ''; // Limpar o campo de entrada após adicionar o comentário
  }
});

function simulateRandomComments() {
  const randomComments = [
    "top as estratégias!",
    "como que compra?",
    "cara se as plataformas descobrem sobre esse produto kkkk",
    "se é loko, olha o tanto de gente online!",
    "comprei, agora só aplicar as estratégias!",
    "bora falir as plataformas!",
    "sera que não é fake esse chat?",
    "kkkk claro que não mano",
    "Sei..",
    "no revelador de traição não fez isso né...",
    "\u{1F615}"
  ];

  let index = 0;

  const commentInterval = setInterval(() => {
    if (index < randomComments.length) {
      const randomName = getNextName(); // Obter um nome aleatório da ordem do array
      addComment(randomComments[index], randomName);
      index++;
    } else {
      clearInterval(commentInterval);
    }
  }, 4000); // Altere o intervalo conforme necessário
}

// Iniciar a simulação de comentários aleatórios
simulateRandomComments();



const liveIndicator = document.getElementById("live-indicator");
let isLive = true;

function toggleLiveIndicator() {
  if (isLive) {
    liveIndicator.style.backgroundColor = "black"; // Oculta a bolinha ao vivo
  } else {
    liveIndicator.style.backgroundColor = "red"; // Exibe a bolinha ao vivo
  }
  isLive = !isLive;
}

// Chame a função toggleLiveIndicator para alternar a visibilidade da bolinha ao vivo
toggleLiveIndicator();
setInterval(toggleLiveIndicator, 1000); // Altere a frequência piscante conforme necessário

function updateOnlineCount() {
    const onlineCountElement = document.getElementById("online-count");
    const minCount = 2000;
    const maxCount = 2020;
    const newCount = Math.floor(Math.random() * (maxCount - minCount + 1) + minCount);
    onlineCountElement.textContent = newCount;
  }
  
  // Chame a função para atualizar o número inicialmente
  updateOnlineCount();
  
  // Em seguida, crie um intervalo para atualizar o número periodicamente (por exemplo, a cada 5 segundos)
  setInterval(updateOnlineCount, 5000);
  

