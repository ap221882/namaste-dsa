function factorial(n: number): number {

  if (n === 1 || n === 0) {
    return 1
  }

  return n * factorial(n - 1)
}