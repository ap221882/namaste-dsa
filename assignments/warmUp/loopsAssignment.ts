import { Nullable } from '@vitest/utils';

// ignoring if duplicates are there
function getEvenElements(arr: number[]): Nullable<number[]> {
  if (!Array.isArray(arr)) {
    return null
  }

  const evenArr: number[] = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i])
    }
  }

  return evenArr
}

export { getEvenElements };