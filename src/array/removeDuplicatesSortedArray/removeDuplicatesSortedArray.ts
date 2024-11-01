// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/**
 * Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums.
 * Consider the number of unique elements of nums to be k,
 * to get accepted, you need to do the following things:
 * 
 * Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
 * The remaining elements of nums are not important as well as the size of nums.
 * Return k.
 */

export function removeDuplicates(nums: number[]): number {
  let k = 0;
  let i = 0;
  let n = nums[0]

  k++;
  while (i < nums.length) {
    // current number
    let c = nums[i];

    // if current number is different from last unique number
    if (c !== n) {
      // set new unique number
      n = c;
      // index for unique num
      nums[k] = c
      // incrment unique num counter
      k++

    }
    // increment so we can check next
    i++
  }

  // remove extra els from array
  nums.splice(k)
  // return number of unique els
  return k;
};
