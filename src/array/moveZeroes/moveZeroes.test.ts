import { describe, expect, test } from "vitest";
import { moveZeroes } from "./moveZeroes";

describe('move zeroes', () => {
  test('test case 1', () => {
    const nums = [0,1,0,3,12]
    const result = [1,3,12,0,0]
    moveZeroes(nums);
    expect(nums).toEqual(result)
  })
  test('test case 2', () => {
    const nums = [0]
    const result = [0]
    moveZeroes(nums);
    expect(nums).toEqual(result)
  })
  test('test case 3', () => {
    const nums = [4,1,5,1,0,4,0,12,8,0,4]
    const result = [4,1,5,1,4,12,8,4,0,0,0]
    moveZeroes(nums);
    expect(nums).toEqual(result)
  })
})