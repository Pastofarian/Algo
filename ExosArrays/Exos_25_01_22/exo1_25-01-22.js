/* 1.Réalisez un programme permettant de détecter les occurrences d’un élément
demandé dans un tableau
Exemple :
[5, ‘banana’, 12, 5, 3]
Entrée utilisateur : 5
=> 5 se trouve à 2 reprises dans le tableau */

let myArray = [5, "banana", 12, 5, 3]
let input = prompt("Entrez une donnée à chercher dans le tableau");
let count = 0

for(let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
  if(myArray[i] == input) {
    count++;
  }
}
alert(input + " se trouve " + count + " fois dans le tableau" );



/* 2. Réalisez un programme permettant de détecter l’index d’un élément demandé dans
un tableau, renvoyez un message à l’utilisateur si l’élément n’est pas présent dans le
tableau
Vous ne pouvez utiliser indexOf
Exemple :
[5, ‘banana’, 12, 5, 3]
Entrée utilisateur : 5
=> 5 se trouve à l’index 0 du tableau */

let myArray = [5, "banana", 12, 5, 3];
let input = prompt("Entrez une donnée à chercher dans le tableau");
let count = 0;
let index;

for(let i = 0; i < myArray.length; i++) {
  //console.log(myArray[i]);
  if(myArray[i] == input) {
    count++;
    index = i;
    console.log(index);
  } 
  else if(myArray[i] != input) {
    console.log(input + " ne se trouve pas dans le tableau")
  }

}
alert(input + " se trouve " + count + " fois dans le tableau et se trouve à l'index " + index + " du tableau" );

/* 4. Réalisez un programme capable de fusionner 2 tableaux
4.1 En ajoutant le contenu du 2ème tableau APRÈS celui du premier

Vous ne pouvez pas utiliser Array.concat(), uniquement push() et unshift()
Exemple:
[5, 3, 1]
[8, 2, 7]
=> 4.1 [5,3,1,8,2,7]
=> 4.2 [8,2,7,5,3,1] */

let myArray1 = [5, 8, 1];
let myArray2 = [8, 2, 7, "banana"];
for(let i = 0; i < myArray2.length; i++) {
    myArray1.push(myArray2[i]);  
}
console.log(myArray1);

// 4.2 En ajoutant le contenu du 2ème tableau AVANT celui du premier

let myArray1 = [5, 3, 1];
let myArray2 = [8, 2, 7, "banana"];
let count;
for(let i = myArray2.length -1; i >= 0; i--) {
    myArray1.unshift(myArray2[i]);  
}
console.log(myArray1);


//5. Réalisez un programme permettant d’inverser les valeurs du tableau
//Vous ne pouvez pas utiliser Array.reverse()
//Exemple :
//[1, 8, 5, 3]
//=> [3, 5, 8, 1]

let myArray1 = [5, 8, 1];
let myArray2 = [];
for(let i = myArray1.length -1; i >= 0; i--) {
    myArray2.push(myArray1[i]);  
}
console.log(myArray2);


/*6. Réalisez un programme qui enlève tous les items présents plus d’une fois et les
remplacent par “Modifié”
Exemple :
[1, 5, 9, ‘banana’, 8, 3, 5]
=> [1, ‘Modifié’, 9, ‘banana’, 8, 3, ‘Modifié’] */

let myArray = [1, 5, 9, "banana", 8, 3, 5, 9];
let count = 0;
let index = [];

for(let i = 0; i < myArray.length; i++) {
    for(let j = i + 1; j < myArray.length; j++) {
      if(myArray[i] == myArray[j]) {
        index.push(myArray[i]);

      }
    }
} 
console.log(index);

for(let i = 0; i < myArray.length; i++) {
  for(let j = 0; j < index.length; j++) {
    if(myArray[i] == index[j]) {
      myArray[i] = "modifié";
    }
  }
}
console.log(myArray);

/*7. Écrivez un programme capable de comparer 2 tableaux et de détecter la plus
grande chaîne d’éléments similaires dans les 2 tableaux.
Sans utiliser de filter()
Exemple :
[1, 3, 5, ‘banana’, 8, 9]
[0, ‘bonjour’, 5, ‘banana’, 8, 11, 0, 0, 0, 12]
=> Les tableaux sont similaires de l’index 2 à 4 */


let myArray1 = [1, 3, 5, "banana", 8, 9];
let myArray2 = [0, "bonjour", 5, "banana", 8, 11, 0, 0, 0, 12];

let count = [];
let test;

for(let i = 0; i < myArray1.length; i++) {
  for(let j = 0; j < myArray2.length; j++) {
    if(myArray1[i] == myArray2[j]) {
      count.push(i);
    }
  }
}

console.log("Les tableaux sont similaires à l’index " + count);

//----------------------

let myArray1 = [1, 3, 5, "banana", 8, 9, 10, 9, 8, 7, 6, 5, "tictac"];
let myArray2 = [1, 3, 5, "banana", 7, "melon", 10, 9, 8, 7, 6, 5, "tictac"];

let count1 = [];
let count2 = [];
let count3 = [];

for(let i = 0; i < myArray1.length; i++) {
    if(myArray1[i] == myArray2[i]) {
      count1.push(i);
      console.log("1",count1);
    } else {
      break;
    }
} 

for(let i = 0; i < myArray1.length; i++) {
  if(myArray1[i] != myArray2[i]) {
    count2.push(i);
    console.log("2",count2);
  } 
}

let j = count2.pop();
console.log(j);

for(let i = j+1; i < myArray1.length; i++) {
  if(myArray1[i] == myArray2[i]) {
    count3.push(i);
    console.log("1",count3);
  } else {
    break;
  }
}

console.log("Les tableaux sont similaires à l’index " + count1); 
console.log(count3); 

// --------------------------------

let myArray1 = [1, 3, 5, "banana", 8, 9, 10, 9, 8, 7, 6, 5, "tictac", "toc", 1, 2];
let myArray2 = [1, 3, 5, "banana", 7, "melon", 10, 9, 8, 7, 6, 5, "tictac", "tac", 1, 2];

let count1 = [];
let count2 = [];

for(let i = 0; i < myArray1.length; i++) {
    if(myArray1[i] == myArray2[i]) {
      count1.push(i);
    } else {
      count2.push(i);
    }
} 
console.log("count1",count1); // un tableau avec les index des nombres identitiques dans les deux tableaux
console.log("count2",count2); // un tableau avec les index des nombres pas identitiques 



// Autre solution mais pas possible pour comparer de très grand tableau car ce n'est pas "répétable"


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
      break;  // je sort de la boucle si les chiffres ne sont pas les mêmes
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