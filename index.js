class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }

    this.length++;
  }

  prepend(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }

    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.nextNode;
      i++;
    }

    return current;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.length === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return node;
    }

    let current = this.head;
    let previous = null;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null;
    this.tail = previous;
    this.length--;

    return current;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let i = 0;

    while (current) {
      if (current.value === value) {
        return i;
      }

      current = current.nextNode;
      i++;
    }

    return null;
  }

  toString() {
    let current = this.head;
    let str = "";

    while (current) {
      str += `(${current.value}) -> `;
      current = current.nextNode;
    }

    str += "null";
    return str;
  }
}

//create list
const list = new LinkedList();

//Test
list.append(1);
list.append(2);
list.append(3);
console.log(list.toString()); // (1) -> (2) -> (3) -> null
console.log(list.size()); // 3
console.log(list.head()); // Node { value: 1, nextNode: Node { value: 2, nextNode: [Node] } }
console.log(list.tail()); // Node { value: 3, nextNode: null }
console.log(list.at(1)); // Node { value: 2, nextNode: Node { value: 3, nextNode: null } }
console.log(list.pop()); // Node { value: 3, nextNode: null }
console.log(list.contains(2)); // true
console.log(list.contains(4)); // false
