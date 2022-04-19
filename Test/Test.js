/*
2. Réalisez un ensemble de fonctions permettant de vérifier si une valeur entrée dans
une grille de 4 par 4 respecte les règles du sudoku (voir grille plus bas)
*/


let grid = [
    [2, 0, 0, 0],
    [1, 0, 0, 3],
    [4, 0, 0, 0],
    [3, 2, 0, 1]
];
/******************************************************* */
function displayGrid(grid) {
    for (let i = 0; i < grid.length; i++) {
        console.log(grid[i]);
    }
}
/******************************************************* */
function promptInput() {
    let input;
    input = prompt('Entrez une valeur entre 1 et 4 inclus');
    if (input < 1 || input > 4) {
        alert('Entrez 1, 2, 3 ou 4');
        promptInput();
    }
    return input
}
/****************************************************** */
function promptHoriz() {
    let horiz;
    horiz = prompt('Pour la position horizontale \nEntrez une valeur entre 0 et 3 inclus');
    if (horiz > 3) {
        alert('Entrez 0, 1, 2 ou 3');
        promptHoriz();
    }
    return horiz;
}
/**************************************************** */
function promptVert() {
    let vert;
    vert = prompt('Pour la position verticale \nEntrez une valeur entre 0 et 3 inclus');
    if (vert > 3) {
        alert('Entrez 0, 1, 2 ou 3');
        promptVert();
    }
    return vert;
}
/************************************************** */
function placeInput(grid, vert, horiz, input) {
    grid[horiz][vert] = parseInt(input);
    return grid;
}
/*********************************************** */
function sudoku(grid, input, horiz, vert) {
    // let flag = true;
    // let MessageErreur = 'Essayez encore !'
    // for (let i = 0; i < grid.length; i++) {

    //     //console.log(grid[3][i]);
    //     if (input === grid[horiz][i]) {
    //         //console.log('erreur');
    //         flag = false;
    //     } else if (input === grid[i][vert]) {
    //         //console.log(grid[i][2]);
    //         //console.log('erreur2');
    //         flag = false;
    //     }
    // }
    // if (flag) {
    placeInput(grid, vert, horiz, input);
    return console.log(displayGrid(grid));
    //     } else {
    //         return MessageErreur;
    //     }
}
/******************************************** */
console.log(displayGrid(grid));
while (true) {
    sudoku(grid, promptInput(), promptHoriz(), promptVert());

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


//sudoku(grid, promptInput(), promptHoriz(), promptVert());
