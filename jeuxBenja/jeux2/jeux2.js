/*
Trouver le nombre
Réalisez un jeu où l’utilisateur doit trouver un nombre entre 0 et 100 en moins de 15 essais.
Affichez lui après chaque tentative si le nombre à trouver est plus petit, plus grand ou s’il a trouvé le bon>
*/

let random = Math.round(Math.random()*100);
let valeur;
let max = 15;
let flag = false;
let playagain = "";
do{
    console.log(random);

    valeur = parseInt(prompt("Entrez un nombre entre 0 et 100"));
    console.log(valeur) ;
    error(valeur);
    while(max !=0 && flag == false){
        max--;
        if(valeur>random){
            valeur = parseInt(prompt("Entrez un nombre plus petit"));
            error(valeur);
        }
        else if(valeur<random){
            valeur = parseInt(prompt("Entrez un nombre plus grand"));
            error(valeur);
        }
        else{
            alert("Vous avez trouvé");
            flag = true;
            
        }
        console.log(max);
    }
    if(max == 0){
        alert("Vous avez perdu");
    }
    flag = false;
    playagain = prompt("Voulez-vous quitter ? q = quitter, enter = rejouer");
} while(playagain!="q")

function error(valeur){
    while(valeur >100 || valeur < 0) {
        valeur = parseInt(prompt("Vous vous êtes trompé, Entrez un nombre entre 0 et 100"));    
    }
}
