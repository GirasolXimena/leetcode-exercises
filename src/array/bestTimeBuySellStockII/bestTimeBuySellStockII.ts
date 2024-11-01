// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

/**
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 */

function calcProfit(acc, price, day, prices) {
  // greedy algorithm
  const tomorrow = day + 1;
  const tomorrowPrice = prices[tomorrow];
  const potentialProfit = price < tomorrowPrice ? tomorrowPrice - price : 0;

  return acc + potentialProfit;
   
    
};

export function maxProfit(prices: number[]): number {
return prices.reduce(calcProfit, 0)
}