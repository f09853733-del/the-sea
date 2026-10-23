
const languageButton = document.getElementById("language");

let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir =
    language === "fa" ? "rtl" : "ltr";

  document.body.dir =
    language === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en][data-fa]").forEach((element) => {
    element.innerHTML =
      language === "fa"
        ? element.dataset.fa
        : element.dataset.en;
  });

  languageButton.textContent =
    language === "en" ? "فارسی" : "English";

  document.title =
    language === "fa"
      ? "دریا — کشف آبی پنهان"
      : "The Sea — Discover the Blue";
}

languageButton.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "fa" : "en");
});

// Reveal sections as they enter the viewport
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Floating ocean bubbles
const bubbleContainer = document.querySelector(".bubbles");

function createBubble() {
  if (document.hidden || !bubbleContainer) return;

  const bubble = document.createElement("span");
  bubble.className = "bubble";

  const size = Math.random() * 12 + 4;

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${Math.random() * 7 + 8}s`;

  bubbleContainer.appendChild(bubble);

  bubble.addEventListener("animationend", () => {
    bubble.remove();
  });

  setTimeout(() => bubble.remove(), 16000);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(createBubble, 650);
}

setLanguage("en");
