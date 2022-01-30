//Jeu de Nim
//Réalisez le jeu suivant : Il y a 20 allumettes / bâtonnets, chaque joueur peut enlever 1, 2 ou 3 allumettes. Vous gagnez si vous êtes celui à enlever la dernière allumette.
//Réalisez ce jeu pour 2 joueurs. 
//Ensuite réalisez une version ou votre programme joue contre vous.
//Ensuite réalisez une version ou le programme gagne à tout les coup s’il commence


let player1;
let ordi;
let matchLeft = 20;

while (matchLeft > 0) {
    if (matchLeft < 4) {
        player1 = prompt("Joueur 1 - retirez maximum " + matchLeft + " allumette(s)");
    }
    else {
        player1 = prompt("Joueur 1 - retirez 1, 2 ou 3 allumettes");
    }
    if (player1 >= 4 || player1 < 1) {
        prompt("Vous devez retirez 1, 2 ou 3 allumettes, recommencez !");
        break;
    }
    matchLeft -= player1;
    alert("il reste " + matchLeft + " allumettes");

    if (matchLeft <= 0) {
        alert("Joueur 1 Vous avez gagné");
        break;
    }
      ordi = Math.floor((Math.random() * 3) + 1);
    alert("l'ordi retire " + ordi + " allumettes");
    matchLeft -= ordi;
    if (matchLeft <= 0) {
        alert("l'ordi a gagné !");
        break;
    }
}

//autre solution

/* let match = 20;
let ordi;
let player;

while(true) {
    player = prompt("Retirez une deux ou trois alumette(s)")
    if(player > 3 || player < 0) {
        break;
    }
    match -= player;
    alert("il reste " + match + " allumette");
    if(match == 0) {
        alert("vous avez gagné!");
        break;
    }

    ordi = Math.floor((Math.random() * 3) + 1)
    match -= ordi;
    alert("l'ordi prend " + ordi + " allumette" + "il reste " + match + " allumette");
    if(match == 0) {
        alert("l'ordi a gagné!");
        break;
    }
} */