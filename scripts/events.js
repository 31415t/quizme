// Gestionnaire global des événements
document.addEventListener("click", (e) => {
  const target = e.target;

  // Sélection d'une matière
  if (target.closest(".matiere-card")) {
    const matiere = target.closest(".matiere-card").getAttribute("data-matiere");
    if (matiere) renderModes(matiere);
  }

  // Sélection d'un mode
  if (target.closest(".mode-button")) {
    const mode = target.closest(".mode-button").getAttribute("data-mode");
    if (mode) startQuiz(mode);
  }

  // Bouton retour à l'accueil
  if (target.matches("button") && target.textContent.includes("Accueil")) {
    renderHome();
  }

  // Bouton retour aux modes
  if (target.matches("button") && target.textContent.includes("Retour aux modes")) {
    renderModes(selectedMatiere);
  }
});

// Gestion des réponses du quiz (délégué dans ui.js)
window.handleAnswer = function(selectedIndex) {
  // Cette fonction est définie dans ui.js → elle est exposée ici pour que le HTML inline puisse l’appeler
  // Rien à faire ici directement
};