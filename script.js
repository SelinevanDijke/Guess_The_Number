// Prompt om naam in te vullen - Stap 1/2
let userName = prompt("Welkom! Wat is je naam?");

// Vul naam in - Stap 3
if (userName != null) {
    alert ("Hey " + userName + "!");
} 

// Vraag om nummer - Stap 4
let i = prompt('Vul alsjeblieft een nummer in van 0 tot 25.');
while (isNaN(i) || i > 25 || i < 0) {
    i = parseInt(prompt("Je invoer was geen nummer, of het nummer is niet tussen de  en 25. Probeer het nog een keer!"));
}

// Random nummer generen - Stap 5 
const getRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomNumber = getRandomNumber(0, 25);

    //  Wat is het random nummer?
    alert(`Het random nummer was: ${randomNumber}`);

// Controleer of het nummer juist is - Stap 6
while (i != randomNumber) {
    let i = prompt('Helaas het nummer is niet goed geraden. Probeer het opnieuw en vul alsjeblieft een nummer in van 0 tot 25.');
    while (isNaN(i) || i > 25 || i < 0) {
        i = parseInt(prompt("Je invoer was geen nummer, of het nummer is niet tussen de 0 en 25. Probeer het nog een keer!"));
    }
    
    const getRandomNumber = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const randomNumber = getRandomNumber(0, 25);
    alert(`Het random nummer was: ${randomNumber}`);

    if (i == randomNumber) {
        alert("Gefeliciteerd, je hebt gewonnen!");
        
    } 
}




