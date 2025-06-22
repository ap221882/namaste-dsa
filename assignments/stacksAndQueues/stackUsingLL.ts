class StackUsingLLNode {
  val: number | null;
  next: StackUsingLLNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class StackUsingLL {
  head: StackUsingLLNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(element: number) {
    if (!this.head) {
      this.head = new StackUsingLLNode(element)
      this.length++
      return
    }

    let node = new StackUsingLLNode(element)

    node.next = this.head;
    this.head = node;

    this.length++
  }

  pop() {
    if (!this.head) {
      return null
    }
    let elem = this.head?.val

    this.head = this.head.next;

    this.length--;

    return elem
  }

  peek() {
    return this.head?.val ?? null
  }
}
