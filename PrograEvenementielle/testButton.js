//changer le contenu d'un paragraphe au click d'un bouton

let my_button = document.querySelector("button.my-button");
my_button.addEventListener("click", clickbtn);

function clickbtn() {
    console.log("click");
    let my_p = document.querySelector("p.text");
    my_p.innerHTML = "Bonsoir?";
    my_p.style.color = "red";
}