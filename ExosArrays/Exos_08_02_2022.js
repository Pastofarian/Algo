//1. Conditions

/* a. Réalisez le code nécessaire pour afficher une variable “âge” uniquement si
elle est strictement supérieure à 18 et inférieure à 50   */ 

let age = prompt("Entrez votre age");

if(age < 18 && age > 50) {
    alert("trop jeune ou trop vieux !")
} else { 
    alert("Vous avez " + age + "ans");
}

/* b. Réalisez le code nécessaire pour afficher une variable “âge” uniquement si
elle est strictement égale en valeur et en type à 30 */

let age = parseInt(prompt("Entrez votre age"));

if(age === 30) {
    alert("Vous avez " + age + "ans");
}
else {
  alert("réésayez !")
} 

/* c. Réalisez le code nécessaire pour vérifier qu’une variable "âge" uniquement si
elle est supérieure à une variable “ageMinimum”. Dans ce cas affichez soit un
message indiquant que l'âge requis n’est pas atteint, ou que l'âge requis est
atteint en fonction du résultat */

let age = parseInt(prompt("Entrez votre age"));
let ageMin = parseInt(prompt("Entrez un age minimum"));

if(age >= ageMin) {
    alert("Vous avez atteint l'age minimum");
}
else {
  alert("Vous êtes trop jeune !")
} 

/* d. Réalisez la condition suivante de 3 manière “Si il a un age alors je
le multiplie par 2, sinon je le divise par 3”*/

(isAge) ? age *= 2 : age /=3

 //--------------------
if(age) {
    age*=2;
} else {
    age/=3;
}
//---------------------

if(!age) {
    age/=3;
} else {
    age*=2;
}

//2. Boucles

/* a. Bouclez sur les entiers de 100 à 0, affichez la valeur de l’entier seulement si le
résultat du modulo entre l’entier et une variable “comparaison” est différent de
0 */

let comparaison = 5;
for(i = 100; i >= 0; i--) {
    if(i%comparaison != 0) {
        console.log(i);
    }
}

/* b. Bouclez sur les entiers de 2 à 200, faites la somme des entiers qui sont des
nombres premiers (divisible uniquement par 1 et eux-même) */

const lowerNumber = 2;
const higherNumber = 200;
let total = 0;

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
        total = i + total;
        total = parseInt(total);
    }
}
console.log(total);


//3. Tableaux

/* a. Créez et parcourez un tableau comprenant des valeurs de différents types
(boolean, string, integer, float, ..) */

let arr = [true, "vrai", 666, 0.666, "TheNumberOfTheBeast"];

for(i = 0; i < arr.length; i++) {
}
console.log(arr);

/* b. Créez et parcourez un tableau d’entier, du dernier élément au premier */

let arr = [1, 3, 88, 99, 666];

for(i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

/* c. Créez et parcourez un tableau d’entier du premier élément au dernier en
évitant les index impairs et ce sans utiliser de condition à l’intérieur de votre
boucle */

let arr = [1, 3, 88, 99, 666, 44];

for(i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  i++;
};

/* d. Créez et parcourez un tableau d’entier du premier élément au dernier en
évitant les index dont le modulo 4 est 0 */

let arr = [1, 3, 88, 99, 666, 44, 98, 67, 75];

for(i = 0; i < arr.length; i++) {
    if(i % 4 == 0) {
    } else {
        console.log(arr[i]);
    }
};


/* e. Créez et parcourez un tableau en sommant les éléments à leurs place
ex : [2,5,8,2] => [2, 7 (5+2), 15 (5+2+8), 17 (...)] */

/* e. Créez et parcourez un tableau en sommant les éléments à leurs place
ex : [2,5,8,2] => [2, 7 (5+2), 15 (5+2+8), 17 (...)] */

let total = 0;
let arr = [2,5,8,2];

for(i = 0; i < arr.length; i++) {
  total = arr[i] + total;
  total = parseInt(total);

  //console.log(arr[i] += arr[i+1]);
  console.log(total)
}

/* f.
Pareil que le précédent, sauf que vous avez un tableau de tableaux, une fois la
somme faites triez les par ordre décroissant
ex :
Tableau de départ : [[5, 2, 8], [12, 24, 9], [3, 1, 8]]
Tableaux avec sommes => [[5, 7, 15], [12, 36, 45], [3, 4, 12]]
Tableaux ordonnés par ordre décroissant => [[12, 36, 45], [5, 7, 15],[3, 4, 12]] */

let total = 0;
let arr = [[5, 2, 8], [12, 24, 9], [3, 1, 8]]
let arr2 = [[],[],[]]

for(i = 0; i < arr.length; i++) {
  total = 0;
  for(j = 0; j < arr[i].length; j++) {
    total = arr[i][j] + total;
    total = parseInt(total);
    arr2[i].push(total);
  }
  //console.log('sous tableau', i, total)
  //console.log(arr2);
}
console.log(arr2);

//4. Tris

/* a. Améliorez le tri à bulle tel que vu précédemment : Si lors d’un tour entier il n’a
pas dû effectuer de “swap” alors arrêtez l’algorithme */



/* b. Réalisez un tri (bulle / insertion / sélection) décroissant */

/* c. Permettez à l’utilisateur d’entrer des valeurs (nombres entiers) remplissant un
tableau, une fois que l’utilisateur est satisfait de ses entrées, triez le tableau
par ordre croissant */

/* d. Créez un tableau d’entiers avec au moins 10 entrées, définissez ensuite une
variable “limite”, triez les N derniers éléments du tableau (N étant la limite)
Quel algorithme choisir et pourquoi ? Implémentez le code */

/* e. Même question que la précédente sauf qu’il faut trier les N premiers éléments */