// Mélange un tableau (algorithme de Fisher-Yates)
function shuffleArray(arr) {
  const a = arr.slice(); // copie pour ne pas modifier l'original
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Formate le temps en mm:ss
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

// Met une majuscule au début d’un mot
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Récupère les données QCM selon la matière
function getDataForMatiere(matiere) {
  switch (matiere) {
    case "biologie": return biologie;
    case "physique": return physique;
    case "maths": return maths;
    case "chimie": return chimie;
    case "francais": return francais;
    default: return {};
  }
}

function getTotalQCMCount() {
  const matieres = ["biologie", "physique", "maths", "chimie", "francais"];
  let total = 0;

  matieres.forEach(matiere => {
    const data = getDataForMatiere(matiere);
    if (Array.isArray(data)) {
      total += data.length;
    } else {
      // Si data est un objet avec plusieurs sous-thèmes
      Object.values(data).forEach(arr => {
        if (Array.isArray(arr)) total += arr.length;
      });
    }
  });

  return total;
}

function addXP(amount = 1) {
  const currentXP = parseInt(localStorage.getItem("xp") || "0", 10);
  localStorage.setItem("xp", currentXP + amount);
}

function getXP() {
  return parseInt(localStorage.getItem("xp") || "0", 10);
}

function getStarCountFromXP(xp) {
  if (xp >= 500) return 5;
  if (xp >= 250) return 4;
  if (xp >= 150) return 3;
  if (xp >= 50) return 2;
  if (xp >= 0) return 1;
  return 0;
}

