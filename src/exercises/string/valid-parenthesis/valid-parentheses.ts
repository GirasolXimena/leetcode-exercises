// define parens map
const openParens: Map<string, string> = new Map()
openParens.set(')', '(')
openParens.set(']', '[')
openParens.set('}', '{')
// close parens are keys since we can only try validate a pair
// when we come across a close array

function isValid(s: string): boolean {
  // if string is not at least 2 chars long
  if (s.length < 2 || s.length % 2 !== 0) {
    // or string length is not odd
    // we know the parens can't all match
    return false
  }

  // create stack for open chars
  // multiple open parens can be stacked waiting
  const stack = []
  // we can only validate a match 
  // when we find a closed paren

  for (const paren of s) {
    // find open parens match for char
    // in dictonary
    const match = openParens.get(paren)

    // if match is undefined 
    // we know char must be open
    if (!match) {
      // push it to open parens stack
      stack.push(paren)

      // q. rules say chars will only ever be open or close parens
      // so if it is not open it MUST be close

      // if stack is empty there are no possible matches
    } else if (stack.length < 1 || stack.pop() !== match) {
      // open parens at top of stack must be same as match for close parens
      return false
    }
    // if we make it through this loop
    // we know all close parens have been matched
  }

  // if stack is not empty
  // there are unmatched open parens
  if (stack.length > 0) {
    // therefore string is invalid
    return false
  }

  // must be valid
  return true
};




// define rules
const parens: {
  open: string[];
  close: string[];
  matches: { [key: string]: string };
} = {
  open: ['(', '{', '['],
  close: [')', '}', ']'],
  matches: {
    '(': ')',
    '{': '}',
    '[': ']',
  }
}

function isValidBroken(s: string): boolean {
  let ans = false
  if (
    // if string is empty it's not valid
    s.length === 0 ||
    // if string length is not even
    // we know the parens won't all match
    s.length % 2 !== 0
  ) {
    return ans
  }
  // create two stacks
  const stacks: { open: string[], close: string[] } = {
    open: [],
    close: []

  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (parens.open.includes(char)) {
      stacks.open.push(char)
    } else {
      stacks.close.unshift(char)
    }
  }

  console.log({ stacks })

  // if number of open and close parens dont match
  // or if one of them is empty 
  // we know its invalid and don't have to actually
  // go through the work of matching them up
  if (
    stacks.open.length === 0 ||
    stacks.close.length === 0 ||
    stacks.open.length !== stacks.close.length
  ) {
    return ans
  }

  // if we are down here we know both stacks 
  // have equal length of at least one
  while (stacks.open.length > 0) {
    const close = stacks.close.pop()
    const open = stacks.open.pop()
    if (!close || !open) {
      return ans
    }
    const match = parens.matches[open]
    const isMatch = match === close
    console.log({ open, close, match, isMatch })
    if (!isMatch) {
      return ans
    }


  }
  ans = true
  console.log({ stacks })


  return ans
};