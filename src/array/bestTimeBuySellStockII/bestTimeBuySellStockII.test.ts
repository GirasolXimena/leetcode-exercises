import { describe, test, expect } from 'vitest'
import { maxProfit } from './bestTimeBuySellStockII'

describe('best time to buy and sell stock (pt II)', () => {
  test('example 1', () => {

    /**
     * Explanation:
     * Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
     * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
     * Total profit is 4 + 3 = 7.
     */

    const prices = [7, 1, 5, 3, 6, 4]
    const result = 7

    expect(maxProfit(prices)).toBe(result)
  })
  test('example 2', () => {

    /** 
     * Explanation:
     * Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
     * Total profit is 4.
     */

    const prices = [1,2,3,4,5]
    const result = 4

    expect(maxProfit(prices)).toBe(result)
  })
  test('example 3', () => {

    /** 
     * Explanation:
     * There is no way to make a positive profit,
     * so we never buy the stock to achieve the maximum profit of 0.
     */

    const prices = [7,6,4,3,1]
    const result = 0

    expect(maxProfit(prices)).toBe(result)
  })
})