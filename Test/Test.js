let myArray = [5, 3, 8, 1];
let min = 0;
console.log('Unsorted', myArray);
for (let i = 0; i < myArray.length; i++) {
    min = i;
    console.log('myArray[i]', myArray[i])
    console.log('myArray[min]', myArray[min])
    //Trouver le plus petit dans la partie droite du tableau
    for (let j = i + 1; j < myArray.length; j++) {
        console.log('myArray[j]', myArray[j])
        if (myArray[j] < myArray[min]) {
            min = j;
            console.log('index min', min, 'valeur min-->', myArray[min]);

        }
    }

    //on ne remplace pas si le minimum est déjà le premier des unsorted
    if (min !== i) {
        //swap
        let temp = myArray[i];
        myArray[i] = myArray[min];
        myArray[min] = temp;

    }
    console.log(myArray)
}
console.log('Sorted', myArray);