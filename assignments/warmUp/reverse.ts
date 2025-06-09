function reverse(num: number): number {

  let numCopy = Math.abs(num)


  let reversed = 0;
  while (numCopy > 0) {
    const ld = numCopy % 10;
    reversed = reversed * 10 + ld
    numCopy = Math.floor(numCopy / 10)
  }

  return num > 0 ? reversed : -reversed
}