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
]

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuestion = 0;
loadQuiz();

function loadQuiz(){
    currentQuestion++;
}