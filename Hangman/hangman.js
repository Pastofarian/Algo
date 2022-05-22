myString = "test";
let myArray = myString.split("");
console.log(myArray);
let count = 3;

for (let i = 0; i < myArray.length; i++) {
    let newSpan = document.createElement("span");
    let spanContent = document.createTextNode(myArray[i]);
    console.log(myArray[i]);
    newSpan.append(spanContent);
    let myArticle = document.getElementById("mot");
    myArticle.appendChild(newSpan);
}

let spans = document.querySelectorAll('span');


let inputLettre = document.querySelector("input#ip");

inputLettre.addEventListener("keypress", inputLet);

function inputLet(enter) {
    let flag = false;
    if (enter.key === "Enter") {
        console.log("pouet")
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i] == inputLettre.value) {
                spans[i].style.display = "inline-block";
                flag = true;
            }
        }
        if (flag === false) {
            count--;
        }
        if (count === 0) {
            console.log("game over")
            alert("Game over");
            window.location.reload(true);
        } if (flag === false && count != 0) {
            alert("Mauvaise lettre. Essayer a nouveau");
            let myInput = document.querySelector("h2.wrong");
            myInput.innerHTML += inputLettre.value + " ";
            inputLettre.value = "";
            let myInput2 = document.querySelector("p.vie");
            myInput2.innerHTML = "nombre d'essai restant " + count;
        }
        inputLettre.value = "";
    }

}