
const languageButton = document.getElementById("languageButton");
const bubblesContainer = document.getElementById("bubbles");

let currentLanguage = "fa";

// Persian / English switch
function changeLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  document.body.dir = language === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-fa][data-en]").forEach((element) => {
    element.textContent = element.dataset[language];
  });

  languageButton.textContent = language === "fa" ? "EN ↗" : "FA ↗";

  document.title = language === "fa"
    ? "Ocean Dream | رؤیای اقیانوس"
    : "Ocean Dream | Ocean Secrets";
}

languageButton.addEventListener("click", () => {
  changeLanguage(currentLanguage === "fa" ? "en" : "fa");
});

// Try the backup image if the first image fails
document.querySelectorAll("img[data-fallback]").forEach((img) => {
  img.addEventListener("error", function () {
    if (this.dataset.fallbackTried !== "true") {
      this.dataset.fallbackTried = "true";
      this.src = this.dataset.fallback;
    } else {
      // Keep the layout attractive even if both URLs fail
      this.style.visibility = "hidden";
      this.parentElement.style.background =
        "radial-gradient(ellipse at center, #12617a, #061c2b)";
      console.warn("Both image URLs failed:", this.alt);
    }
  });

  // If the original image loaded, no fallback is needed.
});

// Animated bubbles
function createBubbles() {
  if (!bubblesContainer) return;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 25; i++) {
    const bubble = document.createElement("span");
    const size = Math.random() * 12 + 4;

    bubble.className = "bubble";
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.animationDuration = `${9 + Math.random() * 12}s`;
    bubble.style.animationDelay = `${-Math.random() * 20}s`;

    fragment.appendChild(bubble);
  }

  bubblesContainer.appendChild(fragment);
}

changeLanguage("fa");
createBubbles();
