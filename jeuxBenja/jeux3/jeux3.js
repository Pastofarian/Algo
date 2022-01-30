/*
Jeu de Nim
Réalisez le jeu suivant : Il y a 20 allumettes / bâtonnets, chaque joueur peut enlever 1, 2 ou 3 allumettes. Vous gagnez si vous êtes celui à enlever la dernière allumette.
Réalisez ce jeu pour 2 joueurs. 
Ensuite réalisez une version ou votre programme joue contre vous.
Ensuite réalisez une version ou le programme gagne à tout les coup s’il commence*/ 

let allumettes;
let joueur1;
let fin;
let rejouer = "";


do{
    allumettes = 20;
    fin= false;
    joueur1 = true;
    while(!fin && allumettes >= 0 ){

        if(allumettes == 0){
            if(!joueur1){
                alert("joueur 1 a gagné !");
            }
            else{
                alert("joueur 2 a gagné !");
            }
            fin = true;

        }
        else if(allumettes == 1){
            if(joueur1){
                alert("joueur 1 a perdu !");
            }
            else{
                alert("joueur 2 a perdu !")
            }
            fin = true;
        } 

        else if(allumettes == 2 ){
            if(joueur1){
                valeur = parseInt(prompt("Joueur 1 enleve une ou deux allumettes"));
                valeur = resteDeuxAllumettes(valeur);
                joueur1 = false
            }
            else{
                valeur = parseInt(prompt("Joueur 2 enleve une ou deux allumettes"));
                valeur = resteDeuxAllumettes(valeur);
                joueur1 = true;
            }
            allumettes = allumettes-valeur;
            affichage(allumettes);
        }
        else{
            if(joueur1){
                valeur = parseInt(prompt("Joueur 1 enleve 1, 2 ou 3  allumettes"));
                valeur = testValeur(valeur);
                
                joueur1 = false;
                
            }else{
                valeur = parseInt(prompt("Joueur 2 enleve 1, 2 ou 3  allumettes"));
                valeur = testValeur(valeur);
                joueur1 = true;
               
            }
            allumettes = allumettes-valeur;
            affichage(allumettes);
        }
      
    }
    rejouer = prompt("voulez vous rejouer ? q pour quitter, enter pour continuer");

}while(rejouer != "q")

alert("Aurevoir et merci d'avoir jouer avec nous :) ");


//// LES FONCTIONS ////

function resteDeuxAllumettes(valeur){
    while(valeur > 2 || valeur < 1){
        valeur = parseInt(prompt("vous ne pouvez plus enlever qu'une ou deux allumettes!"));
    }
    return testValeur(valeur);
}

function testValeur(valeur){
    while(valeur > 3 || valeur < 1 || !Number.isInteger(valeur)){
        valeur = parseInt(prompt("la valeur doit etre comprise entre 1 et 3 et etre un numero recommencez !"));
    }
 
    return valeur;
}

function affichage(allumettes){
    alert('il reste '+ allumettes + " allumettes");
}