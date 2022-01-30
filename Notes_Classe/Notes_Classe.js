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