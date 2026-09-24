/* TEXTO DIGITANDO */
/* TEXTO DIGITANDO DUPLO (Frases Alternadas) */
const typing = document.getElementById("typing");

// Lista de frases para alternar
const phrases = [
  "Eu te amo ❤",
  "Pra sempre", // Adicione aqui as frases que quiser
  "Você é incrível",
  "Minha vida"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    // Apagando o texto
    typing.innerHTML = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 100; // Velocidade mais rápida para apagar
  } else {
    // Escrevendo o texto
    typing.innerHTML = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 150; // Velocidade normal para escrever
  }

  // Se terminou de escrever a frase
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typeSpeed = 2000; // Pausa antes de começar a apagar (2 segundos)
  } 
  // Se terminou de apagar a frase
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length; // Passa para a próxima frase
    typeSpeed = 500; // Pausa antes de começar a escrever a próxima
  }

  setTimeout(type, typeSpeed);
}

// Inicia a digitação
type();

/* MÚSICA */
const playBtn = document.getElementById("playBtn");
const music = new Audio("freudian.mp3");

music.loop = true;
music.volume = 0;

let isPlaying = false;

/* FADE IN DO VOLUME */
function fadeInMusic() {
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.3) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 150);
}

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    fadeInMusic();

    // Atraso de 500ms (meio segundo) para a virada de cor ficar mais suave
    setTimeout(() => {
      document.body.classList.add("mood-shift");
    }, 500);

    playBtn.textContent = "⏸️";
    playBtn.classList.add("playing");

    setTimeout(() => {
      const surprise = document.getElementById("surprise");
      surprise.classList.add("show");
    }, 9000); 
  } else {
    music.pause();
    playBtn.textContent = "🎵";
    playBtn.classList.remove("playing");
    document.body.classList.remove("mood-shift");
    document.body.classList.remove("beat-pulse"); // Garante que o pulso pare no pause
  }
  isPlaying = !isPlaying;
});
/* CORAÇÕES / ESTRELAS CAINDO */
/* CORAÇÕES / ESTRELAS CAINDO COM AS CORES FAVORITAS */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  
  // Lista misturando corações de várias cores (Azul, Vermelho, Roxo, Verde) e estrelas
  const symbols = ["💙", "❤️", "💜", "💚", "✨", "💫"];
  heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 500);
/* BRILHO AO CLICAR */
/* MENSAGENS ROMÂNTICAS ALEATÓRIAS AO CLICAR */
const romanticPhrases = [
  "Sempre você",
  "Meu porto seguro",
  "Te amo tanto",
  "Em todas as vidas",
  "Você é minha paz",
  "Amor infinito",
  "Minha lua"
];

document.addEventListener("click", (e) => {
  const spark = document.createElement("div");
  spark.classList.add("spark");
  
  // Define o texto como uma frase aleatória da lista
  spark.textContent = romanticPhrases[Math.floor(Math.random() * romanticPhrases.length)];
  
  // Estiliza a mensagem para ela flutuar e ter cor
  spark.style.position = "absolute";
  spark.style.left = e.clientX + "px";
  spark.style.top = e.clientY + "px";
  spark.style.color = "#ffffff"; // Cor base
  spark.style.fontWeight = "bold";
  spark.style.pointerEvents = "none";
  spark.style.fontFamily = "'Great Vibes', cursive"; // Usa a mesma fonte do site
  spark.style.fontSize = "1.3rem";
  spark.style.textShadow = "0 0 5px rgba(255,255,255,0.7)";
  
  // Aplica a animação (pode usar a mesma do spark original)
  spark.style.animation = "spark 2s ease forwards"; // Aumentei o tempo para ler a frase

  document.body.appendChild(appendChild); // Corrigi o erro de digitação do seu código original
  // O seu código original estava: document.body.appendChild(spark); e depois setTimeout(() => spark.remove(), 1000); 
  // Eu vou manter a estrutura original que funciona, mas com o texto novo:
});
/* ACESSIBILIDADE */
playBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    playBtn.click();
  }
});

const momentoDaBatida = 24.5; // O momento exato em que a batida entra

music.addEventListener("timeupdate", () => {
  // Ativa o pulso apenas se passar de 24.5s E a música estiver tocando
  if (music.currentTime >= momentoDaBatida && isPlaying) {
    document.body.classList.add("beat-pulse");
  } else {
    document.body.classList.remove("beat-pulse");
  }
});

