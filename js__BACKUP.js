// === Atualiza automaticamente o ano no rodapé ===
document.getElementById("year").textContent = new Date().getFullYear();

// === Texto rotativo no HERO ===
const rotatingText = document.getElementById("rotating-text");
const phrases = [
  "Transformando sua marca em sucesso",
  "Geramos resultados que impressionam",
  "Criamos conteúdo que converte",
  "Dominamos o tráfego pago",
  "Designs que vendem"
];

let phraseIndex = 0;
function updateRotatingText() {
  rotatingText.classList.remove("fade");
  void rotatingText.offsetWidth; // força reflow
  rotatingText.textContent = phrases[phraseIndex];
  rotatingText.classList.add("fade");
  phraseIndex = (phraseIndex + 1) % phrases.length;
}

// velocidade de troca — 1.2 segundos (rápido e fluido)
setInterval(updateRotatingText, 1200);

// === Efeito Fade Suave do Texto Rotativo ===
const textFadeStyle = document.createElement("style");
textFadeStyle.innerHTML = `
  .fade {
    animation: fadeInText 1s ease-in-out;
  }
  @keyframes fadeInText {
    0% { opacity: 0; transform: translateY(10px); }
    30% { opacity: 1; transform: translateY(0); }
    70% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-10px); }
  }
`;
document.head.appendChild(textFadeStyle);

// === Formulário de Contato ===
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.getElementById("formStatus");
    status.textContent = "Enviando...";
    status.style.color = "#ffca28";

    setTimeout(() => {
      status.textContent = "Mensagem enviada com sucesso! 🚀";
      status.style.color = "#4caf50";
      form.reset();
    }, 1200);
  });
}

// === Carrossel Fade Automático ===
const fadeSlides = document.querySelectorAll(".fade-carousel .slide");
const fadeDots = document.querySelectorAll(".fade-carousel .dot");
let fadeIndex = 0;
let autoSlideInterval;

function showFadeSlide(index) {
  fadeSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    fadeDots[i].classList.toggle("active", i === index);
  });
  fadeIndex = index;
}

// controle manual via dots
fadeDots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showFadeSlide(i);
    resetAutoSlide();
  });
});

// alternância automática
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    fadeIndex = (fadeIndex + 1) % fadeSlides.length;
    showFadeSlide(fadeIndex);
  }, 7000);
}
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}
if (fadeSlides.length > 0) startAutoSlide();

// === Sincronização: clique no card muda o carrossel ===
const serviceCards = document.querySelectorAll(".service-cards .card");
serviceCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    showFadeSlide(index);
    resetAutoSlide();

    // destaque visual temporário
    card.classList.add("card-active");
    setTimeout(() => card.classList.remove("card-active"), 600);

    // rolagem suave até o carrossel
    const carousel = document.querySelector(".fade-carousel");
    if (carousel) {
      carousel.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});

// === Efeito suave ao carregar os slides ===
window.addEventListener("load", () => {
  fadeSlides.forEach((slide, i) => {
    if (i === 0) slide.classList.add("active");
  });
});
