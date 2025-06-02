/**
 * func that returns index if number is found; else returns null
 */

import { Nullable } from '@vitest/utils';

// will return first occurance only.
function findElementIndex(arr: number[], element: number): Nullable<number> {

  for (let index = 0; index < arr.length; index++) {
    const _element = arr[index];
    if (element === _element) {
      return index
    }
  }

  return null
}


function countNegatives(arr: number[]): number {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++
    }
  }

  return count
}

// Find largest and smallest number in an array


function findLargest(arr: number[]): number {

  let largestNum = Number.MIN_SAFE_INTEGER;
  /**
   * Difference between MIN_SAFE_INTEGER and NEGATIVE_INFINITY is, MIN_SAFE's n-1 is also a number while NEGATIVE INFINITY's is less than the minimum representable number
   */
  // OR let largestNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i]
    }
  }

  return largestNum
}


function findSmallest(arr: number[]): number {
  let smallestNumber = Number.POSITIVE_INFINITY;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element < smallestNumber) {
      smallestNumber = element
    }
  }


  return smallestNumber
}

export { countNegatives, findElementIndex, findLargest, findSmallest };