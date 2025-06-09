function palindrome(number: number): boolean {

  if (number < 0) {
    return false
  }
  if (number === 0) {
    return true
  }

  let tempNum = number;
  let reversedNum = 0

  while (tempNum > 0) {
    const lastDigit = tempNum % 10
    reversedNum = reversedNum * 10 + lastDigit
    tempNum = Math.floor(tempNum / 10)
  }

  return reversedNum === number
}

export { palindrome };