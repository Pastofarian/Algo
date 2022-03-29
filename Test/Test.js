/*4. Réalisez une fonction qui calcule combien de fois une suite de nombre donné est présent dans
un tableau donné et renvoie cette valeur

let num = [9, 40, 2]
let total = 0;
let myAr = [5, 3, 8, 2, 5, 8, 9, 40, 2, 2, 8, 9, 40, 2];
let index = 0;


for (let i = 0; i < myAr.length; i++) {
    // console.log(num[i]);
    // console.log(myAr[j]);
    if (num[0] == myAr[i]) {
        index = i;
        total++;
        for (let j = i; j < num.length; j++) {
            if (num[1] == myAr[j]) {
                index = j;
                total++;
                console.log(index);
            }
        }
    }
}
console.log(total);
*/

//1. Réalisez une fonction récursive permettant de calculer la factorielle d’un nombre
//(factorielle de 5 = 5*4*3*2*1, factorielle de 7 = 7*6*5*4*3*2*1 etc)

// let j = 7
// let r = 1
// for (let i = 1; i <= j; i++) {
//     r = r * i
//     console.log(r);
// }

function factorial(x) {

    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

let input = prompt('Enter a positive number: ');

if (input >= 0) {
    let result = factorial(input);
    console.log('The factorial of ' + input + ' is ' + result);
}
else {
    console.log('Enter a positive number.');
}