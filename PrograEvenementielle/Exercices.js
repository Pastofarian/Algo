/*Changer le contenu d'un paragraphe au click d'un bouton*/

let mybutton1 = document.getElementById("button1");

mybutton1.addEventListener("click", clickbtn);
mybutton1.addEventListener("mouseleave", leavebtn1);

function clickbtn() {
    //console.log("Click");
    let myParagraph1 = document.getElementById("p1");
    myParagraph1.innerHTML = "J'ai changé le contenu et la couleur du paragraphe au click";
    myParagraph1.style.color = "green";
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

let myInput2 = document.getElementById("input2");
let mybutton4 = document.getElementById("button4");
let myParagraph2 = document.getElementById("p2");

myInput2.addEventListener("blur", getBlur);
mybutton4.addEventListener("click", clear);

function getBlur() {
    let input2 = document.getElementById("input2");
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

mybutton5.addEventListener("click", changeColorBody1);
mybutton6.addEventListener("click", changeColorBody2);
mybutton7.addEventListener("click", clearColorBody);


function changeColorBody1() {
    let myBody = document.querySelector('body');
    myBody.setAttribute('style', 'background-image: radial-gradient(#e6ebef, #1c87c9, #8ebf42');
}
function changeColorBody2() {
    let myBody = document.querySelector('body');
    myBody.setAttribute('style', 'background-image: linear-gradient(to right, #6c93f9, #8ecf90)');
}
function clearColorBody() {
    let myBody = document.querySelector('body');
    myBody.setAttribute('style', 'background-color: white');
}

/*Changer la couleur du texte du body en fonction d’une valeur fournie par
l’utilisateur*/

let mybutton8 = document.getElementById("button8");
mybutton8.addEventListener("click", changeColortextBody);

function changeColortextBody() {
    let input3 = document.getElementById('input3');
    let body = document.querySelector('body');

    switch (input3.value) {
        case "bleu":
            body.setAttribute('style', "color : blue");
            break;
        case "vert":
            body.setAttribute('style', "color : green");
            break;
        case "rouge":
            body.setAttribute('style', "color : red");
            break;
        case "rose":
            body.setAttribute('style', "color : pink");
            break;
        case "mauve":
            body.setAttribute('style', "color : purple");
            break;
        case "noir":
            body.setAttribute('style', "color : black");
            break;
        case "jaune":
            body.setAttribute('style', "color : yellow");
            break;
    }
}