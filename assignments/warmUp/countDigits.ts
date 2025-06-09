function countDigits(num: number): number {
  if (num === 0) {
    return 1
  }

  let abs = Math.abs(num)

  let count = 0;
  while (abs > 0) {
    abs = Math.floor(abs / 10)
    count++;
  }

  return count
}

export { countDigits };