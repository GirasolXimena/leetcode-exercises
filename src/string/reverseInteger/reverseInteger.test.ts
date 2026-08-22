/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside
 * the signed 32-bit integer range [-231, 231 - 1],
 * then return 0.
 * 
 * Assume the environment does not allow you to store 64-bit integers
 * (signed or unsigned).
 */

import { describe, expect, it, test } from "vitest"
import { reverseInteger } from "./reverseInteger"

const MAX_INTEGER = 2 ** 31 - 1
const MIN_INTEGER = -(2 ** 31)

describe('reverse integer', () => {
  describe('returns 0 if value is outside 32-bit integer range', () => {
    test('greater than 2^31', () => {
      let result =reverseInteger(MAX_INTEGER )
      expect(result).toBe(0);
    })
    test('less than -2^31 - 1', () => {
      let result = reverseInteger(MIN_INTEGER)
      expect(result).toBe(0)
    })
  })
  describe('returns reversed value if value is within 32-bit integer range', () => {
    test('within 2^31', () => {
    let result =reverseInteger(2147483631)
      expect(result).toBe(1363847412);
    })
    test('within -2^31 - 1', () => {
      let result = reverseInteger(-2147483641)
      expect(result).toBe(-1463847412)
    })
  })
  describe('leetcode test cases', () => {
    test('example test case 1', () => {
      expect(reverseInteger(123)).toBe(321)
    })
  })
})