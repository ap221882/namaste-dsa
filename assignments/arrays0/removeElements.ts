function removeElements(nums: number[], val: number): number {
  let x = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (element !== val) {
      nums[x] = element;
      x++
    }

  }

  return x
}