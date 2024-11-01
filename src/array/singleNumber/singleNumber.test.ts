import { describe, expect, test } from "vitest";
import { singleNumber } from "./singleNumber";

describe('single number', () => {
  test('example 1', () => {
    const input = [2, 2, 1]
    const result = 1

    expect(singleNumber(input)).toEqual(result)
  })

  test('example 2', () => {
    const input = [4, 1, 2, 1, 2]
    const result = 4

    expect(singleNumber(input)).toEqual(result)
  })

  test('example 3', () => {
    const input = [1]
    const result = 1

    expect(singleNumber(input)).toEqual(result)
  })
})