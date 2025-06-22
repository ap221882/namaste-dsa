
//* A Stack is used by compilers in programming languages, by computer memory to store variables and functions call, in text editors to perform undo & redo operations.

//* push(): Adds a single or multiple items to the top of the Stack.

//* pop(): Removes and Returns the top item of the Stack.

//* peek(): Returns the top item of the Stack.

//* isEmpty(): Returns True if Stack is empty, False otherwise.

//* clear(): Removes all the items of the Stack.

//* size(): Returns the length of the stack.


class Stack<T> {
  items: T[]
  top: number;

  constructor() {
    this.items = []
    this.top = 0
  }

  push(item: T) {
    this.items.push(item)
    this.top++;
  }

  pop() {
    this.top--
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }
}
