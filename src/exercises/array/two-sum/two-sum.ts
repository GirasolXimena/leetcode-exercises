// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.
// You can return the answer in any order.

export function twoSum(nums: number[], target: number): number[] | void {

  const dict = nums
    .map((num, i) => ([num, i]))
    // return hashmap with structure of [number, index]
    // because we're comparing numbers
    // but still need reference to original index
    .sort(([a], [b]) => b - a);
    // then sort largest to smallest

  // start searching from largest number 
  for (let i = 0; i < dict.length; i++) {
    // since we're starting from beginning of sorted array
    // each time we advance we are comparing the largest
    // possible answer
    const [largest, largestIndex] = dict[i]

    for (let j = dict.length - 1; j >= i; j--) {
      // the end of the array is smallest possible number
      // each time we advance we are checking the next
      // smallest possible number
      const [smallest, smallestIndex] = dict[j];

      // if largest + smallest is greater than target
      // we need to move on to the next largest number
      // since it will not get better once we start adding
      // bigger numbers
      if (largest + smallest > target) {
        break;
      } else if (largest + smallest === target) {
        // we found the two numbers
        // and need to return indices
        // in og array
        return [largestIndex, smallestIndex];
      }
    }
  }
};