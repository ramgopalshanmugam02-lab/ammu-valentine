/* ================= QUIZ DATA ================= */

const quizData = [
  {
    q: "What is my favourite thing about you? 💕",
    options: [
      { text: "Your love 😍", correct: true },
      { text: "Your boobies 😜", correct: false },
      { text: "Your possessiveness 😆", correct: false }
    ]
  },
  {
    q: "What do I do when I miss you? 🥹",
    options: [
      { text: "Act strong 😎", correct: false },
      { text: "Overthink silently 🙃", correct: false },
      { text: "Text you instantly 😌❤️", correct: true }
    ]
  },
  {
    q: "Who is officially my favourite person? 💖",
    options: [
      { text: "You 😌❤️", correct: true },
      { text: "Me 😎", correct: false },
      { text: "Food 🍕", correct: false }
    ]
  }
];

let currentQ = 0;

/* ================= ELEMENTS ================= */

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

const slideshow = document.getElementById("slideshow");
const proposal = document.getElementById("proposal");

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const popupTeddy = document.getElementById("popupTeddy");

const music = document.getElementById("bgMusic");

/* ================= QUIZ ================= */

function loadQuestion() {
  questionEl.textContent = quizData[currentQ].q;
  optionsEl.innerHTML = "";

  quizData[currentQ].options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => handleAnswer(opt.correct);
    optionsEl.appendChild(btn);
  });
}

function handleAnswer(correct) {
  if (correct) {
    showPopup("Correct 😘 You really know me too well!");
  } else {
    showPopup("Wrong 😤 Oiii Ammu! Think properly!");
  }

  currentQ++;

  if (currentQ < quizData.length) {
    setTimeout(loadQuestion, 1600);
  } else {
    setTimeout(startSlideshow, 1600);
  }
}

/* ================= POPUP ================= */

function showPopup(text, final = false) {
  popupText.textContent = text;
  popupTeddy.style.display = final ? "block" : "none";
  popup.classList.remove("hidden");

  if (!final) {
    setTimeout(closePopup, 1500);
  }
}

function closePopup() {
  popup.classList.add("hidden");
}

/* ================= SLIDESHOW + MUSIC ================= */

const photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg"
];

let slideIndex = 0;

function startSlideshow() {
  quiz.classList.remove("active");
  slideshow.classList.add("active");

  music.volume = 0.6;
  music.play().catch(() => {});

  setInterval(() => {
    slideIndex = (slideIndex + 1) % photos.length;
    document.getElementById("slide").src = photos[slideIndex];
  }, 2500);

  setTimeout(() => {
    slideshow.classList.remove("active");
    proposal.classList.add("active");
  }, 14000);
}

/* ================= YES / NO ================= */

const noBtn = document.getElementById("noBtn");

noBtn.onmouseover = () => {
  noBtn.style.left = Math.random() * 200 + "px";
  noBtn.style.top = Math.random() * 80 + "px";
};

document.getElementById("yesBtn").onclick = () => {
  document.querySelector(".btn-group").style.display = "none";

  showPopup(
    "Ammu 🧸❤️\n\nYou just made my heart the happiest.\nEvery smile, every fight, every silly moment — I want all of it with you.\n\nWill you be mine… today and always? 💖",
    true
  );
};

/* ================= START ================= */

loadQuestion();
