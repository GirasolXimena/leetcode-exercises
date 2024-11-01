// https://leetcode.com/problems/contains-duplicate/description/
// Given an integer array nums, 
// return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

export function containsDuplicate(nums: number[]): boolean {
  let uniq = new Set<number>([])
  
  for(const num of nums) {
    if(uniq.has(num)) {
      return true;
    } else {
      uniq.add(num)
    }
  }
  
  return false;
    
};