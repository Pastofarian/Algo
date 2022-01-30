
//addition
let n1 = parseInt(prompt("1"));
let n2 = parseInt(prompt("2"));

console.log(n1+n2);

//random minus
let n1 = Math.floor((Math.random() * 10) + 1);
let n2 = Math.floor((Math.random() * 10) + 1);

console.log(n1-n2);

//table de multiplication
let n1 = parseInt(prompt("1"));
for(let i = 10; i>0; i--){
    console.log(n1 *i, "=", n1,"*",i);
}

//boucle entre 10 et 20
let n1;
do{
    n1 = parseInt(prompt("Entrez un chiffre entre 10 et 20"));
    if(n1<10) {
        alert("le chiffre est trop petit");
    }
    if(n1>20) {
        alert("le chiffre est trop grand");
    }
} while(n1 != 0) {
}

//Bonjour en 4 langue aléatoire
let n1 = Math.floor((Math.random() * 4) + 1);
if(n1 == 1) {
    alert("Hello");
} 
else if(n1 == 2) {
    alert("Bonjour");
}
else if(n1 == 3) {
    alert("Hola");
}
else if(n1 == 4) {
    alert("Hallo");
}

//switch
let bonjour = Math.floor((Math.random() * 4) + 1);
switch(bonjour) {

    case 4 : 
    console.log("Bonjour");
    break;

    case 2 : 
    console.log("Hello");
    break;

    case 2 :
    console.log("Hola"); 
    break;
    
    case 1 :
    console.log("Hallo");  
    break;  
}

//fin de fichier booleenne
let theEnd = false
while(theEnd = false){
    console.log("*");
}

//imprimer les n premiers nombres aléatoire
let j = 0;
let n1 = Math.floor((Math.random() * 20) + 1);
for(let i = 1; i <= n1; i++) {
   j=j+i;
}
console.log(j);

//print strings 

let n1 = parseInt(prompt("Entrez un chiffre entre 0 et 20"));
for(let i = 1; i <= n1; i++) {
   console.log(i + "-----------");
}
//Bonjour en 4 langue aléatoire(function)
function hello() {
    alert("Hello");
}
let n1 = Math.floor((Math.random() * 4) + 1);
if(n1 == 1) {
    hello();
} 
else if(n1 == 2) {
    alert("Bonjour");
}
else if(n1 == 3) {
    alert("Hola");
}
else if(n1 == 4) {
    alert("Hallo");
} 

//Function ajoute5

function ajoute5(number) {
    return number * number;
}
let n1 = ajoute5(5);
for(let i = 1; i <= n1; i++) {
    console.log(i);
}

//function bonjour

function bonjour(prénom) {
    alert("bonjour" + prénom);
}
bonjour("Tof");
bonjour("Bill");


function modulo(nombre) {
    if(nombre%2 ==0) {
        console.log("ce nombre est pair");
    } 
    else if(nombre%2 != 0) {
        console.log("ce nombre n'est pas pair");
    }
}
modulo(4);
modulo(133);
modulo(122);
modulo(135);

// function moyenne
function moyenne(num1, num2, num3) {
    let result = (num1 + num2 + num3) / 3;
    console.log("la moyenne est de : ", result);
}

moyenne(1, 2, 3);
moyenne(15, 20, 30);
moyenne(555, 666, 999);

//function booléen

function young(num1, genre) {
    if(num1<18) {
        console.log("Trop jeune");
    } 
    else if(num1>30) {
        console.log("Trop vieux");
    }
    if(genre = true) {
        console.log("Femme");
    }
    else {
        console.log("Homme");
    }
}

young(20,true);
young(15, false);
young(35, true);

// function somme
function somme(num1, num2) {
    return num1 + num2;
}
let x = somme(2,8);
console.log(x);

//function modulo
function modulo(num1) {
    return num1 % 5 == 0;
}
x = 10

if(modulo(x)) {
    console.log(x, "est divisible par 5");
} else {
    console.log(x, "n'est pas divisible par 5");
}

//function hello
function hello(prenom, nom) {
    return "Bonjour" + " " + prenom + " " + nom;
}
let p = "Christophe"
let n = "MonNom"
console.log(hello(p, n));

//function factorielle + npremierNombre
let quit;
do {
    let input = prompt("entrez un nombre");
    function fact(nbr) {
        var nbr = input;
        var f = 1;
        for (i = 1; i <= nbr; i++) {
            f = f * i;   // ou f *= i;
        }
        return f;
    }
    function nPremierN(num) {
        var num = input;
        var j = 0;
        for (i = 1; i <= num; i++) {
            j = j + i;
        }
        return j;
    }
        let choice = prompt("choisissez entre 'f' pour factorielle ou 'n' pour premier nombre")
        if (choice == "f") {
            console.log(fact());
        } else {
            console.log(nPremierN());
        }
    quit = prompt("si vous voulez quittez tapez 'q'")
} while (quit != "q") {
}

//array push from 1 to 5

let myArray = [];

for(let i = 0; i < 6; i++) {
    myArray.push(i);
    console.log(myArray);
}
//plus simple, sans boucle
let myArray = [];

    myArray.push(1, 2, 3, 4, 5, 6);
    console.log(myArray);

// 4 notes créé aléatoirement + moyenne
    let myArray = [];
    let total = 0;
    
    for(let i = 0; i < 4; i++){
        let number = Math.floor((Math.random() * 100) + 1);
        myArray.push(number);
    
    }
    
    for (let i = 0; i < myArray.length; i++) {
        total = total + myArray[i];
    }
    console.log("les notes aléatoires sont ", myArray, " et la moyenne de celles-ci est de ", total/myArray.length);  

// ---------------------------------------------------------------------------------------------------------------------
// Exercice tableau + fonction (random/average)


function random(myArray = []) {   
    for(let i = 0; i < 5; i++) {                               // 5 nombres
        let number = Math.floor((Math.random() * 100));   // aléatoire de 1 à 100
        myArray.push(number);
    }
}

function avg(myArray = []) {  
    let total = 0;
    for (let i = 0; i < myArray.length; i++) {                // boucle sur la longueur du tableau
        total = total + myArray[i];                           // additionne les nombres
    }
    total = total/myArray.length;                            // réassigne "total" pour calculer la moyenne (pas besoin de créer une autre variable)
    return ("est composé de " + myArray + " et la moyenne de ces nombres est de " + total);
}
    
    // essais
    
    let tab1 = [];
    random(tab1);
    console.log("tab1",avg(tab1));
    
    let tab2 = [];
    random(tab2);
    console.log("tab2", avg(tab2)); 
    
    let tab3 = [];
    random(tab3);
    console.log("tab3", avg(tab3));
//--------------------------------------------------------------------------------------------------------------

// tableau de caractères

let myArray = [];

while(true) {
    let youSay = prompt("Entrez un caractère ou enter pour sortir")
    if(youSay != "") {
        myArray.push(youSay);
        console.log(myArray);
    } else {
        break;
    }
}

// fonction affiche élément d'un tableau

function letSee(myArray = []) {
    for(let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

let tabTest = ["hello", 2, 3, 18, 5];
letSee(tabTest);

// fonction additione élément tableau seulement si <10

function addElements(myArray = []) {
    let result = 0;
    for(let i = 0; i < myArray.length; i++) {
        if(myArray[i] < 10) { 
            result += myArray[i];
        }
    }
    return(result);
} 


let tab1 = [5, 5, 5, 25, 60, 80]
console.log("tab1", addElements(tab1));

// fonctions qui compare deux moyennes de tableaux

function random(myArray = []) {
    for(let i = 0; i < 5; i++) {
        let number = Math.floor((Math.random() *100));
        myArray.push(number);
    }
}

function avg(myArray = []) {
    let total = 0;
    for (let i = 0; i < myArray.length; i++) {                
        total += myArray[i];                           
    }
    total = total/myArray.length;                         
    return (total);
}

function compare(tab1, tab2) {
    random(tab1);
    random(tab2);
    if(avg(tab1) > avg(tab2)) {
        return true;
    } 
    else {
        return false;
    }
}

let test1 = [];
let test2 = [];

console.log(compare(test1, test2));


//fonction tableau <10 et >10

function random(myArray = []) {
    for(let i = 0; i < 10; i++) {
        let number = Math.floor((Math.random() *20));
        myArray.push(number);
    }
}

function sortArray(myArray = []) {
    let small= 0;
    let big= 0;
    random(myArray);
    console.log(myArray);
    for (let i = 0; i < myArray.length; i++) {
        if(myArray[i] < 10) {
            small++;
        } 
    else if(myArray[i] > 10) {
            big++;    
        }
    }
    return {
        "Au dessus de 10": big,
        "En dessous de 10": small
    };
}


let test1 = [];
console.log(sortArray(test1));


//fonction tableau strings

function stringArray(myArray = []) {
    number = prompt("Entrez un nombre de mots que vous voulez dans le tableau")
    for(let i = 0; i < number; i++) {
            let youSay = prompt("Entrez un caractère ou enter pour sortir")
            if(youSay != "") {
                myArray.push(youSay);
            } else {
                break;
            }
        }
        return myArray
    }
    
let test = [];
console.log(stringArray(test));