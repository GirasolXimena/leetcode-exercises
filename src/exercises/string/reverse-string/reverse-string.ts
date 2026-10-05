
export const reverseString  = (s: string | string[]):string => {

  const characters = Array.isArray(s) ? s : s.split('');
  let tmp = '';

  for (let i = 0; i < characters.length / 2; i++) {
    tmp = characters[i]
    characters[i] = characters[characters.length - 1 - i]
    characters[characters.length - 1 - i] = tmp
  }
  
  return characters.join('')
}

export const reverseStringModule = {
  s: '',
  reverse: function(): void {
    const characters = this.s.split('')
    let tmp = '';
  
    for (let i = 0; i < characters.length / 2; i++) {
      tmp = characters[i]
      characters[i] = characters[characters.length - 1 - i]
      characters[characters.length - 1 - i] = tmp
    }
    
    this.s = characters.join('')
  }

}