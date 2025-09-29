function renderScoreOverview() {
  const app = document.getElementById("app");
  const scores = JSON.parse(localStorage.getItem("bestScores")) || {};
  const modes = ["court", "moyen", "long"];

  let html = "<h2 class='fade-in'><i class='fas fa-chart-bar'></i> Meilleurs scores</h2><div class='score-grid fade-in'>";


  const hasScores = Object.keys(scores).length > 0;

  if (!hasScores) {
    html += `<p>Aucun score enregistré pour le moment.</p>`;
  } else {
    for (const matiere in scores) {
      html += `<div class="score-card"><h3>${capitalize(matiere)}</h3>`;
      modes.forEach(mode => {
        const raw = scores[matiere][mode] || 0;
        const modeTotal = getModeQuestionCount(mode); // ex. 10, 25, 50
        const percent = Math.round((raw / modeTotal) * 100);
        html += `<p><i class="fas fa-stopwatch"></i> ${capitalize(mode)} : <strong>${percent}%</strong></p>`;
      });
      html += `</div>`;
    }
  }

  html += "</div>";
  app.innerHTML = html;
}

function getModeQuestionCount(mode) {
  if (mode === "court") return 10;
  if (mode === "moyen") return 25;
  if (mode === "long") return 50;
  return 100; // fallback pour challenge ou inconnu
}


// ✅ Fonction utilitaire locale (si non définie ailleurs)
function getTotalQuestions(matiere) {
  const data = getDataForMatiere(matiere);
  return [].concat(...Object.values(data)).length;
}

// 🔧 Expose la fonction globalement
window.renderScoreOverview = renderScoreOverview;