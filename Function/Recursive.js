/*Exercices avancés
1. Réalisez une fonction récursive permettant de calculer la factorielle d’un nombre
(factorielle de 5 = 5*4*3*2*1, factorielle de 7 = 7*6*5*4*3*2*1 etc)*/

// let j = 7
// let r = 1
// for (let i = 1; i <= j; i++) {
//     r = r * i
//     console.log(r);
// }

function factorial(x) {

    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

let input = prompt('Enter a positive number: ');

if (input >= 0) {
    let result = factorial(input);
    console.log('The factorial of ' + input + ' is ' + result);
}
else {
    console.log('Enter a positive number.');

    /********************************************************* 
    Exercice
    
    Réalisez une fonction récursive permettant d'additionner 2 nombres entiers (a et b)
    
    Vous ne disposez que des opérations suivantes : 
    - Ajouter un à un entier (a+1)
    - Soustraire un à un entier  (a-1)
    - comparer un des 2 entiers  avec 0 (a>0/ a<0/a==0)
    */

    function sommeR(a, b) {
        if (b == 0) {

            return a;
        }

        return sommeR(a + 1, b - 1);
    }

    console.log(sommeR(5, 5));

    /////////////////////////////* Solution prof*//////////////////////////////////////////////////

    function recursive_add(number_1, number_2) {
        if (number_2 == 0) {
            return number_1;
        }
        return recursive_add(number_1 + 1, number_2 - 1);
    }
    console.log(recursive_add(5, 7));


    /////////////////////////////* Solution prof*//////////////////////////////////////////////////


    /*une multiplication equivaut a additioner un nombre avec lui même autant de fois que demander par le 2eme nombre : 3x2 => 3+3; 4x5 => 4+4+4+4+4 */
    /*on a déjà une fonction qui s'occupe d'ajouter un nombre à un autre, donc on va pouvoir utiliser cette étape*/
    //On prend les 2 nombres en parametres et on y ajoute un total qui équivaut si rien n'est passé au nombre 1

    function recursive_multiply(number_1, count, total = 0) {
        console.log('nombre 1 : ', number_1, "nombre de fois qu'il faut encore l'add à lui même", count, "total actuel", total);
        if (count == 0) {
            return total;
        }
        //appel recursif de cette fonction, qui elle même utilise la fonction recursive_add
        return recursive_multiply(number_1, count - 1, recursive_add(number_1, total));
    }

    console.log(recursive_multiply(10, 10));
    console.log(recursive_multiply(10, 5));
    console.log(recursive_multiply(4, 6));
