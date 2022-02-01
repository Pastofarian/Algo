/* 1.Réalisez un programme permettant de détecter les occurrences d’un élément
demandé dans un tableau
Exemple :
[5, ‘banana’, 12, 5, 3]
Entrée utilisateur : 5
=> 5 se trouve à 2 reprises dans le tableau */

/* let myArray = [5, "banana", 12, 5, 3]
let input = prompt("Entrez une donnée à chercher dans le tableau");
let count = 0

for(let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
  if(myArray[i] == input) {
    count++;
  }
}
alert(input + " se trouve " + count + " fois dans le tableau" );
 */
/* /* 2. Réalisez un programme permettant de détecter l’index d’un élément demandé dans
un tableau, renvoyez un message à l’utilisateur si l’élément n’est pas présent dans le
tableau
Vous ne pouvez utiliser indexOf
Exemple :
[5, ‘banana’, 12, 5, 3]
Entrée utilisateur : 5
=> 5 se trouve à l’index 0 du tableau */

/* let myArray = [5, "banana", 12, 5, 3];
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
 */

/* 4. Réalisez un programme capable de fusionner 2 tableaux
4.1 En ajoutant le contenu du 2ème tableau APRÈS celui du premier
4.2 En ajoutant le contenu du 2ème tableau AVANT celui du premier
Vous ne pouvez pas utiliser Array.concat(), uniquement push() et unshift()
Exemple:
[5, 3, 1]
[8, 2, 7]
=> 4.1 [5,3,1,8,2,7]
=> 4.2 [8,2,7,5,3,1] */

/* let myArray1 = [5, 3, 1];
let myArray2 = [8, 2, 7, "banana"];
let count;
for(let i = myArray2.length -1; i >= 0; i--) {
    myArray1.unshift(myArray2[i]);  
}
console.log(myArray1);
 */

/* 5. Réalisez un programme permettant d’inverser les valeurs du tableau
Vous ne pouvez pas utiliser Array.reverse()
Exemple :
[1, 8, 5, 3]
=> [3, 5, 8, 1] */

/* let myArray1 = [5, 8, 1];
let myArray2 = [];
for(let i = myArray1.length -1; i >= 0; i--) {
    myArray2.push(myArray1[i]);  
}
console.log(myArray2);

6. Réalisez un programme qui enlève tous les items présents plus d’une fois et les
remplacent par “Modifié”
Exemple :
[1, 5, 9, ‘banana’, 8, 3, 5]
=> [1, ‘Modifié’, 9, ‘banana’, 8, 3, ‘Modifié’] */

/*let myArray = [1, 5, 9, "banana", 8, 3, 5, 9];
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

7. Écrivez un programme capable de comparer 2 tableaux et de détecter la plus
grande chaîne d’éléments similaires dans les 2 tableaux.
Sans utiliser de filter()
Exemple :
[1, 3, 5, ‘banana’, 8, 9]
[0, ‘bonjour’, 5, ‘banana’, 8, 11, 0, 0, 0, 12]
=> Les tableaux sont similaires de l’index 2 à 4 */

const l1 = [1, 3, 5, 'banana', 8, 9, 10,11,12,13,14];
const l2 = [0, 'bonjour', 5, 'banana', 8, 11, 0, 0, 0, 12, 10,11,12,13,14];

let bestMatchLength = 0;
let bestMatchIndex = -1;

for (let i = 0; i < l1.length; i++)
{
    let startVal1 = l1[i];
    console.log('looking for: ' + startVal1 + ' index: ' + i);
    
    // search first match in list 2
    let matchIndex = -1;
    for (var j = 0; j < l2.length; j++)
    {
        let val2 = l2[j];

        if (val2 === startVal1)
        {
            console.log('match index found at: ' + j);
            matchIndex = j;
            break;
        }
    }

    // walk list 2 starting from matchIndex
    if (matchIndex > -1)
    {
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

        if (currentMatchLength > bestMatchLength)
        {
            bestMatchLength = currentMatchLength;
            bestMatchIndex = matchIndex;
        }
    }
}

console.log('=> match index: ' + bestMatchIndex + ' length: ' + bestMatchLength);


