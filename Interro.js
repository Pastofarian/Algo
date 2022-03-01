

/* -----------------------------------Partie Théorique ----------------------------------------*/

// Combien de “else” peut-on avoir après un if?

Un seul

// Quel est la différence entre une boucle “while” et une boucle “do while”

la boucle while "fait tant que" la boucle do while exécute une première fois le code avant de rentrer dans la boucle.

    // Citez et expliquez succinctement les 3 tris vu en cours et leurs fonctionnement respectifs.

    Bubble : Le tri à bulles fonctionne sur l'échange répété, par couple (2 par 2), de données dans un tableau jusqu'à ce qu'elles soient dans l'ordre prévu(croissant ou décroissant). 
Au fur et à mesure que la boucle avance, le tableau se trie en partant de la fin vers le début.

    Selection: Dans le tri par sélection, la plus petite valeur parmi les éléments non triés du tableau est sélectionnée à chaque passage de boucle et insérée à la bonne position dans le tableau. 
Dans cet algorithme, le tableau est divisé en deux parties par "un marqueur", la première est la partie triée et l'autre est la partie non triée. Au début, la partie triée du tableau est vide et la partie non triée est le tableau donné. 
La partie triée est placée à gauche, tandis que la partie non triée est placée à droite.

    Insertion : On suppose que la première valeur est déjà triée dans le tableau, puis on sélectionne une valeur non triée.Si la valeur non triée sélectionnée est supérieure à la première valeur, elle sera placée à droite; sinon, elle sera placée sur le côté gauche. 
En fait, toutes les valeurs non triées sont prises et remises à leur place.
    L'idée du tri par insertion est de prendre d'abord un élément et de le parcourir dans le tableau trié.Ce qui fait que le tableau se trie de gauche(index 0) vers la droite(index N)

//Vous devez réaliser le tri d’un tableau d’entiers, mais la contrainte est de limiter au
//maximum les swaps (échange des valeurs entre 2 indexs du tableau). Parmi les
//différents algorithmes de tris vu au cours, lequel choisiriez-vous et pourquoi ?

Je choisirais "selection sort" car ce tri va chercher la valeur la plus petite(ou la plus grande dans le cas d'un tri décroissant)
et la swap avec la valeur la plus à gauche non trié.

        //Que représente la notation “Big O” (O(...)) dans le contexte d’un algorithme?
        //Quelle est sa valeur moyenne pour les algorithmes vus en classe?

        Le "Big O" représente la complexité de l'algorithme/la ressource utilisé pour éffectuer le tri. 
certain algorithme sont plus efficace que d'autre en fonction du nombre de boucle et de swap.
La valeur moyenne pour les algorithmes vus en classe est de O(n²)


/* -----------------------Partie pratique-------------------------------------------------------*/

    /*Réalisez le code nécessaire pour l’énoncé suivant :
        Je souhaiterais vérifier si le résultat de l’interro est réussi, raté, ou tout juste réussi.
        J’encode un résultat sur 40 et souhaiterais voir le score remis sur 20 ainsi que le
        message : “l’interro est réussie” si > à 10/20, “l’interro est ratée” si < à 10/20, et
        “l’interro est tout juste réussie” dans le cas où l'élève a 10/20.
        Exemple
        score : 30
        Résultat : “l’interro est réussie avec un score de 15/20”
        Point bonus : Permettez à votre programme de continuer jusqu’à ce que l’utilisateur
        entre “stop”*/

        while (true) {
    let note = parseInt(prompt("Entrez une note sur 40 ou stop pour arrêter"));

    if (note < 20 && note >= 0) {
        alert("l'interro est ratée");
    }
    else if (note == 20) {
        alert("l’interro est tout juste réussie");
    }
    else if (note > 20 && note < 41) {
        alert("l’interro est réussie");
    }
    else if ("stop") {
        break;
    }

    console.log(note);

    /*Créez et parcourez un tableau d’entiers du premier élément au dernier en évitant les
    indexs pairs.
    Point bonus : Réalisez l’exercice sans utiliser de if, et sans utiliser de modulo (%)*/

    let arr = [1, 2, 3, 4, 5, 6, 7];
    let arr1 = []; // je crée un tableau "Créez et parcourez"

    for (i = 1; i < arr.length; i += 2) {
        arr1.push(arr[i]); //si il faut juste parcourir arr cette ligne n'est pas nécéssaire 
        console.log(arr1); // du coup console.log(arr)
    }

    /*Réalisez le code permettant d’inverser un tableau.
    Tableau : [5, 3, 8, 1]
    Résultat : [1, 8, 3, 5]*/

    let arr = [1, 2, 3, 4, 5, 6, 7];
    let arr2 = [];

    for (i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    console.log(arr2);

    /*Remplacez dans le tableau de départ :
    Les valeurs aux indexs multiples de 3 par “coucou”
    Les valeurs aux indexs multiples de 5 par “hibou”
    Tableau de départ :
    let myArray = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5] ;Point bonus : 
    Permettez à l’utilisateur de choisir les multiples à modifier (au lieu de 3
    et 5)*/

    let myArray = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 59];
    for (let i = 0; i < myArray.length; i++) {

        if (i % 3 == 0) {
            myArray[i] = "coucou";
        }
        if (i % 5 == 0) {
            myArray[i] = " hell yeah !";
        }
    }
    console.log(myArray);

    // ----------------------------------- bonus----------------

    let myArray = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 59];
    let input1 = prompt("Entrez une valeur pour être remplacer par coucou")
    let input2 = prompt("Entrez une valeur pour être remplacer par hell yeah !")

    for (let i = 0; i < myArray.length; i++) {

        if (i % input1 == 0) {
            myArray[i] = "coucou";
        }
        if (i % input2 == 0) {
            myArray[i] = " hell yeah !";
        }
        if (i % input1 && i % input2 == 0) {
            myArray[i] = "coucou hell yeah !"
        }
    }
    console.log(myArray);

    /*Triez par ordre décroissant les entiers dans le tableau suivant, précisez l’algorithme
    choisi.
    Exemple :
    Tableau [5, 3, 8, 1, 2, 7]
    Résultat [8, 7, 5, 3, 2, 1]*/

    //tri à bulle
    let myArray = [5, 3, 8, 1, 2, 7];
    console.log('Unsorted', myArray);
    for (let i = 0; i < myArray.length - 1; i++) {

        for (let j = 0; j < myArray.length - i - 1; j++) {
            console.log('i:', i, 'j:', j);
            if (myArray[j] < myArray[j + 1]) {
                let temp = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = temp;
                console.log('swap', myArray);
            }
        }
    }
    console.log('Sorted', myArray);

    /*Le code présent ci-dessous ne fonctionne pas.
    Réparez le code, listez les différents problèmes rencontrés ainsi que pourquoi et
    comment vous les avez résolus*/

    let myArray = [7, 3, 8, 9, 0, 2]; //déclaration de variable "let" manquante
    for (let i = 0; i < myArray.length; i++) {
        for (let j = 1; j < myArray.length; j++) {
            if (myArray[j] < myArray[j - 1]) {  //comparer j avec la valeur j - 1 
                let temp = myArray[j]; //placer la valeur j dans la variable temporaire
                myArray[j] = myArray[j - 1]; //placer la valeur plus haute un cran à droite vers la fin du tableau
                myArray[j - 1] = temp; //remplacer la valeur par celle qui se trouve dans la variable temporaire 
            }
        }
    }
    console.log(myArray);  //renvoyer un résultat
