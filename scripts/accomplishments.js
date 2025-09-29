// Affiche la page des accomplissements
function renderAccomplishments() {
  const app = document.getElementById("app");
  const scores = JSON.parse(localStorage.getItem("bestScores")) || {};
  const badges = getAllBadges();

  app.innerHTML = `
    <h2 class="fade-in">🎖️ Mes accomplissements</h2>

    <h3>🏆 Meilleurs scores</h3>
    <div class="badge-grid fade-in">
      ${renderScoreCards(scores)}
    </div>

    <h3>🎯 Badges débloqués</h3>
    <div class="badge-grid fade-in">
      ${renderBadgeCards(badges)}
    </div>

    <button onclick="renderHome()">🏠 Retour à l’accueil</button>
  `;
}

// Génère les cartes de scores
function renderScoreCards(scores) {
  const modes = {
    court: "Mode Court",
    moyen: "Mode Moyen",
    long: "Mode Long",
    challenge: "Mode Challenge"
  };

  let html = "";

  for (const matiere in scores) {
    for (const mode in scores[matiere]) {
      const score = scores[matiere][mode];
      html += `
        <div class="badge-card">
          <i class="fas fa-star"></i>
          <h4>${capitalize(matiere)}</h4>
          <p>${modes[mode]} : <strong>${score}</strong></p>
        </div>
      `;
    }
  }

  return html || `<p>Aucun score enregistré pour le moment.</p>`;
}

// Génère les cartes de badges
function renderBadgeCards(badges) {
  const badgeLabels = {
    premier_quiz: "Premier quiz terminé",
    score_parfait: "Score parfait",
    challenge_reussi: "Challenge réussi",
    bonnes_reponses_3: "3 bonnes réponses d’affilée",
    bonnes_reponses_5: "5 bonnes réponses d’affilée",
    bonnes_reponses_10: "10 bonnes réponses d’affilée"
  };

  const badgeIcons = {
    premier_quiz: "fas fa-medal",
    score_parfait: "fas fa-check-circle",
    challenge_reussi: "fas fa-bolt",
    bonnes_reponses_3: "fas fa-fire",
    bonnes_reponses_5: "fas fa-fire",
    bonnes_reponses_10: "fas fa-fire"
  };

  let html = "";

  for (const badge in badges) {
    const count = badges[badge];
    html += `
      <div class="badge-card">
        <i class="${badgeIcons[badge] || 'fas fa-award'}"></i>
        <h4>${badgeLabels[badge] || badge}</h4>
        <p>Débloqué <strong>${count}</strong> fois</p>
      </div>
    `;
  }

  return html || `<p>Aucun badge débloqué pour le moment.</p>`;
}

window.renderAccomplishments = renderAccomplishments;

// Expose la fonction pour que le HTML inline puisse l’appeler