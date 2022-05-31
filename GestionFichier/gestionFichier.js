//mise en variable de l'input file ainsi que du bouton download
let input_file = document.querySelector('#file-input');
let download_btn = document.querySelector('button.download');

//ajout d'event listeners
input_file.addEventListener('change', file_changed);
download_btn.addEventListener('click', download);

//cette fonction est appellée dès que le fichier est changé
function file_changed() {
    if (this.files.length === 0) {
        console.log('Pas de fichier sélectionné');
        return;
    }

    const reader = new FileReader();
    reader.onload = function contenu_charger() {
        //ce résultat est appellé lorsque le contenu du fichier uploadé est chargé
        console.log(reader.result);
        splited(reader.result);
        sorted(reader.result);
    };
    reader.readAsText(this.files[0]);
}

function splited(result) {
    let data = parseInt(result.split(";"));
    console.log(data);
    let new_paragraph = document.createElement("p");
    let paragraph_content = document.createTextNode(data);
    //console.log(input_file.value);
    new_paragraph.append(paragraph_content);
    let my_article = document.getElementById("article1");
    my_article.appendChild(new_paragraph);
    article1.style.color = "red";
}

function sorted(result) {
    let data = result.split(";");

    for (let i = 0; i < data.length - 1; i++) {

        for (let j = 0; j < data.length - i - 1; j++) {
            console.log('i:', i, 'j:', j);
            if (data[j] > data[j + 1]) {
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
                //console.log('swap', data);
            }
        }
    }
    let new_paragraph2 = document.createElement("p");
    let paragraph_content2 = document.createTextNode(data);
    //console.log(input_file.value);
    new_paragraph2.append(paragraph_content2);
    let my_article2 = document.getElementById("article2");
    my_article2.appendChild(new_paragraph2);
    article2.style.color = "red";
    generate(data, 'sorted.txt');
}

//prend 3 parametres : le text, le nom du fichier et son type (par defaut text/plain)
function generate(text, name, type = 'text/plain') {
    let link_to_download = document.querySelector("a#download");
    let file = new Blob([text], { type: type });
    link_to_download.href = URL.createObjectURL(file);
    link_to_download.download = name;
}

//appellée au click du bouton "Créer le fichier"
function download() {
    generate('test', 'test.txt', 'text/plain');
}

