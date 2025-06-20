function balancedStringSplit(s: string): number {
  let count = 0;
  let p = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      count = count + 1;
    } else {
      count = count - 1;
    }

    if (count === 0) {
      p++;
    }
  }

  return p
};