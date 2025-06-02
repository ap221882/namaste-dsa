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

export { countNegatives, findElementIndex };