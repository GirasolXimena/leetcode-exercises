import { describe, expect, test } from 'vitest'
import { timeRequiredToBuy } from './time-needed-to-buy-tickets'

describe('time needed to buy tickets', () => {
  test('counts time until the target customer finishes', () => {
    expect(timeRequiredToBuy([2, 3, 2], 2)).toBe(6)
    expect(timeRequiredToBuy([5, 1, 1, 1], 0)).toBe(8)
  })

  test('stops at the target customer even when others remain', () => {
    expect(timeRequiredToBuy([1, 2, 3], 1)).toBe(4)
  })
})