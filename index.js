const quizData = [
  {
    question: "What is your favorite sport?",
    options: [
      { text: "Tennis", types: ["Frances Tiafoe", "Novak Djokovic", "Naomi Osaka"]},
      { text: "Soccer", types: ["Luis Diaz", "Cristiano Ronaldo"]},
      { text: "Basketball", types: ["Giannis Antetokounmpo", "Michael Jordan"]},
      { text: "Swimming", types: ["Lia Thomas"]},
      { text: "Rugby", types: ["Ilona Maher"]},
      { text: "Baseball", types: ["Xander Bogaerts", "Derek Jeter"]},
      { text: "Track and Field", types: ["Wilma Rudolph"]},
      { text: "Golf", types: ["Michael Jordan"]},
      { text: "Football", types: ["Cristiano Ronaldo"]},
      { text: "Lacrosse", types: ["Novak Djokovic"]},
      { text: "Gymnastics", types: ["Simone Biles"]},
      { text: "Volleyball", types: ["Naomi Osaka"]}
    ]
  },
  {
    question: "What is your favorite quality in a person?",
    options: [
      { text: "Being Yourself", types:["Lia Thomas", "Naomi Osaka" ]},
      { text: "Being Supportive", types:["Ilona Maher"] },
      { text: "Being Humble", types:["Giannis Antetokounmpo"] },
      { text: "Being Funny", types:["Luis Diaz"]},
      { text: "Being Kind", types:["Frances Tiafoe","Wilma Rudolph"]},
      { text: "Being Loyal", types:["Xander Bogaerts","Derek Jeter"]},
      { text: "Having Beliefs", types:["Wilma Rudolph"]},
      { text: "Accountability", types:["Michael Jordan"]},
      { text: "Being Disciplined", types:["Cristiano Ronaldo"]},
      { text: "Being Grateful", types:["Novak Djokovic"]},
      { text: "Honesty", types:["Simone Biles"]},
      { text: "Being Empathetic", types:["Naomi Osaka"]}
    ]
  },
  {
    question: "What is your lucky number?",
    options: [
      { text: "13", types:["Ilona Maher" ]},
      { text: "7", types:["Luis Diaz", "Giannis Antetokounmpo", "Cristiano Ronaldo"]},
      { text: "34", types:["Giannis Antetokounmpo"]},
      { text: "20", types:["Frances Tiafoe" ]},
      { text: "50", types:["Lia Thomas" ]},
      { text: "2", types:["Xander Bogaerts","Derek Jeter"]},
      { text: "3", types:["Wilma Rudolph"]},
      { text: "23", types:["Michael Jordan"]},
      { text: "1", types:["Novak Djokovic"]},
      { text: "4", types:["Simone Biles", "Naomi Osaka"]}
    ]
  },
  {
    question: "Whats foods catch your eye?",
    options: [
      { text: "Fish with Rice", types:["Luis Diaz" ]},
      { text: "Oreos and Milk", types:["Giannis Antetokounmpo" ]},
      { text: "Bread with Butter", types:["Ilona Maher" ]},
      { text: "Bananas", types:["Lia Thomas" ]},
      { text: "French Fries", types:["Frances Tiafoe"]},
      { text: "A Caribbean Meal", types:["Xander Bogaerts"]},
      { text: "Fried Chicken and Collard Greens", types:["Wilma Rudolph"]},
      { text: "Steak", types:["Michael Jordan"]},
      { text: "Cod", types:["Cristiano Ronaldo"]},
      { text: "Plant Based Meals", types:["Novak Djokovic"]},
      { text: "Pepperoni Pizza", types:["Simone Biles"]},
      { text: "Sushi", types:["Naomi Osaka"]},
      { text: "Spaghetti & Meatballs", types:["Derek Jeter"]}
    ]
  },
  {
    question: "If you could have one superpower, what would it be?",
    options: [
      { text: "Unlimited Stamina", types:["Lia Thomas", "Cristiano Ronaldo"]},
      { text: "Elastic", types:["Giannis Antetokounmpo", "Novak Djokovic" ]},
      { text: "Lightning Fast Reflexes", types: ["Frances Tiafoe" ]},
      { text: "Super Speed", types:["Ilona Maher", "Wilma Rudolph" ]},
      { text: "Spidey-Senses", types:["Luis Diaz" ]},
      { text: "Teleportation", types:["Xander Bogaerts"]},
      { text: "Leap", types:["Cristiano Ronaldo"]},
      { text: "Flight", types:["Michael Jordan"]},
      { text: "Defying Gravity", types:["Simone Biles"]},
      { text: "Invisibility", types:["Naomi Osaka","Derek Jeter"]}
    ]
  },
  {
    question: "If you could travel anywhere in the world, where would you go?",
    options: [
      { text: "The Netherlands", types:["Ilona Maher"]},
      { text: "Japan", types:["Frances Tiafoe","Naomi Osaka"]},
      { text: "Florida", types:["Lia Thomas"]},
      { text: "Greece", types:["Giannis Antetokounmpo"]},
      { text: "Colombia", types:["Luis Diaz"]},
      { text: "Aruba", types:["Xander Bogaerts"]},
      { text: "Rome", types:["Wilma Rudolph"]},
      { text: "A Coastel Getaway", types:["Michael Jordan"]},
      { text: "Madeira, Portugal", types:["Cristiano Ronaldo"]},
      { text: "Anywhere is a Vacation", types:["Novak Djokovic", "Simone Biles"]},
      { text: "The Bahamas", types:["Derek Jeter"]}
    ]
  },
  {
    question: "If you faced a major setback while chasing your dream, what is the FIRST thing you would do?",
    options: [
      { text: "Lean on your family for motivation", types:["Luis Diaz"]},
      { text: "Prioritize your mental and physical health", types:["Lia Thomas"]},
      { text: "Choose to change your mindset", types:["Ilona Maher", "Novak Djokovic", "Simone Biles"]},
      { text: "Create more daily good habits", types:["Frances Tiafoe"]},
      { text: "Try harder next time", types:["Giannis Antetokounmpo"]},
      { text: "Stay calm, review, and get back to work", types:["Xander Bogaerts"]},
      { text: "Take small steps forward and get back on track", types:["Wilma Rudolph"]},
      { text: "Outwork everybody else", types:["Michael Jordan"]},
      { text: "Immediately get back to work", types:["Cristiano Ronaldo"]},
      { text: "Reflect on past obstacles", types:["Naomi Osaka"]},
      { text: "Own the mistake", types:["Derek Jeter"]}
    ]
  },
  {
    question: "As an overwhelming underdog, what do you want people to remember you for?",
    options: [
      { text: "How you played in your sport, as an athlete ", types:["Luis Diaz", "Derek Jeter"]},
      { text: "Inspiring people in your community ", types:["Lia Thomas"]},
      { text: "Being real and vulnerable ", types:["Ilona Maher", "Naomi Osaka"]},
      { text: "Your work ethic", types:["Giannis Antetokounmpo", "Cristiano Ronaldo"]},
      { text: "How you were as a person, outside of your sport", types:["Frances Tiafoe"]},
      { text: "Someone who played the game the right way", types:["Xander Bogaerts"]},
      { text: "Never giving up", types:["Wilma Rudolph" , "Michael Jordan", "Novak Djokovic"]},
      { text: "Having fun", types:["Simone Biles"]}
    ]
  },
  {
    question: "If your life were a movie, what type of movie would you wanna be?",
    options: [
      { text: "Heartwarming Comedy ", types:["Frances Tiafoe"]},
      { text: "Superhero Adventure", types:["Giannis Antetokounmpo"]},
      { text: "Disney Princess movie", types:["Ilona Maher"]},
      { text: "Documentary ", types:["Luis Diaz"]},
      { text: "True-Life Drama", types:["Lia Thomas", "Derek Jeter"]},
      { text: "Sports Drama", types:["Xander Bogaerts"]},
      { text: "Biography", types:["Wilma Rudolph"]},
      { text: "Thriller", types:["Michael Jordan"]},
      { text: "Action", types:["Cristiano Ronaldo"]},
      { text: "Psychological Drama", types:["Novak Djokovic"]},
      { text: "Coming-of-Age", types:["Simone Biles"]},
      { text: "Indie Drama", types:["Naomi Osaka"]}
    ]
  },
  {
    question: "What is your favorite thing to do in your free time?",
    options: [
      { text: "Cooking", types:["Ilona Maher"]},
      { text: "Listening to music ", types:["Luis Diaz"]},
      { text: "Spending time with family", types:["Giannis Antetokounmpo", "Xander Bogaerts", "Novak Djokovic"]},
      { text: "Playing video games", types:["Lia Thomas"]},
      { text: "Watching shows/movies on Netflix", types:["Frances Tiafoe"]},
      { text: "Running outdoors", types:["Wilma Rudolph"]},
      { text: "Practing a sport", types:["Michael Jordan"]},
      { text: "Working out", types:["Cristiano Ronaldo"]},
      { text: "Practice mindfulness", types:["Novak Djokovic"]},
      { text: "Shopping", types:["Simone Biles", "Naomi Osaka"]},
      { text: "Sleeping", types:["Derek Jeter"]}
    ]
  }/*,
  {
    question: "Which adventure sounds the most exciting to you?",
    options: [
      { text: "Exploring a new place you have never visited!", types:["Luis Diaz"]},
      { text: "Doing a puzzle with friends to sharpen your mind and have fun!", types:["Frances Tiafoe"]},
      { text: "Going on a bike ride in a beach town near the ocean!", types:["Giannis Antetokounmpo"]},
      { text: "Playing an open-world video game where you defeat monsters and explore castles!", types:["Lia Thomas"]},
      { text: "Going kayaking to explore a giant hidden lake!", types:["Ilona Maher"]},
      { text: "Vacationing to islands", types:["Xander Bogaerts"]},
      { text: "Breaking barriers across the globe", types:["Wilma Rudolph"]},
      { text: "Playing a new sport with your friends", types:["Michael Jordan"]},
      { text: "Chasing a new record", types:["Cristiano Ronaldo"]},
      { text: "An intense chess match", types:["Novak Djokovic"]},
      { text: "Performing a talent on stage!", types:["Simone Biles"]},
      { text: "Explore a city for its culture!", types:["Naomi Osaka"]}
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
    description: "Your Overwhelming Underdog is Frances Tiafoe! You have a huge heart and a bigger appetite for French Fries. Similar to Frances, you have amazing perseverance and such discipline when it comes to getting things done! Nicknamed “Big Foe”, Frances had to overcome many family financial struggles in his younger years and doubts of his abilities before becoming a tennis superstar. Frances proved that coming from struggle and facing it head on only makes you stronger, and you are a reflection of him! And that is what we call an Overwhelming Underdog!",
    longDescription: "While Tiafoe has enjoyed much success in his professional career as a tennis; being Ranked No. 8 worldwide in the men's single category. His story might prove to be even more impressive than his career starts. His parents, Frances Sr. and Alfina, migrated to the United States to escape civil war in their native Sierra Leone, settling in Maryland. His mother, a nurse, worked long hours, leading Frances and his brother to spend most of their time at the tennis facilities where his dad worked as the head of maintenance. Frances would play using borrowed equipment and even sleep in a storage or break room or two.",
    image: "frances-tiafoe.png"
  },
  "Luis Diaz": {
    description: "Your Overwhelming Underdog is Luis Diaz! You are the funniest person in the room, and you always radiate positive energy to whoever surrounds you. You prioritize yourself on your long-lasting endurance, whether it’s on the field or in your daily life! Just like Luis Diaz, you are someone who keeps your loved ones close to your heart and uses them as motivation to keep going! Luis used his powerful determination from a young age when he overcame being underweight in his sport and struggling with poverty at a young age. He did not let a physical issue stop him from achieving his dreams and chose to pivot his loss into a win! Just as an Overwhelming Underdog would!",
    longDescription: "Luis Díaz grew up in poverty in Colombia as part of the Wayuu Indigenous community. As a child, he struggled with malnutrition and did not have many resources to help him become a professional soccer player. He also dealt with difficult family situations, including the kidnapping of his father. Despite everything he went through, Díaz continued working toward his dream of becoming a professional athlete. His hard work paid off, and he eventually played for major soccer clubs like Liverpool and Bayern Munich.",
    image: "luis-diaz.png"
  },
  "Giannis Antetokounmpo": {
    description: "Your Overwhelming Underdog is Giannis Antetokounmpo!",
    longDescription: "Giannis Antetokounmpo grew up in Athens, Greece, with Nigerian immigrant parents. His family struggled financially, and he grew up selling watches, sunglasses, bags, and other items with his older brother to help afford necessities. Giannis initially did not dream of becoming a basketball player, but he worked extremely hard despite not having the experience of other players. He would travel long distances on public transportation to get to basketball practice in Greece. After getting footage of himself showed to a basketball agent; several other NBA teams sent scouts to evaluate him. Now Giannis is one of the best modern NBA players in the league, with two NBA MVP trophies and also an NBA ring as the Finals MVP.",
    image: "giannis-antetokounmpo.png"
  },
  "Lia Thomas": {
    description: "Your Overwhelming Underdog is Lia Thomas! You are incredibly focused on your goals and you know how to do it in style: by BEING YOURSELF! Lia Thomas is incredibly determined to swim, even while struggling with depression and mental distress. She may have hit a dead end in the water, but she always found her rhythm and overcame her obstacles. Authenticity is your secret weapon and you have a slightly adventurous side to you.Whether you are exploring the beautiful beaches of Florida or playing an open-world video game where you defeat monsters and explore secret castles, you know how to live life right! Live like Lia!",
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
    description: "Your Overwhelming Underdog is Wilma Rudolph! You are fierce and resilient; never one to back down from a challenge. You enjoy moving your body outdoors and want to prove to the world that anything is possible by breaking barriers. Wilma Rudolph is known for winning 3 gold medals at the 1960 Rome Olympics, making her lucky number 3! You prefer a good home cooked meal over a fancy extravaganza, and are the most likely in your friends to keep it real. Just like Wilma, you will keep fighting until the end and leave a legacy behind that will inspire those around you.",
    longDescription: "Wilma Rudolph had a difficult childhood. She was born prematurely and grew up in a poor family in Tennessee during segregation. When she was four years old, she got polio, which made it difficult for her to walk. She had to wear a leg brace for several years, and doctors did not think she would ever walk normally again. However, she worked hard through physical therapy and eventually overcame those challenges. In 1960, she made history by becoming the first American woman to win three gold medals in one Olympic Games.",
    image: "wilma-rudolph.png"
  },
  "Michael Jordan": {
    description: "Your Overwhelming Underdog is Michael Jordan! You have a great competitive spirit, and you really value accountability in the people around you! Your superpower is flying, as you have goals and dreams that will get you to great heights. In your downtime, you love to relax on a quiet vacation and sit back to enjoy the finer things in life…even if it’s a big juicy steak! Michael Jordan has always been known for his incredible drive, and he used that drive to overcome his unfortunate contraction of HIV. However, he didn’t let that stop him and turned a negative into a positive by becoming a spokesperson for AIDS prevention. He moves through his life hoping to inspire others to overcome their hardships, and you can go out and do the same!",
    longDescription: "Michael Jordan faced challenges even before becoming one of the greatest basketball players ever. During his sophomore year of high school, he did not make the varsity basketball team, which was a major disappointment for him. Instead of giving up, he used that experience as motivation to improve his skills and work harder. He also grew up in a competitive household, where he was always trying to keep up with his older brother. Through his determination and hard work, Jordan eventually became a six-time NBA champion and one of the most recognized basketball players in history.",
    image: "michael-jordan.png"
  },
  "Cristiano Ronaldo": {
    description: "Your Overwhelming Underdog is Cristiano Ronaldo! You are disciplined, confident, and much like Cristiano, you like to prove your competitors wrong. When you are not busy crushing the competition, you like to refuel with a high-protein meal in a sunny seaside spot with your family. Cristiano grew up with physical and academic challenges when he moved to the United States. When he started playing soccer, he was constantly beaten down with numerous injuries and emotional trauma from his family. Despite this, he never let the world stop him from getting what he wanted, and Cristiano continues to inspire others around him to do amazing things!",
    longDescription: "Before Cristiano Ronaldo became one of the greatest soccer players of all time, he had a challenging upbringing. He grew up in a poor family with very limited resources and opportunities, where he had to overcome major adversity. At the age of 12, he left his hometown of Madeira and moved to Lisbon to join the Sporting CP youth academy. This meant he had to leave his family and friends behind to chase his dream. Being away from his family was challenging enough, but he also had to deal with criticism and rejection because of his background. Shortly after, he dealt with a racing heart condition that required a medical procedure. Luckily, he was able to overcome all these adversities and later grew up to become the leading career scorer, both at club and country.",
    image: "cristiano-ronaldo.png"
  },
  "Novak Djokovic": {
    description: "Your Overwhelming Underdog is Novak Djokovic!",
    longDescription: "",
    image: "novak-djokovic.png"
  },
  "Simone Biles": {
    description: "Your Overwhelming Underdog is Simone Biles! You are a ball of high energy and joy when you are around your close circle of friends! You have a huge love for pepperoni pizza, and you are very family-oriented. Similar to Simone, you have a tendency for greatness and an even greater sense of fashion! Simone Biles is the definition of being your own boss and knowing when you need a break, as she took a break for her mental health distress after the 2020 Olympics. Biles may have fallen off the beam, but she always got back up and stuck the landing! Keep going for gold like Simone!",
    longDescription: "",
    image: "simone-biles.png"
  },
  "Naomi Osaka": {
    description: "Your Overwhelming Underdog is Naomi Osaka! You are a sweetheart who is always thinking of your loved ones! You have strong empathy for others and have a very creative mind. You enjoy eating sushi with friends, which is her favorite food!  You have a huge appreciation for art and wish to explore new cities, like Tokyo, Japan! Her lucky number is 4, as she became a champion with 4 Grand Slam championships. Even though Osaka is a tennis champion, she did overcome the fear of falling “behind” in life and not doing enough! Just like many young kids with big dreams, Naomi Osaka faced her imposter syndrome and overcame it with smashing success. Naomi teaches us that anybody can overwhelm expectations and become an Underdog!",
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

// Shuffles the answers
function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Load the current question onto the page
function loadQuestion() {
  const currentQuiz = quizData[currentQuestionIndex];

  questionText.textContent = currentQuiz.question;
  optionsContainer.innerHTML = "";

  shuffleArray(currentQuiz.options).forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.classList.add("option-btn");

    button.addEventListener("click", () => {
      // 1. Add 1 point to every athlete listed in option.types
      option.types.forEach(athlete => {
        userScores[athlete]++;
      });

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

  for (let athlete in userScores) {
    if (userScores[athlete] > highestScore) {
      highestScore = userScores[athlete];
      winningType = athlete;
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

// Grab navigation and page elements
const startButton = document.getElementById("startButton");
const frontPage = document.querySelector(".frontpage");
const quizContainer = document.getElementById("quiz-container");
const restartBtn = document.getElementById("restart-btn");
const restartBtnGrid = document.getElementById("restart-btn-grid");
const athletesPage = document.getElementById("athletes-page");
const athletesGrid = document.getElementById("athletes-grid");
const learnBtn = document.getElementById("learn-btn");
const backToResultsBtn = document.getElementById("back-to-results-btn");
const backToGridBtn = document.getElementById("back-to-grid-btn");

startButton.addEventListener("click", () => {
  frontPage.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  loadQuestion();
});

function resetQuiz() {
  currentQuestionIndex = 0;

  for (let athlete in userScores) {
    userScores[athlete] = 0;
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

// 2. Build the 2-per-row clickable athlete cards dynamically
function renderAthletesGrid() {
  athletesGrid.innerHTML = "";

  for (let athleteName in athleteInfo) {
    const data = athleteInfo[athleteName];

    const card = document.createElement("div");
    card.classList.add("athlete-card");

    card.innerHTML = `
      <img src="${data.image}" alt="${athleteName}">
      <h3>${athleteName}</h3>
    `;

    card.addEventListener("click", () => {
      showDetailedAthlete(athleteName);
    });

    athletesGrid.appendChild(card);
  }
}

// 3. Reuse #result-box for the detailed athlete view
function showDetailedAthlete(athleteName) {
  const data = athleteInfo[athleteName];

  athletesPage.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  document.getElementById("question-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");

  document.getElementById("result-title").innerText = athleteName;
  document.getElementById("result-image").src = data.image;
  document.getElementById("result-description").innerText = data.longDescription;

  backToGridBtn.classList.remove("hidden");
}

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
