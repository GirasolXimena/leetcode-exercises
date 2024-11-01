// https://leetcode.com/problems/single-number/description/

/**
 * Given a non-empty array of integers nums,
 * every element appears twice except for one.
 * Find that single one.
 * You must implement a solution with a linear runtime complexity
 * and use only constant extra space.
 */

export function singleNumber(nums: number[]): number {
  const dictionary = new Map();
  nums.map(num => {
      if(dictionary.get(num)) {
          dictionary.delete(num)
      } else {
          dictionary.set(num, true)
      }
  })
  
  return dictionary.entries().next().value[0]
};