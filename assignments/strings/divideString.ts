function divideString(s: string, k: number, fill: string): string[] {
  let result = []
  for (let i = 0; i < s.length; i = i + k) {
    if ((i + k - 1) < (s.length)) {
      result.push(s.substring(i, i + k));
    } else {
      let str = s.substring(i, s.length);
      for (let j = s.length; j < i + k; j++) {
        str = str + fill
      }

      result.push(str)
    }
  }

  return result
};