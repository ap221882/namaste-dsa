// printFrom1toN
function printFrom1toN(n: number) {

  if (n < 1) {
    return
  }
  printFrom1toN(n - 1);
  console.log(n)
}

printFrom1toN(5)


function printFromNto1(n: number) {
  if (n < 1) {
    return
  }

  console.log(n)
  printFromNto1(n - 1)
}

printFromNto1(5)