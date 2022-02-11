/* f.
Pareil que le précédent, sauf que vous avez un tableau de tableaux, une fois la
somme faites triez les par ordre décroissant
ex :
Tableau de départ : [[5, 2, 8], [12, 24, 9], [3, 1, 8]]
Tableaux avec sommes => [[5, 7, 15], [12, 36, 45], [3, 4, 12]]
Tableaux ordonnés par ordre décroissant => [[12, 36, 45], [5, 7, 15],[3, 4, 12]] */

let total = 0;
let temp = [];
let arr = [[5, 2, 8], [12, 24, 9], [3, 1, 8]]
let arr2 = [[],[],[]]

for(i = 0; i < arr.length; i++) {
  total = 0;
  for(j = 0; j < arr[i].length; j++) {
    total += arr[i][j];
    //total = parseInt(total);
    arr2[i].push(total);
    console.log(total);
    console.log(arr2);
    }
  }
  //console.log('sous tableau', i, total)
  //console.log(arr2);
console.log(arr2);

/* for(let i = 0; i < arr2.length; i++) {
  for(let j = 1; j < arr2.length-1; j++) { 

  if(arr2[j][0] > arr2[j+1][0]) {
    temp = arr2[j][0];
    arr2[j][0] = arr2[j][1];
    arr2[j][1] = temp; 
  }
}
} */

//console.log(arr2);