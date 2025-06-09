import {
  describe,
  expect,
  it,
} from 'vitest';

import { removeDuplicates } from './removeDuplicates';

// Assume removeDuplicates is imported from your implementation file

describe('removeDuplicates', () => {
  it('should return 0 for an empty array', () => {
    const nums: number[] = [];
    const k = removeDuplicates(nums);
    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });

  it('should return 1 for an array with one element', () => {
    const nums = [1];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  it('should remove duplicates from a sorted array', () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  it('should handle an array with all unique elements', () => {
    const nums = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with all elements the same', () => {
    const nums = [2, 2, 2, 2, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([2]);
  });

  it('should handle a longer array with multiple duplicates', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  it('should handle negative numbers', () => {
    const nums = [-3, -3, -2, -1, -1, 0, 1, 1];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([-3, -2, -1, 0, 1]);
  });
});