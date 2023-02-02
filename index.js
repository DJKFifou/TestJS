let myHeading = document.querySelector(".title");
let myHeadingCount = myHeading.length;
// myHeading.textContent = "patrick";

myHeading.addEventListener('mouseenter', () => myHeading.textContent = 'patrick');
myHeading.addEventListener('mouseleave', () => myHeading.textContent = 'pratiques');

// if (rlq === 3) {
//     console.log("ça fait mal")
//     window.alert("Hello world!");
//     alert("ça fait mal...");
// }

let myImage = document.querySelector('img');

myImage.addEventListener('click', function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/SafeNTech.PNG') {
        myImage.setAttribute('src', 'images/Geoquizz.PNG')
    } else {
        myImage.setAttribute('src', 'images/SafeNTech.PNG')
    }
});

let myButton = document.querySelector('button');
let myText = document.querySelector('.change');


function setUserName() {
    let myName = prompt('Veuillez choisir un nom');
    localStorage.setItem('nom', myName);
    myText.textContent = 'Bienvenue sur mon site de test JS ' + myName;
}

if (!localStorage.getItem('nom')) {
    setUserName;
} else {
    let storedName = localStorage.getItem('nom');
    myText.textContent = 'Bienvenue sur mon site de test JS ' + storedName;
}

myButton.addEventListener('click', function () {
    setUserName();
});



let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Propositions précédentes&nbsp;: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!! PERDU&nbsp;!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Faux&nbsp;!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop petit !';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop grand !';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

checkGuess();

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}