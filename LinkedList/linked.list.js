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

linkedlist.print() {
    let current = this.head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

function prepend(node, linkedlist) {
    node.next = linkedlist.head; //l’ancienne head devient le next
    linkedlist.head = node; //ce node est maintenant la head
    return linkedlist;
}


let new_node = {
    value: "Bonjour, je suis un nouveau noeud",
    next: null
};

prepend(new_node, linkedlist);
linkedlist.print();