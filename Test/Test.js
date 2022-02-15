/* d. Créez un tableau d’entiers avec au moins 10 entrées, définissez ensuite une
variable “limite”, triez les N derniers éléments du tableau (N étant la limite)
Quel algorithme choisir et pourquoi ? Implémentez le code */


let arr = [2, 5, 8, 2];
let total = 0;
let arr2 = [];

for (i = 0; i < arr.length; i++) {
    total += arr[i];
    arr2.push(total);
}

console.log(arr2);