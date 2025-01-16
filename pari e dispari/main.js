//Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

//declare variables that i need for the user
let choice = (prompt("inserisci pari o dispari").toLowerCase());
//declare the variable that i need for the user
let userNumber = NaN;
let sum = NaN;
//declare variable that i need for the computer
let computerNumber = computerRandomNumber();
let resultEvenOdd = "";

//write the condition to start the game
if (choice == "pari" || choice == "dispari") {
    userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
    if (userNumber >= 1 && userNumber <= 5) {
        console.log(`hai scelto ${choice} e ${userNumber}`);

        //show on console the computer number
        console.log(`il numero scelto dal computer è ${computerNumber}`);

        //let's sum both numbers
        sum = computerNumber + userNumber;
        console.log(`la somma dei due numeri è ${sum}`);

        //let's call the functions that i need
        sumEvenOdd(sum);
        winnerOfGame(resultEvenOdd, choice);

    }


} else {
    alert("hai inserito un valore non valido");
}



//let's generate a random number for the pc

function computerRandomNumber() {
    let comNumber = Math.floor(Math.random() * 5) + 1;
    return comNumber;
}

//let's do a function to see if sum is even or odd
function sumEvenOdd(sum) {

    if (sum % 2 == 0) {
        resultEvenOdd = "pari"
        console.log(`la somma è pari`);

    } else {
        resultEvenOdd = "dispari"
        console.log(`la somma è dispari`);

    }
}

//let's do a function to see the winner 
function winnerOfGame(evenodd, choice) {
    if (evenodd == choice) {
        console.log("vinci!");
    } else {
        console.log("vince il computer")
    }
}












