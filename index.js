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


