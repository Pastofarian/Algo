/*
2. Réalisez un ensemble de fonctions permettant de vérifier si une valeur entrée dans
une grille de 4 par 4 respecte les règles du sudoku (voir grille plus bas)
*/

/* Le tableau Sudoku */
let grid = [
    [2, 0, 0, 0],
    [1, 0, 0, 3],
    [4, 0, 0, 0],
    [3, 2, 0, 1]
];
/* La fonction qui permet d'afficher le tableau */
function displayGrid(grid) {
    for (let i = 0; i < grid.length; i++) {
        console.log(grid[i]);
    }
}
/* La fonction qui permet d'entrer le chiffre à placer dans le tableau */
function promptInput() {
    let input;
    input = prompt('Entrez une valeur entre 1 et 4 inclus');
    if (input < 1 || input > 4) {
        alert('Entrez 1, 2, 3 ou 4');
        promptInput();
    }
    return input
}
/* La fonction qui localise l'input par ligne horizontale */
function promptHoriz() {
    let horiz;
    horiz = prompt('Pour la position horizontale \nEntrez une valeur entre 0 et 3 inclus');
    if (horiz > 3) {
        alert('Entrez 0, 1, 2 ou 3');
        promptHoriz();
    }
    return horiz;
}
/* La fonction qui localise l'input par colonne verticale */
function promptVert() {
    let vert;
    vert = prompt('Pour la position verticale \nEntrez une valeur entre 0 et 3 inclus');
    if (vert > 3) {
        alert('Entrez 0, 1, 2 ou 3');
        promptVert();
    }
    return vert;
}
/* La fonction qui place l'input dans le tableau */
function placeInput(grid, vert, horiz, input) {
    grid[horiz][vert] = parseInt(input);
    return grid;
}
/*La fonction qui permet de voir si la case est déjà remplie */
function isUsed(grid, input, horiz, vert) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            console.log(grid[horiz][vert]);
            if (grid[horiz][vert] == 0) {

                placeInput(grid, vert, horiz, input);
                return console.log(displayGrid(grid));
            } else {
                return alert('Cet emplacement est déjà completé');
            }
        }
    }
}
/* La fonction qui vérifie les règles du Sudoku et qui défini la victoire */
console.log(displayGrid(grid));
while (true) {
    isUsed(grid, promptInput(), promptHoriz(), promptVert());

    let sumH = 0;
    let sumV = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            sumH = sumH + grid[j][i];
            //console.log('sumH = ' + sumH);
            sumV = sumV + grid[j][i];
            //console.log('sumV = ' + sumV);
            //console.log(grid[i][j]);
        }
    }
    if (sumH == 40 && sumV == 40) {
        alert('Vous avez gagné !');
        break;
    }
}
/********************************************************* */


// function sudokuH(lineStart, lineStop) {
//     // let lineStart = 0;
//     // let lineStop = 1;
//     let sumH = 0;
//     if (lineStart = 4) {
//         return true;
//     }
//     for (let i = lineStart; i < lineStop; i++) {
//         for (let j = 0; j < 4; j++) {
//             sumH += grid[i][j];
//             console.log('sumH = ' + sumH);
//         }
//     }
//     if (sumH == 10) {
//         lineStart++;
//         lineStop++;
//         console.log('lineStart = ' + lineStart);
//         sudokuH(lineStart, lineStop);
//     }
// }

// console.log(sudokuH(0, 1));

let grid = [
    [2, 3, 1, 0],
    [1, 4, 2, 3],
    [4, 1, 3, 0],
    [3, 2, 4, 1]
];

function sudokuV(columnStart, columnStop) {

    let sumV = 0;
    // if (columnStop = 4) {
    //     return true;
    // }
    for (let i = columnStart; i < columnStop; i++) {
        for (let j = 0; j < 4; j++) {
            sumV += grid[j][i];
            console.log('sumV = ' + sumV);
            console.log(grid[j][i]);
        }
    }
    if (sumV == 10) {
        columnStart++;
        columnStop++;
        console.log('columnStart = ' + columnStart);
        sudokuV(columnStart, columnStop);
    }

}

console.log(sudokuV(0, 1));