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
/* prepend */
console.log(linkedlist);

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

/*Réalisez la fonction create_node : qui retourne un nouveau noeud*/

function createNode(valeur) {
  let node = {
    value: valeur,
    next: null
  };
  return node;
}

linkedlist.prepend(createNode('Bonjour'));

/*Réalisez la fonction insert_at : pour insérer un nouveau noeud dans votre liste à l’endroit choisi*/

linkedlist.insert_at = function (place, node) {
  if (place == 0) {
    return this.prepend(node);
  }
  let curr = this.head;
  let i = 1;
  while (place > i) {
    curr = curr.next;
    i++;
  }
  node.next = curr.next;
  curr.next = node;
}

linkedlist.insert_at(2, new_node);

/*****************avec Louis************************************ */

linkedlist.insertAt = function (index, node) {
  if (index === 0)
    return this.prepend(node);
  let current = this.head;
  let lastCurrent = this.head;
  let i = 0;
  while (lastCurrent !== null) {
    if (i === index) {
      lastCurrent.next = node;
      node.next = current;
      return;
    }
    lastCurrent = current;
    current = current.next;
    i++;
  }
}

linkedlist.insertAt(0, new_node);

let new_node = {
  value: "Bonjour, je suis un nouveau noeud",
  next: null
};

/*****************solution prof*********** */
linkedlist.insert_at = function (place, node) {
  if (place == 0) {
    return this.prepend(node);
  }
  let curr = this.head;
  let i = 1;
  while (place > i) {
    curr = curr.next;
    i++;
  }
  node.next = curr.next;
  curr.next = node;
}


/*Réalisez la fonction remove_first : pour enlever le premier noeud de votre liste*/
linkedlist.removeFirst = function () {
  this.head = this.head.next;
}

linkedlist.removeFirst();

/*Réalisez la fonction remove_at : pour enlever un noeud dans votre liste à l’endroit choisi*/
linkedlist.removeAt = function (place) {
  if (place == 0) {
    return this.removeFirst();
  }
  let current = this.head;
  let count = 0;
  let last = current;
  while (current && count < this.size()) {
    //console.log('current.value = ' + current.value);
    if (count == place) {
      last.next = current.next;
      return current;
    }
    count++;
    last = current;
    current = current.next;
  }
  return null;
}

linkedlist.removeAt(1);

/*****************Avec Benja*************************** */

linkedlist.removeAt = function (index) {
  if (index == 0) {
    this.head = this.head.next;
  } else {
    let cur = this.head;
    let count = 0;
    let val;

    while (cur) {
      if (index + 1 == count) {
        val = createNode(cur.value, cur.next);
      }
      cur = cur.next;
      count++;
    }
    count = 0;
    cur = this.head;
    while (cur) {
      if (index - 1 == count) {
        cur.next = val;
      }
      cur = cur.next;
      count++;
    }
  }
}

/******************solution prof********** */
linkedlist.remove_at = function (place) {
  if (place == 0) {
    return this.remove_first();
  }
  let curr = this.head;
  let i = 1;
  while (place > i) {
    curr = curr.next;
    i++;
  }
  curr.next = curr.next.next;
}

/*Réalisez la fonction size : pour compter le nombre des noeuds dans votre liste*/
linkedlist.size = function () {
  let current = this.head;
  let count = 0;
  while (current) {
    current = current.next;
    count++;
  }
  console.log("La longueur de l'objet est " + count);
}

linkedlist.size();

/*********solution prof *******************/
linkedlist.size = function () {
  let node = this.head;
  let size = 0;
  while (node) {
    node = node.next;
    size++;
  }
  return size;
}


/*Réalisez la fonction read : pour lire un élément de la liste à l’endroit choisi*/
linkedlist.read = function (place) {
  let current = this.head;
  let count = 0;
  while (current) {
    // console.log('place = ' + place)
    // console.log('count = ' + count)
    current = current.next;
    count++;
    if (place == count) {
      return current.value
    }
  }
}
linkedlist.read(2);

/***************Avec Benja********************************* */

linkedlist.read = function (index) {
  let current = this.head;
  let count = 0;
  let value;
  while (current) {
    if (index == count) {
      value = createNode(current.value, current.next);
    }
    current = current.next;
    count++;
  }
  return value;
}
console.log(linkedlist.read(1));

/*****************solution prof avec un for**************** */
linkedlist.read = function (index) {
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.value;
}

/*Réalisez la fonction append : pour insérer un nouveau noeud à la fin de votre liste*/

linkedlist.append = function (newValue) {
  let current = this.head
  while (current) {
    if (current.next == null) {
      let node = newValue;
      current.next = node;
      return;
    }
    current = current.next;
  }
}
linkedlist.append(new_node);

/********************Solution prof******************* */

linkedlist.append = function (node) {
  let current = this.head;
  while (current) {
    if (!current.next) {
      break;
    }
    current = current.next;
  }
  current.next = node;
  node.next = null;
}

/*Réalisez la fonction remove_last : pour enlever le dernier noeud de votre liste*/

linkedlist.removeLast = function () {
  let current = this.head;
  let temp = current;
  while (current) {
    if (current.next == null) {
      temp.next = null;
      return current;
    }
    temp = current;
    current = current.next;
  }
}
linkedlist.removeLast();

/******************solution prof************ */
linkedlist.remove_last = function () {
  let size = this.size();
  return this.remove_at(size - 1);
}