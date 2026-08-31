// Solution for palindromeNumber


function isPalindrome(x: number): boolean {
  let res = true
  const arr = x.toString().split("");
  for (let i = 0; res === true && i < arr.length; i++) {
    const first = arr[i];
    const second = arr[arr.length - 1 - i]

    if (first !== second) {
      res = false;
    }
  }
  return res
};

export default isPalindrome;
