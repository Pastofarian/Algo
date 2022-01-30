console.log('Demandez un nombre entier positif à l’utilisateur (prompt), ensuite bouclez de 1 à ce nombre et afficher à chaque fois le nombre ainsi que sa valeur au carré (1 => 1, 2 => 4, 3 => 9, 4 => 16 etc)')

let num;
num = prompt('Enter an integer');

for(let i=1; i<=num; i++) {
    console.log(i, '=> ',i*i);
}

