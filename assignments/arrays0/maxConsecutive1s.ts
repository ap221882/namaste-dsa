function findMaxConsecutiveOnes(nums: number[]): number {
  let maximumWindow = 0;
  let maximum1s = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      maximum1s++;
    } else {
      if (maximum1s > maximumWindow) {
        maximumWindow = maximum1s;
      }
      maximum1s = 0;
    }
  }

  // condition when loops doesn't end with 0 - else will never execute
  if (maximum1s > maximumWindow) {
    maximumWindow = maximum1s
  }

  return maximumWindow
};