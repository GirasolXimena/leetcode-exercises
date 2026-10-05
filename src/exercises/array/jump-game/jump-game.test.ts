import { describe, expect, test } from 'vitest'
import { canJump } from './jump-game'

describe('jump game', () => {
  test('reaches the final index', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true)
  })

  test('cannot jump past a zero barrier', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false)
  })

  test('handles a single position and a zero first jump', () => {
    expect(canJump([0])).toBe(true)
    expect(canJump([0, 1])).toBe(false)
  })
})