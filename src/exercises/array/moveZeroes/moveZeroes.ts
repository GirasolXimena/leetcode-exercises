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
  let nextNonZero = 0;

  for (let num = 0; num < nums.length; num++) {
    if (nums[num] !== 0) {
      /**
       * instead of doing:
       * nums.splice(j, 1);
       * nums.push(0)
       * 
       * we can do:
       * nums[nextNonZero] = nums[num];
       */
      nums[nextNonZero] = nums[num];
      nextNonZero++;
    }

  }

  while (nextNonZero < nums.length) {
    nums[nextNonZero] = 0;
    nextNonZero++;
  }
};
