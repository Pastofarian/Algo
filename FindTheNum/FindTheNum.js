//Trouver le nombre
//Réalisez un jeu où l’utilisateur doit trouver un nombre entre 0 et 100 en moins de 15 essais.
//Affichez lui après chaque tentative si le nombre à trouver est plus petit, plus grand ou s’il a trouvé le bon

let attempt;
let random = Math.round(Math.random()*100);
console.log(random);

for(i = 15; i >= 0; i--) {

    attempt = prompt("Donnez un chiffre entre 0 et 100, vous avez "+ i + " essais pout trouver le même que moi");

    if(attempt < random) {
        alert("vous etes trop bas");
    }
    else if(attempt > random) {
        alert("vous etes trop haut");
    } 
    else {
        alert("vous avez gagné !");
        break; 
    }
}

//autre 
/* let random;
let input;
random = Math.floor((Math.random() * 100) + 1);
for(let i = 15; i > 0; i--) {
    console.log(random);

    input = prompt("Entre un nombre entre 1 et 100")
    if(input < random) {
        alert("plus haut! Il vous reste "+ i + "essai(s)");
    }
    else if(input > random) {
        alert("plus bas! Il vous reste "+ i + "essai(s)");
    } else {
        alert("vous avez gagné");
        break;
    }
} */