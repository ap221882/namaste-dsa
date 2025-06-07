function starBlock(len: number): void {
  for (let i = 0; i < len; i++) {
    process.stdout.write(`\n`);
    for (let j = 0; j < len; j++) {
      process.stdout.write(`*`);
    }
  }
}


function triangle(len: number): void {
  for (let index = 0; index <= len; index++) {
    process.stdout.write(`\n`);
    for (let j = 0; j <= index; j++) {
      process.stdout.write(`*`);
    }
  }
}


function triangleOfNumbers(len: number): void {
  // the number of rows - 4
  // the number of columns - i + 1

  for (let i = 0; i < len; i++) {
    // num of elements = i + 1
    process.stdout.write('\n')
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${j + 1}`)
    }
  }
  process.stdout.write('\n');
}
/**
1
12
123
1234
 */


/**
 * i < n + 1 is similar to i <= n
 */
starBlock(4)
console.log('====================================');
console.log();
console.log('====================================');
triangle(4)
console.log('====================================');
console.log();
console.log('====================================');
triangleOfNumbers(4)