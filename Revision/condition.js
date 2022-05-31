// a. Réalisez le code nécessaire pour afficher une variable “âge” uniquement si
// elle est strictement supérieure à 18 et inférieure à 50

let age = document.querySelector("input");
age.addEventListener("keypress", addInput);
let myParagraph1 = document.getElementById("p1");

function addInput(enter) {
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
input2.addEventListener("keypress", addInput);
let button1 = document.getElementById("button1");
button1.addEventListener("click", sort);
let myParagraph2 = document.getElementById("p2");

function addInput(enter) {
    if (enter.key === "Enter") {
        arr.push(input2.value);
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
