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
})