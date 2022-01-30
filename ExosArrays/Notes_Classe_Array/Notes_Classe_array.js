/* 2. 
En repartant de l’exercice “notes de la classe” (interrogation Q5)

Réécrivez le code nécessaire en utilisant un tableau pour stocker vos différentes notes, 
calculer ensuite la moyenne / le nombre de 0 / le nombre 20 uniquement à la fin en bouclant sur votre tableau
Ajouter une note 
myArray.push(myGrade);
Boucler sur le tableau 
for ( let i = 0; i < myGrade.length; i++ ) { //code ici } 
*/ 

let myGrade = [];
let note0 = 0;
let note20 = 0;
let total = 0;

while(true) {
    let note = parseInt(prompt("Entrez une note sur 20 ou enter pour arrêter"));

    if(note < 21) {
        myGrade.push(note);
    } else {
        break;
    }
    total += note;
}
console.log(myGrade);

for ( let i = 0; i < myGrade.length; i++ ) { 
    if(myGrade[i] == 0) {
        note0++;
    }
    if(myGrade[i]== 20) {
        note20++;
    }
 } 
 
alert("la moyenne est de "+ (total/myGrade.length)+ "/20. \rIl y a eu '"+ note20+ "' 20/20 \rIl y a eu '"+ note0+ "' 0/20");