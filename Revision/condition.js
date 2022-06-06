//boucle pour comparer 
let arr = [5, 6, 9, 87, 78, 32]
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        console.log('arr[i]', arr[i]);
        console.log('arr[j]', arr[j]);
    }
}

//boucle pour comparer 2 tableaux
let search = [43, 54, 89];
let arr = [1, 2, 3, 4, 1, 2, 3, 5, 8, 9, 5, 1, 2, 3];
for (let i = 0; i < arr.length - (search.length - 1); i++) {
    for (let j = 0; j < search.length; j++) { //je boucle juste sur la longueur du search donc je compare juste 3 chiffres puis la boucle recommence
    }
}
// a. Réalisez le code nécessaire pour afficher une variable “âge” uniquement si
// elle est strictement supérieure à 18 et inférieure à 50

let age = document.getElementById("input1");
age.addEventListener("keypress", addInput1);
let myParagraph1 = document.getElementById("p1");

function addInput1(enter) {
    if (enter.key === "Enter") {
        if (isNaN(age.value)) {
            myParagraph1.innerHTML = "Vous avez entré " + age.value + "! Ceci n'est pas un chiffre.";
            myParagraph1.style.color = "red";
        }
        else if (age.value <= 18) {
            myParagraph1.innerHTML = "Malheureusement vous êtes trop jeune";
            myParagraph1.style.color = "green";
        }
        else if (age.value > 50) {
            myParagraph1.innerHTML = "Malheureusement vous êtes trop vieux";
            myParagraph1.style.color = "green";
        } else {
            display();
        }
        age.value = "";
    }
}

function display() {
    myParagraph1.innerHTML = "Felicitations vous avez " + age.value + " ans";
    myParagraph1.style.color = "blue";
}

/* c. Permettez à l’utilisateur d’entrer des valeurs (nombres entiers) remplissant un
tableau, une fois que l’utilisateur est satisfait de ses entrées, triez le tableau
par ordre croissant */

let arr = [];
let input2 = document.getElementById("input2");
input2.addEventListener("keypress", addInput2);
let button1 = document.getElementById("button1");
button1.addEventListener("click", sort);
let myParagraph2 = document.getElementById("p2");

function addInput2(enter) {
    if (enter.key === "Enter") {
        arr.push(parseInt(input2.value));
        input2.value = "";
        console.log(arr)
    }
}

function sort() {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j > -1; j--) {
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    };
    display2()
}

function display2() {
    myParagraph2.innerHTML = arr;
}

// 1. Réalisez une fonction prenant le nom et l’âge de la personne en entrée et retournant
// une chaîne de caractères “{nom} a {age} ans”;

let age = document.getElementById("input1");
let firstName = document.getElementById("input2");
let button = document.getElementById("my-button")
let myParagraph1 = document.getElementById("p1");
button.addEventListener("click", whoAmI);
//firstname.addEventListener()

function whoAmI() {
    if (isNaN(age.value)) {
        myParagraph1.innerHTML = "Vous avez entré " + age.value + "! Ceci n'est pas un chiffre.";
        myParagraph1.style.color = "red";
    } else {
        myParagraph1.innerHTML = "Vous êtes " + firstName.value + " et vous avez " + age.value + " ans";
        myParagraph1.style.color = "blue";
        input1.value = "";
        input2.value = "";
    }
}

// 3. Réalisez une fonction qui prend un tableau d’entiers et qui renvoie le tableau inversé;

let arr = [];
let arr2 = [];
let input2 = document.getElementById("input2");
input2.addEventListener("keypress", addInput2);
let button1 = document.getElementById("button1");
button1.addEventListener("click", sort);
let myParagraph2 = document.getElementById("p2");

function addInput2(enter) {
    if (enter.key === "Enter") {
        arr.push(parseInt(input2.value));
        input2.value = "";
        console.log(arr)
    }
}

function sort() {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
        display2();
        console.log(arr[i]);
    }
}

function display2() {
    myParagraph2.innerHTML = arr2;
}