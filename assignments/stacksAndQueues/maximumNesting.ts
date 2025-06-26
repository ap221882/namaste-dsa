function maxDepth(s: string): number {
  let maxDepth = 0;
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i])
    } else if (s[i] === ")") {
      if (stack.length > maxDepth) {
        maxDepth = stack.length
      }
      stack.pop()
    }
  }

  return maxDepth
};