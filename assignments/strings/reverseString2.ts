function reverseStr(s: string, k: number): string {
  let sArr = s.split("")
  const end = Math.ceil((sArr.length) / (2 * k)) * 2 * k
  for (let i = 0; i < end; i = i + 2 * k) {
    let x = i
    let y = i + k - 1

    let endP = y > s.length - 1 ? s.length - 1 : y

    while (x < endP) {
      let temp = sArr[x]
      sArr[x] = sArr[endP]
      sArr[endP] = temp
      x++;
      endP--;
    }

  }

  return sArr.join("")
};


function reverseStr2(s: string, k: number): string {
  let sArr = s.split("")

  // * final loop also runs when i has not reached the s.length-1 so no need to check last bound
  for (let i = 0; i < s.length - 1; i = i + 2 * k) {
    let x = i
    let y = i + k - 1

    let endP = y > s.length - 1 ? s.length - 1 : y

    while (x < endP) {
      let temp = sArr[x]
      sArr[x] = sArr[endP]
      sArr[endP] = temp
      x++;
      endP--;
    }

  }

  return sArr.join("")
};