/*1. En partant du tableau suivant, réalisez une fonction permettant de récupérer la
moyenne générale:
=> “La moyenne générale des X élèves est de Y”*/

let persons = [
    {
        firstname: "John",
        lastname: "Doe",
        average: 16
    }, {
        firstname: "Marie",
        lastname: "Smith",
        average: 14
    }, {
        firstname: "Paul",
        lastname: "Jones",
        average: 12
    }, {
        firstname: "Jeanne",
        lastname: "Eleou",
        average: 8
    }
];

function average(persons) {
    let total = 0;
    let count = 0;

    for (let i = 0; i < persons.length; i++) {
        //console.log(persons[i].average)
        total = total + persons[i].average;
        count++;
    };

    return total / count;

}

let length = persons.length;

console.log("La moyenne générale des " + length + " élèves est de " + average(persons));

/*********************************************************************************** */

/*2. En partant de l’objet suivant, réalisez une fonction permettant de récupérer la
moyenne générale:
=> "La moyenne générale des X élèves est de Y"*/

let persons = {
    1: {
        firstname: "John",
        lastname: "Doe",
        average: 16
    },
    2: {
        firstname: "Marie",
        lastname: "Smith",
        average: 14
    },
    3: {
        firstname: "Paul",
        lastname: "Jones", average: 12
    },
    4: {
        firstname: "Jeanne",
        lastname: "Eleou",
        average: 8
    }
}

function nbr(persons) {
    let count = 0;
    for (let key in persons) {
        count++;
    }
    return count;
}
function avg(persons) {
    let total = 0;
    for (let key in persons) {
        console.log(persons[key].average);
        total = total + persons[key].average;
    };
    return total / nbr(persons);
}


console.log("La moyenne générale des " + nbr(persons) + " élèves est de " + avg(persons));

/******************************************************************************************* */

/*3. Réalisez un tri (à bulle / insertion / sélection) permettant de trier le tableau de
l’exercice 1 par ordre de moyenne décroissant*/

let persons = [
    {
        firstname: "John",
        lastname: "Doe",
        average: 16
    }, {
        firstname: "Marie",
        lastname: "Smith",
        average: 14
    }, {
        firstname: "Paul",
        lastname: "Jones",
        average: 12
    }, {
        firstname: "Jeanne",
        lastname: "Eleou",
        average: 8
    }
];
function walkAverage(persons) {
    let arr = [];

    for (let i = 0; i < persons.length; i++) {
        //console.log(persons[i].average);
        arr.push(persons[i].average);
    };
    return arr;
}

//console.log(average());

/*****************Selection ******************************************************/

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        //console.log(minIndex);
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    } return arr;
};

console.log(selectionSort(walkAverage(persons)));

/*******************Bubble *******************************************************/

function bubbleSort(arr) {

    //console.log('Unsorted', arr);
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {
            //console.log('i:', i, 'j:', j);
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                //console.log('swap', arr);
            }
        }
    }
    return arr;
}

console.log(bubbleSort(walkAverage(persons)));

/*********************Insertion *****************************************************/

function insertionSort(arr) {

    //console.log('Unsorted', arr);
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j > -1; j--) {
            if (arr[j + 1] > arr[j]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    };
    return arr;
}
console.log(insertionSort(walkAverage(persons)));

/************************************************************************************************* */

//function pas utilisée mais peut être utile//////////////////////////////////////////////////////
function isNumber(input) {
    return !isNaN(parseFloat(input)) && !isNaN(input - 0)
}
//console.log(isNumber(4566));
//console.log(isNumber(userPrompt()));
///////////////////////////////////////////////////////////////////////////////////////////////

/*Exercices avancés
1.
Générer dynamiquement un objet avec clefs valeurs (valeur de type string ou int) en
fonction d’inputs utilisateurs*/

function userPrompt(type) {
    let input;
    let myArray = [];
    while (true) {
        if (input == 'q') {
            myArray.pop();
            break;
        } else {
            input = prompt("Entrez " + type + " dans l'objet ou tapez q pour quitter");
            myArray.push(input);
        }
    }
    return myArray;
}

let key = userPrompt('une clé');
let value = userPrompt('une valeur');
let newObj = {};
for (let i = 0; i < key.length; i++) {
    newObj[key[i]] = value[i];
}
console.log(newObj);


/********************************************************************************************** */

/*2. Parcourez l'entièreté des clefs d’un objet de manière récursive
Ex d’objet:*/
let myObj = {
    name: "ben",
    results: {
        interro: [{
            date: "22 mars 2022",
            result: 8
        }, {
            date: "12 avril 2022",
            result: 9
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

// function nestedLoop(myObj) {
//     const res = {};
//     function recurse(myObj, current) {
//         for (const key in myObj) {
//             let value = myObj[key];
//             if (value != undefined) {
//                 if (value && typeof value === 'object') {
//                     recurse(value, key);
//                 } else {
//                     // Do your stuff here to var value
//                     res[key] = value;
//                 }
//             }
//         }
//     }
//     recurse(myObj);
//     return res;
// }

// console.log(nestedLoop(myObj));