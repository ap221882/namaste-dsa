class MyStack {

  q1: number[]
  q2: number[]

  constructor() {
    this.q1 = [];
    this.q2 = []
  }

  push(x: number): void {
    this.q1.push(x);
  }

  pop(): number {
    for (let i = 0; i < this.q1.length - 1; i++) {
      this.q2.push(this.q1[i])
    }

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    let topEl = this.q2[this.q2.length - 1]
    this.q2 = []
    return topEl;
  }

  top(): number {
    for (let i = 0; i < this.q1.length - 1; i++) {
      this.q2.push(this.q1[i])
    }
    let topEl = this.q1[this.q1.length - 1];
    this.q2.push(topEl);

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    this.q2 = [];

    return topEl;

  }

  empty(): boolean {
    return this.q1.length === 0
  }
}


class MyStack2 {

  q1: number[]

  constructor() {
    this.q1 = [];
  }

  push(x: number): void {
    this.q1.push(x);
  }

  pop(): number | undefined {
    for (let i = 0; i < this.q1.length - 1; i++) {
      this.q1.push(this.q1.shift?.()!)
    }

    return this.q1.shift()
  }

  top(): number {
    for (let i = 0; i < this.q1.length - 1; i++) {
      this.q1.push(this.q1.shift()!)
    }
    let topEl = this.q1[0];
    this.q1.push(this.q1.shift()!)

    return topEl;

  }

  empty(): boolean {
    return this.q1.length === 0
  }
}
