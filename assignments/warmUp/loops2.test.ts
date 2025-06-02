import {
  describe,
  expect,
  it,
} from 'vitest';

import {
  findLargest,
  findSmallest,
} from './loops2';

describe('findLargest', () => {
  it('should return the largest number in a positive number array', () => {
    expect(findLargest([1, 2, 3, 4, 5])).toBe(5);
  });

  it('should return the largest number in a negative number array', () => {
    expect(findLargest([-10, -20, -3, -4, -5])).toBe(-3);
  });

  it('should return the largest number in a mixed array', () => {
    expect(findLargest([-1, 0, 5, 3, -10])).toBe(5);
  });

  it('should return the only element for single-element array', () => {
    expect(findLargest([42])).toBe(42);
  });

  it('should handle array with duplicate largest values', () => {
    expect(findLargest([2, 7, 7, 3, 1])).toBe(7);
  });

  it('should handle array with all same values', () => {
    expect(findLargest([4, 4, 4, 4])).toBe(4);
  });
});


describe('findSmallest', () => {
  it('should return the smallest number in a positive number array', () => {
    expect(findSmallest([1, 2, 3, 4, 5])).toBe(1);
  });

  it('should return the smallest number in a negative number array', () => {
    expect(findSmallest([-10, -20, -3, -4, -5])).toBe(-20);
  });

  it('should return the smallest number in a mixed array', () => {
    expect(findSmallest([-1, 0, 5, 3, -10])).toBe(-10);
  });

  it('should return the only element for single-element array', () => {
    expect(findSmallest([42])).toBe(42);
  });

  it('should handle array with duplicate smallest values', () => {
    expect(findSmallest([2, 1, 7, 1, 3])).toBe(1);
  });

  it('should handle array with all same values', () => {
    expect(findSmallest([4, 4, 4, 4])).toBe(4);
  });
});