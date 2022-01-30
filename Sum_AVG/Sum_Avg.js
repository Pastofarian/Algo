console.log('Améliorez le code précédent pour y intégrer la somme des nombres demandés ainsi qu’afficher la moyenne');

let pp = 0;
let pg = 0;
let nb = 0;
let total = 0;
let i = 0;
let avg = 0;

nb = prompt("Veuillez entrer un nombre");
nb = parseInt(nb);

while(nb != 0) {
  total = total + nb;
  total = parseInt(total);
    
  if(pp==0 && pg==0) {
    pp = nb
    pg = nb
  }
  else if(nb<pp) {
    pp = nb
  } 
  else {
    pg = nb
  }
  i++;

  nb = prompt("Veuillez entrer un nombre");
  nb = parseInt(nb);
  avg = total/i;
  avg = parseInt(avg);
}
console.log(pp, pg, total, avg);