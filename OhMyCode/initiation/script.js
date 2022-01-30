console.log("connecté");
const titre = document.getElementById('titre');
titre.style.color = "green"
console.log(titre);

// Je sélectionne et je stocke

const btnRed = document.getElementById('btn-red');
//console.log(btnRed,"bouton rouge");
const btnBlue = document.getElementById('btn-blue');
console.log(btnBlue,"bouton bleu");

let compteur = 0;
console.log(compteur,"compteur au démarrage");

//Je soumets le cercle rouge à une action 
btnRed.addEventListener('click', function(){
    console.log('clické');
    //ici l'action
    //incrémenter le compteur de 1
    compteur += 1;
    console.log(compteur,"compteur après incrémentation");
});

//Je soumets le cercle bleu à une action 
btnBlue.addEventListener('click', function(){
    console.log('cercle bleu clické');
    //ici l'action
    //incrémenter le compteur de 1
    compteur += 1;
    console.log(compteur,"compteur après incrémentation");
});
function add() {
    compteur += 1;
    console.log(compteur,"compteur après incrémentation");
}