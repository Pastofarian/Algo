//Jeu de Nim
//Réalisez le jeu suivant : Il y a 20 allumettes / bâtonnets, chaque joueur peut enlever 1, 2 ou 3 allumettes. Vous gagnez si vous êtes celui à enlever la dernière allumette.
//Réalisez ce jeu pour 2 joueurs. 
//Ensuite réalisez une version ou votre programme joue contre vous.
//Ensuite réalisez une version ou le programme gagne à tout les coup s’il commence

let player1;
let ordi;
let matchLeft = 20;

while(matchLeft > 0) {
    if (matchLeft < 4) {                    // proposition en fonction du nbr restant
        player1 = prompt("Joueur 1 - retirez maximum " + matchLeft + " allumette(s)");
    }
    else {                                  //proposition standart jusqu'à 3 allumettes restante
        player1 = prompt("Joueur 1 - retirez 1, 2 ou 3 allumettes");
    }
    if (player1 >= 4 || player1 < 1) {      //pour éviter un nombre autre que 1, 2 ou 3
        prompt("Vous devez retirez 1, 2 ou 3 allumettes, recommencez !");
        break;                              //on sort de la boucle
    }
    matchLeft -= player1;
    alert("il reste " + matchLeft + " allumettes");

    if (matchLeft <= 0) {
        alert("Joueur 1 Vous avez gagné");
    }                                       // au tour de l'ordi
      if (player1 == 1) {                   //l'ordi retire un nbr d'allumettes = 4 minus ce que player1 a joué
        ordi = 3;
      } else if(player1 == 2) {
        ordi = 2;
      } else {
        ordi = 1;
      }
      matchLeft -= ordi;
    alert("l'ordi retire " + ordi + " allumettes. Il reste " + matchLeft + " allumettes.");
    if (matchLeft <= 0) {
        alert("l'ordi a gagné !");
    }
}

// autre version

let player1;
let ordi;
let matchLeft = 20;

matchLeft -= 1;
alert("Bienvenue au jeu de Nim ! \rl'ordi commence et il retire 1 allumettes. \rIl reste " + matchLeft + " allumettes.");

while(matchLeft > 0) {

    if (matchLeft < 4) {                    // proposition en fonction du nbr restant
        player1 = prompt("Joueur 1 - retirez maximum " + matchLeft + " allumette(s)");
    }
    else {                                  //proposition standart jusqu'à 3 allumettes restante
        player1 = prompt("Joueur 1 - retirez 1, 2 ou 3 allumettes");
    }
    if (player1 >= 4 || player1 < 1) {      //pour éviter un nombre autre que 1, 2 ou 3
        prompt("Vous devez retirez 1, 2 ou 3 allumettes, recommencez !");
        break;                              //on sort de la boucle
    }
    matchLeft -= player1;
    alert("il reste " + matchLeft + " allumettes");

    if (matchLeft <= 0) {
        alert("Joueur 1 Vous avez gagné");
        break;
    }                                       // au tour de l'ordi
      if (player1 == 1) {                   //l'ordi retire un nbr d'allumettes = 4 minus ce que player1 a joué
        ordi = 3;
      } else if(player1 == 2) {
        ordi = 2;
      } else {
        ordi = 1;
      }
      matchLeft -= ordi;
    alert("l'ordi retire " + ordi + " allumettes. Il reste " + matchLeft + " allumettes.");
    if (matchLeft <= 0) {
        alert("l'ordi a gagné !");
        break;
    }
}

    
      
