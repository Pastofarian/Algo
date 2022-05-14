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

linkedlist.removeFirst = function () {
    this.head = this.head.next;
}

linkedlist.removeFirst();

linkedlist.print = function () {
    let current = this.head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

linkedlist.print();