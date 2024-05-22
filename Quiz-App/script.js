const questions = [
    {
        q: 'Which language runs in a web browser?',
        options: [
            'Java',
            'C',
            'Python',
            'JavaScript',
        ],
        correctAnswer: 'JavaScript',
    },
    {
        q: 'What does CSS stand for?',
        options: [
            'Central Style Sheets',
            'Cascading Style Sheets',
            'Cascading Simple Sheets',
            'Cars SUV Style Sheets',
        ],
        correctAnswer: 'Cascading Style Sheets',
    },
    {
        q: 'What does HTML stand for?',
        options: [
            'Hypertext Markup Language',
            'Hypertext Markdown Language',
            'Hyperloop Machine Language',
            'Helicopters Terminals Motorboats Lamborginis',
        ],
        correctAnswer: 'Hypertext Markup Language',
    },
    {
        q: 'What year was JavaScript launched?',
        options: [
            '1996',
            '1995',
            '1994',
            'none of the above',
        ],
        correctAnswer: '1995',
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.q;
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerHTML = option;
        button.classList.add('btn');
        // button.onclick = () => selectAnswer(option);
        answerButtons.appendChild(button);
        if (option === currentQuestion.correctAnswer) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();