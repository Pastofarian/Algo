let myArray1 = [1, 3, 5, "banana", 8, 9, 10, 9, 8, 7, 6, 5, "tictac", "toc", 1, 2];
let myArray2 = [1, 3, 5, "banana", 7, "melon", 10, 9, 8, 7, 6, 5, "tictac", "tac", 1, 2];

let count1 = [];
let count2 = [];

for(let i = 0; i < myArray1.length; i++) {
    if(myArray1[i] == myArray2[i]) {
      count1.push(i);
      //console.log("count1",count1);
    } else {
      count2.push(i);
    }
} 
console.log("count1",count1); // un tableau avec les index des nombres identitiques dans les deux tableaux
console.log("count2",count2); // un tableau avec les index des nombres pas identitiques 



// Autre solution mais pas possible pour comparer de très grand tableau.


/*
let myArray1 = [1, 3, 5, "banana", 8, 9, 10, 9, 8, 7, 6, 5, "tictac"];
let myArray2 = [1, 3, 5, "banana", 7, "melon", 10, 9, 8, 7, 6, 5, "tictac"];

let count1 = [];
let count2 = [];
let count3 = [];

for(let i = 0; i < myArray1.length; i++) {
    if(myArray1[i] == myArray2[i]) {
      count1.push(i);
    } else {
      break;  // je sort de la boucle si les chiffres ne sont pas les même
    }
} 

for(let i = 0; i < myArray1.length; i++) {
  if(myArray1[i] != myArray2[i]) {  
    count2.push(i);   //je crée un tableau avec les chiffres différents
  } 
}
let j = count2.pop();  // je crée un variable avec le dernier chiffre différent

for(let i = j+1; i < myArray1.length; i++) { //je recommence la boucle à partir du dernier chiffre différent + 1
  if(myArray1[i] == myArray2[i]) {
    count3.push(i);
  } else {
    break;
  }
}
console.log(count1); 
console.log(count2); 
console.log(count3); 
*/