import { describe, expect, test } from 'vitest'
import { countStudents } from './students-unable-to-eat-lunch'

describe('students unable to eat lunch', () => {
  test('counts students left when no preference matches the top sandwich', () => {
    expect(countStudents([1, 1, 0, 0], [0, 1, 0, 1])).toBe(0)
    expect(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])).toBe(3)
  })

  test('returns zero when every student gets a sandwich', () => {
    expect(countStudents([1, 1, 0, 0], [0, 1, 0, 1])).toBe(0)
  })
})