/*Pile ou face
Réalisez un jeu où l’utilisateur peut choisir soit pile soit face, générez aléatoirement le résultat et affichez lui s’il a réussi ou non. Permettez lui de rejouer et comptabilisez son pourcentage de succès*/ 

let tentatives = 0 ;
let succes = 0 ;
let continuer = "" ;
let resultat;
let pourcent;
//boucl
do{
    let valeur = parseInt(prompt("Encodez 0 pour pile et 1 pour face"));
    console.log(valeur) ;
    
    while(valeur != 0 && valeur !=1 ) {
        valeur = parseInt(prompt("Vous vous êtes trompé Encodez 0 pour pile et 1 pour face"));
        console.log("test2 "+valeur);
    }
    tentatives++ ;
 
    
    resultat = Math.round(Math.random());
    console.log(resultat) ;
    
    if(resultat === valeur){
        console.log("Vous avez gagné");
        alert("Vous avez gagné") ;
        succes++;
    
    }
    else{
        console.log("Vous avez perdu");
        alert("Vous avez perdu") ;
    }
    continuer = prompt("q pour quitter et enter pour continuer") ;
}

while (continuer != "q")
pourcent = (succes/tentatives)*100;
alert("vous avez fait "+tentatives+" essais et "+succes+" reussites ce qui vus fait "+pourcent+" % de taux de reussite")