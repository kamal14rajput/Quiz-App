const quizData = [
    {
        question : 'How old is kamal?',
        a: '16',
        b: '23',
        c: '28',
        d : '34',
        correct : 'c'
    }, {
        question: 'Who is the winner of football worldcup 2014?',
        a: 'Brazil',
        b: 'Germany',
        c: 'Portugal',
        d: 'Argentina',
        correct : 'b'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct : 'd'
    }, {
        question: 'Who is the President of INDIA?',
        a: 'Rahul Gandhi',
        b: 'Amit Shah',
        c: 'Ram Nath Kovind',
        d: 'Smriti Irani',
        correct : 'c'
    }, {
        question: 'What does HTML stands for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'jason',
        d: 'Application Programming Interface',
        correct: 'a'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   
}

function getSelected(){

    let answer = undefined;
   answerEls.forEach(answerEl => {
       if(answerEl.checked){
        answer = answerEl.id;
       }
   });
  return answer;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

   const answer = getSelected();

   console.log(answer);

   if(answer){
       if(answer === quizData[currentQuiz].correct){
           score++;
       }
       currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
    }
    else{
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length}</h2> <button onclick="location.reload()">Reload</button>` ;
    }
}
});