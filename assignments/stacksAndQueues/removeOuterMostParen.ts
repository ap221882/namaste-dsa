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


function removeOuterParentheses2(s: string): string {
  let stack = [];
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (stack.length !== 0) {
        str += s[i];
      }
      stack.push("(")
    } else {
      if (stack.length !== 1) {
        str += s[i];
      }
      stack.pop()
    }


  }

  return str
};


function removeOuterParentheses3(s: string): string {
  let tracker = 0;
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (tracker !== 0) {
        str += s[i];
      }
      tracker++
    } else {
      if (tracker !== 1) {
        str += s[i];
      }
      tracker--
    }


  }

  return str
};