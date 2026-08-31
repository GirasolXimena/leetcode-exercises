
export const reverseString  = (s: string | string[]):string => {

  if(!Array.isArray(s)) {
    s = s.split('')
  }
  let tmp = '';

  for (let i = 0; i < s.length/2; i++) {
    tmp = s[i]
    s[i] = s[s.length-1-i]
    s[s.length-1-i] = tmp
  }
  
  return s.join('')
}

export const reverseStringModule = {
  s: '',
  reverse: function(): void {
    let s = this.s

    if(!Array.isArray(s)) {
      s = s.split('')
    }
    let tmp = '';
  
    for (let i = 0; i < s.length/2; i++) {
      tmp = s[i]
      s[i] = s[s.length-1-i]
      s[s.length-1-i] = tmp
    }
    
    this.s = s.join('')
  }

}