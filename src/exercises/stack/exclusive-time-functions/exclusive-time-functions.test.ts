import { describe, expect, test } from 'vitest'
import { exclusiveTime } from './exclusive-time-functions'

describe('exclusive time of functions', () => {
  test('accounts for nested function calls', () => {
    expect(exclusiveTime(2, [
      '0:start:0',
      '1:start:2',
      '1:end:5',
      '0:end:6',
    ])).toEqual([3, 4])
  })

  test('accounts for sequential calls', () => {
    expect(exclusiveTime(1, ['0:start:0', '0:end:1'])).toEqual([2])
  })
})