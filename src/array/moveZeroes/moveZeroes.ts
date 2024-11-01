// https://leetcode.com/problems/move-zeroes/description/
// Given an integer array nums, 
// move all 0's to the end of it
//  while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place 
// without making a copy of the array.



/**
 Do not return anything, modify nums in-place instead.
 */
 export function moveZeroes(nums: number[]): void {
  let i = 0;
  let j = 0;

  while(i <= nums.length) {
    if(nums[j] === 0) {
      nums.splice(j, 1);
      nums.push(0)
    } else {
      j++
    }
    i++
  }
};
