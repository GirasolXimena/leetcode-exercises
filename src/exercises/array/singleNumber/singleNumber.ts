// https://leetcode.com/problems/single-number/description/

/**
 * Given a non-empty array of integers nums,
 * every element appears twice except for one.
 * Find that single one.
 * You must implement a solution with a linear runtime complexity
 * and use only constant extra space.
 */


/**
 * 
 * Time complexity : O(n^2).
 * 
 * We have to go once through every num in nums (for loop)
 * That's already O(n)
 * 
 * We then have to search through the dictionary to see if there's any duplicate elements
 * 
 * Worst case scenario,
 * Let's say the number is the last one in the array (length - 1)
 * Then Let's say the duplicate is the second to last in the array (length - 2)
 * We would ahve to search through the entire dictionary that could be up to the size fo the whole array `n`
 * which is another O(n) operation
 * 
 * Since we are running each operation in a for loop we need to multiply them
 * making it O(n^2)
 * 
 * Space complexity : O(n)
 * We need a dictionary of size n to contain every element in nums.
 */
export function singleNumber(nums: number[]): number {
  const dictionary = new Map<number, boolean>();
  nums.forEach(num => {
    if (dictionary.get(num)) {
      dictionary.delete(num)
    } else {
      dictionary.set(num, true)
    }
  })

  return dictionary.entries().next().value[0]
};

/**
 * Time complexity: O(n)
 * 
 * A better way to use the dictionary would be to set the value
 * to be how many times we've seen that number.
 * 
 * For each element in `n` we add it to the dictionary at index `n`
 * We have to traverse the array at least once to make the dictionary O(n)
 * 
 * When it comes to adding the element to the dictionary
 * Or incrementing the dictionary value to 2 if we've seen it before...
 * 
 * Since we already know where `n` will be ahead of time (the literal point of an index)
 * Meaning that no matter how big the dictionary gets
 * finding the index it's supposed to be at will stay constant O(1)
 * 
 * We multiply complexities in a for loop, since we perform n for each element n amount of times
 * O(n) * O(1) = O(n * 1) = O(n)
 * 
 * Space complexity: O(n)
 * 
 * We will need a dictionary of size n to contain hash table
 * The result variable will always be one int
 * O(1)
 * O(n) * O(1) = O(n)
 */
export function singleNumberHashTable(nums: number[]): number {
  const dict = new Map<number, number>()
  let res = 0;

  nums.forEach(num => {
    const val = dict.get(num) ?? 0
    dict.set(num, val + 1)
  })

  dict.forEach((counter, num) => {
    // if it appears more than once we do not care about it
    if (counter !== 1) return

    // if it appears once it is our target
    res = num
  })

  return res
}

/**
 * Time complexity: O(n)
 * 
 * This approach relies on the logic that
 * If every element in the array `nums` appears twice except for one
 * Then the difference between `nums`
 * and an array doubling all the unique elments
 * would be the elment that only appears once
 * 
 * (a + a + b + b + c + c) - (a + a + b + b + c) = c
 * 2(a+b+c) - (a + a + b + b + c) = c
 * 
 * We iterate once through the array to add up the numbers O(n)
 * While we are performing that for loop we do a lookup operation
 * on our set. Sets are indexed making the time constant O(1)
 * O(n + 1) = O(n)
 * 
 * Space complexity: O(n)
 * 
 * We need a set which will be as large as n: O(n)
 * 
 * And the setSum and totalSum vals will always be ints
 * O(n) * O(1) * O(1)
 * O(n)
 */

export function singleNumberSet(nums: number[]): number {
  // add up all the unique nums
  let setSum = 0

  const set = new Set<number>()
  const totalSum = nums.reduce((sum, num) => {

    // if it hasn't been added
    // this is the first time
    if (!set.has(num)) {
      set.add(num)
      setSum = setSum + num
    }

    // in any case we increment total of all nums
    return sum + num
  }, 0)

  return setSum + setSum - totalSum
}

/**
 * 
 * time complexity: O(n)
 * 
 * this one relies a lot on the approach above but turned up
 * since we're doing operations on the underlying binary
 * representations of the numbers
 * 
 * The first thing to know is an XOR of any number `n`
 * and itself `n` is 0
 * meaning each `n` that appears twice will cancel itself out
 * leaving us only with the number that appears an odd numebr of times
 * in this case 1 time
 * 
 * The second thing is that when numbers are represented in binary
 * it means at each position the value can be either 1 or 0
 * ex:
 * 1: 0001
 * 2: 0010
 * 3: 0011
 * 4: 0100
 * and so on...
 * 
 * we can exend this to see that if we did the XOR operation on
 * each number incrementally, we would get the difference
 * meaning we could find c without storing any other data
 * than what we're given!!
 * 
 * We would still need to traverse the array once at least
 * doing an operation for each element: O(n)
 * 
 * space complexity: O(1)
 * 
 * We do not need any additional space,
 * no matter how many elements the array,
 * we are only adding the previous element to the next element
 * 2 integers
 * O(1) * O(1) = O(1)
 */
export function singleNumberSetBitwise(nums: number[]): number {
  return nums.reduce((acc: number, num: number) =>
    // this is the xor operation
    acc ^= num, 0)
}