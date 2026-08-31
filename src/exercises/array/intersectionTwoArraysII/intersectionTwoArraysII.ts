// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

// Given two integer arrays nums1 and nums2, 
// return an array of their intersection. 
// Each element in the result must appear as many times
//  as it shows in both arrays
//  and you may return the result in any order.

function constructIntersection(long: number[], short: number[]): number[] {
  return long.reduce((intersection, num, i) => {
    // if we removed all elements from array
    // we know there are no more matches
    if (!short.length) return intersection;

    // search through short array until we find a match  
    for (let j = 0; j <= short.length; j++) {

      // if there is a match
      if (num === short[j]) {
        // remove num so we don't have dupes
        short.splice(j, 1)

        // add num to intersection array
        intersection.push(num)
        // if we find a match we need to move to
        // next val in long array
        // and stop searching through short array
        break;
      }
    }
    return intersection;
  }, [] as Array<number>)
}

export function intersect(nums1: number[], nums2: number[]): number[] {
  // i know they are guaranteed to have length
  // still wanna do error checking
  if (!nums1.length || !nums2.length) return [];

  // faster to iterate through long array and remove numbers from short array
  // so sort by arr.length to construct args order
  const [long, short] = [nums1, nums2].sort((a, b) => b.length - a.length);
  return constructIntersection(long, short);

};