function sum(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  }

  const newArr = nums.slice(0, nums.length - 1)
  return nums[0] + sum(newArr)
}
