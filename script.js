
const loader = document.getElementById("loader");

// Hide the loading screen even if a remote image is slow.
window.addEventListener("load", () => {
  loader.classList.add("done");
});

setTimeout(() => {
  loader.classList.add("done");
}, 2500);

// Reveal elements when they enter the screen.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08
  });

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

// Filter gallery photos.
const filterButtons = document.querySelectorAll(".filter");
const photoCards = document.querySelectorAll(".photo-card");
const emptyMessage = document.querySelector(".empty-message");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    photoCards.forEach((card) => {
      const matches =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.classList.toggle("hidden", !matches);

      if (matches) visibleCount++;
    });

    emptyMessage.hidden = visibleCount > 0;
  });
});

// Interactive favorite buttons.
document.querySelectorAll(".like-button").forEach((button) => {
  button.addEventListener("click", () => {
    const isLiked = button.classList.toggle("liked");

    button.setAttribute("aria-pressed", String(isLiked));
    button.textContent = isLiked ? "♥" : "♡";
  });
});

// Highlight the current navigation section.
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          const isActive =
            link.getAttribute("href") === `#${entry.target.id}`;

          link.classList.toggle("active", isActive);
        });
      }
    });
  }, {
    rootMargin: "-25% 0px -60% 0px"
  });

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}

// Automatic copyright year.
document.getElementById("year").textContent =
  new Date().getFullYear();

// Give failed images a clear fallback instead of a broken icon.
document.querySelectorAll(".photo-card img, .about-image img").forEach((img) => {
  img.addEventListener("error", () => {
    img.alt = "Image unavailable — please check your internet connection.";
    img.style.display = "none";
    img.parentElement.style.background =
      "linear-gradient(135deg, #18262c, #3b2439)";
  }, { once: true });
});
