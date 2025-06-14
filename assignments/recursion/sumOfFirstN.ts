function sumOfFirstN(n: number) {
  if (n < 1) {
    return 0
  }

  let sum = 0;

  sum = n + sumOfFirstN(n - 1)

  return sum;
}

console.log('====================================');
console.log(sumOfFirstN(5));
console.log('====================================');