/*1.
Générer dynamiquement un objet avec clefs valeurs (valeur de type string ou int) en
fonction d’inputs utilisateurs*/

let download_btn = document.querySelector('button.download');
let array = [];
let input1 = document.getElementById("input1");
let button1 = document.getElementById("button1");
let myParagraph1 = document.getElementById("p1");
let myParagraph2 = document.getElementById("p2");

button1.addEventListener("click", array_info);
input1.addEventListener("keypress", addInput);
download_btn.addEventListener('click', download);

function display() {
    myParagraph1.innerHTML = array;
}

function addInput(enter) {
    if (enter.key === "Enter") {
        array.push(parseInt(input1.value));
        input1.value = "";
        console.log(array)
    }
}

function array_info() {
    let data = {
        pluspetit: "",
        plusgrand: "",
        pairs: [],
        impairs: []
    };
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            data.pairs.push(array[i]);
        } else {
            data.impairs.push(array[i]);
        }
        if (i == 0) {
            data.pluspetit = array[i];
            data.plusgrand = array[i];
        } else {
            if (array[i] > data.plusgrand) {
                data.plusgrand = array[i];
            } else if (array[i] < data.pluspetit) {
                data.pluspetit = array[i];
            }
        }
    }
    console.log(data);
    return data;
}

function generate(text, name, type = 'text/plain') {
    let link_to_download = document.querySelector("a#download");
    let file = new Blob([text], { type: type });
    link_to_download.href = URL.createObjectURL(file);
    link_to_download.download = name;
}
//Ne fonctionne pas -->objet
//appellée au click du bouton "Créer le fichier" 
function download() {
    generate(array_info(), 'test.txt', 'text/plain');
}
