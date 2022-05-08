/*2. Réalisez un ensemble de fonctions permettant de vérifier si une valeur entrée dans
une grille de 4 par 4 respecte les règles du sudoku (voir grille plus bas)
*/

/* Le tableau Sudoku */
let grid = [
    [2, 0, 0, 0],
    [1, 0, 0, 3],
    [4, 0, 0, 0],
    [3, 2, 0, 1]
];

/* les variables */
let input;
let horiz;
let vert;
let flagDoubleH = false;
let flagDoubleV = false;
let flagH = false;
let flagV = false;

/* permet d'afficher le tableau dans la console */
function displayGrid(grid) {
    for (let i = 0; i < grid.length; i++) {
        console.log(grid[i]);
    }
}

/* permet d'entrer l'input à placer dans le tableau */
function promptInput() {
    input = prompt("Entrez une valeur entre 1 et 4 inclus \nl'emplacement sera choisi ensuite");
    if (isNaN(input)) {
        alert('Entrez 1, 2, 3 ou 4');
        return promptInput();
    }
    else if (input < 1 || input > 4) {
        alert('Entrez 1, 2, 3 ou 4');
        return promptInput();
    }
    return input;
}

/* localise l'input par ligne horizontale */
function promptHoriz() {
    horiz = prompt('Pour la position horizontale \nEntrez une valeur entre 0 et 3 inclus \n0 pour la ligne du haut, 3 pour la ligne du bas');
    if (isNaN(horiz)) {
        alert('Entrez 0, 1, 2 ou 3');
        return promptHoriz();
    }
    else if (horiz > 3) {
        alert('Entrez 0, 1, 2 ou 3');
        promptHoriz();
    }
    return horiz;
}

/* localise l'input par colonne verticale */
function promptVert() {
    vert = prompt('Pour la position verticale \nEntrez une valeur entre 0 et 3 inclus \n0 pour la colonne de gauche, 3 pour la colonne de droite');
    if (isNaN(vert)) {
        alert('Entrez 0, 1, 2 ou 3');
        return promptVert();
    }
    else if (vert > 3) {
        alert('Entrez 0, 1, 2 ou 3');
        promptVert();
    }
    return vert;
}

/* place l'input dans le tableau */
function placeInput(grid, vert, horiz, input) {
    grid[horiz][vert] = parseInt(input);
    return grid;
}

/* permet de voir si l'emplacement est vide ou déjà rempli */
function isUsed(grid, input, horiz, vert) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            //console.log(grid[horiz][vert]);
            if (grid[horiz][vert] == 0) {
                placeInput(grid, vert, horiz, input);
                return displayGrid(grid);
            } else {
                return alert('Cet emplacement est déjà completé');
            }
        }
    }
}

/* permet de calculer le résultat par ligne (total/ligne = 10) */
function sudokuH(lineStart, lineStop) {
    // let lineStart = 0;
    // let lineStop = 1;
    let sumH = 0;
    if (lineStart == 4) {
        //console.log('gagné');
        return flagH = true;
    }
    for (let i = lineStart; i < lineStop; i++) {
        for (let j = 0; j < 4; j++) {
            sumH += grid[i][j];
            //console.log('sumH = ' + sumH);
        }
    }
    if (sumH == 10) {
        lineStart++;
        lineStop++;
        //console.log('lineStart = ' + lineStart);
        sudokuH(lineStart, lineStop);
    }
}

/* permet de calculer le résultat par colonne (total/colonne = 10) */
function sudokuV(columnStart, columnStop) {
    let sumV = 0;
    if (columnStart == 4) {
        return flagV = true;
    }
    for (let i = columnStart; i < columnStop; i++) {
        for (let j = 0; j < 4; j++) {
            sumV += grid[j][i];
            //console.log('sumV = ' + sumV);
            //console.log(grid[j][i]);
            //console.log('columnStart = ' + columnStart);
            //console.log('columnStop = ' + columnStop);
        }
    }
    if (sumV == 10) {
        columnStart++;
        columnStop++;

        sudokuV(columnStart, columnStop);
    }

}

/* permet de détecter les doubles sur une même ligne */
function isDoubleH() {
    let gridTemp = [];
    let count;
    for (let i = 0; i < 4; i++) {
        gridTemp.push(grid[horiz][i]);
        //console.log('input = ' + input);
        //console.log('grid[horiz][i] = ' + grid[horiz][i]);
    }
    for (let j = 0; j < gridTemp.length; j++) {
        if (input == gridTemp[j]) {
            count++;
        }
    }
    if (count == 2) {
        alert('la même valeur ne peut pas se trouver deux fois sur la même ligne\nRecommencez !');
        return flagDoubleH = true;
    }
}

/* permet de détecter les doubles sur une même colonne */
function isDoubleV() {
    let gridTemp = [];
    let count = 0;
    for (let i = 0; i < 4; i++) {
        gridTemp.push(grid[i][vert]);
        //console.log('grid[i][vert] = ' + grid[i][vert]);
        //console.log('input = ' + input);
        //console.log('gridTemp = ' + gridTemp);
    }
    for (let j = 0; j < gridTemp.length; j++) {
        if (input == gridTemp[j]) {
            count++;
        }
    }
    if (count == 2) {
        alert('la même valeur ne peut pas se trouver deux fois sur la même colonne\nRecommencez !');
        return flagDoubleV = true;
    }
}


/* boucle sur les fonctions et défini la victoire */
displayGrid(grid);
while (true) {
    console.log('--------------------------');
    isUsed(grid, promptInput(), promptHoriz(), promptVert());
    sudokuH(0, 1);
    sudokuV(0, 1);
    isDoubleH();
    isDoubleV();
    //console.log('flagH = ' + flagH);
    //console.log('flagV = ' + flagV);

    if (flagH == true && flagV == true) {
        alert('Vous avez gagné !! :)');
        break;
    }
    else if (flagDoubleH == true || flagDoubleV == true) {
        break;
    }
}