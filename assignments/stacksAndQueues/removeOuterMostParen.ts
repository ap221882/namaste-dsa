function removeOuterParentheses(s: string): string {
  let stack = [];
  let str = ''

  // we check after we push and before we pop because that's where the level is changing
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(")

      if (stack.length > 1) {
        str += s[i];
      }
    } else {
      if (stack.length > 1) {
        str += s[i];
      }

      stack.pop()
    }


  }

  return str
};