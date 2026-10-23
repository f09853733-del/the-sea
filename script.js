
const langBtn = document.getElementById("langBtn");
const bubblesContainer = document.querySelector(".bubbles");

let currentLang = "fa";

function changeLanguage(lang) {
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.body.dir = lang === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-fa][data-en]").forEach((element) => {
    element.textContent = element.dataset[lang];
  });

  langBtn.textContent = lang === "fa" ? "EN ↗" : "FA ↗";

  document.title =
    lang === "fa"
      ? "Ocean Dream | رؤیای اقیانوس"
      : "Ocean Dream | Into the Unknown";
}

langBtn.addEventListener("click", () => {
  changeLanguage(currentLang === "fa" ? "en" : "fa");
});

// Create floating ocean bubbles
function createBubbles() {
  if (!bubblesContainer) return;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 24; i++) {
    const bubble = document.createElement("span");
    const size = Math.random() * 12 + 4;

    bubble.className = "bubble";
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.animationDuration = `${Math.random() * 12 + 9}s`;
    bubble.style.animationDelay = `${Math.random() * -20}s`;

    fragment.appendChild(bubble);
  }

  bubblesContainer.appendChild(fragment);
}

createBubbles();
changeLanguage("fa");
