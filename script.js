/* =========================
   QUIZ DATA (YOUR OLD QUESTIONS)
========================= */

const quizData = [
  {
    question: "What is my favourite thing about you? 💕",
    options: [
      "Your love 😍",
      "Your boobies 😜",
      "Your possesiveness 😆"
    ],
    correctIndex: 0
  },
  {
    question: "What do I do when I miss you? 🥹",
    options: [
      "Act strong 😎",
      "Overthink silently 🙃",
      "Text you instantly 😌❤️"
    ],
    correctIndex: 2
  },
  {
    question: "Who is officially my favourite person? 💖",
    options: [
      "You 😌❤️",
      "Me 😎",
      "Food 🍕"
    ],
    correctIndex: 0
  }
];

/* =========================
   QUIZ ELEMENTS
========================= */

let currentQuestion = 0;

const quizBox = document.getElementById("quizBox");
const questionEl = document.getElementById("question");
const optionsBox = document.getElementById("options");

/* =========================
   LOAD QUESTION
========================= */

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.innerText = q.question;
  optionsBox.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => handleAnswer(index === q.correctIndex);
    optionsBox.appendChild(btn);
  });
}

/* =========================
   HANDLE ANSWER
========================= */

function handleAnswer(isCorrect) {
  if (isCorrect) {
    alert("Correct 😘 you really know me too well!");
  } else {
    alert("Wrong 😤 hmm… still cute though 😂❤️");
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quizBox.classList.add("hidden");
    document.getElementById("slideshow").classList.remove("hidden");

    const music = document.getElementById("bgMusic");
    if (music) music.play().catch(() => {});
  }
}

/* =========================
   START QUIZ
========================= */

loadQuestion();

/* =========================
   SLIDESHOW
========================= */

const images = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg"
];

let imgIndex = 0;
const slideImg = document.getElementById("slideImage");

setInterval(() => {
  imgIndex = (imgIndex + 1) % images.length;
  slideImg.src = images[imgIndex];
}, 2500);

/* =========================
   YES / NO BUTTONS
========================= */

function yesClicked() {
  document.getElementById("choiceButtons").style.display = "none";
  document.getElementById("proposalModal").style.display = "flex";
}

function noClicked() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}
