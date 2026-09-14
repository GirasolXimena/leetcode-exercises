import { describe, test, expect } from 'vitest'
import { removeDuplicates } from './removeDuplicatesSortedArray'

describe('remove duplicates from sorted array', () => {
  test('example 1', () => {

    /**
     * Explanation:
     * Your function should return k = 2,
     * with the first two elements of nums being 1 and 2 respectively.
     * It does not matter what you leave beyond the returned k.
     */

    const nums = [1,1,2]
    const result = expect.arrayContaining([1,2])
    const k = removeDuplicates(nums)
    expect(k).toBe(2)
    expect(nums).toEqual(result)
  })
  test('example 2', () => {

    /**
     * Explanation:
     * Your function should return k = 5,
     * with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
     * It does not matter what you leave beyond the returned k (hence they are underscores).
     */

    const nums = [0,0,1,1,1,2,2,3,3,4]
    const result = expect.arrayContaining([0,1,2,3,4])
    const k = removeDuplicates(nums)
    expect(k).toBe(5)
    expect(nums).toEqual(result)
  })

  test('returns zero for an empty array', () => {
    const nums: number[] = []

    expect(removeDuplicates(nums)).toBe(0)
    expect(nums).toEqual([])
  })

  test('handles a singleton and an array of only duplicates', () => {
    const singleton = [4]
    const duplicates = [2, 2, 2]

    expect(removeDuplicates(singleton)).toBe(1)
    expect(singleton).toEqual([4])
    expect(removeDuplicates(duplicates)).toBe(1)
    expect(duplicates).toEqual([2])
  })
})