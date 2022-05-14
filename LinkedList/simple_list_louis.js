function Node(value, next) {
	this.value = value || null;
	this.next = next || null;
}

function LinkedList() {
	this.head = null;
}

Object.defineProperty(LinkedList.prototype, 'size', {
	get : function () {
		let c = this.head;
		let i = 0;
		while (c) {
			i++;
			c = c.next;
		}
		return i;
	}
})

LinkedList.prototype.prepend =
	function (value) {
		let node = new Node(value);
		node.next = this.head;
		this.head = node;
	}

LinkedList.prototype.toString =
	function () {
		let c = this.head;
		let ret = '[';
		while (c) {
			ret += (c.next) ? c.value.toString() + ', ' : c.value.toString();
			c = c.next;
		}
		ret += ']';
		return ret;
	}

LinkedList.prototype.insertAt =
	function (value, index) {
		if (index === 0)
			return this.prepend(value);
		let c = this.head;
		let i = 0;
		let last = c;
		let size = this.size;
		while (c && i <= size) {
			if (i === index) {
				let node = new Node(value);
				node.next = c;
				if (last !== c)
					last.next = node;
				return true;
			}
			i++;
			last = c;
			c = c.next;
		}
		return false;
	}

LinkedList.prototype.removeAt =
	function (index) {
		if (index === 0)
			return this.removeFirst();
		let c = this.head;
		let i = 0;
		let last = c;
		let size = this.size;
		while (c && i < size) {
			if (i === index) {
				last.next = c.next;
				return c;
			}
			i++;
			last = c;
			c = c.next;
		}
		return null;
	}

LinkedList.prototype.removeFirst =
	function () {
		if (!this.head)
			return null;
		let ret = this.head;
		this.head = this.head.next;
		return ret;
	}

LinkedList.prototype.getNodeByIndex =
	function (index) {
		let c = this.head;
		let i = 0;
		let size = this.size;
		while (c && i < size) {
			if (i === index)
				return c;
			i++;
			c = c.next;
		}
		return null;
	}

LinkedList.prototype.append =
	function (value) {
		if (this.head === null) {
			let node = new Node(value);
			this.head = node
			return node;
		}
		let c = this.head;
		while (c) {
			if (c.next === null) {
				let node = new Node(value);
				c.next = node;
				return ;
			}
			c = c.next;
		}
	}

LinkedList.prototype.getNodeByValue =
	function (value) {
		let c = this.head;
		while (c) {
			if (c.value === value)
				return c;
			c = c.next;
		}
		return null;
	}

LinkedList.prototype.removeLast =
	function () {
		if (!this.head)
			return null;
		let c = this.head;
		let last = c;
		while (c) {
			if (c.next === null) {
				if (c === last) {
					this.head = null;
					return c;
				}
				last.next = null;
				return c;
			}
			last = c;
			c = c.next;
		}
	}

LinkedList.prototype.sort =
	function () {
		
	}


// test 1.

let testlist = new LinkedList();
console.log(testlist.toString());
testlist.prepend('0');
console.log(testlist.toString());
testlist.removeFirst();
console.log(testlist.toString());
testlist.removeFirst();
console.log(testlist.toString());
testlist.removeLast();
console.log(testlist.toString());

