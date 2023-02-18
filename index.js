let myHeading = document.querySelector(".title");
let myHeadingCount = myHeading.length;
// myHeading.textContent = "patrick";

myHeading.addEventListener('mouseenter', () => myHeading.textContent = 'patrick');
myHeading.addEventListener('mouseleave', () => myHeading.textContent = 'pratiques');

let myImage = document.querySelector('img');

myImage.addEventListener('click', function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/SafeNTech.PNG') {
        myImage.setAttribute('src', 'images/Geoquizz.PNG')
    } else {
        myImage.setAttribute('src', 'images/SafeNTech.PNG')
    }
});

// --------------------  Script change user -----------------//

let myButton = document.querySelector('button');
let myText = document.querySelector('.change');

function setUserName() {
    let myName = prompt('Veuillez saisir un nom');
    localStorage.setItem('nom', myName);
    myText.textContent = 'Bienvenue sur mon site de test JS ' + myName + ' !';
}

if (!localStorage.getItem('nom')) {
    setUserName;
} else {
    let storedName = localStorage.getItem('nom');
    myText.textContent = 'Bienvenue sur mon site de test JS ' + storedName + ' !';
}

myButton.addEventListener('click', function() {
    setUserName();
})

// --------------------  Jeu trouver numéro -----------------//

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
        guesses.textContent = 'Propositions précédentes : ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!! PERDU !!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Faux !';
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

// --------------------------------- Addition --------------------------------- //

let firstValue = document.querySelector(".firstValue");
let secondValue = document.querySelector(".secondValue");

let result = document.querySelector(".result");
let btnResult = document.querySelector(".btnResult");

btnResult.addEventListener('click', function () {
    let first = Number(firstValue.value);
    let second = Number(secondValue.value);
    let end = first + second;
    if (firstValue.value == 0 && secondValue.value == 0) {
        result.textContent = 'Veuillez saisir deux nombres à additionner';
    } else {
        result.textContent = end;
    }
});

// --------------------------------- Soustraction --------------------------------- //

let firstValueSous = document.querySelector(".firstValueSous");
let secondValueSous = document.querySelector(".secondValueSous");

let resultSous = document.querySelector(".resultSous");
let btnResultSous = document.querySelector(".btnResultSous");

btnResultSous.addEventListener('click', function () {
    let firstSous = Number(firstValueSous.value);
    let secondSous = Number(secondValueSous.value);
    let end = firstSous - secondSous;
    if (firstValueSous.value == 0 && secondValueSous.value == 0) {
        resultSous.textContent = 'Veuillez saisir deux nombres à additionner';
    } else {
        resultSous.textContent = end;
    }
});

// --------------------------------- Multiplication --------------------------------- //

let firstValueMult = document.querySelector(".firstValueMult");
let secondValueMult = document.querySelector(".secondValueMult");

let resultMult = document.querySelector(".resultMult");
let btnResultMult = document.querySelector(".btnResultMult");

btnResultMult.addEventListener('click', function () {
    let firstMult = Number(firstValueMult.value);
    let secondMult = Number(secondValueMult.value);
    let end = firstMult * secondMult;
    if (firstValueMult.value == 0 && secondValueMult.value == 0) {
        resultMult.textContent = 'Veuillez saisir deux nombres à additionner';
    } else {
        resultMult.textContent = end;
    }
});

// --------------------------------- Division --------------------------------- //

let firstValueDiv = document.querySelector(".firstValueDiv");
let secondValueDiv = document.querySelector(".secondValueDiv");

let resultDiv = document.querySelector(".resultDiv");
let btnResultDiv = document.querySelector(".btnResultDiv");

btnResultDiv.addEventListener('click', function () {
    let firstDiv = Number(firstValueDiv.value);
    let secondDiv = Number(secondValueDiv.value);
    let end = firstDiv / secondDiv;
    if (firstValueDiv.value == 0 && secondValueDiv.value == 0) {
        resultDiv.textContent = 'Veuillez saisir deux nombres à additionner';
    } else {
        resultDiv.textContent = end;
    }
});

// --------------------------------- Division --------------------------------- //

let firstValueMod = document.querySelector(".firstValueMod");
let secondValueMod = document.querySelector(".secondValueMod");

let resultMod = document.querySelector(".resultMod");
let btnResultMod = document.querySelector(".btnResultMod");

btnResultMod.addEventListener('click', function () {
    let firstMod = Number(firstValueMod.value);
    let secondMod = Number(secondValueMod.value);
    let end = firstMod % secondMod;
    if (firstValueMod.value == 0 && secondValueMod.value == 0) {
        resultMod.textContent = 'Veuillez saisir deux nombres à additionner';
    } else {
        resultMod.textContent = end;
    }
});

// --------------------------------- Démarrer machine --------------------------------- //

const btnMachine = document.querySelector('.btn-machine');
const txtMachine = document.querySelector('.txt-machine');

btnMachine.addEventListener('click', updateBtn);

function updateBtn() {
  if (btnMachine.textContent === 'Démarrer la machine') {
    btnMachine.textContent = 'Arrêter la machine';
    txtMachine.textContent = 'La machine est en marche !';
  } else {
    btnMachine.textContent = 'Démarrer la machine';
    txtMachine.textContent = 'La machine est arrêtée.';
  }
}

// ---------------------------------  --------------------------------- //

