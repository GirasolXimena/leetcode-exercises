import { beforeEach, describe, expect, test } from 'vitest'
import { faker } from "@faker-js/faker"


import { reverseString, reverseStringModule } from './reverseString'

describe('write a function that reverses a string', () => {
    beforeEach(() => {
        reverseStringModule.s = faker.string.sample()
    })

    describe('modify the array in place with O(1) extra memory', () => {       
        test('modify the array in place', () => {

            let copy = reverseStringModule.s
            let reverseCopy = copy.split('').reverse().join('')
            reverseStringModule.reverse()
            expect(reverseStringModule.s).toBe(reverseCopy)
        })
    })

    test('reverses a string directly', () => {
        expect(reverseString('hello')).toBe('olleh')
        expect(reverseString('')).toBe('')
    })

    test('reverses an array in place and returns the result', () => {
        const characters = ['a', 'b', 'c', 'd']

        expect(reverseString(characters)).toBe('dcba')
        expect(characters).toEqual(['d', 'c', 'b', 'a'])
    })
})