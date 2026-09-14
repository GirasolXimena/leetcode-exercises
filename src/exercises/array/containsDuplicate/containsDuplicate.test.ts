import { describe, expect, test, } from 'vitest'
import { containsDuplicate } from './containsDuplicate'

describe('Contains Duplicates', () => {
  test('example 1', () =>{
    const nums = [1,2,3,1]
    const result = true

    expect(containsDuplicate(nums)).toEqual(result)
  })

  test('example 2', () =>{
    const nums = [1,2,3,4]
    const result = false

    expect(containsDuplicate(nums)).toEqual(result)
  })

  test('example 3', () =>{
    const nums = [1,1,1,3,3,4,3,2,4,2]
    const result = true

    expect(containsDuplicate(nums)).toEqual(result)
  })

  test('returns false for empty and single-item arrays', () => {
    expect(containsDuplicate([])).toBe(false)
    expect(containsDuplicate([42])).toBe(false)
  })

  test('detects duplicates at the end and supports negative values', () => {
    expect(containsDuplicate([-3, 0, 8, -3])).toBe(true)
  })
})