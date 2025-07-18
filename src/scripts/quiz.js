document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", () => {
      const group = option.querySelector("input").name;
      document.querySelectorAll(`input[name="${group}"]`).forEach(input => {
        input.closest(".option").classList.remove("selected");
      });
      option.classList.add("selected");
      option.querySelector("input").checked = true;
    });
  });

  document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const answers = {
      q1: "b",
      q2: "c",
      q3: "c",
      q4: "c",
      q5: "c",
      q6: "c",
    };

    let score = 0;

    for (let question in answers) {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === answers[question]) {
        score++;
      }
    }

    const overlay = document.getElementById("overlay");
    const message = document.getElementById("overlay-message");

    let text = "";

    switch (score) {
      case 6:
        text = "🎯 Incrível! Você acertou tudo! Ética nos dados está no sangue!";
        break;
      case 5:
        text = "✅ Ótimo trabalho! 5 de 6. Quase lá!";
        break;
      case 4:
        text = "😌 4 de 6. Tem potencial, revise o roadmap.";
        break;
      case 3:
        text = "🤔 3 acertos. Que tal reler algumas etapas?";
        break;
      case 2:
        text = "😅 Só 2... mas nada que foco não resolva!";
        break;
      case 1:
        text = "🧐 Só 1 acerto. Hora de mergulhar no conteúdo!";
        break;
      default:
        text = "😵 Nenhum acerto... vamos tentar de novo?";
    }

    message.textContent = text;
    overlay.classList.remove("hidden");
  });

  const introOverlay = document.getElementById("intro-overlay");
  const startQuizBtn = document.getElementById("start-quiz-btn");

  startQuizBtn.addEventListener("click", () => {
    introOverlay.style.display = "none";
  });
});
