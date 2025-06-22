class MyQueue {
  s1: number[]
  s2: number[]

  constructor() {
    // pushing stack
    this.s1 = []
    // popping stack
    this.s2 = []
  }

  push(x: number): void {
    this.s1.push(x)
  }

  pop(): number {
    if (this.s2.length === 0) {
      while (this.s1.length !== 0) {
        this.s2.push(this.s1.pop()!)
      }
      return this.s2.pop()!
    } else {
      return this.s2.pop()!
    }

  }

  peek(): number {

    if (this.s2.length === 0) {
      while (this.s1.length !== 0) {
        this.s2.push(this.s1.pop()!)
      }
      return this.s2[this.s2.length - 1]
    } else {
      return this.s2[this.s2.length - 1]
    }
  }

  empty(): boolean {
    return this.s2.length === 0 && this.s1.length === 0
  }
}
