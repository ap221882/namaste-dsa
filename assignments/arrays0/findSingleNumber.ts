function singleNumber(nums: number[]): number {
  let hash = new Map()

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (!hash.has(element)) {
      hash.set(element, 1)
    } else {
      const val = hash.get(element) + 1
      hash.set(element, val)
    }
  }

  let single: number = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (hash.get(element) === 1) {
      return element
    }
  }

  return single
};


function singleNumberXor(nums: number[]): number {
  let xor = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    xor = xor ^ element
  }

  return xor
}