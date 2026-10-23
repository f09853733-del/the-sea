
const langBtn = document.getElementById("langBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

let currentLang = "en";

// Change the website language
function changeLanguage(lang) {
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.body.dir = lang === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en][data-fa]").forEach((element) => {
    element.textContent = element.dataset[lang];
  });

  langBtn.textContent = lang === "en" ? "FA" : "EN";
  langBtn.setAttribute(
    "aria-label",
    lang === "en" ? "Change language to Persian" : "Change language to English"
  );

  document.title =
    lang === "fa"
      ? "دنیای دریا | کشف اقیانوس"
      : "The Sea | Discover the Ocean";

  localStorage.setItem("theSeaLanguage", lang);
}

// Language button
langBtn.addEventListener("click", () => {
  changeLanguage(currentLang === "en" ? "fa" : "en");
});

// Mobile menu
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Reveal elements while scrolling
const revealElements = document.querySelectorAll(
  ".feature-card, .gallery-card, .section-heading, .gallery-heading, .quote-section"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

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
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Restore the last selected language
const savedLanguage = localStorage.getItem("theSeaLanguage");

if (savedLanguage === "fa" || savedLanguage === "en") {
  changeLanguage(savedLanguage);
}
