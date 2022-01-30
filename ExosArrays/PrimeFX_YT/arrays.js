var languagesProg = [];

while(true) {
    var promptText = prompt("Entrez un langage de programmation");
    if(promptText != "") {
        languagesProg.push(promptText);
    } else {
        break;
    }
}

console.log(languagesProg);