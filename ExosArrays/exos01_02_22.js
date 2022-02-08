//  selection sort (Trouver la valeur la + petite et la placer au début du tableau)
let l = [5, 3, 8 ,1];
let pp = l[0];

for(let i = 0; i < l.length; i++) {
  for(let j = i + 1 ; j < l.length; j++) {
    
    if(l[j] < l[i]) {
      pp = l[j];
      l[j] = l[i];
      l[i] = pp;
      console.log(l);
    }
  }

}

console.log(l);
// ----------------autre solution (YT)-----------------------------------

let l = [5, 3, 8 ,1];


for(let i = 0; i < l.length -1; i++) { // pas besoin d'aller jusqu'à la fin car 
  let minIndex = i;
  for(let j = i + 1; j < l.length; j++) {
    
    if(l[j] < l[minIndex]) {
      minIndex = j;
    }
  }
  const temp = l[i]; // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  l[i] = l[minIndex];
  l[minIndex] = temp;
  console.log(l);
}

console.log(l);
//---------------------------------------------------------------------------
// bubble sort (Trouver la + petite valeur entre deux nombres, échanger les nombres si nécéssaire, passer au prochain couple)

let l = [5, 3, 8 ,1];
let temp;

for(let i = 0; i < l.length; i++) {
  for(let j = 1; j < l.length; j++) {  // pq deux boucles si on ne compare que j
    
    if(l[j] < l[j-1]) {
      temp = l[j];
      l[j] = l[j-1];
      l[j-1] = temp;
    }
  } 
}
console.log(l);

//console.log(l);

//------------------------------------------------------------------------------------
//Insertion sort   //On assume que la première valeur du tableau est la + petite, ensuite on la compare et la change avec la prochaine valeur la plus petite
//Insertion sort takes maximum time to sort if elements are sorted in reverse order. And it takes minimum time (Order of n) when elements are already sorted.

let l = [5, 3, 8 ,1];
for (let i = 1; i < l; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i-1; 
    while ((j > -1) && (current < inputArr[j])) {
        inputArr[j+1] = inputArr[j];
        j--;
    }
    inputArr[j+1] = current;
}