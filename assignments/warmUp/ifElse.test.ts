import {
  describe,
  expect,
  it,
} from 'vitest';

import {
  isEligibleToVote,
  isEven,
} from './ifElse';

describe("isEligibleToVote", () => {
  it("returns false for age 14", () => {
    expect(isEligibleToVote(14)).toBe(false);
  });

  it("returns true for age 21", () => {
    expect(isEligibleToVote(21)).toBe(true);
  });

  it("returns true for age 18", () => {
    expect(isEligibleToVote(18)).toBe(true);
  });

  it("returns null for negative age", () => {
    expect(isEligibleToVote(-2)).toBe(null);
  });
});

describe("isEven", () => {
  it("returns false for non even", () => {
    expect(isEven(15)).toBe(false);
  });

  it("returns true for even", () => {
    expect(isEven(12)).toBe(true);
  });

  it("returns null for negative number", () => {
    expect(isEligibleToVote(-20)).toBe(null);
  });

});
