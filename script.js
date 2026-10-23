
const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navGallery: "Gallery",
    navMagic: "Magic",
    navContact: "Contact",
    eyebrow: "✧ A MAGICAL GARDEN FOR YOUR SOUL",
    heroTitle: "Where Flowers, Dreams<br>and Magic Come to Life",
    heroText: "Step into a world of glowing flowers, fluttering butterflies and endless beauty. Discover a garden where nature and imagination bloom together.",
    explore: "Explore the Garden ↗",
    discover: "Discover the Magic",
    heroNote: "A little wonder lives here",
    scroll: "SCROLL TO DISCOVER",
    imageCaption: "Let your imagination bloom",
    aboutEyebrow: "✿ ABOUT BLOOM",
    aboutTitle: "More Than a Garden,<br>It's an <span>Experience.</span>",
    aboutText: "BLOOM is a magical world filled with vibrant flowers, fluttering butterflies and hidden wonders. Explore a dreamy place where every little detail feels alive.",
    statOne: "Endless Wonder",
    statTwo: "Pure Imagination",
    galleryEyebrow: "✧ THE SECRET GARDEN",
    galleryTitle: "A World in <span>Bloom</span>",
    galleryText: "Every flower has a story. Which one will you discover?",
    cardOne: "Petal Dreams",
    cardTwo: "Golden Hour",
    cardThree: "Wild & Free",
    cardFour: "Into the Dream",
    magicEyebrow: "✧ A TOUCH OF WONDER",
    magicTitle: "Little Things, <span>Big Magic</span>",
    magicText: "The garden is full of surprises. Try a little magic of your own.",
    magicOne: "Make It Bloom",
    magicOneText: "Tap to release a shower of magical petals.",
    tryMagic: "TRY IT ↗",
    magicTwo: "Butterfly Dreams",
    magicTwoText: "Follow the butterflies as they dance through the garden.",
    magicThree: "Starlit Moments",
    magicThreeText: "Tiny lights make every moment feel extraordinary.",
    quote: "Wherever flowers bloom, so does a little bit of magic.",
    contactEyebrow: "✧ YOUR STORY STARTS HERE",
    contactTitle: "Keep a Little <span>Magic</span> With You.",
    contactText: "Thanks for wandering through our garden. Come back whenever you need a little wonder.",
    backTop: "Back to the Garden ↑",
    footer: "Made with love, flowers & a little magic."
  },

  fa: {
    navHome: "خانه",
    navAbout: "درباره ما",
    navGallery: "گالری",
    navMagic: "جادوی گل‌ها",
    navContact: "پایان",
    eyebrow: "✧ باغی جادویی برای روح تو",
    heroTitle: "جایی که گل‌ها، رؤیاها<br>و جادو جان می‌گیرند",
    heroText: "قدم به دنیایی از گل‌های درخشان، پروانه‌های رقصان و زیبایی بی‌پایان بگذار. باغی را کشف کن که طبیعت و خیال در آن شکوفا می‌شوند.",
    explore: "کشف باغ جادویی ↗",
    discover: "جادو را کشف کن",
    heroNote: "اینجا کمی جادو زندگی می‌کند",
    scroll: "برای کشف بیشتر پایین برو",
    imageCaption: "بگذار خیالت شکوفا شود",
    aboutEyebrow: "✿ درباره BLOOM",
    aboutTitle: "بیشتر از یک باغ،<br>یک <span>تجربه جادویی.</span>",
    aboutText: "BLOOM دنیایی جادویی سرشار از گل‌های رنگارنگ، پروانه‌های رقصان و شگفتی‌های پنهان است. وارد جهانی رؤیایی شو که در آن هر جزئیات، حس زندگی دارد.",
    statOne: "شگفتی بی‌پایان",
    statTwo: "قدرت خیال",
    galleryEyebrow: "✧ باغ اسرارآمیز",
    galleryTitle: "دنیایی در حال <span>شکوفایی</span>",
    galleryText: "هر گل داستانی دارد؛ تو کدام داستان را کشف می‌کنی؟",
    cardOne: "رؤیای گلبرگ‌ها",
    cardTwo: "ساعت طلایی",
    cardThree: "آزاد و رها",
    cardFour: "در دل رؤیا",
    magicEyebrow: "✧ لمس شگفتی",
    magicTitle: "جزئیات کوچک، <span>جادوی بزرگ</span>",
    magicText: "این باغ پر از شگفتی است. تو هم جادوی کوچکی خلق کن.",
    magicOne: "گل‌ها را شکوفا کن",
    magicOneText: "لمس کن تا بارانی از گلبرگ‌های جادویی آزاد شود.",
    tryMagic: "امتحان کن ↗",
    magicTwo: "رؤیای پروانه‌ها",
    magicTwoText: "رقص پروانه‌ها را در میان باغ دنبال کن.",
    magicThree: "لحظه‌های ستاره‌ای",
    magicThreeText: "نورهای کوچک، لحظه‌ها را به خاطره‌ای شگفت‌انگیز تبدیل می‌کنند.",
    quote: "هر جا گلی شکوفا می‌شود، کمی جادو هم متولد می‌شود.",
    contactEyebrow: "✧ داستان تو از اینجا شروع می‌شود",
    contactTitle: "کمی <span>جادو</span> با خودت ببر.",
    contactText: "ممنون که در باغ ما قدم زدی. هر وقت به کمی شگفتی نیاز داشتی، دوباره برگرد.",
    backTop: "بازگشت به باغ ↑",
    footer: "با عشق، گل‌ها و کمی جادو ساخته شده است."
  }
};

let currentLanguage = "en";

const languageSwitch = document.getElementById("languageSwitch");
const langLabel = document.getElementById("langLabel");

function setLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = translations[language][key];

    if (translatedText !== undefined) {
      element.innerHTML = translatedText;
    }
  });

  langLabel.textContent = language === "en" ? "EN" : "FA";

  languageSwitch.querySelectorAll("span").forEach((span) => {
    span.classList.toggle(
      "active",
      span.textContent === language.toUpperCase()
    );
  });

  document.querySelectorAll(".gallery-card").forEach((card) => {
    const title = language === "fa"
      ? card.dataset.titleFa
      : card.dataset.titleEn;

    card.setAttribute("aria-label", title || "");
  });

  try {
    localStorage.setItem("bloom-language", language);
  } catch (error) {
    // The site still works when browser storage is unavailable.
  }
}

languageSwitch.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "fa" : "en");
});

try {
  const savedLanguage = localStorage.getItem("bloom-language");
  if (savedLanguage === "fa" || savedLanguage === "en") {
    setLanguage(savedLanguage);
  }
} catch (error) {
  // Use English as the default language.
}

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Floating magical lights
const sparklesContainer = document.getElementById("sparkles");
const sparkleSymbols = ["✧", "✦", "·", "✿", "⋆"];

function createSparkle() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const sparkle = document.createElement("span");
  sparkle.className = "spark";
  sparkle.textContent =
    sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];

  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = (45 + Math.random() * 55) + "vh";
  sparkle.style.setProperty(
    "--duration",
    (3 + Math.random() * 4) + "s"
  );

  sparkle.style.fontSize = (8 + Math.random() * 14) + "px";
  sparklesContainer.appendChild(sparkle);

  window.setTimeout(() => sparkle.remove(), 7500);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  for (let i = 0; i < 16; i++) {
    window.setTimeout(createSparkle, i * 180);
  }

  window.setInterval(createSparkle, 420);
}

// Click to release magical flower petals
const bloomButton = document.getElementById("bloomButton");

bloomButton.addEventListener("click", (event) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const rect = bloomButton.getBoundingClientRect();
  const originX = event.clientX || rect.left + rect.width / 2;
  const originY = event.clientY || rect.top + rect.height / 2;
  const petals = ["✿", "❀", "✧", "✦", "❋"];

  for (let i = 0; i < 22; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];

    petal.style.left = originX + "px";
    petal.style.top = originY + "px";
    petal.style.fontSize = (12 + Math.random() * 20) + "px";
    petal.style.setProperty("--dx", (Math.random() * 260 - 130) + "px");
    petal.style.setProperty("--dy", (-40 - Math.random() * 200) + "px");

    document.body.appendChild(petal);
    window.setTimeout(() => petal.remove(), 1900);
  }
});

// Gallery lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxClose = document.getElementById("lightboxClose");

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll(".gallery-card").forEach((card) => {
  card.addEventListener("click", () => {
    const image = card.querySelector("img");
    const title = currentLanguage === "fa"
      ? card.dataset.titleFa
      : card.dataset.titleEn;

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxTitle.textContent = title || image.alt;

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  });
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

// Keep the copyright year current
document.getElementById("year").textContent = new Date().getFullYear();

// Graceful image fallback if a remote image cannot load
document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    image.style.opacity = "0";
    image.style.background =
      "linear-gradient(135deg, #29143e, #6b286d, #17102b)";
    image.setAttribute("aria-label", "Decorative image unavailable");
  }, { once: true });
});
