/*La question 2 de l’interro (pp pg)*/ 
//Améliorez le code précédent pour y intégrer la somme des nombres demandés ainsi qu’afficher 
//la moyenne

let pp = 0;
let pg = 0;
let input = 0;
let i = 0;
let total = 0;

do {
    input = parseInt(prompt("Entrez un nombre, 0 pour arreter"));
    
    if(input != 0) {
        total += input;
        i++;
    } 
    if(pp == 0 && pg == 0){ //pp et pg sont assigné = 0 au début. Il faut assigner le premier input au deux (pp et pg) au premier tour sinon pp resterait toujours à zéro.
        pp = input;
        pg = input;
    }
    if(input < pp) {
        pp = input;
        }
        else if(input > pg) {
            pg = input;
        }
} while(input != 0) {

}
console.log("le nombre le plus petit est ", pp, " et le nombre le plus grand est ", pg, "la moyenne est ", total/i," sur ", total);

//V1 => While
/*
let nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
let pp = nombre;
let pg = nombre;

while (nombre != 0) {
  if (pp > nombre) {
    pp = nombre;
  }
  if (pg < nombre) {
    pg = nombre;
  }
  console.log('so far', pp, pg);
  nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
}

console.log('pp', pp, 'pg', pg);

*/

//V2 => Do While
/*
let pp = 0;
let pg = 0;
let nombre = 0;

do {
  nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
  if (pp == 0 && pg == 0 && nombre != 0) {
    pp = nombre;
    pg = nombre;
  } else if (nombre != 0) {
    if (pp > nombre) {
      pp = nombre;
    } else if (pg < nombre) {
      pg = nombre;
    }
  }
} while (nombre != 0);
console.log('pp', pp, 'pg', pg);
*/


//V3 => Utilisation de ternaires
/*
let pp = 0, pg = 0, nombre = 0;
do {
  nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
  pp = !pp && nombre ? nombre : pp && nombre && pp > nombre ? nombre : pp;
  pg = !pg && nombre ? nombre : pg && nombre && pg < nombre ? nombre : pg;
} while (nombre);
console.log('pp', pp, 'pg', pg);
*/



//V2 Avec somme et moyenne => Do While

/* let pp = 0;
let pg = 0;
let nombre = 0;
let somme = 0;
let cpt = 0;

do {
  nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
  
  if (nombre != 0) {
    somme += nombre;
    cpt++;
    
    if (pp == 0 && pg == 0) {
      pp = nombre;
      pg = nombre;
    }
    
    if (pp > nombre) {
      pp = nombre;
    } else if (pg < nombre) {
      pg = nombre;
    }
  }
} while (nombre != 0);
console.log('pp', pp, 'pg', pg, 'la somme est', somme, 'la moyenne est', somme/cpt);
 */



