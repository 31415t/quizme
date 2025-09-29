function renderBadgeGallery() {
  const app = document.getElementById("app");
  const unlocked = getAllBadges(); // { badgeKey: count }

  const allBadges = [
    { key: "premier_quiz", label: "Premier quiz", icon: "fas fa-medal" },
    { key: "score_parfait", label: "GOAT", icon: "fas fa-dragon" },
    { key: "bonnes_reponses_3", label: "3X d’affilée", icon: "fas fa-fire" },
    { key: "bonnes_reponses_5", label: "5X d’affilée", icon: "fas fa-fire" },
    { key: "quiz_20", label: "20 quiz terminés", icon: "fas fa-shield-halved" },
    { key: "quiz_50", label: "50 quiz terminés", icon: "fas fa-shield-alt" },
    { key: "quiz_100", label: "100 quiz terminés", icon: "fas fa-shield-virus" },

  ];

  let html = "<h2 class='fade-in'>🏆 Mes trophées</h2><div class='badge-grid fade-in'>";

  allBadges.forEach(badge => {
    const count = unlocked[badge.key] || 0;
    const unlockedClass = count > 0 ? "badge-unlocked" : "badge-locked";

    html += `
      <div class="badge-card ${unlockedClass}">
        <i class="${badge.icon}"></i>
        <h4>${badge.label}</h4>
        <p>${count > 0 ? `Débloqué <strong>${count}</strong> fois` : "Non débloqué"}</p>
      </div>
    `;
  });

  html += "</div>";
  app.innerHTML = html;
}

// 🔧 Expose la fonction globalement
window.renderBadgeGallery = renderBadgeGallery;