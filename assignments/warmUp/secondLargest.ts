function secondLargest(arr: number[]): number | undefined {

  let largest = Number.NEGATIVE_INFINITY
  let secondLargest = Number.NEGATIVE_INFINITY

  if (arr.length < 2) {
    return
  }

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > largest) {
      // second largest to be assigned first as value of largest will change if assigned earlier
      secondLargest = largest
      largest = element
    } else if (element > secondLargest && element < largest) { /** only update when item is different from the element */
      secondLargest = element
    }
  }

  // when the element turns to be same only - the secondLargest doesn't change
  if (secondLargest === Number.NEGATIVE_INFINITY) {
    return
  }

  return secondLargest
}

console.log('====================================');
console.log(secondLargest([10, 10]));
console.log(secondLargest([5, 5, 3, 2, 1]));
console.log('====================================');

export { secondLargest };