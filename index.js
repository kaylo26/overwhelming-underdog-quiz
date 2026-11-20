const quizData = [
  {
    question: "What is your favorite sport?",
    options: [
      { text: "Tennis", type: "Frances Tiafoe", type: "Novak Djokovic", type: "Naomi Osaka"},
      { text: "Soccer", type: "Luis Diaz", type: "Cristiano Ronaldo"},
      { text: "Basketball", type: "Giannis Antetokounmpo", type: "Michael Jordan"},
      { text: "Swimming", type: "Lia Thomas" },
      { text: "Rugby", type: "Ilona Maher" },
      { text: "Baseball", type: "Xander Bogaerts", type: "Derek Jeter"},
      { text: "Track and Field", type: "Wilma Rudolph"},
      { text: "Golf", type: "Michael Jordan"},
      { text: "Football", type: "Cristiano Ronaldo"},
      { text: "Lacrosse", type: "Novak Djokovic"},
      { text: "Gymnastics", type: "Simone Biles"},
      { text: "Volleyball", type: "Naomi Osaka"}
    ]
  },
  {
    question: "What is your favorite quality in a person?",
    options: [
      { text: "Being Yourself", type: "Lia Thomas", type: "Naomi Osaka" },
      { text: "Being Supportive", type: "Ilona Maher" },
      { text: "Being Humble", type: "Giannis Antetokounmpo" },
      { text: "Being Funny", type: "Luis Diaz" },
      { text: "Being Kind", type: "Frances Tiafoe", type: "Wilma Rudolph"},
      { text: "Being Loyal", type: "Xander Bogaerts", type: "Derek Jeter"},
      { text: "Having Beliefs", type: "Wilma Rudolph"},
      { text: "Accountability", type: "Michael Jordan"},
      { text: "Being Disciplined", type: "Cristiano Ronaldo"},
      { text: "Being Grateful", type: "Novak Djokovic"},
      { text: "Honesty", type: "Simone Biles"},
      { text: "Being Empathetic", type: "Naomi Osaka"}
    ]
  },
  {
    question: "What is your lucky number?",
    options: [
      { text: "13", type: "Ilona Maher" },
      { text: "7", type: "Luis Diaz", type: "Giannis Antetokounmpo", type: "Cristiano Ronaldo"},
      { text: "34", type: "Giannis Antetokounmpo"},
      { text: "20", type: "Frances Tiafoe" },
      { text: "50", type: "Lia Thomas" },
      { text: "2", type: "Xander Bogaerts", type: "Derek Jeter"},
      { text: "3", type: "Wilma Rudolph"},
      { text: "23", type: "Michael Jordan"},
      { text: "1", type: "Novak Djokovic"},
      { text: "4", type: "Simone Biles", type: "Naomi Osaka"}
    ]
  },
  {
    question: "Whats foods catch your eye?",
    options: [
      { text: "Fish with Rice", type: "Luis Diaz" },
      { text: "Oreos and Milk", type: "Giannis Antetokounmpo" },
      { text: "Bread with Butter", type: "Ilona Maher" },
      { text: "Bananas", type: "Lia Thomas" },
      { text: "French Fries", type: "Frances Tiafoe" },
      { text: "A Caribbean Meal", type: "Xander Bogaerts"},
      { text: "Fried Chicken and Collard Greens", type: "Wilma Rudolph"},
      { text: "Steak", type: "Michael Jordan"},
      { text: "Cod", type: "Cristiano Ronaldo"},
      { text: "Plant Based Meals", type: "Novak Djokovic"},
      { text: "Pepperoni Pizza", type: "Simone Biles"},
      { text: "Sushi", type: "Naomi Osaka"},
      { text: "Spaghetti & Meatballs", type: "Derek Jeter"}
    ]
  },
  {
    question: "If you could have one superpower, what would it be?",
    options: [
      { text: "Unlimited Stamina", type: "Lia Thomas", type: "Cristiano Ronaldo"},
      { text: "Elastic", type: "Giannis Antetokounmpo", type: "Novak Djokovic" },
      { text: "Lightning Fast Reflexes", type: "Frances Tiafoe" },
      { text: "Super Speed", type: "Ilona Maher", type: "Wilma Rudolph" },
      { text: "Spidey-Senses", type: "Luis Diaz" },
      { text: "Teleportation", type: "Xander Bogaerts"},
      { text: "Leap", type: "Cristiano Ronaldo"},
      { text: "Flight", type: "Michael Jordan"},
      { text: "Defying Gravity", type: "Simone Biles"},
      { text: "Invisibility", type: "Naomi Osaka", type: "Derek Jeter"}
    ]
  },
  {
    question: "If you could travel anywhere in the world, where would you go?",
    options: [
      { text: "The Netherlands", type: "Ilona Maher"},
      { text: "Japan", type: "Frances Tiafoe", type: "Naomi Osaka"},
      { text: "Florida", type: "Lia Thomas"},
      { text: "Greece", type: "Giannis Antetokounmpo"},
      { text: "Colombia", type: "Luis Diaz"},
      { text: "Aruba", type: "Xander Bogaerts"},
      { text: "Rome", type: "Wilma Rudolph"},
      { text: "A Coastel Getaway", type: "Michael Jordan"},
      { text: "Madeira, Portugal", type: "Cristiano Ronaldo"},
      { text: "Anywhere is a Vacation", type: "Novak Djokovic", type: "Simone Biles"},
      { text: "The Bahamas", type: "Derek Jeter"}
    ]
  },
  {
    question: "If you faced a major setback while chasing your dream, what is the FIRST thing you would do?",
    options: [
      { text: "Lean on your family for motivation", type: "Luis Diaz"},
      { text: "Prioritize your mental and physical health", type: "Lia Thomas"},
      { text: "Choose to change your mindset", type: "Ilona Maher", type: "Novak Djokovic", type: "Simone Biles"},
      { text: "Create more daily good habits", type: "Frances Tiafoe"},
      { text: "Try harder next time", type: "Giannis Antetokounmpo"},
      { text: "Stay calm, review, and get back to work", type: "Xander Bogaerts"},
      { text: "Take small steps forward and get back on track", type: "Wilma Rudolph"},
      { text: "Outwork everybody else", type: "Michael Jordan"},
      { text: "Immediately get back to work", type: "Cristiano Ronaldo"},
      { text: "Reflect on past obstacles", type: "Naomi Osaka"},
      { text: "Own the mistake", type: "Derek Jeter"}
    ]
  },
  {
    question: "As an overwhelming underdog, what do you want people to remember you for?",
    options: [
      { text: "How you played in your sport, as an athlete ", type: "Luis Diaz", type: "Derek Jeter"},
      { text: "Inspiring people in your community ", type: "Lia Thomas"},
      { text: "Being real and vulnerable ", type: "Ilona Maher", type: "Naomi Osaka"},
      { text: "Your work ethic", type: "Giannis Antetokounmpo", type: "Cristiano Ronaldo"},
      { text: "How you were as a person, outside of your sport", type: "Frances Tiafoe"},
      { text: "Someone who played the game the right way", type: "Xander Bogaerts"},
      { text: "Never giving up", type: "Wilma Rudolph" , type: "Michael Jordan", type: "Novak Djokovic"},
      { text: "Having fun", type: "Simone Biles"}
    ]
  },
  {
    question: "If your life were a movie, what type of movie would you wanna be?",
    options: [
      { text: "Heartwarming Comedy ", type: "Frances Tiafoe"},
      { text: "Superhero Adventure", type: "Giannis Antetokounmpo"},
      { text: "Disney Princess movie", type: "Ilona Maher"},
      { text: "Documentary ", type: "Luis Diaz"},
      { text: "True-Life Drama", type: "Lia Thomas", type: "Derek Jeter"},
      { text: "Sports Drama", type: "Xander Bogaerts"},
      { text: "Biography", type: "Wilma Rudolph"},
      { text: "Thriller", type: "Michael Jordan"},
      { text: "Action", type: "Cristiano Ronaldo"},
      { text: "Psychological Drama", type: "Novak Djokovic"},
      { text: "Coming-of-Age", type: "Simone Biles"},
      { text: "Indie Drama", type: "Naomi Osaka"}
    ]
  },
  {
    question: "What is your favorite thing to do in your free time?",
    options: [
      { text: "Cooking", type: "Ilona Maher"},
      { text: "Listening to music ", type: "Luis Diaz"},
      { text: "Spending time with family", type: "Giannis Antetokounmpo", type: "Xander Bogaerts", type: "Novak Djokovic"},
      { text: "Playing video games", type: "Lia Thomas"},
      { text: "Watching shows/movies on Netflix", type: "Frances Tiafoe"},
      { text: "Running outdoors", type: "Wilma Rudolph"},
      { text: "Practing a sport", type: "Michael Jordan"},
      { text: "Working out", type: "Cristiano Ronaldo"},
      { text: "Practice mindfulness", type: "Novak Djokovic"},
      { text: "Shopping", type: "Simone Biles", type: "Naomi Osaka"},
      { text: "Sleeping", type: "Derek Jeter"}
    ]
  }/*,
  {
    question: "Which adventure sounds the most exciting to you?",
    options: [
      { text: "Exploring a new place you have never visited!", type: "Luis Diaz"},
      { text: "Doing a puzzle with friends to sharpen your mind and have fun!", type: "Frances Tiafoe"},
      { text: "Going on a bike ride in a beach town near the ocean!", type: "Giannis Antetokounmpo"},
      { text: "Playing an open-world video game where you defeat monsters and explore castles!", type: "Lia Thomas"},
      { text: "Going kayaking to explore a giant hidden lake!", type: "Ilona Maher"},
      { text: "Vacationing to islands", type: "Xander Bogaerts"},
      { text: "Breaking barriers across the globe", type: "Wilma Rudolph"},
      { text: "Playing a new sport with your friends", type: "Michael Jordan"},
      { text: "Chasing a new record", type: "Cristiano Ronaldo"},
      { text: "An intense chess match", type: "Novak Djokovic"},
      { text: "Performing a talent on stage!", type: "Simone Biles"},
      { text: "Explore a city for its culture!", type: "Naomi Osaka"}
    ]
  }*/
];

// Track scores using the full names as keys
const userScores = {
  "Frances Tiafoe": 0,
  "Luis Diaz": 0,
  "Giannis Antetokounmpo": 0,
  "Lia Thomas": 0,
  "Ilona Maher": 0,
  "Xander Bogaerts": 0,
  "Wilma Rudolph": 0,
  "Michael Jordan": 0,
  "Cristiano Ronaldo": 0,
  "Novak Djokovic": 0,
  "Simone Biles": 0,
  "Naomi Osaka": 0,
  "Derek Jeter": 0
};

// Store descriptions and images using the exact same full names as keys
const athleteInfo = {
  "Frances Tiafoe": {
    description: "Your Overwhelming Underdog is Frances Tiafoe!",
    longDescription: "While Tiafoe has enjoyed much success in his professional career as a tennis; being Ranked No. 8 worldwide in the men's single category. His story might prove to be even more impressive than his career starts. His parents, Frances Sr. and Alfina, migrated to the United States to escape civil war in their native Sierra Leone, settling in Maryland. His mother, a nurse, worked long hours, leading Frances and his brother to spend most of their time at the tennis facilities where his dad worked as the head of maintenance. Frances would play using borrowed equipment and even sleep in a storage or break room or two.",
    image: "frances-tiafoe.png"
  },
  "Luis Diaz": {
    description: "Your Overwhelming Underdog is Luis Diaz!",
    longDescription: "Luis Díaz grew up in poverty in Colombia as part of the Wayuu Indigenous community. As a child, he struggled with malnutrition and did not have many resources to help him become a professional soccer player. He also dealt with difficult family situations, including the kidnapping of his father. Despite everything he went through, Díaz continued working toward his dream of becoming a professional athlete. His hard work paid off, and he eventually played for major soccer clubs like Liverpool and Bayern Munich.",
    image: "luis-diaz.png"
  },
  "Giannis Antetokounmpo": {
    description: "Your Overwhelming Underdog is Giannis Antetokounmpo!",
    longDescription: "Giannis Antetokounmpo grew up in Athens, Greece, with Nigerian immigrant parents. His family struggled financially, and he grew up selling watches, sunglasses, bags, and other items with his older brother to help afford necessities. Giannis initially did not dream of becoming a basketball player, but he worked extremely hard despite not having the experience of other players. He would travel long distances on public transportation to get to basketball practice in Greece. After getting footage of himself showed to a basketball agent; several other NBA teams sent scouts to evaluate him. Now Giannis is one of the best modern NBA players in the league, with two NBA MVP trophies and also an NBA ring as the Finals MVP.",
    image: "giannis-antetokounmpo.png"
  },
  "Lia Thomas": {
    description: "Your Overwhelming Underdog is Lia Thomas!",
    longDescription: "",
    image: "lia-thomas.png"
  },
  "Ilona Maher": {
    description: "Your Overwhelming Underdog is Ilona Maher",
    longDescription: "",
    image: "ilona-maher.png"
  },
  "Xander Bogaerts": {
    description: "Your Overwhelming Underdog is Xander Bogaerts! You value loyalty and humility the most out of your closest circle. You are level-headed and choose to stay calm when the bases are loaded and things get tough! Your friends view you as a very reliable person with a chill personality. Xander Bogaerts grew his love for baseball in Aruba, where he learned to love the sport with limited, rough playing conditions. Just like Xander, you keep your composure under pressure well and overcome any obstacles in your path. You hit it out of the ballpark!",
    longDescription: "Raised by his mother Sara Brown after his father left his native country of Aruba to pursue work opportunities abroad. Bogaerts played many sports growing up, but gravitated towards baseball from an early age. At age sixteen, Bogaerts signed with the Boston Red Sox, and just one year later he moved to the United States all by himself to begin his professional career. Bogaerts enjoyed a meteoric rise through the minors and then the top of the sport. In his twenties, Bogaerts was widely considered one of the best Shortstops in the world. Bogaerts has seen his performance in the field decline in his thirties but he has not let that affect his performance off the field. Where he is still highly respected and regarded as one of the games greatest leaders and brightest personalities.",
    image: "xander-bogaerts.png"
  },
  "Wilma Rudolph": {
    description: "Your Overwhelming Underdog is Wilma Rudolph!",
    longDescription: "Wilma Rudolph had a difficult childhood. She was born prematurely and grew up in a poor family in Tennessee during segregation. When she was four years old, she got polio, which made it difficult for her to walk. She had to wear a leg brace for several years, and doctors did not think she would ever walk normally again. However, she worked hard through physical therapy and eventually overcame those challenges. In 1960, she made history by becoming the first American woman to win three gold medals in one Olympic Games.",
    image: "wilma-rudolph.png"
  },
  "Michael Jordan": {
    description: "Your Overwhelming Underdog is Michael Jordan!",
    longDescription: "Michael Jordan faced challenges even before becoming one of the greatest basketball players ever. During his sophomore year of high school, he did not make the varsity basketball team, which was a major disappointment for him. Instead of giving up, he used that experience as motivation to improve his skills and work harder. He also grew up in a competitive household, where he was always trying to keep up with his older brother. Through his determination and hard work, Jordan eventually became a six-time NBA champion and one of the most recognized basketball players in history.",
    image: "michael-jordan.png"
  },
  "Cristiano Ronaldo": {
    description: "Your Overwhelming Underdog is Cristiano Ronaldo!",
    longDescription: "Michael Jordan faced challenges even before becoming one of the greatest basketball players ever. During his sophomore year of high school, he did not make the varsity basketball team, which was a major disappointment for him. Instead of giving up, he used that experience as motivation to improve his skills and work harder. He also grew up in a competitive household, where he was always trying to keep up with his older brother. Through his determination and hard work, Jordan eventually became a six-time NBA champion and one of the most recognized basketball players in history.",
    image: "cristiano-ronaldo.png"
  },
  "Novak Djokovic": {
    description: "Your Overwhelming Underdog is Novak Djokovic!",
    longDescription: "",
    image: "novak-djokovic.png"
  },
  "Simone Biles": {
    description: "Your Overwhelming Underdog is Simone Biles!",
    longDescription: "",
    image: "simone-biles.png"
  },
  "Naomi Osaka": {
    description: "Your Overwhelming Underdog is Naomi Osaka!",
    longDescription: "",
    image: "naomi-osaka.png"
  },
  "Derek Jeter": {
    description: "Your Overwhelming Underdog is Derek Jeter!",
    longDescription: "",
    image: "derek-jeter.png"
  }
};

let currentQuestionIndex = 0;

// Grab HTML elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

// Load the current question onto the page
function loadQuestion() {
  const currentQuiz = quizData[currentQuestionIndex];

  questionText.textContent = currentQuiz.question;
  optionsContainer.innerHTML = "";

  currentQuiz.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.classList.add("option-btn");

    // Handle clicks
    button.addEventListener("click", () => {
      // 1. Add 1 point to the chosen athlete's type
      userScores[option.type]++;
      
      // 2. Move to the next question
      currentQuestionIndex++;
      
      // 3. Check if quiz is finished
      if (currentQuestionIndex < quizData.length) {
        loadQuestion();
      } else {
        calculateResult();
      }
    });

    optionsContainer.appendChild(button);
  });
}

function calculateResult() {
  let highestScore = -1;
  let winningType = "";

  for (let type in userScores) {
    if (userScores[type] > highestScore) {
      highestScore = userScores[type];
      winningType = type;
    }
  }

  // Hide question box, show result box
  document.getElementById("question-box").classList.add("hidden");
  const resultBox = document.getElementById("result-box");
  resultBox.classList.remove("hidden");

  // Grab the data for the winner using the matching full name key
  const resultData = athleteInfo[winningType];

  // Update the HTML elements safely
  document.getElementById("result-title").innerText = `Your match: ${winningType}!`;
  document.getElementById("result-image").src = resultData.image;
  document.getElementById("result-description").innerText = resultData.description;
}

// Grab the start button and front page elements
const startButton = document.getElementById("startButton");
const frontPage = document.querySelector(".frontpage");
const quizContainer = document.getElementById("quiz-container");

// Listen for a click on the Start button
startButton.addEventListener("click", () => {
  frontPage.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  loadQuestion();
});

// Grab the restart button
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;

  for (let type in userScores) {
    userScores[type] = 0;
  }

  document.getElementById("result-box").classList.add("hidden");
  document.getElementById("question-box").classList.remove("hidden");

  loadQuestion();
});

const athletesPage = document.getElementById("athletes-page");
const athletesGrid = document.getElementById("athletes-grid");
const learnBtn = document.getElementById("learn-btn");
const backToResultsBtn = document.getElementById("back-to-results-btn");
const backToGridBtn = document.getElementById("back-to-grid-btn");

// 1. Open the "Meet the Athletes" grid page
learnBtn.addEventListener("click", () => {
  quizContainer.classList.add("hidden");
  athletesPage.classList.remove("hidden");
  renderAthletesGrid();
});

// 2. Build the 2-per-row clickable athlete cards dynamically
function renderAthletesGrid() {
  athletesGrid.innerHTML = ""; // Clear any existing cards

  for (let athleteName in athleteInfo) {
    const data = athleteInfo[athleteName];

    // Create a card container
    const card = document.createElement("div");
    card.classList.add("athlete-card");

    card.innerHTML = `
      <img src="${data.image}" alt="${athleteName}">
      <h3>${athleteName}</h3>
    `;

    // When clicked, show the result box with the LONG description
    card.addEventListener("click", () => {
      showDetailedAthlete(athleteName);
    });

    athletesGrid.appendChild(card);
  }
}

// 3. Reuse #result-box for the detailed athlete view
function showDetailedAthlete(athleteName) {
  const data = athleteInfo[athleteName];

  // Hide the grid page, show the quiz container + result box
  athletesPage.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  document.getElementById("question-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");

  // Populate with the athlete's name, image, and LONG description
  document.getElementById("result-title").innerText = athleteName;
  document.getElementById("result-image").src = data.image;
  document.getElementById("result-description").innerText = data.longDescription;

  // Show "Back to All Athletes" button while viewing a profile
  backToGridBtn.classList.remove("hidden");
}

// 4. Button to go back from the detailed bio to the 2-column athlete grid
backToGridBtn.addEventListener("click", () => {
  quizContainer.classList.add("hidden");
  athletesPage.classList.remove("hidden");
  backToGridBtn.classList.add("hidden");
});

// 5. Button to go back from the athlete grid to your original quiz result
backToResultsBtn.addEventListener("click", () => {
  athletesPage.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  backToGridBtn.classList.add("hidden");
  calculateResult(); // Restores your original quiz winner & short description
});

const restartBtnGrid = document.getElementById("restart-btn-grid");

function resetQuiz() {
  currentQuestionIndex = 0;

  for (let type in userScores) {
    userScores[type] = 0;
  }

  athletesPage.classList.add("hidden");
  document.getElementById("result-box").classList.add("hidden");
  backToGridBtn.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  document.getElementById("question-box").classList.remove("hidden");

  loadQuestion();
}

restartBtn.addEventListener("click", resetQuiz);
restartBtnGrid.addEventListener("click", resetQuiz);

// 1. Open the "Meet the Athletes" grid page
learnBtn.addEventListener("click", () => {
  quizContainer.classList.add("hidden");
  athletesPage.classList.remove("hidden");
  renderAthletesGrid();
});

// 4. Button to go back from the detailed bio to the 2-column athlete grid
backToGridBtn.addEventListener("click", () => {
  document.getElementById("result-box").classList.add("hidden");
  quizContainer.classList.add("hidden");
  athletesPage.classList.remove("hidden");
  backToGridBtn.classList.add("hidden");
});

// 5. Button to go back from the athlete grid to your original quiz result
backToResultsBtn.addEventListener("click", () => {
  athletesPage.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  backToGridBtn.classList.add("hidden");
  calculateResult();
});
