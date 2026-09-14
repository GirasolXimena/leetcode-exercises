import { describe, expect, test, } from 'vitest'
import { intersect } from './intersectionTwoArraysII'
describe('intersection of two arrays (pt. II)', () => {
  test('example 1', () =>{
    const nums1 = [1,2,2,1]
    const nums2 = [2,2]
    // you may return results in any order
    const result = expect.arrayContaining([2,2])

    expect(intersect(nums1, nums2)).toEqual(result)
  })

  test('example 2', () =>{
    const nums1 = [4,9,5]
    const nums2 = [9,4,9,8,4]
    // you may return results in any order
    const result = expect.arrayContaining([4,9])

    expect(intersect(nums1, nums2)).toEqual(result)
  })

  test('example 3', () => {
    const nums1 = [1,2,3]
    const nums2: number[] = [];

    expect(intersect(nums1, nums2)).toEqual([])

  })

  test('keeps duplicate values only as many times as both arrays contain them', () => {
    expect(intersect([1, 2, 2, 2], [2, 2, 3])).toEqual([2, 2])
  })

  test('does not mutate either input array', () => {
    const nums1 = [4, 9, 5]
    const nums2 = [9, 4, 9, 8, 4]

    intersect(nums1, nums2)

    expect(nums1).toEqual([4, 9, 5])
    expect(nums2).toEqual([9, 4, 9, 8, 4])
  })
})