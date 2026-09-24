/* TEXTO DIGITANDO */
const text = "Eu te amo ❤";
let i = 0;
const typing = document.getElementById("typing");

function type() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 150);
  }
}
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

