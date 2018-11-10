const quizQuestions = [
  {
    "category": "games",
    "question": 'Do you find yourself more often thinking about the past or the future?',
    "answers": [
      "I never live in the past",
      "I’m mostly forward-looking but I think the past is useful",
      "Neither, I’m always living in the moment",
      "Yeah, I’m super nostalgic",
    ],
    "next": "next",
    "game-selections": [
      ["Smash Bros. 4", "Smash Bros. 4"],
      ["Smash Bros. 4", "Smash Bros. Brawl"],
      ["Smash Bros. Melee", "Smash Bros. Brawl"],
      ["Smash Bros. (64)", "Smash Bros. Melee"]
    ]
  },
  {
    "category": "speed_rank",
    "question": "Do you prefer speed or power?",
    "answers": [
      "Speed is everything",
      "I like quick, but some power is necessary",
      "I prefer the two to be evenly balanced",
      "Power is everything"
    ],
    "next": "next"
  },
  {
    "category": "nice",
    "question": 'How many friends do you have',
    "answers": [
      "A million! Everyone is my friend",	
      "A few. I’m a friendly person",
      "One or two. My close friend",
      "Psh. I have no friends and I like it that way"
    ],
    "next": "next"
  },
  {
    "category": "style",
    "question": 'What is your style?',
    "answers": [
      "I dress nice, real nice",
      "I like to look good, but not draw too much attention to myself",
      "I look like an average Joe",
      "I haven’t changed my pants in a week"
    ],
    "next": "next"
  },
  {
    "category": "money",
    "question": "Thoughts on Money?",
    "answers": [
      "Money is Happiness",
      "I like money, having some is nice",
      "I could care less about money",
      "I want to live in a van down by the river"
    
    ],
    "next": "next"
  },
  {
    "category": "rank",
    "question": 'Do you play smash to win or for fun?',
    "answers": [
      "If you ain’t first you’re last",
      "Depends on who I’m playing",
      "For fun",
      "I prefer to lose",
    ],
    "next": "finish"
  },
]


module.exports = {
  quizQuestions
};