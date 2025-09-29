// Sauvegarde du meilleur score si supérieur à l'existant
function saveBestScore(matiere, mode, score) {
  const scores = JSON.parse(localStorage.getItem("bestScores")) || {};
  scores[matiere] = scores[matiere] || {};
  if (!scores[matiere][mode] || score > scores[matiere][mode]) {
    scores[matiere][mode] = score;
    localStorage.setItem("bestScores", JSON.stringify(scores));
  }
}

// Récupère les meilleurs scores pour une matière
function getBestScoresFor(matiere) {
  const scores = JSON.parse(localStorage.getItem("bestScores")) || {};
  return scores[matiere] || {};
}

// Débloque et incrémente un badge
function unlockBadge(badgeName) {
  const badges = JSON.parse(localStorage.getItem("badges")) || {};
  badges[badgeName] = (badges[badgeName] || 0) + 1;
  localStorage.setItem("badges", JSON.stringify(badges));
}

// Récupère tous les badges
function getAllBadges() {
  return JSON.parse(localStorage.getItem("badges")) || {};
}

// Débloque les badges selon les performances
function unlockBadges(score, mode, totalQuestions) {
  const badges = getAllBadges();

  // 🥇 Premier quiz
  if (!badges["premier_quiz"]) unlockBadge("premier_quiz");

  // 🏆 Score parfait
  if (score === totalQuestions) unlockBadge("score_parfait");

  // ⚡ Challenge réussi
  if (mode === "challenge" && score >= 10) unlockBadge("challenge_reussi");

  // 🔥 Séries de bonnes réponses
  if (score >= 10) unlockBadge("bonnes_reponses_10");
  else if (score >= 5) unlockBadge("bonnes_reponses_5");
  else if (score >= 3) unlockBadge("bonnes_reponses_3");

  // 🛡️ Badges de consistance
  const completed = parseInt(localStorage.getItem("quizCompleted") || "0") + 1;
  localStorage.setItem("quizCompleted", completed);

  if (completed >= 20) unlockBadge("quiz_20");
  if (completed >= 50) unlockBadge("quiz_50");
  if (completed >= 100) unlockBadge("quiz_100");
}

// Réinitialise toute la progression
function resetProgression() {
  localStorage.removeItem("bestScores");
  localStorage.removeItem("badges");
}