while (true) {
        minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
    
    if (minValue < -999) {
         alert('Число должно быть не меньше -999');
        continue;
    }
    
    break;
}

while (true) {
    maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));

    if (maxValue > 999) {
        alert('Число должно быть меньше 1000');
        continue;
    }

    if (maxValue < minValue) {
        alert('Число должно быть больше минимального значения');
        continue;
    }

    break;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

let answers = [`Я всегда угадываю!\n\u{1F60E}` , `Уххх!\n\u{1F60E}` , `Да это легко!\n\u{1F60E}`];
let randomAnswers = Math.floor(Math.random() * (answers.length - 1));


const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;


function randomQuestionUpdate () {
    let question = [`Вы загадали число ${answerNumber}?` , `Угадал ${answerNumber}?` , `Это число ${answerNumber}?`];
    let randomQuestion = Math.floor(Math.random() * (question.length));

    answerField.innerText = question[randomQuestion];
}

randomQuestionUpdate();


document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;  
            orderNumberField.innerText = orderNumber;
            randomQuestionUpdate();
        }
    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            randomQuestionUpdate();
        }
    }
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = answers[randomAnswers];
        gameRun = false;
    }
})

document.querySelector(`#btnRetry`).addEventListener(`click`, function () {
    location.reload()
    alert("Да начнется веселье!")
})