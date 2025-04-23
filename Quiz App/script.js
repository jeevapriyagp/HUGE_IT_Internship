// list of questions
const questions = [
    {
      question: "What is 7 × 8?",
      options: ["54", "56", "58", "64"],
      answer: "56"
    },
    {
      question: "What is the square root of 81?",
      options: ["7", "8", "9", "10"],
      answer: "9"
    },
    {
      question: "Solve: 12 ÷ 4 + 3",
      options: ["6", "5", "9", "7"],
      answer: "6"
    },
    {
      question: "What is 15% of 200?",
      options: ["25", "30", "35", "40"],
      answer: "30"
    },
    {
      question: "What is the value of π (Pi) rounded to two decimal places?",
      options: ["3.12", "3.14", "3.16", "3.18"],
      answer: "3.14"
    }
];
  
let currentIndex = 0; // index to track questions list
let score = 0; // to store the score, increments when correct answer is chose
  
const questionBox = document.getElementById("question"); // accessing html to display questions
const optionsBox = document.getElementById("options"); // accessing html to display options
const resultBox = document.getElementById("result-box"); // accessing html to display number of correct answers or result
const scoreSpan = document.getElementById("score"); // accessing html to display score
  
function showQuestion() // to display to question and options
{
    const q = questions[currentIndex];
    questionBox.textContent = q.question; // displays question
    optionsBox.innerHTML = "";
  
    q.options.forEach(option => {
        const btn = document.createElement("button"); // creates button for the option
        btn.textContent = option; // display option text in the button
        btn.onclick = () => checkAnswer(option); // checks answer on click
        optionsBox.appendChild(btn); // adds new option below
    });
}
  
function checkAnswer(selected) 
{
    const correct = questions[currentIndex].answer;
    if (selected === correct) {
        score++; // increment score if the answer is correct
    }
    
    nextQuestion(); // to display next question
}

function nextQuestion() 
{
    currentIndex++; // move to the next question
    if (currentIndex < questions.length) 
    {
        showQuestion(); // displays next question
    } 
    else 
    {
        showResult(); // if no more questions displays result
    }
}

function showResult() // displays final result and score
{
    document.getElementById("quiz-box").classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreSpan.textContent = `${score} / ${questions.length}`; 
}
  
showQuestion(); // function call to initiate question display
  