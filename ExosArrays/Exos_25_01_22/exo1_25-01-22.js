/* 1.Réalisez un programme permettant de détecter les occurrences d’un élément
demandé dans un tableau
Exemple :
[5, ‘banana’, 12, 5, 3]
Entrée utilisateur : 5
=> 5 se trouve à 2 reprises dans le tableau */

let myArray = [5, "banana", 12, 5, 3]
let input = prompt("Entrez une donnée à chercher dans le tableau");
let count = 0

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
  if (myArray[i] == input) {
    count++;
  }
}
alert(input + " se trouve " + count + " fois dans le tableau");

//solution prof*****************************************************************

let myArray = [5, 3, 2, 1, 8, 5];
let user_value = 5;
let occurence = 0;

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] === user_value) {
    occurence++;
  }
}
console.log('La valeur', user_value, 'est présente', occurence, 'fois dans le tableau')

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

for (let i = 0; i < myArray.length; i++) {
  //console.log(myArray[i]);
  if (myArray[i] == input) {
    count++;
    index = i;
    console.log(index);
  }
  else if (myArray[i] != input) {
    console.log(input + " ne se trouve pas dans le tableau")
  }

}
alert(input + " se trouve " + count + " fois dans le tableau et se trouve à l'index " + index + " du tableau");

//à la maison

let input = prompt("Entrez un nombre");
let l = [5, "banana", 12, 5, 3];
let index = [];

for (let i = 0; i < l.length; i++) {
  if (l[i] == input) {
    index.push(i);
    console.log(index);
  } else {
    console.log("no match");
  }
}

// à la maison (meilleur !)

let myArray = [5, "banana", 12, 5, 3];
let input = prompt("Entrez une donnée à chercher dans le tableau");
let count = 0;
let index = [];

for (let i = 0; i < myArray.length; i++) {
  //console.log(myArray[i]);
  if (myArray[i] == input) {
    count++;
    index.push(i);
    //console.log(index);
  }
  else if (myArray[i] != input) {
    //console.log(input + " ne se trouve pas dans le tableau")
  }

}
alert(input + " se trouve " + count + " fois dans le tableau et se trouve à l'index " + index + " du tableau");

//solution prof*********************************************************************************************

let myArray = [5, 3, 8, 2, 5, 8, 9];
let user_value = 9;
let index = false;

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] == user_value) {
    index = i;
    break;
  }
}

if (index !== false) {
  console.log(user_value, "se trouve à l'index", index, "du tableau");
} else {
  console.log(user_value, "n'est pas présent dans le tableau");
}

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
for (let i = 0; i < myArray2.length; i++) {
  myArray1.push(myArray2[i]);
}
console.log(myArray1);

//solution prof**********************************************************************************
let firstArray = [5, 3, 1];
let secondArray = [8, 2, 7];

for (let i = 0; i < secondArray.length; i++) {
  firstArray.push(secondArray[i]);
}

console.log('Tableau fusionné (2eme apres)', firstArray);

//4.2

//Methode fainéante, on pousse les éléments après le 2eme tableau
let thirdArray = [5, 3, 1];
let fourthArray = [8, 2, 7];

for (let i = 0; i < thirdArray.length; i++) {
  fourthArray.push(thirdArray[i]);
}

console.log('Tableau fusionné (2eme avant)', fourthArray);

//Méthode alternative pour le 4.2, on unshift le tableau 1
let fifthArray = [5, 3, 1];
let sixthArray = [8, 2, 7];

for (let i = sixthArray.length - 1; i >= 0; i--) {
  fifthArray.unshift(sixthArray[i]);
}

console.log('Tableau fusionné (2eme avant) avec unshift', fifthArray);

// 4.2 En ajoutant le contenu du 2ème tableau AVANT celui du premier

let myArray1 = [5, 3, 1];
let myArray2 = [8, 2, 7, "banana"];
let count;
for (let i = myArray2.length - 1; i >= 0; i--) {
  myArray1.unshift(myArray2[i]);
}
console.log(myArray1);


//5. Réalisez un programme permettant d’inverser les valeurs du tableau
//Vous ne pouvez pas utiliser Array.reverse()
//Exemple :
//[1, 8, 5, 3]
//=> [3, 5, 8, 1]

let myArray1 = [1, 8, 5, 3];
let myArray2 = [];
for (let i = myArray1.length - 1; i >= 0; i--) {
  myArray2.push(myArray1[i]);
}
console.log(myArray2);

//solution prof*************************************************

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let reversedArray = [];
console.log('Tableau de départ', myArray);

//1ere méthode : avec un 2eme tableau
for (let i = myArray.length - 1; i >= 0; i--) {
  reversedArray.push(myArray[i]);
}
console.log('Autre tableau inversé', reversedArray);

//2eme methode : sans autres tableaux
console.log('Tableau initial', myArray);
for (let i = 0; i < myArray.length / 2; i++) {
  let temp = myArray[i];
  myArray[i] = myArray[myArray.length - 1 - i];
  myArray[myArray.length - 1 - i] = temp;
}
console.log('Même tableau mais inversé', myArray);

/*6. Réalisez un programme qui enlève tous les items présents plus d’une fois et les
remplacent par “Modifié”
Exemple :
[1, 5, 9, ‘banana’, 8, 3, 5]
=> [1, ‘Modifié’, 9, ‘banana’, 8, 3, ‘Modifié’] */

let myArray = [1, 5, 9, "banana", 8, 3, 5, 9];
let count = 0;
let index = [];

for (let i = 0; i < myArray.length; i++) {
  for (let j = i + 1; j < myArray.length; j++) {
    if (myArray[i] == myArray[j]) {
      index.push(myArray[i]);

    }
  }
}
console.log(index);

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < index.length; j++) {
    if (myArray[i] == index[j]) {
      myArray[i] = "modifié";
    }
  }
}
console.log(myArray);

//solution prof **************************************************************

let myArray = [5, 3, 8, 2, 5, 8, 9];
let duplicates = [];
console.log('Technique 1, Array de départ', myArray);
/*Technique 1 : trouver tout les items présents plus d'une fois, ensuite reparcourir le tableau et les modifier*/
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray.length; j++) {
    if (i !== j) {
      if (myArray[i] == myArray[j]) {
        duplicates.push(myArray[j]);
      }
    }
  }
}

console.log('Duplicates', duplicates);

for (let k = 0; k < duplicates.length; k++) {
  for (let l = 0; l < myArray.length; l++) {
    if (myArray[l] == duplicates[k]) {
      myArray[l] = "modifié";
    }
  }
}

console.log('Array final', myArray);

/* Technique 2 : Avec index */
console.log('\n*************************\n');

myArray = [5, 3, 8, 2, 5, 8, 9, 5, 5, 1, 8];
console.log('Technique 2, array de départ', myArray);
let indexes = [];

for (let i = 0; i < myArray.length; i++) {
  let hasDuplicates = false;
  for (let j = i + 1; j < myArray.length; j++) {
    if (myArray[i] == myArray[j]) {
      hasDuplicates = true;
      indexes.push(j);
    }
  }
  if (hasDuplicates) {
    indexes.push(i);
  }
}

console.log('Indexs ou il y a des doublons', indexes);

for (let i = 0; i < indexes.length; i++) {
  myArray[indexes[i]] = "modifié";
}

console.log('Tableau final', myArray)

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

for (let i = 0; i < myArray1.length; i++) {
  for (let j = 0; j < myArray2.length; j++) {
    if (myArray1[i] == myArray2[j]) {
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

for (let i = 0; i < myArray1.length; i++) {
  if (myArray1[i] == myArray2[i]) {
    count1.push(i);
    console.log("1", count1);
  } else {
    break;
  }
}

for (let i = 0; i < myArray1.length; i++) {
  if (myArray1[i] != myArray2[i]) {
    count2.push(i);
    console.log("2", count2);
  }
}

let j = count2.pop();
console.log(j);

for (let i = j + 1; i < myArray1.length; i++) {
  if (myArray1[i] == myArray2[i]) {
    count3.push(i);
    console.log("1", count3);
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

for (let i = 0; i < myArray1.length; i++) {
  if (myArray1[i] == myArray2[i]) {
    count1.push(i);
  } else {
    count2.push(i);
  }
}
console.log("count1", count1); // un tableau avec les index des nombres identitiques dans les deux tableaux
console.log("count2", count2); // un tableau avec les index des nombres pas identitiques 



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

//solution cousin Maury

const l1 = [1, 3, 5, 'banana', 8, 9, 10, 11, 12, 13, 14];
const l2 = [0, 'bonjour', 5, 'banana', 8, 11, 0, 0, 0, 12, 10, 11, 12, 13, 14];

let bestMatchLength = 0;
let bestMatchIndex = -1;

for (let i = 0; i < l1.length; i++) {
  let startVal1 = l1[i];
  console.log('looking for: ' + startVal1 + ' index: ' + i);

  // search first match in list 2
  let matchIndex = -1;
  for (var j = 0; j < l2.length; j++) {
    let val2 = l2[j];

    if (val2 === startVal1) {
      console.log('match index found at: ' + j);
      matchIndex = j;
      break;
    }
  }

  // walk list 2 starting from matchIndex
  if (matchIndex > -1) {
    console.log('walking');
    let currentMatchLength = 1; // we already know first char is a match

    // ! dont want to walk out of bounds
    let l1RemainingLength = l1.length - i;
    let l2RemainingLength = l2.length - matchIndex;

    let walkLength = l1RemainingLength;
    if (l2RemainingLength < l1RemainingLength)
      walkLength = l2RemainingLength;

    console.log('walk length: ' + walkLength);

    for (let k = 1; k < walkLength; k++) // start at 1 since we already know first char is a match
    {
      console.log('l1 index: ' + (i + k) + ' l2 index: ' + (matchIndex + k));
      if (l1[i + k] === l2[matchIndex + k])
        currentMatchLength++;
      else
        break;
    }

    console.log('current match length: ' + currentMatchLength);

    if (currentMatchLength > bestMatchLength) {
      bestMatchLength = currentMatchLength;
      bestMatchIndex = matchIndex;
    }
  }
}

console.log('=> match index: ' + bestMatchIndex + ' length: ' + bestMatchLength);

//solution prof*******************************************************************************

//nos 2 tableaux de départ
let arr1 = [1, 3, 5, 'banana', 8, 9, 0, 0, 0, 12, 5, 6];
let arr2 = [0, 'bonjour', 5, 'banana', 8, 9, 0, 1, 3, 5];

/* tableau qui reprendra les indexs de la chaine en cours*/
let newSimilar = [];

/* variable qui gardera les indexs de la chaine précédente pour pouvoir la comparer avec la newSimilar, je garderai la plus grande des 2 (même principe que PP et PG)*/
let lastSimilar = false;

/*on parcourt le premier tableau, pour chaque tour du premier tableau on compare avec le tableau suivant*/
for (let i = 0; i < arr1.length; i++) {

  //je met l'élément du tableau 1 dans check pour la comparer
  let check = arr1[i];

  //je parcours le 2eme tableau
  for (let j = 0; j < arr2.length; j++) {
    //je vérifie si un élément du 2eme tableau correspond, si oui alors on commence une chaine similaire entre les 2, sinon on continue a parcourir le tableau 2
    if (check == arr2[j]) {
      let indexArr2 = j; //on garde l'index du tableau 2 en mémoire
      newSimilar.push(j); //on ajoute a notre chaine l'élément actuel

      //ici on parcourt les 2 tableaux, index par index en parallele en commencant par l'index sur lequel on était déjà +1
      for (let k = i + 1; k < arr1.length; k++) {

        indexArr2++;
        //on évite de regarder au dela de la taille du tableau
        if (arr2.length > indexArr2) {
          if (arr1[k] == arr2[indexArr2]) {
            //la chaine continue
            newSimilar.push(indexArr2);
          } else {
            // la chaine est finie
            break;
          }
        } else {
          //on a parcouru le tableau 2
          break;
        }
      }

      //on compare notre nouvelle chaine avec notre précédente (si on en avait une précédente)
      if (!lastSimilar || newSimilar.length > lastSimilar.length) {
        //si la nouvelle chaine est plus grande alors on l'attribue
        lastSimilar = newSimilar;
      }
      //on reset notre nouvelle chaine
      newSimilar = [];
    }
  }
}

//si on a une chaine alors on la montre
if (lastSimilar) {
  console.log('Check terminé, la plus grande chaine commune est de', lastSimilar.length, 'commence par ', arr2[lastSimilar[0]], '(index tableau 2 : ', lastSimilar[0], '), et fini par', arr2[lastSimilar[lastSimilar.length - 1]], '(index tableau 2 : ', lastSimilar[lastSimilar.length - 1], ')');
} else {
  console.log('Aucune similarité');
}