import { describe, expect, test } from 'vitest'
import { largestRectangleArea } from './largest-rectangle-in-histogram'

describe('largest rectangle in histogram', () => {
  test('finds the largest rectangle across mixed heights', () => {
    expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10)
  })

  test('handles increasing heights and empty input', () => {
    expect(largestRectangleArea([2, 4])).toBe(4)
    expect(largestRectangleArea([])).toBe(0)
  })
})