
const languageBtn = document.getElementById("languageBtn");
let currentLanguage = "fa";

languageBtn.addEventListener("click", () => {
  currentLanguage = currentLanguage === "fa" ? "en" : "fa";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir =
    currentLanguage === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-fa][data-en]").forEach(element => {
    element.textContent = element.dataset[currentLanguage];
  });

  languageBtn.textContent =
    currentLanguage === "fa" ? "English" : "فارسی";
});

// اگر عکسی بارگذاری نشد، تصویر جایگزین را امتحان کن.
const fallbackImages = [
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=80"
];

document.querySelectorAll(".ocean-card img").forEach(img => {
  let attempts = 0;

  img.addEventListener("error", () => {
    if (attempts < fallbackImages.length) {
      img.src = fallbackImages[attempts++];
    }
  });
});
