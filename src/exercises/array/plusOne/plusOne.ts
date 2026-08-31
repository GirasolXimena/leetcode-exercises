// https://leetcode.com/problems/plus-one/description/

/**
 * You are given a large integer represented as an integer array digits,
 * where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order.
 * The large integer does not contain any leading 0's.
 * 
 * Increment the large integer by one and return the resulting array of digits.
 */

export function plusOne(digits: number[]): number[] {
  // set index to last position to search array from the end
  let i = digits.length - 1;
  
  // loop backwards through array
  // by decrementing i after every loop
  while(i >= 0) {
    // current number
    let c = digits[i]
    
    // if current number is 9 then incrementing will change prev number too
    // eg: [2,2,9] => [2,3,0] 
    if(c === 9) {
      // if previous digit does not exist we reached beginning of array
      // and need to prepend with 1
      // eg: [9,9] => [1,0,0]
      digits[i] = 0;
  
      if(!digits[i-1]) {
        digits.unshift(1)
        // we reached end and can break the loop
        // so we don't increment the new '1' we added
        break;
      }
    } else {
      // if digit is less than 9 we can just increment
      // and break the loop
      digits[i] = c + 1;
      break;
    }

    // prepare for next loop
    i--;
  };
    
  return digits
};