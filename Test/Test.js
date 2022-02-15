/*Remplacez dans le tableau de départ :
Les valeurs aux indexs multiples de 3 par “coucou”
Les valeurs aux indexs multiples de 5 par “hibou”
Tableau de départ :
let myArray = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5] ;Point bonus : 
Permettez à l’utilisateur de choisir les multiples à modifier (au lieu de 3
et 5)*/

let myArray = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 59];
let input1 = prompt("Entrez une valeur pour être remplacer par coucou")
let input2 = prompt("Entrez une valeur pour être remplacer par hell yeah !")

for (let i = 0; i < myArray.length; i++) {

    if (i % input1 == 0) {
        myArray[i] = "coucou";
    }
    if (i % input2 == 0) {
        myArray[i] = " hell yeah !";
    }
}
console.log(myArray);