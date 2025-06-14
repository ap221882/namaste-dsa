function moveZeroes(nums: number[]): void {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i]
      x++
    }
  }

  // updation with zeroes for rest of the elements
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
};