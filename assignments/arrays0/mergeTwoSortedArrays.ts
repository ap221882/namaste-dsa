
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const nums1Copy = nums1.slice(0, m);

  let x = 0
  let y = 0
  for (let i = 0; i < m + n; i++) {
    /**
     * //* here we check when x can be assigned
     * //* 1. either the x is smaller and within bounds
     * //* 2. or y is out of bounds - which means the y outbounds the n length
     * //*
     * //* We need to keep in mind, negative condition for y is - y > n-1 and positive condition for x is x < m
     */
    if ((y > n - 1) || ((nums1Copy[x] <= nums2[y]) && (x < m))) {
      nums1[i] = nums1Copy[x]
      x++
    } else {
      nums1[i] = nums2[y]
      y++
    }
  }

};



function mergeWithoutCopy(nums1: number[], m: number, nums2: number[], n: number): void {
  let x = m - 1;
  let y = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (y < 0 || (x >= 0 && nums1[x] > nums2[y])) {
      nums1[i] = nums1[x]
      x--;
    } else {
      nums1[i] = nums2[y]
      y--
    }
  }
};