import { describe, expect, test } from 'vitest';
import {
  evalRPNInPlace,
  evalRPNStack,
} from './evaluateReversePolishNotation';

describe('evaluate reverse Polish notation', () => {
  test.each([
    { tokens: ['2', '1', '+', '3', '*'], expected: 9 },
    { tokens: ['4', '13', '5', '/', '+'], expected: 6 },
    { tokens: ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'], expected: 22 },
    { tokens: ['7'], expected: 7 },
    { tokens: ['-7', '3', '/'], expected: -2 },
  ])('evaluates $tokens as $expected', ({ tokens, expected }) => {
    expect(evalRPNStack(tokens)).toBe(expected);
    expect(evalRPNInPlace([...tokens])).toBe(expected);
  });

  test('does not mutate the input when using the stack implementation', () => {
    const tokens = ['4', '13', '5', '/', '+'];

    evalRPNStack(tokens);

    expect(tokens).toEqual(['4', '13', '5', '/', '+']);
  });

  test('mutates the token list while evaluating in place', () => {
    const tokens = ['2', '1', '+'];

    expect(evalRPNInPlace(tokens)).toBe(3);
    expect(tokens).toEqual(['3']);
  });
});
