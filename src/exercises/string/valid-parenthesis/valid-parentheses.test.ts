import { describe, expect, test } from 'vitest'
import { isValid } from './valid-parentheses'

describe('valid parentheses', () => {
  test('accepts correctly nested bracket pairs', () => {
    expect(isValid('()[]{}')).toBe(true)
    expect(isValid('{[]}')).toBe(true)
  })

  test('rejects mismatched or unclosed brackets', () => {
    expect(isValid('([)]')).toBe(false)
    expect(isValid('(]')).toBe(false)
    expect(isValid('(((')).toBe(false)
  })
})