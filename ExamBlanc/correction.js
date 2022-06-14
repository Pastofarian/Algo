// 1. Réalisez le code nécessaire pour détecter le plus petit nombre, le plus grand, les nombres
// pairs et impairs dans un tableau. Renvoyez les résultats sous forme de dictionnaire
// Entrée : [1, 4, 8, 12, 9]
// Résultat : {pluspetit : 1, plusgrand: 12, pairs: [4,8,12], impairs: [1, 9]}

function array_info(array) {
    //je génère mon dict de base
    let data = {
        pluspetit: "",
        plusgrand: "",
        pairs: [],
        impairs: []
    };

    //boucle sur l'ensemble du tableau
    for (let i = 0; i < array.length; i++) {
        //déterminer si pairs ou impairs
        if (array[i] % 2 == 0) {
            //j'ajoute au tableau de pairs
            data.pairs.push(array[i]);
        } else {
            //sinon au tableau d'impairs
            data.impairs.push(array[i]);
        }
        //si on est au premier index : on initialise le pp et pg
        if (i == 0) {
            data.pluspetit = array[i];
            data.plusgrand = array[i];
        } else {
            //on vérif si la valeur que l'on parcourt actuellement est + grande que celle qu'on avait stocké
            if (array[i] > data.plusgrand) {
                data.plusgrand = array[i];
                //pareil mais pour la plus petite
            } else if (array[i] < data.pluspetit) {
                data.pluspetit = array[i];
            }
        }
    }
    return data;
}

let my_super_array = [8, 9, 1, 5, 7];
console.log("info sur le tableau", array_info(my_super_array));

// 2. Réalisez le code nécessaire pour trier un tableau d’entiers envoyés par l’utilisateur par une
// balise input avec un tri à bulle ou insertion ou sélection. Précisez celui utilisé. Une fois le
// tableau trié, affichez le tableau trié ainsi que la somme des entiers du tableau à l’utilisateur
// dans une balise de votre choix.

//je définis mes différents sélecteurs
let input_sort = document.querySelector("#sort-input");
let button_sort = document.querySelector("#add-to-sort");
let submit_sort = document.querySelector("#submit-sort");
let display_sort = document.querySelector("#sort-display");
let arr = [];

//je crée mes event listeners
button_sort.addEventListener("click", add_to_sort);
submit_sort.addEventListener("click", sort_array);

function add_to_sort() {
    //j'ajoute à mon tableau la valeur de l'input parsé en Int
    let value = parseInt(input_sort.value);
    arr.push(value);
}

function sort_array() {
    console.log(arr);
    //on trie
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return display_array(arr);
}

function display_array(arr) {
    //fonction d'affichage, qui va calculer aussi la somme
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    display_sort.innerHTML =
        "Somme : " + sum + " / Tableau trié : " + arr.toString();
}

// 3. Réalisez le code nécessaire pour inverser un tableau, vous n’avez pas le droit d’utiliser
// array.reverse(), ni array.unshift(), ni array.push() ni le droit de créer un autre tableau.

function reverse_array(array) {
    //je parcours le tableau de 0 à la moitié uniquement
    for (let i = 0; i < array.length / 2; i++) {
        let tmp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tmp;
    }
    return array;
}

let my_array_to_reverse = [5, 8, 1, 9, 12];
console.log("tableau inversé", reverse_array(my_array_to_reverse));

// 4. Réalisez le code nécessaire pour trouver et compter toutes les occurrences d’une chaîne de caractère dans une autre chaîne de caractères. Vous n’avez pas le droit d’utiliser les
// fonctions split(), contains(), indexOf() et match().
// Entrée :[‘un grand hibou gris’], “gr”
// Résultat: 2

function search_in_string(str, search) {
    let occurence = 0; //je mets mon nombre d'occurence à 0
    for (let i = 0; i < str.length; i++) {
        //je parcours ma chaine de charactère
        if (str[i] == search[0]) {
            //si le char parcouru actuellement correspond au 1er char de ma variable search alors je dois vérifier si les suivants fonctionneront aussi
            let deep = true; //je déclare un booleen qui me permettra de vérifier si la chaine search a été entierement trouvée
            for (let j = 1; j < search.length; j++) {
                if (str[i + j] != search[j]) {
                    deep = false;
                    break;
                }
            }
            if (deep) {
                occurence++;
            }
        }
    }
    return occurence;
}

let my_string = "un grand grand hibou est gris";
let my_search = "grand";
console.log("occurences:", search_in_string(my_string, my_search));

// 5. Permettez à l'utilisateur d’entrer un nombre via un formulaire, une fois le nombre validé (clic
//     d’un bouton) déterminer si le nombre est un nombre d’Harshad et lui afficher la réponse.
//     NB : un nombre d’Harshad est divisible par la somme de ses chiffres en restant un nombre
//     entier 20 => 20 / (2+ 0) = 10, 21 => 21 / (2+1) = 7, 48 => 48 / (4 + 8) = 4, etc
//     Attention : Le calcul du dividende (2 + 0) doit être fait de manière récursive
//     Indice : (Math.floor(x) => vous renvoie l’entier inférieur le plus proche de x)
//     Bonus : Déterminez ensuite si le résultat de la division est elle-même un nombre d’Harshad.
//     Renvoyez dans ce cas à l’utilisateur la profondeur d’Harshad déterminée
//     Ex :
//     6804 / (6+8+0+4) = 378
//     378 / (3+7+8) = 21
//     21 / (2 + 1) = 7
//     7 / (7) = 1
//     Résultat : 6804 est un nombre d’Harshad multiple 4 (MH-4)

//je définis mes sélecteurs
let harshad_input = document.querySelector("#harshad-input");
let harshad_submit = document.querySelector("#harshad-test");
let harshad_display = document.querySelector("#harshad-display");

//j'ajoute mon event listener
harshad_submit.addEventListener("click", harshad);

function harshad() {
    harshad_display.innerHTML = ""; //je vide la balise de son contenu
    let number_as_string = harshad_input.value; //je récup la valeur soumise par l'utilisateur
    let number = parseInt(number_as_string); //je la convertis en int
    //let divide = sum_digits(number_as_string); //version non récursive basée sur la chaine de caractère
    let divide = sum_digits_recurs(number); //version récursive
    if (try_harshad(number, divide)) {
        //si je peux le diviser et garder un nombre entier
        harshad_display.innerHTML =
            harshad_display.innerHTML +
            "<br>" +
            number +
            "/" +
            divide +
            "=" +
            number / divide;
    } else {
        harshad_display.innerHTML =
            harshad_display.innerHTML +
            "<br>" +
            number +
            "/" +
            divide +
            " n'est pas un nombre d'harshad";
    }
}

function sum_digits(str) {
    //version non recursive, je parcours la chaine de caractère 1 chiffre par 1 chiffre et je l'aditione
    let divide = 0;
    for (let i = 0; i < str.length; i++) {
        divide += parseInt(str[i]);
    }
    return divide;
}

function sum_digits_recurs(number) {
    if (number == 0) {
        return 0;
    }
    let restant = number % 10;
    let nombre_suivant = Math.floor(number / 10);
    return restant + sum_digits_recurs(nombre_suivant);
}

function try_harshad(number, divide) {
    console.log("number", number, "divide", divide);
    if (Number.isInteger(number / divide)) {
        //je vérifie si la division donne un nombre entier
        return number / divide; //si oui je renvoie le résultat de la division
    }
    return false; //si non je renvoie false
}
