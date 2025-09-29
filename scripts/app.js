// Initialisation de l'application
document.addEventListener("DOMContentLoaded", () => {
  renderHome();
});

// Variables globales
let selectedMatiere = null;
let selectedMode = null;

// Fonction d'animation du compteur
function animateCounter(id, target, duration = 1000) {
  const el = document.getElementById(id);
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = value.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(update);
}

// Étape 1 : Affiche les cartes de matières
function renderHome() {
  const app = document.getElementById("app");
  const totalQCM = getTotalQCMCount();

  const xp = getXP();
  const stars = getStarCountFromXP(xp);
const starIcons = Array(stars).fill('<i class="fas fa-star"></i>').join(" ");
const xpBanner = `
  <div class="xp-banner fade-in">
    <p class="star-row">${starIcons}</p>
    <p>XP : <strong>${xp}</strong></p>
  </div>
`;


  const message = `
    <div class="qcm-banner fade-in">
      <h3><span id="qcmCount" class="qcm-count">0</span> <br> QCM t’attendent pour une révision <strong>fun</strong> et <strong>efficace</strong>.</h3>
    </div>
  `;

  app.innerHTML = `
  ${xpBanner}

    ${message}
    <div class="matiere-grid fade-in">
      ${renderMatiereCard("biologie", "fas fa-dna", "Biologie")}
      ${renderMatiereCard("physique", "fas fa-magnet", "Physique")}
      ${renderMatiereCard("maths", "fas fa-square-root-alt", "Maths")}
      ${renderMatiereCard("chimie", "fas fa-flask", "Chimie")}
      ${renderMatiereCard("francais", "fas fa-book", "Français")}
    </div>
  `;

  // Lance l'animation après insertion
  setTimeout(() => animateCounter("qcmCount", totalQCM, 800), 300);
}

// Étape 2 : Affiche les boutons de mode
function renderModes(matiere) {
  selectedMatiere = matiere;
  const app = document.getElementById("app");
  const bestScores = getBestScoresFor(matiere);

  app.innerHTML = `
    <h2 class="fade-in">Mode de jeu – ${capitalize(matiere)}</h2>
    <div class="mode-buttons fade-in">
      ${renderModeButton("court", "fas fa-hourglass-start", "Mode Court", bestScores.court, "mode-court")}
      ${renderModeButton("moyen", "fas fa-hourglass-half", "Mode Moyen", bestScores.moyen, "mode-moyen")}
      ${renderModeButton("long", "fas fa-hourglass-end", "Mode Long", bestScores.long, "mode-long")}
      ${renderModeButton("challenge", "fas fa-bolt", "Mode Challenge", bestScores.challenge, "mode-challenge")}
    </div>
    <button class="themed-button" onclick="renderHome()">
      <i class="fas fa-home"></i> Accueil
    </button>
  `;
}

// Étape 3 : Lance le quiz
function startQuiz(mode) {
  selectedMode = mode;
  const data = getDataForMatiere(selectedMatiere);
  let questions = [];

  if (mode === "court") {
    questions = shuffleArray([].concat(...Object.values(data))).slice(0, 10);
  } else if (mode === "moyen") {
    questions = shuffleArray([].concat(...Object.values(data))).slice(0, 20);
  } else if (mode === "long") {
    questions = shuffleArray([].concat(...Object.values(data))).slice(0, 50);
  } else if (mode === "challenge") {
    questions = shuffleArray([].concat(...Object.values(data)));
  }

  launchQuiz(questions, selectedMatiere, selectedMode);
}
