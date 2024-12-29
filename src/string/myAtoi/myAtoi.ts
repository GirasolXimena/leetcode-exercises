const clamp = (num: number, min: number, max: number): number => {
    if (num <= min) return min
    if (num >= max) return max
    return num 
}

const MAX_INTEGER = (2 ** 31) - 1
const MIN_INTEGER = -(2 ** 31)

const clamp32Bit = (n: number) => clamp(n, MIN_INTEGER, MAX_INTEGER)

const removeWhitespace = (s: string): string => {
    let i = 0
    while(i < s.length && /\s/.test(s[i])) {
        i++
    }
    return i === 0 ? s : s.substring(i)
}

const checkIfPositive = (s: string): boolean => {
    return s[0] !== '-'
}

const removeLeadingZeroes = (s: string): string => {
    let i = 0
    if(s[0] === '+' || s[0] === '-') i = 1
    while(i < s.length && s[i] === '0') {
        i++
    }

    return i === 0 ? s : s.substring(i)
}

const extractInteger = (s: string): string => {
    let i = 0
    while(i < s.length && /[0-9]/.test(s[i])) {
        i++
    }
    
    return i === 0 ? '0' : s.substring(0, i)
}

// after extracting integers the string will never be NaN
const convertToNumber =(s: string): number => {
    let result = Number(s)
    return result
}

export const myAtoi = (s: string): number => {
    s = removeWhitespace(s)
    const isPositive = checkIfPositive(s)
    s = removeLeadingZeroes(s)
    s = extractInteger(s)
    const num = convertToNumber(s)
    return clamp32Bit(isPositive ? num : -num)
}