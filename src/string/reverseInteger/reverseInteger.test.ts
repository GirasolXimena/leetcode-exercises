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


const MAX_INTEGER = (2 ** 31)
const MIN_INTEGER = -(2 ** 31) - 1

describe('reverse integer', () => {
  describe('returns 0 if value is outside 32-bit integer range', () => {
    test('greater than 2^31', () => {
      let result =reverseInteger(2147483641)
      expect(result).toBe(1463847412);
    })
    test('less than -2^31 - 1', () => {
      let result = reverseInteger(MIN_INTEGER)
      expect(result).toBe(MIN_INTEGER)
      result = reverseInteger(MIN_INTEGER - 1)
      expect(result).toBe(0)
    })
  })
  describe('leetcode test cases', () => {
    expect(reverseInteger(123)).toBe(321)
  })
})