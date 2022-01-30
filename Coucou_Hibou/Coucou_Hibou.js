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
    else if(i%3 == 0)
        console.log("Chouette");
    else{
        console.log(i);
    }
}

//correction Benjamin

/* for(let i=1; i<=100; i++) {
    let message = "";
    if (i%5 == 0) {
      message+= "Coucou";
    }
    if (i%7 == 0) {
      message += "Hibou";
    }
    message ? console.log(message) : console.log(i);
  } */