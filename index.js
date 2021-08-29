var ReadlineSync = require("readline-sync");
var chalk = require("chalk");

var userName = chalk.yellow.bold(ReadlineSync.question("May i know your Name? \n"));
var gameName = chalk.yellow.bold('DO YOU KNOW Urvashi');
var line1 = chalk.green.bold('==========================');

console.log("Welcome " + userName);
console.log("Lets play " + gameName + "\n");

console.log(chalk.blue.bold("RULES to play the GAME!!!!"));
console.log(line1);
console.log("1)You need to answer all Questions.");
console.log("2)To make your quiz easy for every question we have only 2 \n options you need to choose one out of it.");
console.log("3)For every correct answer you will get one point \n and for every wrong answer there is no negative marking. \n You will just get to know more about me!!!!");
console.log(line1);
console.log(chalk.blue.bold("ALL THE BEST!!!!"));
console.log(chalk.green.bold("**************** \n"));


var score = 0;



function play(question, answer) {
  var userAnswer = ReadlineSync.question(chalk.blue.bold(question));

  if (userAnswer == answer) {
    console.log(chalk.green.bold(" YAY Right!!!"));
    score++;
  } else {
    console.log(chalk.red.bold("Oopss Wrong Answer!!! Correct answer is " + answer));
  }

  console.log(chalk.blue.bold("Current Score is : ") + score);
  console.log(line1);
}

var questions = [{
  question: "What is my full Name? \n a)Urvashi Malik \n b)Urvashi Rautela \n",
  answer: "a"
}, {
  question: "Where do i stay? \n a)Delhi \n b)Bangalore \n",
  answer: "b"
}, {
  question: "Where do i work? \n a)Amazon \n b)TCS \n",
  answer: "b"
}, {
  question: "What is my favourite programming language? \n a)JavaScript \n b)JAVA \n",
  answer: "a"
}, {
  question: "What is my favourite sport? \n a)Badminton \n b)VolleyBall \n",
}];

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log(chalk.blue.bold("YAY Your Final Score is : ") + score + " !!!");
console.log(chalk.blue.bold("THANK YOU FOR YOUR TIME !!!!"));
console.log(chalk.green.bold("****************************"));