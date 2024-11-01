import { describe, expect, test } from 'vitest'
import { plusOne } from './plusOne'

describe('plus one', () => {
  test('example 1', () => {
    /**
     * Explanation: The array represents the integer 123.
     * Incrementing by one gives 123 + 1 = 124.
     * Thus, the result should be [1,2,4].
     */
    const input = [1,2,3]
    const result = [1,2,4]
    expect(plusOne(input)).toEqual(result)
  })
  test('example 2', () => {
    /**
     * Explanation: The array represents the integer 4321.
     * Incrementing by one gives 4321 + 1 = 4322.
     * Thus, the result should be [4,3,2,2].
     */
    const input = [4,3,2,1]
    const result = [4,3,2,2]
    expect(plusOne(input)).toEqual(result)
  })
  test('example 3', () => {
    /** 
     * Explanation: The array represents the integer 9.
     * Incrementing by one gives 9 + 1 = 10.
     * Thus, the result should be [1,0].
     */
    const input = [9]
    const result = [1,0]
    expect(plusOne(input)).toEqual(result)
  })
  test('example 4', () => {
    /** 
     * Explanation: The array represents the integer 37999.
     * Incrementing by one gives 37999 + 1 = 38000.
     * Thus, the result should be [3,8,0,0,0].
     */
    const input = [3,7,9,9,9]
    const result = [3,8,0,0,0]
    expect(plusOne(input)).toEqual(result)
  })
})