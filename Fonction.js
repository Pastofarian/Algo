/*
1. Réalisez une fonction prenant le nom et l’âge de la personne en entrée et retournant
une chaîne de caractères “{nom} a {age} ans”;
*/

function nameAge(name, age) {
    name = prompt("Entrez votre nom");
    age = prompt("Entrez votre age");
    return name + " à " + age + " ans";
}

console.log(nameAge());

/*
2. Réalisez une fonction qui retourne vrai si le nombre entré est pair et faux s’il est
impair
*/

function isPair(number) {

    if (number % 2 == 0) {
        return true;
    }
    return false;
}
number = prompt("Entrez un chiffre");
console.log(isPair(number));

/*
3. Réalisez une fonction qui prend un tableau d’entiers et qui renvoie le tableau inversé
*/

function turnOver(myArray) {
    //myArray = [5, 4, 6, 7, 9];
    let myArray2 = [];
    for (let i = myArray.length - 1; i >= 0; i--) {
        myArray2.push(myArray[i]);
    }
    return myArray2;
}

console.log(turnOver([5, 9, 45, 65]));

/*********************************************************************** */

function customReverse(originalArray) {

    let leftIndex = 0;
    let rightIndex = originalArray.length - 1;

    while (leftIndex < rightIndex) {

        // Swap the elements with temp variable
        let temp = originalArray[leftIndex];
        originalArray[leftIndex] = originalArray[rightIndex];
        originalArray[rightIndex] = temp;

        // Move indices to the middle
        leftIndex++;
        rightIndex--;
    }
}

let myArray = [1, 2, 3, 4, 5];

customReverse(myArray);

console.log(myArray);

// output is [5, 4, 3, 2, 1]

/*
4. Réalisez une fonction qui calcule combien de fois un nombre donné est présent dans
un tableau donné et renvoie cette valeur
*/



function numberOfTime(input, myArray) {
    let count = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == input) {
            count++;
        }
    }
    return count;
}

let tableau = [5, 4, 6, 7, 9, 9, 9, 6];
console.log(numberOfTime(2, [1, 2, 2, 2, 8, 1, 2, 9]));
console.log(numberOfTime(1, tableau));
input = prompt("Entrez une donnée à chercher dans le tableau");
console.log(numberOfTime(input, tableau));
/*
5. Pareil que la 4 mais pour une suite de nombre
*/



/**************************  Code Mathieu *****************************
    
function howMany (myArray, myArray2){
    let count = 0;
    for (let i = 0; i < myArray.length ; i++){
        let occurences = 0;
        for (let j = 0; j < myArray2.length ; j++){
            if (myArray[i+j] == myArray2[j]){
                occurences++
                console.log(occurences);
            }
            if (occurences == myArray2.length){
                count++
            }
        }
    }
    return count;
}
let myArray2 = [1,2,3,4];
let myArray = [1,2,3,4,0,'Bonjour',5,'Banana',8,11,1,2,3,4,12,9,5,8,1,1,1,1];
console.log(howMany(myArray,myArray2));
    
/*
6. Réalisez les fonctions nécessaires pour faire les 4 opérations (+ - / * ) avec 2
nombres donnés
*/

function somme(num1, num2) {

    return num1 + num2;
}
function minus(num1, num2) {

    return num1 - num2;
}
function multiply(num1, num2) {

    return num1 * num2;
}
function divide(num1, num2) {

    return num1 / num2;
}


/*
7. Réalisez une fonction permettant de choisir laquelle des 4 fonctions réalisées au
point 6 appeller dépendant de l’entrée d’un utilisateur
*/

function somme(num1, num2) {

    return num1 + num2;
}
function minus(num1, num2) {

    return num1 - num2;
}
function multiply(num1, num2) {

    return num1 * num2;
}
function divide(num1, num2) {

    return num1 / num2;
}

//console.log(somme(4, 5));
userInput1 = parseInt(prompt("entrez un nombre"));
userOperande = prompt("entrez l'opérande");
userInput2 = parseInt(prompt("entrez un nombre"));

function calc(num1, operande, num2) {
    if (operande == "+") {
        return somme(num1, num2);
    }
    if (operande == "-") {
        return minus(num1, num2);
    }
    if (operande == "*") {
        return multiply(num1, num2);
    }
    return divide(num1, num2);
}

console.log(calc(userInput1, userOperande, userInput2));


/*
8. Réalisez les fonctions nécessaire pour jouer au jeu de Nim (bâtonnets)
*/
let player1;
let player2;
let matchNum = 20;

function mainPrompt(number) {
    if (number == 1) {
        player1 = prompt("Joueur 1 - retirez 1, 2 ou 3 allumettes");
    } else {
        player2 = prompt("Joueur 2 - retirez maximum " + matchNum + " allumette(s)");
    }
}
function endPrompt(number) {
    if (number == 1) {
        player1 = prompt("Joueur 1 - retirez maximum " + matchNum + " allumette(s)");
    } else {
        player2 = prompt("Joueur 2 - retirez maximum " + matchNum + " allumette(s)");
    }
}
function winPrompt(number) {
    if (number == 1) {
        alert("Joueur 1 Vous avez gagné");
    } else {
        alert("Joueur 2 Vous avez gagné");
    }
}
function wrongPrompt() {
    prompt("Vous devez retirez 1, 2 ou 3 allumettes, recommencez !");
}
function matchLeft() {
    alert("il reste " + matchNum + " allumettes");
}

while (matchNum > 0) {
    if (matchNum < 4) {
        endPrompt(1);
    }
    else {
        mainPrompt(1);
    }
    if (player1 >= 4 || player1 < 1) {
        wrongPrompt()
        break;
    }
    matchNum = matchNum - player1;
    matchLeft()

    if (matchNum <= 0) {
        winPrompt(1);
        break;
    }
    if (matchNum < 4) {
        endPrompt(2);
    }
    else {
        mainPrompt(2);
    }
    if (player2 >= 4 || player2 < 1) {
        wrongPrompt();
        break;
    }
    matchNum = matchNum - player2;
    matchLeft();

    if (matchNum <= 0) {
        winPrompt(2);
        break;
    }
}

/*9. Réalisez les fonctions nécessaire pour renvoyer la somme des valeurs d’un tableau*/

let total = 0;
let myAr = [5, 3, 8, 2, 5, 8, 9, 40];

function sum(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        total += myArray[i];
    }
    return total;
}

let answer = sum(myAr);
console.log(answer);

/*Exercices avancés
1. Réalisez une fonction récursive permettant de calculer la factorielle d’un nombre
(factorielle de 5 = 5*4*3*2*1, factorielle de 7 = 7*6*5*4*3*2*1 etc)*/

// let j = 7
// let r = 1
// for (let i = 1; i <= j; i++) {
//     r = r * i
//     console.log(r);
// }

function factorial(x) {

    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

let input = prompt('Enter a positive number: ');

if (input >= 0) {
    let result = factorial(input);
    console.log('The factorial of ' + input + ' is ' + result);
}
else {
    console.log('Enter a positive number.');
}