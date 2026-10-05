// https://leetcode.com/problems/rotate-array/description/

/**
 * Given an integer array nums, 
 * rotate the array to the right by k steps, 
 * where k is non-negative.
 */

/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
  while (k > 0) {
    const shifted = nums.splice(-1);
    nums.splice(0, 0, ...shifted);
    k--;
  }

};