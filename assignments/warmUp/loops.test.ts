import {
  describe,
  expect,
  it,
} from 'vitest';

import { getEvenElements } from './loopsAssignment';

describe('getEvenElements', () => {
  it('returns all even numbers from a mixed array', () => {
    expect(getEvenElements([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  it('returns an empty array if there are no even numbers', () => {
    expect(getEvenElements([1, 3, 5, 7])).toEqual([]);
  });

  it('returns the same array if all elements are even', () => {
    expect(getEvenElements([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
  });

  it('returns an empty array for an empty input', () => {
    expect(getEvenElements([])).toEqual([]);
  });

  it('handles negative even numbers', () => {
    expect(getEvenElements([-4, -3, -2, -1, 0, 1, 2])).toEqual([-4, -2, 0, 2]);
  });
});