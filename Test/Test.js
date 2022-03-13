let total = 0;
let temp = [];
let arr = [[5, 2, 8], [12, 24, 9], [3, 1, 8]]
let arr2 = [[], [], []]

for (i = 0; i < arr.length; i++) {
    total = 0;
    for (j = 0; j < arr[i].length; j++) {
        total += arr[i][j];
        console.log(arr[i][1])
        arr2[i].push(total);
    }
}

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length - 1; j++) {

        if (arr2[j][0] < arr2[j + 1][0]) {
            temp = arr2[j];
            arr2[j] = arr2[j + 1];
            arr2[j + 1] = temp;
        }
    }
}

//console.log(arr2);