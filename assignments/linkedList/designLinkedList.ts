
class MyNode {
  value: number;
  next: MyNode | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

class MyLinkedList {
  size: number
  head: MyNode | null

  constructor() {
    this.head = null
    this.size = 0
  }

  addAtHead(val: number) {
    const newNode = new MyNode(val)
    newNode.next = this.head;
    // head is to be assigned first, because else LL will be of no use - head is the representation of LL
    this.head = newNode;
    this.size++;
  }

  addAtTail(val: number) {
    // what if head is null?
    if (this.head === null) {
      const newNode = new MyNode(val);
      this.head = newNode
    } else {
      // find last
      let current = this.head;

      while (current.next !== null) {
        current = current.next
      }

      // add new node
      const newNode = new MyNode(val);
      current.next = newNode

    }

  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return;
    const newNode = new MyNode(val);
    let curr = this.head;

    // Case 1: Add at head
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let curr = this.head;

      for (let i = 0; i < index - 1; i++) {
        // TS defensive check
        if (curr === null) return;
        curr = curr.next;
      }

      // TS defensive check
      if (curr === null) return;

      newNode.next = curr.next;
      curr.next = newNode;
    }

    this.size++;

  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let curr = this.head;

    for (let i = 0; i < index; i++) {
      if (curr === null) return -1;
      curr = curr.next
    }

    if (curr === null) return -1;

    return curr.value
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) { return; }

    let curr = this.head;

    if (index === 1 && this.head) {
      this.head = this.head?.next
      this.size--
    }

    for (let i = 0; i < index - 1; i++) {
      if (curr === null) return;
      curr = curr?.next
    }

    if (curr && curr?.next && curr.next.next) {
      curr.next = curr?.next?.next;

      curr.next.next = null
      this.size--
    }


  }
}
