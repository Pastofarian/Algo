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
linkedlist.size = function () {
    let current = this.head;
    let count = 0;
    while (current) {
        current = current.next;
        count++;
    }
    return count;
}
/*Réalisez la fonction remove_first : pour enlever le premier noeud de votre liste*/

linkedlist.removeFirst = function () {
    let temp = this.head;
    this.head = this.head.next;
    return temp;
}

linkedlist.removeFirst();

linkedlist.prepend = function (node) {
    node.next = this.head; //l’ancienne head devient le next
    this.head = node; //ce node est maintenant la head
}

/*fonction print */
linkedlist.print = function () {
    let current = this.head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

linkedlist.print();