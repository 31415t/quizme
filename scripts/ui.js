function renderMatiereCard(key, iconClass, label) {
  return `
    <div class="matiere-card" onclick="renderModes('${key}')">
      <i class="${iconClass}"></i>
      <h3>${label}</h3>
    </div>
  `;
}

function renderModeButton(modeKey, iconClass, label, bestScore, colorClass) {
  const totalQuestions = getModeQuestionCount(modeKey);
  const percent = bestScore !== undefined
    ? Math.round((bestScore / totalQuestions) * 100)
    : null;

  const scoreText = bestScore !== undefined
    ? `<span style="font-size:0.9rem;"><i class="fas fa-trophy"></i> Meilleur score : ${percent}%</span>`
    : `<span style="font-size:0.9rem;"><i class="fas fa-circle-question"></i> Pas encore joué</span>`;

  const questionText = modeKey === "challenge"
    ? `<span style="font-size:0.9rem;"><i class="fas fa-infinity"></i> QCM illimités</span>`
    : `<span style="font-size:0.9rem;"><i class="fas fa-list-ol"></i> ${totalQuestions} QCM</span>`;

  return `
    <button class="mode-button ${colorClass}" onclick="startQuiz('${modeKey}')">
      <i class="${iconClass}"></i> ${label}<br>
      ${questionText}<br>
      ${scoreText}
    </button>
  `;
}

function getModeQuestionCount(modeKey) {
  if (modeKey === "court") return 10;
  if (modeKey === "moyen") return 25;
  if (modeKey === "long") return 50;
  return 100;
}

function launchQuiz(questions, matiere, mode) {
  const app = document.getElementById("app");
  let current = 0;
  let score = 0;
  let timeLeft = 60;
  let timerInterval;

  function showQuestion() {
    if (current >= questions.length || (mode === "challenge" && timeLeft <= 0)) {
      clearInterval(timerInterval);
      saveBestScore(matiere, mode, score);
      unlockBadges(score, mode, questions.length);
      showResults();
      return;
    }

    if (mode !== "challenge") timeLeft = 60;

    const q = questions[current];
    app.innerHTML = `
      <div class="quiz-container fade-in">
        <div class="quiz-header">
          <div class="quiz-info">
            <span class="info-block"><i class="fas fa-clock"></i> <span id="timer">${formatTime(timeLeft)}</span></span>
          </div>
        </div>
         <span class="info-block2"><i class="fas fa-check-circle"></i><span id="goodCount">${score}</span></span>
            <span class="info-block2"><i class="fas fa-times-circle"></i><span id="badCount">${current - score}</span></span>

        <h3>Question ${current + 1}</h3>
        <p class="latex">${q.question}</p>
        <div class="quiz-options">
          ${q.options.map((opt, i) =>
            `<button onclick="handleAnswer(${i})">${opt}</button>`
          ).join("")}
        </div>
      </div>
    `;

    if (window.renderMathInElement) {
      renderMathInElement(app, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '\\(', right: '\\)', display: false}
        ]
      });
    }

    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
  }

  function handleAnswer(selected) {
    const q = questions[current];
    const buttons = document.querySelectorAll(".quiz-options button");
    buttons.forEach(btn => btn.disabled = true);

    clearInterval(timerInterval);

    if (selected === q.answer) {
      score++;
      buttons[selected].style.backgroundColor = "green";
      buttons[selected].style.color = "white";
    } else {
      buttons[selected].style.backgroundColor = "red";
      buttons[selected].style.color = "white";
      buttons[q.answer].style.backgroundColor = "green";
      buttons[q.answer].style.color = "white";
    }

    document.getElementById("goodCount").textContent = score;
    document.getElementById("badCount").textContent = current + 1 - score;

    setTimeout(() => {
      current++;
      showQuestion();
    }, 1000);

    if (selected === q.answer) {
  score++;
  addXP(1); // 🧠 Ajoute 1 XP par bonne réponse
  // ...
}

  }

  window.handleAnswer = handleAnswer;

  function updateTimer() {
    timeLeft--;
    const timer = document.getElementById("timer");
    if (timer) {
      timer.textContent = formatTime(timeLeft);
      timer.style.animation = timeLeft <= 10 ? "blink 1s infinite" : "none";
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (mode === "challenge") {
        showResults();
      } else {
        current++;
        showQuestion();
      }
    }
  }

  function getScoreLabelAndIcon(percent) {
    if (percent === 100) return { label: "GOAT", icon: "fas fa-dragon" };
    if (percent >= 80) return { label: "MAÎTRE", icon: "fas fa-chess-king" };
    if (percent >= 60) return { label: "APPRENTI", icon: "fas fa-user-graduate" };
    if (percent >= 40) return { label: "EXPLORATEUR", icon: "fas fa-compass" };
    if (percent >= 20) return { label: "DÉBUTANT", icon: "fas fa-seedling" };
    return { label: "COURAGE", icon: "fas fa-face-sad-tear" };
  }

  function showResults() {
    const total = questions?.length || 1;
    const percent = Math.round((score / total) * 100);
    const bestScores = getBestScoresFor(matiere);
    const bestRaw = bestScores[mode] || 0;
    const bestPercent = Math.round((bestRaw / total) * 100);
    const { label, icon } = getScoreLabelAndIcon(percent);

    app.innerHTML = `
      <div class="quiz-container fade-in">
        <div class="score-label">
          <i class="${icon}"></i>
          <h1>${label}</h1>
        </div>

        <div class="score-details">
          <p><i class="fas fa-chart-line"></i> Votre score : <strong>${percent}%</strong></p>
          <p><i class="fas fa-trophy"></i> Meilleur score : <strong>${bestPercent}%</strong></p>
        </div>

        <button class="themed-button" onclick="renderModes('${matiere}')">
          <i class="fas fa-rotate-left"></i> Retour aux modes
        </button>
        <button class="themed-button" onclick="renderHome()">
          <i class="fas fa-home"></i> Accueil
        </button>
      </div>
    `;

    if (window.renderMathInElement) {
      renderMathInElement(app, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '\\(', right: '\\)', display: false}
        ]
      });
    }
  }

  showQuestion();
}

// Cartes et onglets
function renderAccomplishmentCard() {
  return `
    <div class="matiere-card" onclick="renderAccomplishments()">
      <i class="fas fa-trophy"></i>
      <h3>Succès</h3>
    </div>
  `;
}

function renderQuizTab() {
  setActiveTab("quiz");
  renderHome();
}

function renderScoreTab() {
  setActiveTab("score");
  renderScoreOverview();
}

function renderBadgeTab() {
  setActiveTab("badge");
  renderBadgeGallery();
}

function setActiveTab(tabKey) {
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.querySelector(`.tab-button[data-tab="${tabKey}"]`);
  if (activeBtn) activeBtn.classList.add("active");
}

// Exposition globale
window.renderQuizTab = renderQuizTab;
window.renderScoreTab = renderScoreTab;
window.renderBadgeTab = renderBadgeTab;

window.setActiveTab = setActiveTab;

