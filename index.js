var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question(chalk.yellowBright("What's your name human? "), '\n');

console.log('\n', chalk.cyan("Hello, Mr. " + userName + ". Welcome to the 'Start-Up quiz app' where we test your knowledge about startup world!"), '\n')

var score = 0;

var userWithHighestScore = {
  name: "Yuvraj",
  highScore: 9,
}

var questionArray = [
  {
    question: "1. One of these people was the common factor between three start-ups - Dogspot, Crayon Data and UrbanClap. Who is it? ",
    answer: "Ratan Tata",
  },
  {
    question: "2. Rahul Yadav, Housing.com's former CEO had a email squabble with the managing Director of this firm saying- 'If you don't stop messing around with me directly or even indirectly, I will vacate the best of your firm.' Which firm was it? ",
    answer: "Sequoia capital",
  },
  {
    question: "3. Reid Hoffman is one of the greatest innovators in the last 30 years. He was the founder of ",
    answer: "LinkedIn",
  },
  {
    question: "4. facebook was founded in which year? ",
    answer: "2004",
  },
  {
    question: "5. Founder of Flipkart other than Sachin Bansal? ",
    answer: "Binny Bansal",
  },
  {
    question: "6. Most famous founder of Nearbuy.com? ",
    answer: "Ankur Warikoo",
  },
  {
    question: "7. Name of the country with most no. of unicorns? ",
    answer: "United States",
  },
  {
    question: "8. Name the most valued starup in India? ",
    answer: "Byju's",
  },
  {
    question: "9. Ronald Wayne is the founder of which famous company? ",
    answer: "Apple",
  },
  {
    question: "10. 'Unicorn' term used commonly in the starup world was coined by whom? ",
    answer: "Aileen Lee",
  },
]

function quizApp(ques, ans){
  var userAnswer = readlineSync.question(ques);

  if (userAnswer.toLowerCase() === ans.toLowerCase()){
    console.log(chalk.greenBright("Congrats! You know the right answer."));
    score += 1;
    console.log("Current score is:", chalk.yellowBright(score), '\n');
  } else {
    console.log(chalk.redBright("Sorry! Wrong answer. Google it after the quiz."));
    score -= 1;
    console.log("Current score is:", chalk.yellowBright(score), '\n');
  }
}

for ( var i = 0; i < questionArray.length; i++){
  quizApp(questionArray[i].question, questionArray[i].answer);
}

console.log("Your overall score is:", score, '\n');

if (score > userWithHighestScore.highScore){
  userWithHighestScore.highScore = score;
  userWithHighestScore.name = userName;
}

console.log(chalk.bgYellow(`--> Highest scorer of the game is ${userWithHighestScore.name} with a score of ${userWithHighestScore.highScore} points.`), '\n');

console.log(chalk.bgMagentaBright("!!!Send me a screenshot if you have beaten the high score!!!"));