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

/********** */

function nameAge(name, age) { // argument par défaut pour age age = 12 par exemple

    return name + " à " + age + " ans";
}

console.log(nameAge("Jhon", 23));


/*//////Correction///////////*/

function concat_name_age(name, age) {
    return name + " a " + age + " ans";
}
console.log(concat_name_age("John", 23));

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

/*//////Correction///////////*/

function is_pair(nb) {
    return nb % 2 === 0;
}
console.log(is_pair(2), is_pair(5));

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

/*//////Correction///////////*/

function reverse_array(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(reverse_array([5, 3, 8, 1, 2]));

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

/*//////Correction///////////*/

function find_occurence(arr, search) {
    let occurences = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == search) {
            occurences++;
        }
    }
    return occurences;
}

console.log(find_occurence([5, 8, 1, 9, 8, 2, 8, 1], 8));

/*
5. Pareil que la 4 mais pour une suite de nombre
*/



/**************************  Code Mathieu *****************************/

function howMany(myArray, myArray2) {
    let count = 0;
    let occurences = 0;

    for (let i = 0; i < myArray.length; i++) {
        for (let j = 0; j < myArray2.length; j++) {

            if (myArray[i + j] == myArray2[j]) {
                occurences++
                console.log("myArray[i] " + myArray[i]);
                console.log("myArray[j] " + myArray[j]);
                console.log("myArray2[j] " + myArray2[j]);
            }
            if (occurences == myArray2.length) {
                count++
            }
        }
    }
    return "le tableau '" + myArray2 + "' se trouve " + count + " fois dans le tableau '" + myArray + "'";
}
let myArray2 = [1, 2, 3, 4];
let myArray = [1, 2, 3, 4, 0, 'Bonjour', 5, 'Banana', 8, 11, 1, 2, 3, 4, 12, 9, 5, 8, 1, 1, 1, 1];
console.log(howMany(myArray, myArray2));

/*//////Correction///////////*/

/*5. Pareil que la 4 mais pour une suite de nombre*/
function find_occurences(arr, search) {
    //si la recherche n'est pas un tableau, alors j'appelle le find_occurence qui s'occupera de faire le travail
    if (!Array.isArray(search)) {
        return find_occurence(arr, search);
    }
    let occurences = 0;
    //je parcours le tableau
    for (let i = 0; i < arr.length - (search.length - 1); i++) {
        //je parcours le tableau de recherche
        for (let j = 0; j < search.length; j++) {
            //si l'élément ne match pas j'arrete
            if (arr[i + j] !== search[j]) {
                break;
            }
            //si tout les éléments ont matchés, alors on est bien sur une occurence
            if (j == search.length - 1) {
                occurences++;
            }
        }
    }
    return occurences;
}

console.log(find_occurences([1, 2, 3, 4, 1, 2, 3, 5, 8, 9, 5, 1, 2, 3], [1, 2, 3]));
console.log(find_occurences([1, 2, 3, 4, 1, 2, 3, 5, 8, 9, 5, 1, 2, 3], 3));

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

/*//////Correction///////////*/

function operation(number_1, number_2, operand) {
    switch (operand) {
        case "-":
            return substract(number_1, number_2);
            break;
        case "*":
            return multiply(number_1, number_2);
            break;
        case "/":
            return divide(number_1, number_2);
            break;
        default:
            return add(number_1, number_2);
    }
}

function add(number_1, number_2) {
    return number_1 + number_2;
}

function substract(number_1, number_2) {
    return number_1 - number_2;
}

function divide(number_1, number_2) {
    return number_1 / number_2;
}

function multiply(number_1, number_2) {
    return number_1 * number_2;
}

console.log(add(5, 2));
console.log(operation(5, 2, "+"));
console.log(operation(4, 2, "/"));

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

