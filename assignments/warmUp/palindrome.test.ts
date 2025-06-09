import {
  describe,
  expect,
  it,
} from 'vitest';

import { palindrome } from './palindrome';

describe('palindrome', () => {
  it('should return true for palindrome numbers', () => {
    expect(palindrome(121)).toBe(true);
    expect(palindrome(1331)).toBe(true);
    expect(palindrome(7)).toBe(true);
    expect(palindrome(0)).toBe(true);
    expect(palindrome(99)).toBe(true);
    expect(palindrome(-121)).toBe(false);
  });

  it('should return false for non-palindrome numbers', () => {
    expect(palindrome(123)).toBe(false);
    expect(palindrome(10)).toBe(false);
    expect(palindrome(1234)).toBe(false);
    expect(palindrome(123456)).toBe(false);
  });
});
