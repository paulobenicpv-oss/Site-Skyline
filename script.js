// =================== UTIL ===================
const css = (strings) => {
  const s = document.createElement("style");
  s.innerHTML = strings[0];
  document.head.appendChild(s);
  return s;
};
const getNavH = () =>
  parseInt(
    getComputedStyle(document.documentElement)
      .getPropertyValue("--nav-h")
      .replace("px", "")
      .trim() || "96",
    10
  );

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// =================== RODAPÉ: ANO ===================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// =================== HERO: TEXTO ROTATIVO ===================
const rotatingText = document.getElementById("rotating-text");
const phrases = [
  "Transformando sua marca em sucesso",
  "Geramos resultados que impressionam",
  "Criamos conteúdo que converte",
  "Dominamos o tráfego pago",
  "Designs que vendem",
];
let phraseIndex = 0;

css`
  .fade { animation: fadeInText 1s ease-in-out; }
  @keyframes fadeInText{
    0%{opacity:0;transform:translateY(10px)}
    30%{opacity:1;transform:translateY(0)}
    70%{opacity:1;transform:translateY(0)}
    100%{opacity:0;transform:translateY(-10px)}
  }
  .card-pulse{ box-shadow:0 0 0 0 rgba(156,39,176,.6); animation:cardPulse .6s ease-out; }
  @keyframes cardPulse{ to{ box-shadow:0 0 24px 6px rgba(156,39,176,.0);} }
`;

function updateRotatingText() {
  if (!rotatingText) return;
  rotatingText.classList.remove("fade");
  // força reflow para reiniciar animação
  void rotatingText.offsetWidth;
  rotatingText.textContent = phrases[phraseIndex];
  rotatingText.classList.add("fade");
  phraseIndex = (phraseIndex + 1) % phrases.length;
}
if (rotatingText && !prefersReduced) {
  updateRotatingText();
  setInterval(updateRotatingText, 1200); // velocidade solicitada
}

// =================== FORMULÁRIO DE CONTATO ===================
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let status = document.getElementById("formStatus");
    if (!status) {
      status = document.createElement("p");
      status.id = "formStatus";
      form.appendChild(status);
    }
    status.textContent = "Enviando...";
    status.style.color = "#ffca28";
    setTimeout(() => {
      status.textContent = "Mensagem enviada com sucesso! 🚀";
      status.style.color = "#4caf50";
      form.reset();
    }, 1200);
  });

  // contador do textarea (se houver)
  const msg = form.querySelector("#mensagem");
  const counter = form.querySelector("#charCount");
  if (msg && counter) {
    const upd = () => (counter.textContent = `${msg.value.length}/500 caracteres`);
    msg.addEventListener("input", upd);
    upd();
  }
}

// =================== CARROSSEL FADE ===================
const fadeSlides = document.querySelectorAll(".fade-carousel .slide");
const fadeDots = document.querySelectorAll(".indicators .dot");
const serviceCards = document.querySelectorAll(".service-cards .card");
let fadeIndex = 0;
let autoSlideInterval;

function showFadeSlide(index) {
  if (!fadeSlides.length) return;
  fadeSlides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  fadeDots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  serviceCards.forEach((card, i) => card.classList.toggle("active", i === index));
  fadeIndex = index;
}

fadeDots.forEach((dot, i) =>
  dot.addEventListener("click", () => {
    showFadeSlide(i);
    resetAutoSlide();
  })
);

function startAutoSlide() {
  if (prefersReduced || fadeSlides.length <= 1) return;
  autoSlideInterval = setInterval(() => {
    fadeIndex = (fadeIndex + 1) % fadeSlides.length;
    showFadeSlide(fadeIndex);
  }, 7000);
}
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

serviceCards.forEach((card, i) =>
  card.addEventListener("click", () => {
    showFadeSlide(i);
    resetAutoSlide();
    card.classList.add("card-pulse");
    setTimeout(() => card.classList.remove("card-pulse"), 600);
    document.querySelector(".fade-carousel")?.scrollIntoView({ behavior: "smooth", block: "center" });
  })
);

window.addEventListener("load", () => {
  if (fadeSlides.length) showFadeSlide(0);
  startAutoSlide();
});

// =================== NAVEGAÇÃO: ROLAGEM SUAVE COM OFFSET ===================
const navLinks = document.querySelectorAll('.navbar nav a[href^="#"]');
function smoothTo(targetId) {
  const el = document.querySelector(targetId);
  if (!el) return;
  const navH = getNavH();
  const y = el.getBoundingClientRect().top + window.pageYOffset - (navH + 16);
  window.scrollTo({ top: y, behavior: "smooth" });
}
navLinks.forEach((a) => {
  a.addEventListener("click", (e) => {
    const hash = a.getAttribute("href");
    if (!hash || hash === "#") return; // deixa “Início” sem âncora passar
    e.preventDefault();
    smoothTo(hash);
    history.replaceState(null, "", hash); // atualiza URL sem recarregar
  });
});

// =================== MENU ATIVO POR SEÇÃO (IntersectionObserver) ===================
const sections = [
  "#inicio",
  "#servicos",
  "#portfolio",
  "#equipe",
  "#clientes",
  "#contato",
]
  .map((s) => document.querySelector(s))
  .filter(Boolean);

const linkById = {};
navLinks.forEach((a) => {
  const h = a.getAttribute("href");
  if (h && h.startsWith("#")) linkById[h] = a;
});

function setActive(href) {
  navLinks.forEach((a) => a.classList.remove("active"));
  linkById[href]?.classList.add("active");
}

if ("IntersectionObserver" in window && sections.length) {
  const navH = getNavH();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = `#${entry.target.id}`;
        if (entry.isIntersecting) setActive(id);
      });
    },
    {
      // considera a seção ativa quando 40% estiver visível
      rootMargin: `-${navH + 10}px 0px -60% 0px`,
      threshold: 0.4,
    }
  );
  sections.forEach((sec) => io.observe(sec));
} else {
  // fallback simples
  window.addEventListener("scroll", () => {
    const navH = getNavH();
    const y = window.scrollY + navH + 20;
    let current = sections[0];
    sections.forEach((sec) => {
      if (sec.offsetTop <= y) current = sec;
    });
    if (current?.id) setActive(`#${current.id}`);
  });
}

// =================== REAJUSTE EM RESIZE (altera --nav-h responsivo) ===================
let resizeTO;
window.addEventListener("resize", () => {
  clearTimeout(resizeTO);
  resizeTO = setTimeout(() => {
    // reaciona o observer com nova altura (em navegadores antigos ficará tudo ok mesmo sem isso)
    // também reexecuta setActive baseado na posição atual
    const id = sections
      .slice()
      .reverse()
      .find((s) => window.scrollY + getNavH() + 20 >= s.offsetTop)?.id;
    if (id) setActive(`#${id}`);
  }, 150);
});

// =================== ACESSIBILIDADE: teclado para dots ===================
fadeDots.forEach((dot, i) => {
  dot.setAttribute("tabindex", "0");
  dot.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      showFadeSlide(i);
      resetAutoSlide();
    }
  });
});

