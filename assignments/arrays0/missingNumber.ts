/**
 * n(n-1)/2 - sum(n) = missing value
 */


function missingNumber(nums: number[]): number {
  let sum = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    sum += element
  }


  const missingNumber = (((nums.length) * (nums.length + 1)) / 2) - sum;

  return missingNumber
};