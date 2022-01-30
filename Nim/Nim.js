//Jeu de Nim
//Réalisez le jeu suivant : Il y a 20 allumettes / bâtonnets, chaque joueur peut enlever 1, 2 ou 3 allumettes. Vous gagnez si vous êtes celui à enlever la dernière allumette.
//Réalisez ce jeu pour 2 joueurs. 
//Ensuite réalisez une version ou votre programme joue contre vous.
//Ensuite réalisez une version ou le programme gagne à tout les coup s’il commence

let player1;
let player2;
let matchNum = 20;

while (matchNum > 0) {
    if (matchNum < 4) {
        player1 = prompt("Joueur 1 - retirez maximum " + matchNum + " allumette(s)");
    }
    else {
        player1 = prompt("Joueur 1 - retirez 1, 2 ou 3 allumettes");
    }
    if (player1 >= 4 || player1 < 1) {
        prompt("Vous devez retirez 1, 2 ou 3 allumettes, recommencez !");
        break;
    }
    matchNum = matchNum - player1;
    alert("il reste " + matchNum + " allumettes");

    if (matchNum <= 0) {
        alert("Joueur 1 Vous avez gagné");
        break;
    }
    if (matchNum < 4) {
        player2 = prompt("Joueur 2 - retirez maximum " + matchNum + " allumette(s)");
    }
    else {
        player2 = prompt("Joueur 2 - retirez 1, 2 ou 3 allumettes");
    }
    if (player2 >= 4 || player2 < 1) {
        prompt("Vous devez retirez 1, 2 ou 3 allumettes, recommencez !");
        break;
    }
    matchNum = matchNum - player2;
    alert("il reste " + matchNum + " allumettes");

    if (matchNum <= 0) {
        alert("Joueur 2 Vous avez gagné");
        break;
    }
}
