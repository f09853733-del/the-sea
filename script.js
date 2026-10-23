
const loader = document.getElementById("loader");
const bubblesContainer = document.getElementById("bubbles");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backTop = document.getElementById("backTop");

// Loading animation
function hideLoader() {
  if (loader) {
    loader.classList.add("hidden");
  }
}

window.addEventListener("load", hideLoader);

// Prevent the loader from remaining forever on slow connections
setTimeout(hideLoader, 3500);

// Floating underwater bubbles
function createBubbles() {
  if (!bubblesContainer) return;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 24; i++) {
    const bubble = document.createElement("span");
    const size = Math.random() * 12 + 4;

    bubble.className = "bubble";
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 12 + 10}s`;
    bubble.style.animationDelay = `${Math.random() * 15}s`;

    fragment.appendChild(bubble);
  }

  bubblesContainer.appendChild(fragment);
}

createBubbles();

// Reveal elements when they enter the viewport
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

// Mobile navigation
function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  menuToggle.textContent = "☰";
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
  menuToggle.textContent = isOpen ? "✕" : "☰";

  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.addEventListener("click", (event) => {
  if (
    navLinks.classList.contains("open") &&
    !navLinks.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeMenu();
  }
});

// Back-to-top button
window.addEventListener(
  "scroll",
  () => {
    backTop.classList.toggle("visible", window.scrollY > 500);
  },
  { passive: true }
);

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Automatically update the footer year
document.getElementById("year").textContent =
  new Date().getFullYear();
