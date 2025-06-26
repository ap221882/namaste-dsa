function dailyTemperatures(t: number[]): number[] {
  let stack = [];
  let acc = [];

  for (let i = t.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      acc[i] = 0;
      stack.push(i)
    } else if (t[stack[stack.length - 1]] > t[i]) {
      acc[i] = 1
      stack.push(i)
    } else if (t[stack[stack.length - 1]] <= t[i]) {
      while (t[stack[stack.length - 1]] <= t[i]) {
        stack.pop()
      }
      if (stack.length === 0) {
        acc[i] = 0
        stack.push(i)
      } else {
        acc[i] = stack[stack.length - 1] - i;
        stack.push(i)
      }
    }
  }

  return acc
};


function dailyTemperatures2(t: number[]): number[] {
  let stack = [];
  let n = t.length;
  let ans = Array(n).fill(0);

  stack.push(n - 1);
  ans[n - 1] = 0;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1]
      if (t[i] >= t[top]) {
        stack.pop()
      } else {
        ans[i] = top - i
        stack.push(i)
        break;
      }
    }
    if (!stack.length) {
      ans[i] = 0
      stack.push(i)
    }
  }

  return ans
};