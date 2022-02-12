/* d. Créez un tableau d’entiers avec au moins 10 entrées, définissez ensuite une
variable “limite”, triez les N derniers éléments du tableau (N étant la limite)
Quel algorithme choisir et pourquoi ? Implémentez le code */
/* 
let arr = [9, 5, 6, 3, 2, 1, 7, 8, 4, 10];
let limite = 5;

let min = 0;

for (let i = 0; i < arr.length; i++) {
    min = i;

    //Trouver le plus petit dans la partie droite du tableau
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    }

    //on ne remplace pas si le minimum est déjà le premier des unsorted
    if (min !== i) {
        //swap
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;

    }
}
console.log('Sorted', arr); */

let arr = [9, 5, 6, 3, 2, 1, 7, 8, 4, 10];
let limite = 5;
console.log('Unsorted', arr);
for (i = arr.length - 1; i > limite; i--) {
    for (let j = 0; j > arr.length; j++) {
        console.log('i:', i, 'j:', j);
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            console.log('swap', arr);
        }
    }
}
console.log('Sorted', arr);