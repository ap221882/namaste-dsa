function starBlock(len: number): void {
  for (let i = 0; i < len; i++) {
    process.stdout.write(`\n`);
    for (let j = 0; j < len; j++) {
      process.stdout.write(`*`);
    }
  }
  process.stdout.write('\n');
}


function triangle(len: number): void {
  for (let index = 0; index <= len; index++) {
    process.stdout.write(`\n`);
    for (let j = 0; j <= index; j++) {
      process.stdout.write(`*`);
    }
  }
  process.stdout.write('\n');
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

function consecutiveNumTriangle(len: number): void {
  for (let index = 0; index < len; index++) {
    process.stdout.write(`\n`)
    for (let j = 0; j <= index; j++) {
      process.stdout.write(`${index + 1}`)
    }
  }
  process.stdout.write(`\n`)
}

// 1
// 22
// 333
// 4444


function triangleInverted(len: number): void {
  for (let i = 0; i < len; i++) {
    process.stdout.write('\n')
    for (let j = 0; j < len - i; j++) {
      process.stdout.write(`${len - i - j}`)
    }
  }
  process.stdout.write(`\n`)
}
// 4321
// 321
// 21
// 1

function triangleInverted2(len: number): void {
  for (let i = 0; i < len; i++) {
    process.stdout.write('\n')
    for (let j = 0; j < len - i; j++) {
      process.stdout.write(`${j + 1}`)
    }
  }
  process.stdout.write(`\n`)
}

// 1234
// 123
// 12
// 1

function triangleMirror(len: number): void {
  for (let i = 0; i < len; i++) {
    process.stdout.write('\n')
    for (let j = 0; j < len; j++) {
      if (j < len - 1 - i) {
        process.stdout.write(' ')
      } else {
        process.stdout.write("*")
      }
    }
  }
  process.stdout.write('\n')
}

/**
    *
  **
 ***
****
 */

function toggleTriangle(len: number) {
  for (let i = 0; i < len; i++) {
    process.stdout.write('\n')
    let toggle = 1
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(`${toggle}`)
      if (toggle === 1) {
        toggle = 0
      } else {
        toggle = 1
      }
    }
  }
  process.stdout.write('\n')
}
// 1
// 10
// 101
// 1010


function toggleTriangle2(len: number) {
  let toggle = 1

  for (let i = 0; i < len; i++) {
    process.stdout.write('\n')
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(`${toggle}`)
      if (toggle === 1) {
        toggle = 0
      } else {
        toggle = 1
      }
    }
  }
  process.stdout.write('\n')
}

/**
1
01
010
1010
 */

/**
 * i < n + 1 is similar to i <= n
 */
console.log('====================================');
console.log('starBlock');
console.log('====================================');
starBlock(4)
console.log('====================================');
console.log('triangle');
console.log('====================================');
triangle(4)
console.log('====================================');
console.log('triangleOfNumbers');
console.log('====================================');
triangleOfNumbers(4)
console.log('====================================');
console.log('consecutiveNumTriangle');
console.log('====================================');
consecutiveNumTriangle(4)
console.log('====================================');
console.log('triangleInverted');
console.log('====================================');
triangleInverted(4)
console.log('====================================');
console.log('triangleInverted2');
console.log('====================================');
triangleInverted2(4)
console.log('====================================');
console.log('triangleMirror');
console.log('====================================');
triangleMirror(4)
console.log('====================================');
console.log('toggleTriangle');
console.log('====================================');
toggleTriangle(4)
console.log('====================================');
console.log('toggleTriangle2');
console.log('====================================');
toggleTriangle2(4)