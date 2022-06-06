/*Changer le contenu d'un paragraphe au click d'un bouton*/

let mybutton1 = document.getElementById("button1");

mybutton1.addEventListener("click", clickbtn);
mybutton1.addEventListener("mouseleave", leavebtn1);

function clickbtn() {
    //console.log("Click");
    let myParagraph1 = document.getElementById("p1");
    myParagraph1.innerHTML = "J'ai changé le contenu et la couleur du paragraphe au click";
    myParagraph1.style.color = "red";
}

function leavebtn1() {
    let myParagraph1 = document.getElementById("p1");
    myParagraph1.innerHTML = "Changer le contenu d'un paragraphe au click d'un bouton";
    myParagraph1.style.color = "black";
}

// /*******************Solution Prof *******************/

// let my_button = document.querySelector("button");
// my_button.addEventListener("click", clickbtn);

// function clickbtn() {
//     console.log("click");
//     let my_p = document.querySelector("p.text");
//     my_p.innerHTML = "Bonsoir?";
//     my_p.style.color = "red";

/*Capturer le double click sur un bouton, changer le texte du bouton au click*/

let mybutton2 = document.getElementById("button2");

mybutton2.addEventListener("dblclick", dblclickbtn);
mybutton2.addEventListener("mouseleave", leavebtn2);

function dblclickbtn() {
    mybutton2.innerHTML = "CLICK !";
    mybutton2.style.color = "red";
}

function leavebtn2() {
    mybutton2.innerHTML = "My button";
    mybutton2.style.color = "black";
}

// // /*******************Solution Prof *******************/
// let my_button = document.querySelector("button");

// my_button.addEventListener("dblclick", dblclickbtn);

// function dblclickbtn() {
//     this.innerHTML = "Bonsoir!"
// }

/*Capturer le click sur un bouton, récupérer la valeur d’un input et l’affichercomme texte du bouton*/

let mybutton3 = document.getElementById("button3");

mybutton3.addEventListener("click", addInput);
mybutton3.addEventListener("mouseleave", leavebtn3)

function addInput() {
    let input1 = document.getElementById("input1");
    //console.log(my_input.value);
    this.innerHTML = input1.value;  /*this = mybutton3*/
    input1.value = "";
}
function leavebtn3() {
    mybutton3.innerHTML = "My button";
}

// /*******************Solution Prof *******************/
// let my_button = document.querySelector("button");

// my_button.addEventListener("click", simpleclick);

// function simpleclick() {
//     let input = document.querySelector("input");

//     this.innerHTML = input.value
//     input.value = ""
// }

/*Capturer un blur sur un input, ajouter le contenu de l’input dans un
paragraphe et vider l’input
=> concatener les valeurs dans le paragraphe au lieu de l’effacer*/

let input2 = document.getElementById("input2");
let mybutton4 = document.getElementById("button4");
let myParagraph2 = document.getElementById("p2");

input2.addEventListener("blur", getBlur);
mybutton4.addEventListener("click", clear);

function getBlur() {
    myParagraph2 = document.getElementById("p2");
    //console.log(my_input.value);
    myParagraph2.innerHTML += ' ' + input2.value;
    input2.value = "";
}

function clear() {
    myParagraph2.innerHTML = "Texte : ";
}

/*Changer la couleur de fond du body lors d’un mouseenter sur bouton*/

let mybutton5 = document.getElementById("button5");
let mybutton6 = document.getElementById("button6");
let mybutton7 = document.getElementById("button7");

mybutton5.addEventListener("mouseenter", changeColorBody1);
mybutton6.addEventListener("mouseenter", changeColorBody2);
mybutton7.addEventListener("mouseenter", clearColorBody);


function changeColorBody1() {
    let myBody = document.querySelector("body");
    myBody.setAttribute("style", "background-image: radial-gradient(#e6ebef, #1c87c9, #8ebf42");
}
function changeColorBody2() {
    let myBody = document.querySelector("body");
    myBody.setAttribute("style", "background-image: linear-gradient(to right, #6c93f9, #8ecf90)");
}
function clearColorBody() {
    let myBody = document.querySelector("body");
    myBody.setAttribute("style", "background-color: white");
}

/*Changer la couleur du texte du body en fonction d’une valeur fournie par
l’utilisateur*/

let input3 = document.getElementById("input3");
let mybutton8 = document.getElementById("button8");
let mybutton9 = document.getElementById("button9");
let body = document.querySelector("body");
mybutton8.addEventListener("click", changeColortextBody);
mybutton9.addEventListener("click", changeColortextBlack);

function changeColortextBody() {
    body.style.color = input3.value;
}

function changeColortextBlack() {
    body.style.color = "black";
}

/*Créer un système de TODO list nous permettant d'ajouter et de supprimer des éléments d'une
liste*/
let input4 = document.getElementById("input4");

input4.addEventListener("keypress", function (enter) {
    if (enter.key === "Enter") {
        //console.log('enter');
        let new_paragraph = document.createElement("p");
        let paragraph_content = document.createTextNode(input4.value);
        //console.log(input4.value);
        new_paragraph.append(paragraph_content);
        let my_article = document.getElementById("article1");
        my_article.appendChild(new_paragraph);
        input4.value = "";
    }
});

/*Permettez à l'utilisateur de vous fournir des entiers 1 par 1, un autre bouton doit permettre de trier la liste d'entiers fournis et de sortir : La plus petite valeure entrée, La plus grande valeur entrée, Le tableau trié*/

let input5 = document.getElementById("input5");
let mybutton10 = document.getElementById("button10");
let mybutton11 = document.getElementById("button11");
let mybutton12 = document.getElementById("button12");
let mybutton13 = document.getElementById("button13");
let my_article2 = document.getElementById("article2");
let arr = [];

mybutton10.addEventListener("click", addArray);
mybutton11.addEventListener("click", displaySmall);
mybutton12.addEventListener("click", displayBig);
mybutton13.addEventListener("click", sorting);


function addArray() {
    while (true) {
        if (Number.isInteger(+input5.value)) {
            arr.push(input5.value);
            console.log(arr)
            input5.value = "";
            //input5.setAttribute("autofocus", "true");
        } else
            alert("Entrez un nombre !")
        break;
    }
}

function sorting() {
    console.log('Unsorted', arr);
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j > -1; j--) {
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    };
    console.log('Sorted', arr);
    let new_paragraph4 = document.createElement("p");
    let paragraph4_content = document.createTextNode(arr);
    new_paragraph4.append(paragraph4_content);
    my_article2.appendChild(new_paragraph4);
    return arr
}

function displaySmall() {
    let small = sorting(arr)[0];
    console.log('small', small);
    let new_paragraph2 = document.createElement("p");
    let paragraph2_content = document.createTextNode(arr[0]);
    new_paragraph2.append(paragraph2_content);
    my_article2.appendChild(new_paragraph2);
}

function displayBig() {
    let big = sorting(arr)[arr.length - 1];
    console.log('big', big);
    let new_paragraph3 = document.createElement("p");
    let paragraph3_content = document.createTextNode(arr[arr.length - 1]);
    new_paragraph3.append(paragraph3_content);
    my_article2.appendChild(new_paragraph3);
}


