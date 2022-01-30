/* //Pile ou face Réalisez un jeu où l’utilisateur peut choisir soit pile soit face, 
//générez aléatoirement le résultat et affichez lui s’il a réussi ou non. 
//Permettez lui de rejouer et comptabilisez son pourcentage de succès");

var userChoice;
var playAgain;
var i = 0;
var win = 0;

playAgain = prompt("Veux-tu jouer à pile ou face - o ou n ?");

while(playAgain === "o") {
    userChoice = prompt("Choisi pile ou face");
    if (userChoice === "pile") {
        coin = Math.random();
        if (coin <= 0.5) {
            alert("Tu gagnes !");
            win++;
        }
        else {
            alert ("Tu perds :-(");
        }
    } else if (userChoice === "face") {
        coin = Math.random();
        if (coin > 0.5) {
            alert("Tu gagnes!");
            win++;
        }
        else {
            alert("Tu perds");
        }
    }
    i++
    playAgain = prompt("Veux-tu encore jouer - o ou n ?");
}    
alert("tu as gagné "+ win+ " fois sur "+ i+ " et tu as "+ win/i*100+ " % de réussite");

//autre soltion
Pile ou face
Réalisez un jeu où l’utilisateur peut choisir soit pile soit face, 
générez aléatoirement le résultat et affichez lui s’il a réussi ou non. 
Permettez lui de rejouer et comptabilisez son pourcentage de succès  */

let input;
let pile = 0;
let coin;
let win = 0;
let total = 0;

while(true) {
    input = prompt("Entrez 'p' pour pile ou 'f' pour face ou 'enter' pour stop");
    total++;
    coin = Math.floor(Math.random() * 2);
/*     if(input == "p" || input == "f") {
    //console.log(random); */
        
    if(input == "p") {
        pile == 1;
    } 
    else if(input == "f") {
        pile == 0;
    } else {
        break;
    }  
    if(pile == coin) {
        win++;
        alert("vous avez gagné !");
    } 
    else {
        alert("vous avez perdu :( ");
    }
}


alert("Vous avez joué " + total + " fois et votre moyenne de succès est de " + (win/total*100) + " %");
