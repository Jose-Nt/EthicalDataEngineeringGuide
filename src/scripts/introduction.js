document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector('.hero');
  setTimeout(() => {
    hero.classList.add('visible');
  }, 100);

  const startButton = document.getElementById("start-btn");
  if (startButton) {
    startButton.addEventListener("click", () => {
      const scrollArea = document.querySelector(".scroll-area");
      if (scrollArea) {
        scrollArea.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          document.querySelectorAll(".node-card").forEach((card, i) => {
            setTimeout(() => {
              card.classList.add("fade-in");
            }, i * 100); 
          });
        }, 600); 
      }
    });
  }

  let currentExpandedCard = null;
  let currentExpansionArea = null;

  document.querySelectorAll(".node-card").forEach(card => {
    card.addEventListener("click", () => {
      if (currentExpandedCard === card) {
        currentExpansionArea?.remove();
        currentExpandedCard = null;
        currentExpansionArea = null;
        return;
      }

      currentExpansionArea?.remove();

      const content = card.getAttribute("data-content");
      const expansionArea = document.createElement("div");
      expansionArea.classList.add("expansion-area");
      expansionArea.innerHTML = content;

      card.insertAdjacentElement("afterend", expansionArea);

      currentExpandedCard = card;
      currentExpansionArea = expansionArea;
    });
  });
});