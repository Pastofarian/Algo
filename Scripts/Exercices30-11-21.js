

let name = Paul
let numberOfCats = 2
let numberOfDogs = 3
let liveIn = Wavre
let placeOfBirth = "Braine-l'alleud"
let age = 25
let numberOfChildren = 0

   --------------------------------------------------
   
let name = "Paul"
let numberOfCats = 2
let numberOfDogs = 3
let liveIn = "Wavre"
let placeOfBirth = "Braine-l'alleud"
let age = 25
let numberOfChildren = 0


  ---------------------------------------------------

let hasChildren = false;
let myName = "Benjamin";
let isAlive = true;
let amount = 500;
let numberOfStudent = 20;
let address = "1348, Louvain-La-Neuve";
let hasGrades = false;
let height = 180;
let averageGrade = 12;
const STANDART = false; //Boolean en constante??

  ---------------------------------------------------
  
let a = 5;
let b = 10;

let x = 300;

if (a>=b)
{
  x=100;
}
console.log(x);

-------------

let a = 5;
let b = 10;
let c = 300;
let x = 0;

if (a<b)
{
  x=100;
}
else if(b<c)
{
  x=200;
}
else 
{
	x=300;
}
console.log(x);

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