import { describe, expect, test } from "vitest";
import { twoSum } from "./twoSum";

describe('two sum', () => {
  test('example 1', () => {
    const nums = [2, 7, 11, 15]
    const target = 9;
    // const result = twoSum(nums, target);
    const result = expect.arrayContaining([0, 1])
    expect(twoSum(nums, target)).toEqual(result)
  })

  test('example 2', () => {
    const nums = [3, 2, 4]
    const target = 6;
    // const result = twoSum(nums, target);
    const result = expect.arrayContaining([1, 2])
    expect(twoSum(nums, target)).toEqual(result)
  })

  test('example 3', () => {
    const nums = [3, 3]
    const target = 6;
    const result = expect.arrayContaining([0, 1])
    expect(twoSum(nums, target)).toEqual(result)
  })

  test('nums do not add up', () => {
    const nums = [8, 11, 16, 25];
    const target = 3
    // the numbers can never add up to 3 since
    // they are each individually bigger than 3
    expect(twoSum(nums, target)).toBeUndefined()
  })
})