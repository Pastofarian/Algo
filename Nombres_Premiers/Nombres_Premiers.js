const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}


//---------------------------------------------------------

function nombrePremier(a, b) {

    for (let i = a; i <= b; i++) {
        //on part du principe qu'il est un nombre premier
        let isPremier = true;

        //on vérifie parmis tout les entiers de i-1 à 2
        for (let j = i - 1; j >= 2; j--) {
            if (i % j === 0) {
                //si le modulo donne 0, alors il n'est pas premier, on mets isPremier à false et on arrête de vérifier
                isPremier = false;
                break;
            }
        }

        if (isPremier) {
            console.log(i); //enlevez ce commentaire pour voir les nombres premiers 
        }
    }

}

nombrePremier(5, 400);