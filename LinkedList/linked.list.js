let myLinkedList = {
    head: {
        value: "je suis le premier noeud",
        next: {
            value: "je suis le 2eme noeud",
            next: null
        }
    }
}
/*console.log une linkedlist*/
function print(linkedlist) {
    let current = linkedlist.head; //on commence par la head
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

console.log(myLinkedList);

/*ajouter un élément au début de ma linkedlist*/
function prepend(node, linkedlist) {
    node.next = linkedlist.head; //l’ancienne head devient le next
    linkedlist.head = node; //ce node est maintenant la head
    return linkedlist;
}

prepend("je suis le nouveau premier noeud", myLinkedList);
console.log(myLinkedList);

/*ajouter un élément n’importe où dans ma liste*/
function insert_at(index, node, linkedlist) {
    if (index == 0) {
        return prepend(node, linkedlist);
    }
}