// 6. Réalisez le code nécessaire pour permettre à l’utilisateur de gérer une liste chaînée
// d’afficher / ajouter au début / ajouter à la fin / compter la longueur via différents boutons
let linkedlist = {
    head: {
        value: "je suis le premier node, la 'head'",
        next: {
            value: "je suis le 2eme node",
            next: {
                value: "je suis le dernier node, le 'tail'",
                next: null
            }
        }
    }
}

let input = document.getElementById("input");
let display = document.getElementById("display");
let addBeginning = document.getElementById("beginning");
let addEnd = document.getElementById("end");
let count = document.getElementById("count");

addBeginning.addEventListener("click", prepend);
display.addEventListener("click", print);

function prepend(node) {
    node.next = linkedlist.head; //l’ancienne head devient le next
    linkedlist.head = node; //ce node est maintenant la head
    console.log(linkedlist);
}

linkedlist.print = function () {
    let current = this.head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
    linkedlist.print();
}

