console.log("Boucler sur les entiers compris entre 2 valeurs données par l’utilisateur dans l’ordre (si l’utilisateur donne 25 puis 10, bouclez en décrémentation 25, 24, 23, 22 etc)")

let x = 0;
let y = 0;

x = prompt("Enter an integer");
y = prompt("Enter an integer"); 

if(x < y) {
  while(x < y) { 
 x++;
console.log(x);
 }
} else if(x > y) {
  while(x > y) {
    x--;
    console.log(x);
  }
} else {
    console.log("The numbers are equals");
}