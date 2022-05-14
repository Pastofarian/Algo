//changer le contenu d'un paragraphe au click d'un bouton

let my_button = document.querySelector("button.my-button");
my_button.addEventListener("click", clickbtn);

function clickbtn() {
    console.log("Click");
    let my_paragraph = document.querySelector("p.text");
    my_paragraph.innerHTML = "Bonjour";
    my_paragraph.style.backgroundColor = "green";
}