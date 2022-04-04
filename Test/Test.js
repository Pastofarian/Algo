/*1.
Générer dynamiquement un objet avec clefs valeurs (valeur de type string ou int) en
fonction d’inputs utilisateurs
Ex:
//obj = {};
clef ? "name"
valeur ? "ben"
//obj = {name: "ben"}
clef ? "age"
valeur ? "29"
//obj = {name:"ben", age:29}
*/

//function isNumber(input) {
//    return !isNaN(parseFloat(input)) && !isNaN(input - 0)
//}
//console.log(isNumber(4566));
//console.log(isNumber(userPrompt()));


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





// let key1 = userPrompt('comme clé');
// let value1 = userPrompt('comme valeur pour ' + key1)
// let key2 = userPrompt();
// let value2 = userPrompt();


// let myObject = {
//     [key1]: value1,
//     [key2]: value2
// };

// console.log(myObject);












// var addToObject = function (obj, key, value, index) {

//     // Create a temp object and index variable
//     var temp = {};
//     var i = 0;

//     // Loop through the original object
//     for (var prop in obj) {
//         if (obj.hasOwnProperty(prop)) {

//             // If the indexes match, add the new item
//             if (i === index && key && value) {
//                 temp[key] = value;
//             }

//             // Add the current item in the loop to the temp obj
//             temp[prop] = obj[prop];

//             // Increase the count
//             i++;

//         }
//     }

//     // If no index, add to the end
//     if (!index && key && value) {
//         temp[key] = value;
//     }

//     return temp;

// };


//console.log(addToObject('t', 'key', 'value2'))