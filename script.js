/* ===== QUIZ DATA ===== */

const quizData = [
  {
    q: "What is my favourite thing about you? 💕",
    options: [
      "Your love 😍",
      "Your boobies 😜",
      "Your possesiveness 😆"
    ],
    correctIndex: 0
  },
  {
    q: "What do I do when I miss you? 🥹",
    options: [
      "Act strong 😎",
      "Overthink silently 🙃",
      "Text you instantly 😌❤️"
    ],
    correctIndex: 2
  },
  {
    q: "Who is officially my favourite person? 💖",
    options: [
      "You 😌❤️",
      "Me 😎",
      "Food 🍕"
    ],
    correctIndex: 0
  }
];

let currentQuestion = 0;

const quizBox = document.getElementById("quizBox");
const questionEl = document.getElementById("question");
const optionsBox = document.getElementById("options");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const music = document.getElementById("bgMusic");

/* ===== LOAD QUESTION ===== */

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.innerText = q.q;
  optionsBox.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => handleAnswer(index === q.correctIndex);
    optionsBox.appendChild(btn);
  });
}

/* ===== POPUP ===== */

function showPopup(text) {
  popupText.innerText = text;
  popup.classList.remove("hidden");
  setTimeout(() => popup.classList.add("hidden"), 1500);
}

/* ===== HANDLE ANSWER ===== */

function handleAnswer(correct) {
  if (correct) {
    showPopup("Correct 😘 you really know me too well!");
  } else {
    showPopup("Wrong 😤 extra cuddles punishment 😂❤️");
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      quizBox.classList.add("hidden");
      document.getElementById("slideshow").classList.remove("hidden");
      music.play().catch(() => {});
    }
  }, 1600);
}

/* ===== YES / NO ===== */

document.getElementById("yesBtn").onclick = () => {
  showPopup("YAYYY 🧸💖 I knew it!!");
  document.querySelector(".btn-group").classList.add("hidden");
};

document.getElementById("noBtn").onclick = () => {
  showPopup("NO is not an option 😏💕");
};

/* ===== START ===== */

loadQuestion();
