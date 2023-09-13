
//To check why incorrect answers are being proccessed as correct...//


const quizData = [
    {
        question: "How many coffes are ok to drink per day?",
        a: '2 ',
        b: '4 ',
        c: '5 ',
        d: '8 ',
        correct: 'c'
    }, {
        question: "President of US?",
        a: 'Tom Cruise ',
        b: 'Hillary ',
        c: 'Benjamin Buttler ',
        d: 'Ducky Duck ',
        correct: 'c'
    }, {
        question: "Most used programming language in 2020?",
        a: 'Python ',
        b: 'Java ',
        c: 'Javascript ',
        d: 'Lua ',
        correct: 'a'
    }
];
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const d_text = document.getElementById('c_text');
const c_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');
let answer = undefined;
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselect();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a; 
    b_text.innerText = currentQuizData.b; 
    c_text.innerText = currentQuizData.c; 
    d_text.innerText = currentQuizData.d; 

}

function getSelected() {
    
    

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer =  answerEl.id;
        }
    });
    return answer;
}

function deselect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`
        }
    }    
 
});