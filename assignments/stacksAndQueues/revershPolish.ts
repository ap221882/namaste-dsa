function evalRPN(tokens: string[]): number {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "+") {
      let result: number = Number(stack[stack.length - 1]) + Number(stack[stack.length - 2])
      stack.pop();
      stack.pop();
      stack.push(result)
    } else if (tokens[i] === "-") {
      let result: number = Number(stack[stack.length - 2]) - Number(stack[stack.length - 1])
      stack.pop();
      stack.pop();
      stack.push(result)
    } else if (tokens[i] === "*") {
      let result: number = Number(stack[stack.length - 1]) * Number(stack[stack.length - 2])
      stack.pop();
      stack.pop();
      stack.push(result)
    } else if (tokens[i] === "/") {
      // .trunc to -- truncates toward zero.
      let result = Math.trunc(Number(stack[stack.length - 2]) / Number(stack[stack.length - 1]))
      stack.pop();
      stack.pop();
      stack.push(result)
    } else {
      stack.push(tokens[i])
    }
  }

  return Number(stack[0])
};