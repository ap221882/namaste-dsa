/**
 * non-decreasing -> arr[i] >= arr[i-1]
 * decreasing -> arr[i] > arr[i-1]
 */

function removeDuplicates(arr: number[]): number {
  if (arr.length === 0) {
    return 0
  }
  let x = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];


    if (element > arr[x]) { // because array is increasing
      arr[x + 1] = element
      x++;
    }

  }

  return x + 1
}

export { removeDuplicates };