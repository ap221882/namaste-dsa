import {
  describe,
  expect,
  it,
} from 'vitest';

import { secondLargest } from './secondLargest';

describe('secondLargest', () => {
  it('should return the second largest element in a normal array', () => {
    expect(secondLargest([1, 2, 3, 4, 5])).toBe(4);
  });

  it('should return the second largest when largest is duplicated', () => {
    expect(secondLargest([5, 5, 3, 2, 1])).toBe(3);
  });

  it('should return undefined for array with less than 2 elements', () => {
    expect(secondLargest([5])).toBeUndefined();
    expect(secondLargest([])).toBeUndefined();
  });

  it('should handle negative numbers', () => {
    expect(secondLargest([-10, -20, -30, -40])).toBe(-20);
  });

  it('should handle arrays with all elements the same', () => {
    expect(secondLargest([2, 2, 2, 2])).toBeUndefined();
  });

  it('should handle arrays with two elements', () => {
    expect(secondLargest([10, 20])).toBe(10);
    expect(secondLargest([20, 10])).toBe(10);
  });

  it('should handle unsorted arrays', () => {
    expect(secondLargest([3, 1, 4, 2])).toBe(3);
  });

  it('should handle arrays with non-integer numbers', () => {
    expect(secondLargest([1.5, 2.5, 3.5])).toBe(2.5);
  });
});