import { describe, expect, it, test } from 'vitest'
import { myAtoi } from './myAtoi'

describe('myAtoi', () => {
    describe('ignores any leading whitespace', () => {
        test('it ignores leading spaces', () => {
            let s = '         123'
            let result = myAtoi(s)
            let whitespaceRegex = new RegExp(/\s/)
            expect(whitespaceRegex.test(String(result))).toBeFalsy()
            expect(result).toBe(123)
        })
        test('it ignores other types of whitespace', () => {
            let s = `\n\t\n123`
            let result = myAtoi(s)
            let whitespaceRegex = new RegExp(/\s/)
            expect(whitespaceRegex.test(String(result))).toBeFalsy()
            expect(result).toBe(123)
        })
    })

    describe('determines sign by checking if next character is - or +', () => {

        test('it reads a +', () => {
            let s = '+042'
            let result = myAtoi(s)
            expect(result).toBe(42)
        })
        test('it reads a -', () => {
            let s = '-042'
            let result = myAtoi(s)
            expect(result).toBe(-42)
        })
    })

    describe('it strips leading zeroes', () => {
        test('reads integer by skipping leading zeros until a non-digit character is encountered', () => {
            let s = '00000000thello'
            let result = myAtoi(s)
            expect(result).toBe(0)
        })
        test('reads integer by skipping leading zeros until the end of the string is encountered', () => {
            let s = '0000000000000'
            let result = myAtoi(s)
            expect(result).toBe(0)
        })
        test('0-1', () => {
            let s = '0-1'
            let result = myAtoi(s)
            expect(result).toBe(0)
        })
        test('no integers', () => {
            let s ='abcdefghijkl';
            let result = myAtoi(s)
            expect(result).toBe(0)
        })
    })

    describe('rounds if the integer is out of 32-bit signed integer range', () => {
        const MAX_INTEGER = (2 ** 31)
        const MIN_INTEGER = -(2 ** 31) - 1
        test('positive big number gets rounded down to 2^31', () => {
            let s = '42234234235145145643623456456450'
            let result = myAtoi(s)
            expect(result).toBeLessThanOrEqual(MAX_INTEGER)
        })
        test('negative big number gets rounded up to -2^31 - 1', () => {
            let s = '-423423423423453451454154320'
            let result = myAtoi(s)
            expect(result).toBeGreaterThanOrEqual(MIN_INTEGER)
        })
        test('negative big number gets rounded up to -2^31 - 1', () => {
            let s = "21474836460"
            let result = myAtoi(s)
            expect(result).toBe(2147483647)
        })
    })

    describe('leetcode test examples', () => {
        test('example 2', () => {
            let s = ' -042'
            let result = myAtoi(s)
            expect(result).toBe(-42)
        })
        test('example 2', () => {
            let s = ' -042'
            let result = myAtoi(s)
            expect(result).toBe(-42)
        })
        test('example 3', () => {
            let s = '1337c0d3'
            let result = myAtoi(s)
            expect(result).toBe(1337)
        })
    })
})