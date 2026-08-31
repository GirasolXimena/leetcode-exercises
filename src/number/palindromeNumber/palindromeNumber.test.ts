import { describe, expect, it } from 'vitest';
import isPalindrome from './palindromeNumber';

describe('palindromeNumber', () => {
  it('returns false for values outside the signed 32-bit integer range', () => {
    expect(isPalindrome(-2147483649)).toBe(false);
    expect(isPalindrome(2147483648)).toBe(false);
  });

  it('returns true for palindrome numbers within range', () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(12321)).toBe(true);
    expect(isPalindrome(0)).toBe(true);
  });

  it('returns false for non-palindrome numbers within range', () => {
    expect(isPalindrome(-121)).toBe(false);
    expect(isPalindrome(10)).toBe(false);
    expect(isPalindrome(123)).toBe(false);
  });
});
