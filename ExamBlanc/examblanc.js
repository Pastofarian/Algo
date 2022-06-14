// 1. Réalisez le code nécessaire pour détecter le plus petit nombre, le plus grand, les nombres
// pairs et impairs dans un tableau. Renvoyez les résultats sous forme de dictionnaire
// Entrée : [1, 4, 8, 12, 9]
// Résultat : {pluspetit : 1, plusgrand: 12, pairs: [4,8,12], impairs: [1, 9]}
let download_btn = document.querySelector('button.download');
download_btn.addEventListener('click', download);

let array = [1, 4, 8, 12, 9];
let pp = 0;
let pg = 0;
let even = [];
let odd = [];
let myDicttt = {
    pluspetit: pp,
    plusgrand: pg,
    pairs: even,
    impairs: odd,
}

for (let i = 0; i < array.length; i++) {
    let nombre = array[i];
    if (pp == 0 && pg == 0 && nombre != 0) {
        pp = nombre;
        pg = nombre;
    }

    if (pp > nombre) {
        pp = nombre;
    }
    if (pg < nombre) {
        pg = nombre;
    }
    if (nombre % 2 === 0) {
        even.push(nombre);
    }
    if (nombre % 2 === 1) {
        odd.push(nombre);
    }
    console.log('so far', pp, pg);
}

console.log('Le plus petit nombre est : ', pp, 'Le plus grand nombre est : ', pg, 'pairs ', even, 'impairs', odd);

console.log(myDicttt);

function generate(text, name, type = 'text/plain') {
    let link_to_download = document.querySelector("a#download");
    let file = new Blob([text], { type: type });
    link_to_download.href = URL.createObjectURL(file);
    link_to_download.download = name;
}

//appellée au click du bouton "Créer le fichier"
function download() {
    generate(pg, 'test.txt', 'text/plain');
}

// 2. Réalisez le code nécessaire pour trier un tableau d’entiers envoyés par l’utilisateur par une
// balise input avec un tri à bulle ou insertion ou sélection. Précisez celui utilisé. Une fois le
// tableau trié, affichez le tableau trié ainsi que la somme des entiers du tableau à l’utilisateur
// dans une balise de votre choix.

let arr = [];
let input1 = document.getElementById("input1");
let button1 = document.getElementById("button1");
let myParagraph1 = document.getElementById("p1");
let myParagraph2 = document.getElementById("p2");

button1.addEventListener("click", sort);
input1.addEventListener("keypress", addInput);

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
    let total = addNumbers(arr);
    display(total);
    console.log(total);
    return arr;
}
console.log('arr', arr);

function display(total) {
    myParagraph1.innerHTML = arr;
    myParagraph2.innerHTML = total;
}

function addInput(enter) {
    if (enter.key === "Enter") {
        arr.push(parseInt(input1.value));
        input1.value = "";
        console.log(arr)
    }
}

function addNumbers(arr) {
    let total = 0;
    for (i = 0; i < arr.length; i++) {
        total = arr[i] + total;
    }
    return total;
}

// 3. Réalisez le code nécessaire pour inverser un tableau, vous n’avez pas le droit d’utiliser
// array.reverse(), ni array.unshift(), ni array.push() ni le droit de créer un autre tableau.

let arr = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr.length / 2; i++) {
    // arr2.push(arr[i]);
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
}
console.log(arr);

// 4. Réalisez le code nécessaire pour trouver et compter toutes les occurrences d’une chaîne de caractère dans une autre chaîne de caractères. Vous n’avez pas le droit d’utiliser les
// fonctions split(), contains(), indexOf() et match().
// Entrée :[‘un grand hibou gris’], “gr”
// Résultat: 2
let occurence = 0;
let count = 0;
let search = 'gr';
let input = 'un grand hibou gris gr grgrgr';
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < search.length; j++) {
        //console.log(search.length);
        //console.log(input[i]);
        if (search[j] === input[i]) {
            count++;
        }
        if (count == search.length) {
            occurence++;
            count = 0;
        }
    }
}
console.log(occurence);