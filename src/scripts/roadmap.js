document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  const nextBtns = document.querySelectorAll(".next-btn");
  const startBtn = document.getElementById("start-btn");
  const backToTopBtn = document.getElementById("back-to-top");
  const hero = document.querySelector(".hero");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    steps.forEach(step => {
      const rect = step.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        step.classList.add("visible");
      }
    });

    if (hero) {
      const rect = hero.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        hero.classList.add("visible");
      }
    }
  };

  nextBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const nextStep = steps[index + 1];
      if (nextStep) {
        nextStep.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      if (steps.length > 0) {
        steps[0].scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
