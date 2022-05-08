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

/*Réalisez la fonction remove_first : pour enlever le premier noeud de votre liste*/
linkedlist.removeFirst = function () {
  let temp = this.head;
  this.head = this.head.next;
  return temp;
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
      console.log("Le noeud à l'emplacement " + place + ' est : "' + current.value + '"');
    }
  }
}
linkedlist.read(2); //on compte comme un tableau en commencant à 0 

/*Réalisez la fonction append : pour insérer un nouveau noeud à la fin de votre liste*/

/*Réalisez la fonction remove_last : pour enlever le dernier noeud de votre liste*/