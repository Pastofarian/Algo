
/* Réalisez le code permettant de trouver le nombre d'occurence d'un nombre entier fourni par l'utilisateur dans un tableau

Ex : 
tableau = [4,4,2,1]
Valeur fournie par l'utilsateur = 4;
=> Nb occurences de 4 est de 2
*/

let NbrOccurence = 0;
let myArray = [4,4,2,1];
let input;

while(isNaN(input)) {
    input = prompt("Entrez un nombre");
        for(let i = 0; i < myArray.length; i++) {
            if(input == myArray[i]) {
                NbrOccurence++;
            }
        }
console.log("le chiffre ", input, " apparait ", NbrOccurence, " fois dans le tableau ", myArray);
}


/* Solution Benjamin

// Ex : 
// tableau = [4,4,2,1]
// Valeur fournie par l'utilsateur = 4;
// => Nb occurences de 4 est de 2


let nbUser = 0;
let occurence = 0;
let tab=[2,4,4,2,5,3,3,4,6,7,9,8];


nbUser = parseInt(prompt('encodez une note comprise entre 0 et 10'));
!Number.isInteger(nbUser) ? nbUser = parseInt(prompt('ENCODEZ NOMBRE ET PAS UNE LETTRE !!!')):tab.push(nbUser);

for (let i = 0; i < tab.length; i++) {
    tab[i] == nbUser ? occurence ++ : '';
}

alert("le nombre d'occurence dans le tableau est de : " + occurence);
*/










