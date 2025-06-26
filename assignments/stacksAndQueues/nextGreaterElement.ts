function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let nextGMap = new Map();
  let stack = []

  for (let i = nums2.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      nextGMap.set(nums2[i], -1)
      stack.push(nums2[i])
      continue;
    }

    if (nums2[i] < stack[stack.length - 1]) {
      nextGMap.set(nums2[i], stack[stack.length - 1])
      stack.push(nums2[i])
      continue;
    }

    if (nums2[i] > stack[stack.length - 1]) {
      while (nums2[i] > stack[stack.length - 1]) {
        stack.pop()
      }

      if (stack.length === 0) {
        nextGMap.set(nums2[i], -1)
        stack.push(nums2[i])
        continue;
      } else {
        nextGMap.set(nums2[i], stack[stack.length - 1])
        stack.push(nums2[i])
        continue;
      }
    }

  }

  return nums1.map(x => nextGMap.get(x))
};