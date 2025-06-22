function isValid(s: string): boolean {
  let stack = [];
  let obj: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  }

  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "(" ||
      s[i] === "{" ||
      s[i] === "["
    ) {
      stack.push(s[i])
    } else if (
      s[i] === ")" ||
      s[i] === "}" ||
      s[i] === "]"
    ) {
      if (obj[stack[stack.length - 1]] === s[i]) {
        stack.pop();
        continue;
      } else {
        return false
      }
    }
  }
  return stack.length === 0
};