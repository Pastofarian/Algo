//changer le contenu d'un paragraphe au click d'un bouton

let my_button = document.querySelector("button.my-button");
my_button.addEventListener("click", clickbtn);

function clickbtn() {
    console.log("Click");
    let my_paragraph = document.querySelector("p.text");
    my_paragraph.innerHTML = "Bonjour";
    my_paragraph.style.backgroundColor = "green";
}
/*******************Solution Prof *******************/

let my_button = document.querySelector("button");
my_button.addEventListener("click", clickbtn);

function clickbtn() {
    console.log("click");
    let my_p = document.querySelector("p.text");
    my_p.innerHTML = "Bonsoir?";
    my_p.style.color = "red";
}
/*Capturer le double click sur un bouton, changer le texte du bouton au click*/

let my_button = document.querySelector("button.my-button");
my_button.addEventListener("dblclick", dblclickbtn);

function dblclickbtn() {
    console.log("Click");
    let myButton = document.querySelector('button.my-button');
    this.innerHTML = 'Bonjour';
}

/*******************Solution Prof *******************/
let my_button = document.querySelector("button");

my_button.addEventListener("dblclick", dblclickbtn);

function dblclickbtn() {
    this.innerHTML = "Bonsoir!"
}

/*Capturer le click sur un bouton, récupérer la valeur d’un input et l’afficher
comme texte du bouton*/

let my_button = document.querySelector("button.my-button");
my_button.addEventListener("click", getInput);


function getInput() {
    let my_input = document.querySelector("input");
    console.log(my_input.value);
    /*my_button*/this.innerHTML = my_input.value;
}
/*******************Solution Prof *******************/
let my_button = document.querySelector("button");

my_button.addEventListener("click", simpleclick);

function simpleclick() {
    let input = document.querySelector("input");

    this.innerHTML = input.value
    input.value = ""
}

/*Capturer un blur sur un input, ajouter le contenu de l’input dans un
paragraphe et vider l’input
=> concatener les valeurs dans le paragraphe au lieu de l’effacer*/

let my_input = document.querySelector("input");
my_input.addEventListener("blur", getBlur);

function getBlur() {
    console.log("blur");
    let inputVal = this.value;
    let my_par = document.querySelector('p.text');

    inputVal = inputVal + this.value;
    my_par.innerHTML = inputVal;
    this.value = ""
}

/*Changer la couleur de fond du body lors d’un mouseenter sur bouton*/

/*Changer la couleur du texte du body en fonction d’une valeur fournie par 
l’utilisateur*/



