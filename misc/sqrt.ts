function mySqrt(x: number): number {
  let left = 1;
  let right = x;
  let viableSqrtInt = 0

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid === x) {
      return mid
    } else if (mid * mid > x) {
      right = mid - 1
    } else {
      // ~> because we need to know the number `rounded DOWN to the nearest integer` if it was rounded up, we'd have used this in upper if block
      viableSqrtInt = mid;
      left = mid + 1
    }
  }

  return viableSqrtInt
};

