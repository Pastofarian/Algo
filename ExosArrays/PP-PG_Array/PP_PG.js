/*Bouclez sur un tableau d’entiers et trouvez le plus petit et le plus grand nombre
Ex : [2, 24, 8, 12, 1, 44, 7]
=> pp = 1; PG = 44

Boucler sur le tableau 
for ( let i = 0; i < myArray.length; i++ ) {
    console.log(myArray[i]);
}*/


let myArray = [2, 24, 8, 12, 1, 44, 7];
let pp = 0;
let pg = 0;

for(let i = 0; i < myArray.length; i++) {
    
    if(pp == 0 && pg == 0) {
        pp = myArray[i];
        pg = myArray[i];
    }
    else if(myArray[i] < pp) {
        pp = myArray[i];
    }
    else if(myArray[i] > pg) {
        pg = myArray[i];
    }
}
console.log(pp, pg);

//correction

let myArray = [2, 24, 8, 12, 1, 44, 7];
let pp = myArray[0]; //assigné à 2 dans ce cas
let pg = myArray[0]; //assigné à 2 dans ce cas

for(let i = 1; i < myArray.length; i++) { // commence à 24 comme l'item "0" est déjà passé en revue.
    
    if(myArray[i] < pp) {
        pp = myArray[i];
    }
    if(myArray[i] > pg) {  // ou else if aussi correct
        pg = myArray[i];
    }
}
console.log(pp, pg);