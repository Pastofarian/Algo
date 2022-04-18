//1. Conditions

/* a. Réalisez le code nécessaire pour afficher une variable “âge” uniquement si
elle est strictement supérieure à 18 et inférieure à 50   */

let age = prompt("Entrez votre age");

if (age < 18 && age > 50) {
    alert("trop jeune ou trop vieux !")
} else {
    alert("Vous avez " + age + "ans");
}

//--------------------------------------condition ternaire

age > 18 && age < 50 ? console.log(age) : age < 18 ? console.log("trop jeune") : console.log("trop vieux");

/* b. Réalisez le code nécessaire pour afficher une variable “âge” uniquement si
elle est strictement égale en valeur et en type à 30 */

let age = parseInt(prompt("Entrez votre age"));

if (age === 30) {
    alert("Vous avez " + age + "ans");
}
else {
    alert("réésayez !")
}

//solution prof *****************************************************************

console.log('\n\n****** 1.B. ******');

let age = 30;
if (age === 30) {
    console.log('age', age);
}
// -------------------------------condition ternaire

let age = 30;
parseInt(age);

age === 30 ? console.log("vous avez 30 ans") : console.log("vous n'avez 30 ans")

/* c. Réalisez le code nécessaire pour vérifier qu’une variable "âge" uniquement si
elle est supérieure à une variable “ageMinimum”. Dans ce cas affichez soit un
message indiquant que l'âge requis n’est pas atteint, ou que l'âge requis est
atteint en fonction du résultat */

let age = parseInt(prompt("Entrez votre age"));
let ageMin = parseInt(prompt("Entrez un age minimum"));

if (age >= ageMin) {
    alert("Vous avez atteint l'age minimum");
}
else {
    alert("Vous êtes trop jeune !")
}

/* d. Réalisez la condition suivante de 3 manière “Si il a un age alors je
le multiplie par 2, sinon je le divise par 3”*/

let isAge = 25;

isAge ? isAge *= 2 : isAge /= 3;
console.log(isAge);

//--------------------
if (age) {
    age *= 2;
} else {
    age /= 3;
}
//---------------------

if (!age) {
    age /= 3;
} else {
    age *= 2;
}

//2. Boucles

/* a. Bouclez sur les entiers de 100 à 0, affichez la valeur de l’entier seulement si le
résultat du modulo entre l’entier et une variable “comparaison” est différent de
0 */

let comparaison = 5;
for (i = 100; i >= 0; i--) {
    if (i % comparaison != 0) {
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
        total += i;
    }
}
console.log("total des nombres premiers : " + total);

//solution prof *****************************************************************

console.log('\n\n****** 2.B. ******');

let somme = 0;
for (let i = 2; i <= 200; i++) {
    //on part du principe qu'il est un nombre premier
    let isPremier = true;

    //on vérifie parmis tout les entiers de i-1 à 2
    for (let j = i - 1; j >= 2; j--) {
        if (i % j === 0) {
            //si le modulo donne 0, alors il n'est pas premier, on mets isPremier à false et on arrête de vérifier
            isPremier = false;
            break;
        }
    }

    if (isPremier) {
        //console.log(i); //enlevez ce commentaire pour voir les nombres premiers 
        somme += i;
    }
}

console.log('Somme des nombres premiers de 2 à 200 :', somme);

//3. Tableaux

/* a. Créez et parcourez un tableau comprenant des valeurs de différents types
(boolean, string, integer, float, ..) */

let arr = [true, "vrai", 666, 0.666, "TheNumberOfTheBeast"];

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


/* b. Créez et parcourez un tableau d’entier, du dernier élément au premier */

let arr = [1, 3, 88, 99, 666];

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}


/* c. Créez et parcourez un tableau d’entier du premier élément au dernier en
évitant les index impairs et ce sans utiliser de condition à l’intérieur de votre
boucle */

let arr = [1, 3, 88, 99, 666, 44];

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    i++;
};

//-------------------------------

let arr = [1, 2, 3, 4, 5, 6, 7]

for (i = 0; i < arr.length; i += 2) {
    console.log(arr[i]);
}

/* d. Créez et parcourez un tableau d’entier du premier élément au dernier en
évitant les index dont le modulo 4 est 0 */

let arr = [1, 3, 88, 99, 666, 44, 98, 67, 75];

for (i = 0; i < arr.length; i++) {
    if (i % 4 == 0) {
    } else {
        console.log(arr[i]);
    }
};

//------------------------------------------

let arr = [1, 2, 3, 4, 5, 6, 7]

for (i = 0; i < arr.length; i++) {
    if (i % 4 != 0) {
        console.log(arr[i]);
    }

}

//solution prof *****************************************************************

console.log('\n\n****** 3.D. ******');

let myOtherArray = [5, 3, 8, 1, 2, 4, 5, 6, 8, 1, 0, 2];

for (let i = 0; i < myOtherArray.length; i++) {
    if (i % 4) {
        console.log('index :', i, 'valeur :', myOtherArray[i]);
    }
}

/* e. Créez et parcourez un tableau en sommant les éléments à leurs place
ex : [2,5,8,2] => [2, 7 (5+2), 15 (5+2+8), 17 (...)] */

let total = 0;
let arr = [2, 5, 8, 2];

for (i = 0; i < arr.length; i++) {
    total = arr[i] + total;

    //console.log(arr[i] += arr[i+1]);
    console.log(total)
}

//------------------ solution dans un tableau 

let arr = [2, 5, 8, 2];
let total = 0;


for (i = 0; i < arr.length; i++) {
    total += arr[i];
    arr2.push(total);
}

console.log(arr2);

//solution prof *****************************************************************

console.log('\n\n****** 3.E. ******');

let sumArray = [2, 5, 8, 2];
for (let i = 0; i < sumArray.length; i++) {
    if (i) {                                      //if i exist et n'est pas égal à zéro (pour garder le '2')
        sumArray[i] += sumArray[i - 1];           // additionne 5 à 2 puis 8 à 7 (5+2) etc..
    }
}
console.log('Tableau sommé', sumArray);


/* f.
Pareil que le précédent, sauf que vous avez un tableau de tableaux, une fois la
somme faites triez les par ordre décroissant
ex :
Tableau de départ : [[5, 2, 8], [12, 24, 9], [3, 1, 8]]
Tableaux avec sommes => [[5, 7, 15], [12, 36, 45], [3, 4, 12]]
Tableaux ordonnés par ordre décroissant => [[12, 36, 45], [5, 7, 15],[3, 4, 12]] */

let total = 0;
let temp = [];
let arr = [[5, 2, 8], [12, 24, 9], [3, 1, 8]]
let arr2 = [[], [], []]

for (i = 0; i < arr.length; i++) {
    total = 0;
    for (j = 0; j < arr[i].length; j++) {
        total += arr[i][j];
        //total = parseInt(total);
        arr2[i].push(total);
    }
}

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length - 1; j++) {

        if (arr2[j][0] < arr2[j + 1][0]) {
            temp = arr2[j];
            arr2[j] = arr2[j + 1];
            arr2[j + 1] = temp;
        }
    }
}

console.log(arr2);

//4. Tris

/* a. Améliorez le tri à bulle tel que vu précédemment : Si lors d’un tour entier il n’a
pas dû effectuer de “swap” alors arrêtez l’algorithme */

let myArray = [5, 3, 8, 1];
console.log('Unsorted', myArray);
for (let i = 0; i < myArray.length - 1; i++) {

    for (let j = 0; j < myArray.length - i - 1; j++) {
        //console.log('i:', i, 'j:', j);
        if (myArray[j] > myArray[j + 1]) {
            let temp = myArray[j];
            myArray[j] = myArray[j + 1];
            myArray[j + 1] = temp;
            //console.log('swap', myArray);
        } else
            break;
    }
}
console.log('Sorted', myArray);

/* b. Réalisez un tri (bulle / insertion / sélection) décroissant */

//------selection sort
let myArray = [5, 3, 8, 1];
let min = 0;
console.log('Unsorted', myArray);
for (let i = 0; i < myArray.length; i++) {
    min = i;

    for (let j = i + 1; j < myArray.length; j++) {
        if (myArray[j] > myArray[min]) {
            min = j;
        }
    }
    if (min !== i) {
        let temp = myArray[i];
        myArray[i] = myArray[min];
        myArray[min] = temp;

    }
}
console.log('Sorted', myArray);

//---------bubble sort 

let myArray = [5, 3, 8, 1];
console.log('Unsorted', myArray);
for (let i = 0; i < myArray.length - 1; i++) {

    for (let j = 0; j < myArray.length - i - 1; j++) {
        console.log('i:', i, 'j:', j);
        if (myArray[j] < myArray[j + 1]) {
            let temp = myArray[j];
            myArray[j] = myArray[j + 1];
            myArray[j + 1] = temp;
            console.log('swap', myArray);
        }
    }
}
console.log('Sorted', myArray);

//----insertionSort

let myArray = [5, 3, 8, 1];
console.log('Unsorted', myArray);
for (let i = 1; i < myArray.length; i++) {
    for (let j = i - 1; j > -1; j--) {
        if (myArray[j + 1] > myArray[j]) {
            let temp = myArray[j + 1];
            myArray[j + 1] = myArray[j];
            myArray[j] = temp;
        }
    }
};
console.log('Sorted', myArray);

//solution prof *****************************************************************

console.log('\n\n****** 4.B. ******');

let bubbleSortArray = [5, 3, 8, 1];
//tri à bulle
console.log('avant tri à bulle', bubbleSortArray);
for (let i = 0; i < bubbleSortArray.length; i++) {
    for (let j = 0; j < bubbleSortArray.length - i - 1; j++) {
        if (bubbleSortArray[j] < bubbleSortArray[j + 1]) {
            let temp = bubbleSortArray[j];
            bubbleSortArray[j] = bubbleSortArray[j + 1]
            bubbleSortArray[j + 1] = temp;
        }
    }
}
console.log('après tri à bulle', bubbleSortArray);

let insertSortArray = [5, 3, 8, 1];
//tri par insertion
console.log('avant tri par insertion', insertSortArray);
for (let i = 1; i < insertSortArray.length; i++) {
    for (let j = i - 1; j > -1; j--) {
        if (insertSortArray[j + 1] > insertSortArray[j]) {
            let temp = insertSortArray[j + 1];
            insertSortArray[j + 1] = insertSortArray[j];
            insertSortArray[j] = temp;
        }
    }
}
console.log('après tri par insertion', insertSortArray);

let selectSortArray = [5, 3, 8, 1];
//tri par sélection
console.log('avant tri par sélection', selectSortArray);
let max = 0;
for (let i = 0; i < selectSortArray.length; i++) {
    max = i;
    for (let j = i + 1; j < selectSortArray.length; j++) {
        if (selectSortArray[j] > selectSortArray[max]) {
            max = j;
        }
    }

    if (max !== i) {
        //swap
        let temp = selectSortArray[i];
        selectSortArray[i] = selectSortArray[max];
        selectSortArray[max] = temp;
    }
}
console.log('après tri par sélection', selectSortArray);

/* c. Permettez à l’utilisateur d’entrer des valeurs (nombres entiers) remplissant un
tableau, une fois que l’utilisateur est satisfait de ses entrées, triez le tableau
par ordre croissant */

let temp = 0;
let arr = [];
while (true) {
    let input = parseInt(prompt("Entrez une valeur dans le tableau, press enter to exit"));
    if (Number.isInteger(input)) {
        arr.push(input);
        console.log(arr)
    } else
        break;
}

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);


/* d. Créez un tableau d’entiers avec au moins 10 entrées, définissez ensuite une
variable “limite”, triez les N derniers éléments du tableau (N étant la limite)
Quel algorithme choisir et pourquoi ? Implémentez le code */

let limite;
while (!limite) {
    limite = parseInt(prompt('Encodez un valeur limite'))
    !Number.isInteger(limite) ? limite = parseInt(prompt('VOUS DEVEZ ENCODER UN NOMBRE UNIQUEMENT !!!')) : '';
}
console.log('limite :' + limite)

let arr = [9, 6, 3, 8, 5, 2, 7, 4, 1, 25];
let n = arr.length;
console.log('Unsorted', arr);

let len1 = limite, len2 = n - limite;
let arr1 = new Array(limite);
let arr2 = new Array(n - limite);

// Store the limite elements in an array
for (let i = 0; i < limite; i++)
    arr1[i] = arr[i];

// Store the remaining n-limite
// elements in an array
for (let i = limite; i < n; i++)
    arr2[i - limite] = arr[i];

// Sorting the array from limite to n places

let min = 0;
for (let i = 0; i < arr2.length; i++) {
    min = i;
    for (let j = i + 1; j < arr2.length; j++) {
        if (arr2[j] > arr2[min]) {
            min = j;
        }
    }
    if (min !== i) {
        //swap
        let temp = arr2[i];
        arr2[i] = arr2[min];
        arr2[min] = temp;
    }
}

// Storing the values in the final array arr
for (let i = 0; i < n; i++) {
    if (i < limite)
        arr[i] = arr1[i];
    else {
        arr[i] = arr2[len2 - 1];
        len2--;
    }
}

console.log('tableau non trié sur les ' + limite + ' dernier éléments : ', arr);

/* e. Même question que la précédente sauf qu’il faut trier les N premiers éléments */


//bubble
let arr = [9, 5, 6, 3, 2, 1, 7, 8, 4, 10];
let limite = 5;
console.log('Unsorted', arr);

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < limite; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log('Sorted on the first ' + limite + ' values ', arr);

//---------------------------------------- bubble
let myArray = [5, 3, 8, 1, 45, 2, 4, 6, 19, 18];
let limite = 5;
console.log('Unsorted', myArray);
for (let i = 0; i < myArray.length - 1; i++) {
    for (let j = limite - 1; j >= 0; j--) {
        console.log('i:', i, 'j:', j);
        if (myArray[j] > myArray[j + 1]) {
            let temp = myArray[j];
            myArray[j] = myArray[j + 1];
            myArray[j + 1] = temp;
            console.log('swap', myArray);
        }
    }
}
console.log('Sorted', myArray);
//--------------------------------------autre solution trier la moitié avec bubble sort
let myArray = [5, 3, 8, 1, 45, 2, 4, 6, 19, 18];
console.log('Unsorted', myArray);
for (let i = 0; i < myArray.length - 1; i++) {
    for (let j = 0; j < myArray.length / 2; j++) {
        console.log('i:', i, 'j:', j);
        if (myArray[j] > myArray[j + 1]) {
            let temp = myArray[j];
            myArray[j] = myArray[j + 1];
            myArray[j + 1] = temp;
            console.log('swap', myArray);
        }
    }
}
console.log('Sorted', myArray);

// ----------selection sort
let myArray = [5, 3, 8, 1];
let min = 0;
console.log('Unsorted', myArray);
for (let i = 0; i < myArray.length; i++) {
    min = i;

    //Trouver le plus petit dans la partie droite du tableau
    for (let j = i + 1; j < myArray.length; j++) {
        if (myArray[j] < myArray[min]) {
            min = j;
        }
    }

    //on ne remplace pas si le minimum est déjà le premier des unsorted
    if (min !== i) {
        //swap
        let temp = myArray[i];
        myArray[i] = myArray[min];
        myArray[min] = temp;

    }
}
console.log('Sorted', myArray);