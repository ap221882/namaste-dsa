function lengthOfLastWord(s: string): number {
  let ss = s.trim();
  let a = ss.split(" ")
  return a[a.length - 1].length
};


function lengthOfLastWord2(s: string): number {
  let count = 0;
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] === " ") {
      n--
    } else {
      break;
    }
  }

  while (n >= 0) {
    if (s[n] !== " ") {
      count++;
      n--
    } else {
      break;
    }
  }
  return count
};


function lengthOfLastWord3(s: string): number {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }
  }

  return count
};