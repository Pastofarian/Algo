/* a. Améliorez le tri à bulle tel que vu précédemment : Si lors d’un tour entier il n’a
pas dû effectuer de “swap” alors arrêtez l’algorithme */

let myArray = [5, 3, 8, 1, 7, 6, 9];
console.log('Unsorted', myArray);
for (let i = 0; i < myArray.length - 1; i++) {

    for (let j = 0; j < myArray.length - i - 1; j++) {
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