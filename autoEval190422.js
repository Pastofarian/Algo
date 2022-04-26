/*
Réalisez une fonction permettant de comparer 2 nombres (a et b) et de retourner a*b si les
2 sont impairs, a-b si seulement l’un des 2 est impair et de renvoyer a+b si les 2 sont pairs
*/

function input(input) {
    input = parseInt(prompt('Enter a positive number: '));
    return input;
}

function isPair(a, b) {
    let result = 0;
    if (a % 2 == 1 && b % 2 == 1) {
        return a * b;
    }
    else if (a % 2 == 1 || b % 2 == 1) {
        return a - b;
    }
    else if (a % 2 == 0 && b % 2 == 0) {
        return a + b;
    }
}

console.log(isPair(input(), input()));

/*
Réalisez un tri (au choix) permettant de trier par ordre croissant des longueurs de chaînes
de caractères
Ex : [‘abc’, ‘a’, ‘ab’, ‘abcdef’] => [‘a’, ‘ab’, ‘abc’, ‘abcdef’]
- Avancé : si 2 chaînes sont de longueurs égales, triez les par ordre alphabétique
*/

let arr = ['abc', 'abd', 'ab', 'abcdef', 'abe', 'abf', 'ac', 'ad'];


function bubbleSort(arr) {

    //console.log('Unsorted', arr);
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {
            //console.log('i:', i, 'j:', j);
            if (arr[j].length > arr[j + 1].length) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                //console.log('swap', arr);
            }
            if (arr[j].length = arr[j + 1].length) {
                for (let k = 0; k < arr.length; k++) {
                    for (let l = 0; l < arr.length; l++) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));

/*Réalisez le code nécessaire pour faire de manière récursive le calcul d’une factorielle (N!)*/

function factorial(x) {

    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}
function input(input) {
    input = prompt('Enter a positive number: ');
    return input;
}

console.log(factorial(input()));

/*Réalisez le code nécessaire pour parcourir toutes les clefs d’un objet
- Avancé : parcourir récursivement si une clef contient un objet ou un array*/

let myObj = {
    name: "Christophe",
    results: {
        interro: [{
            date: "19 avril 2022",
            result: 20
        }, {
            date: "exam fin juin",
            result: 19
        }]
    }
}


function recursiveWalk(myObj, parse) {
    for (let key in myObj) {
        if (typeof myObj[key] === 'object' && myObj[key] !== null) {
            recursiveWalk(myObj[key], parse)
        } else if (myObj.hasOwnProperty(key)) {
            parse(key, myObj[key])
        }
    }
}

recursiveWalk(myObj, function (key, prop) {
    console.log(key + ': ' + prop)
})


