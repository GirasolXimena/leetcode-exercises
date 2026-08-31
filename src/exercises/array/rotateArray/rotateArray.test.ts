import { describe, expect, test } from 'vitest'
import { rotate } from './rotateArray'

describe('plus one', () => {
  test('example 1', () => {
    /**
     * Explanation:
     * rotate 1 steps to the right: [7,1,2,3,4,5,6]
     * rotate 2 steps to the right: [6,7,1,2,3,4,5]
     * rotate 3 steps to the right: [5,6,7,1,2,3,4]
     */
    const input = [1, 2, 3, 4, 5, 6, 7]
    const k = 3
    const result = [5, 6, 7, 1, 2, 3, 4]

    // rotate in place do not return
    rotate(input, k)
    expect(input).toEqual(result)
  })

  test('example 2', () => {
    /**
     * Explanation:
     * rotate 1 steps to the right: [99,-1,-100,3]
     * rotate 2 steps to the right: [3,99,-1,-100]
     */
    const input = [-1, -100, 3, 99]
    const k = 2
    const result = [3, 99, -1, -100]

    // rotate in place do not return
    rotate(input, k)
    expect(input).toEqual(result)
  })
})