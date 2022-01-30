console.log('L’algorithme de calcul de l’IMC (slide cours 2)');

let age = 0;
let weight = 0;
let height = 0;
let imc = 0;

age = prompt("Enter your age"); // assign age

if(age<18){
  console.log("You are too young");
}
else if (age>60){
  console.log("You are too old");
}
weight = prompt("Enter your weight in kg"); // assign weight

height = prompt("Enter your height in cm"); // assign height

imc = weight/(height/100)**2

if(imc<18.5){
  console.log("Insufficiant weight");
}
else if(imc<25){
  console.log("normal weight");
}
else if(imc<30){
  console.log("overweight");
}
else if(imc<40){
  console.log("obesity");
}
else{
  console.log("morbid obesity");
}

/* let imc;
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
} */


