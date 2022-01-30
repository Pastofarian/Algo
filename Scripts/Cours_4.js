// Correction exercice 30-11
let a = 5;
let b = 10;
let c = 300;
let x = 300;

if (a<b)
{
  x=100;
}
else (b<c)
{
  x=200;
}

console.log(x);

----------------------------------------------------------------------------------

//Réalisez le code nécessaire pour : 

console.log('L’algorithme de calcul de l’IMC (slide cours 2)');
let age = 0;
let weight = 0;
let height = 0;
let imc = 0;

age = window.prompt("Enter your age"); // assign age

if(age<18){
  console.log("You are too young");
}
else if (age>60){
  console.log("You are too old");
}
weight = window.prompt("Enter your weight in kg"); // assign weight

height = window.prompt("Enter your height in cm"); // assign height

imc = weight/(height/100)**2

if(imc<18.5){
  console.log("Insufficiant weight");
}
else if(imc<24.9){
  console.log("normal weight");
}
else if(imc<29.9){
  console.log("overweight");
}
else if(imc<39.9){
  console.log("obesity");
}
else{
  console.log("morbid obesity");
}

/*Correction*/
let imc;
let age = prompt('Quel est votre age?');

if (age >= 18) {
  if (age >= 60) {
    console.log("attention, le calcul n'est pas indiqué vu votre âge");
  }
  let height = prompt('Quel est votre taille (en cm)');
  height = parseInt(height);
  height /= 100;
  let weight = prompt('Quel est votre poids (en kg)');
  weight = parseInt(weight);
  imc = weight / ((height*height));
  let category = "";
  if (imc < 18.5) {
    category = "poids insuffisant";
  } else if (imc < 25) {
    category = "poids normal";
  } else if (imc < 30) {
    category = "surpoids";
  } else if (imc < 40) {
    category = "obésité";
  } else {
    category = "obésité morbide";
  }
  console.log('Vous êtes dans la catégorie', category, 'Votre imc est de', imc);
} else {
  console.log("Vous etes trop jeune pour calculer votre IMC");
}

               ---------------------------------------------
			   
console.log("Parcourir les entiers de 1 à 100 et affichez (console.log) l’entier sauf si celui ci est un multiple de 5, affichez “Coucou”, et si celui ci est un multiple de 7, affichez “Hibou”")


for(let i=0; i<=100; i++) {
    if(i%5 == 0 && i%7 == 0) {
        console.log("Coucou/Hibou");
    }
    else if(i%7 == 0) {
        console.log("Hibou");
    }
    else if(i%5 == 0) {
        console.log("Coucou");
    }
    else{
        console.log(i);
    }
}

// Correction
for(let i=1; i<=100; i++) {
  let message = "";
  if (i%5 == 0) {
    message+= "Coucou";
  }
  if (i%7 == 0) {
    message += "Hibou";
  }
  if (i%3 == 0) {
	  message += "Chouette";
	  
  message ? console.log(message) : console.log(i);
}

			-------------------------------------------------
			
console.log('Demandez un nombre entier positif à l’utilisateur (prompt), ensuite bouclez de 1 à ce nombre et afficher à chaque fois le nombre ainsi que sa valeur au carré (1 => 1, 2 => 4, 3 => 9, 4 => 16 etc)')

let num;
num = prompt('Enter an integer');

for(let i=1; i<=num; i++) {
    console.log(i, '=> ',i*i);
}
/*Correction*/

let nombre = prompt('Entrez un nombre entier');

for(let i=1; i<=nombre; i++) {
  console.log(i, i*i);
}
			------------------------------------------------
			
console.log('La question 2 de l’interro (pp pg)');

let pp = 0;
let pg = 0;
let nb = 0;

nb = prompt("Veuillez entrer un nombre");

while(nb != 0) {
  if(pp==0 && pg==0) {
    pp = nb
    pg = nb
  }
  else if(nb<pp) {
    pp = nb
  } 
  else {
    pg = nb
  }
  nb = prompt("Veuillez entrer un nombre");
}
console.log(nombre<pg ? pg = nombre : pp = nombre);

/*Correction*/

//V1 => While

let nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
let pp = nombre;
let pg = nombre;

while (nombre != 0) {
  if (pp > nombre) {
    pp = nombre;
  }
  if (pg < nombre) {
    pg = nombre;
  }
  console.log('so far', pp, pg);
  nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
}

console.log('pp', pp, 'pg', pg);



//V2 => Do While

let pp = 0;
let pg = 0;
let nombre = 0;

do {
  nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
  if (pp == 0 && pg == 0 && nombre != 0) {
    pp = nombre;
    pg = nombre;
  } else if (nombre != 0) {
    if (pp > nombre) {
      pp = nombre;
    } else if (pg < nombre) {
      pg = nombre;
    }
  }
} while (nombre != 0);
console.log('pp', pp, 'pg', pg);



//V3 => Utilisation de ternaires

let pp = 0, pg = 0, nombre = 0;
do {
  nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
  pp = !pp && nombre ? nombre : pp && nombre && pp > nombre ? nombre : pp;
  pg = !pg && nombre ? nombre : pg && nombre && pg < nombre ? nombre : pg;
} while (nombre);
console.log('pp', pp, 'pg', pg);




//V2 Avec somme et moyenne => Do While

let pp = 0;
let pg = 0;
let nombre = 0;
let somme = 0;
let cpt = 0;

do {
  nombre = parseInt(prompt('Entrez un nombre (0 pour arreter)'));
  
  if (nombre != 0) {
    somme += nombre;
    cpt++;
    
    if (pp == 0 && pg == 0) {
      pp = nombre;
      pg = nombre;
    }
    
    if (pp > nombre) {
      pp = nombre;
    } else if (pg < nombre) {
      pg = nombre;
    }
  }
} while (nombre != 0);
console.log('pp', pp, 'pg', pg, 'la somme est', somme, 'la moyenne est', somme/cpt);


        ------------------------------------------------
		
console.log('Améliorez le code précédent pour y intégrer la somme des nombres demandés ainsi qu’afficher la moyenne');

let pp = 0;
let pg = 0;
let nb = 0;
let total = 0;
let i = 0;
let avg = 0;

nb = prompt("Veuillez entrer un nombre");
nb = parseInt(nb);

while(nb != 0) {
  total = total + nb;
  total = parseInt(total);
    
  if(pp==0 && pg==0) {
    pp = nb
    pg = nb
  }
  else if(nb<pp) {
    pp = nb
  } 
  else {
    pg = nb
  }
  i++;

  nb = prompt("Veuillez entrer un nombre");
  nb = parseInt(nb);
  avg = total/i;
  avg = parseInt(avg);
}
console.log(pp, pg, total, avg);

            ---------------------------------------------------------
			
console.log("La question 5 de l’interro (notes de la classe)");
let nombreNote = 0;
let totalNotes = 0;
let notes20 = 0;
let note0 = 0;
let moyenne = 0;
let note = 0;
let quit = "q";


 while(note != 21) {
note = prompt("Entrer une note sur 20, taper 21 pour arrêter le programme");
 note = parseInt(note);
if(note==20) {
    notes20++;
}
if(note==0) {
    note0++;
}
 totalNotes+=note;
 nombreNote++
}

moyenne = totalNotes/nombreNote;
console.log(nombreNote, "cotes, pour une moyenne de", moyenne, "avec", notes20, "20/20", "et", note0, "0/20");
              -------------------------------------------
			  

console.log("Permettre de boucler sur les entiers de 1 à 10 et d’afficher à chaque fois les lettres de A à Z (résultat : 1A, 2A, 3A… 10A, 1B, 2B, 3B, … 10B, 1C etc) (indice A à Z = Char code de  65 à 90)")

for(let i=65; i<90; ++i) 
for(let x=1; x<11; x++)
console.log((x)+ String.fromCharCode(i));

/*Correction*/
for(let i=1; i<=10; i++) {
  for (let j=65; j<91; j++) {
    console.log(i,String.fromCharCode(j));  
  }
}

        -------------------------------------------------------
		

console.log("Boucler sur les entiers compris entre 2 valeurs données par l’utilisateur dans l’ordre (si l’utilisateur donne 25 puis 10, bouclez en décrémentation 25, 24, 23, 22 etc)")

let x = 0;
let y = 0;

x = prompt("Enter an integer");
y = prompt("Enter an integer"); 

if(x < y){
  while(x < y){ 
 x++;
console.log(x);
 }
} else if(x > y) {
  while(x > y){
    x--;
    console.log(x);
  }
} else {
    console.log("The numbers are equals");
}

/*Correction*/
let start = parseInt(prompt('Votre premier nombre'));
let end = parseInt(prompt('Votre deuxieme nombre'));

if (start > end) {
  for (start; start >= end; start--) {
    console.log(start);
  }
} else if (start < end) {
  for (start; start <= end; start++) {
    console.log(start);
  }
} else {
  console.log('Les 2 nombres sont similaires');
}
----------------------------------------------------------------------------

console.log("Calculer les N premiers nombres premiers (entiers divisible par 1 et lui-même uniquement")

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
    }
}

/*Correction*/
let compteur = 15; //N nombres premiers
let nb = 2;
while (compteur) {
  let isPremier = true;
  if (nb > 2) {
    for (let i=2; i<nb ;i++) {
      if (nb%i === 0) {
        isPremier = false;
      }
    }
  }
  
  if (isPremier) {
    console.log(nb, 'est un nombre premier');
    compteur--;
  }
  nb++;
}


----------------------------------------------------------------------------

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










//Exercice Min/Max

let min = 0
let max = 0

min = prompt("Enter an integer");
max = prompt("Enter any number but greater than previously");

if(min<max){
  while(min<max)
  min++
  console.log(min);
  } //affiche min
else{
console.log(max, "Is not greater than ", min," You Stupid !");
} //affiche x



