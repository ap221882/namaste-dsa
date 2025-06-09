import {
  describe,
  expect,
  it,
} from 'vitest';

import { countDigits } from './countDigits';

describe('countDigits', () => {
  it('should return 1 for single digit number', () => {
    expect(countDigits(5)).toBe(1);
  });

  it('should return 2 for two digit number', () => {
    expect(countDigits(42)).toBe(2);
  });

  it('should return 3 for three digit number', () => {
    expect(countDigits(123)).toBe(3);
  });

  it('should return 4 for four digit number', () => {
    expect(countDigits(1000)).toBe(4);
  });

  it('should return 1 for 0', () => {
    expect(countDigits(0)).toBe(1);
  });

  it('should handle negative numbers', () => {
    expect(countDigits(-789)).toBe(3);
  });

  it('should handle large numbers', () => {
    expect(countDigits(1234567890)).toBe(10);
  });
});