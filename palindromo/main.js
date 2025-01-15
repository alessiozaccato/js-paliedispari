//Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

let word = prompt("inserisci una parola:").toLowerCase();
let reversedWord = palindrome();

function palindrome() {
    return word.split("").reverse().join("");
}


if (word == reversedWord) {
    console.log(`la parola ${word} è palindroma`);
} else {
    console.log(`la parola ${word} non è palindroma`);
}