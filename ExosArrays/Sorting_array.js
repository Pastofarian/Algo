//  selection sort (Trouver la valeur la + petite et la placer au début du tableau)

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    //console.log(minIndex);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  } return arr;
};

let l = [5, 3, 8, 1];
console.log(selectionSort(l));

//--solution prof

let myArray = [5, 3, 8, 1];
let min = 0;
console.log('Unsorted', myArray);
for (let i = 0; i < myArray.length; i++) {
  min = i;

  //Trouver le plus petit dans la partie droite du tableau
  for (let j = i + 1; j < myArray.length; j++) {
    if (myArray[j] < myArray[min]) {
      min = j;
    }
  }

  //on ne remplace pas si le minimum est déjà le premier des unsorted
  if (min !== i) {
    //swap
    let temp = myArray[i];
    myArray[i] = myArray[min];
    myArray[min] = temp;

  }
}
console.log('Sorted', myArray);

//---------------------------------------------------------------------------
// bubble sort (Trouver la + petite valeur entre deux nombres, échanger les nombres si nécéssaire, passer au prochain couple)

let l = [5, 3, 8, 1];
let temp;

for (let i = 0; i < l.length; i++) {
  for (let j = 1; j < l.length; j++) {

    if (l[j] < l[j - 1]) {
      temp = l[j];
      l[j] = l[j - 1];
      l[j - 1] = temp;
    }
  }
}
console.log(l);

//console.log(l);

//---Solution prof

let myArray = [5, 3, 8, 1];
console.log('Unsorted', myArray);
for (let i = 0; i < myArray.length - 1; i++) {

  for (let j = 0; j < myArray.length - i - 1; j++) {
    console.log('i:', i, 'j:', j);
    if (myArray[j] > myArray[j + 1]) {
      let temp = myArray[j];
      myArray[j] = myArray[j + 1];
      myArray[j + 1] = temp;
      console.log('swap', myArray);
    }
  }
}
console.log('Sorted', myArray);

//------------------------------------------------------------------------------------
//function insertionSort(inputArr) {


function sort(arr) {

  let tmp, i, j;

  for (i = 1; i < arr.length; i++) {
    //store the current value
    tmp = arr[i]
    j = i - 1
    while (j >= 0 && arr[j] > tmp) {
      // move the number
      arr[j + 1] = arr[j]
      j--
    }
    //Inserts the temporary value at the correct position
    arr[j + 1] = tmp
  }
  return arr
}
let l = [5, 3, 8, 1];
sort(l);
console.log(l);

//--solution prof

let myArray = [5, 3, 8, 1];
console.log('Unsorted', myArray);
for (let i = 1; i < myArray.length; i++) {
  for (let j = i - 1; j > -1; j--) {
    if (myArray[j + 1] < myArray[j]) {
      let temp = myArray[j + 1];
      myArray[j + 1] = myArray[j];
      myArray[j] = temp;
    }
  }
};
console.log('Sorted', myArray);


// Javascript program to sort first k elements
// in increasing order and remaining
// n-k elements in decreasing   

// Function to print half of the array in
// ascending order and the other half in
// descending order
function printOrder(arr, n, k) {
  let len1 = k, len2 = n - k;
  let arr1 = new Array(k);
  let arr2 = new Array(n - k);

  // Store the k elements in an array
  for (let i = 0; i < k; i++)
    arr1[i] = arr[i];

  // Store the remaining n-k
  // elements in an array
  for (let i = k; i < n; i++)
    arr2[i - k] = arr[i];

  // Sorting the array from 0 to k-1 places
  arr1.sort(function (a, b) { return a - b; });

  // Sorting the array from k to n places
  arr2.sort(function (a, b) { return a - b; });

  // Storing the values in the final array arr
  for (let i = 0; i < n; i++) {
    if (i < k)
      arr[i] = arr1[i];
    else {
      arr[i] = arr2[len2 - 1];
      len2--;
    }
  }

  // Printing the array
  for (let i = 0; i < n; i++) {
    document.write(arr[i] + " ");
  }
}

// Driver code
let arr = [5, 4, 6, 2, 1, 3, 8, 9, -1];
let k = 4;
let n = arr.length;

printOrder(arr, n, k);

// This code is contributed by rag2127
 
</script >