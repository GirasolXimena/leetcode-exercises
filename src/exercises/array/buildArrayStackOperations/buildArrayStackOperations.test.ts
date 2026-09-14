import { describe, expect, test } from 'vitest';
import { buildArray } from './buildArrayStackOperations';

describe('buildArray', () => {
  test('returns an empty operation list for an empty target', () => {
    expect(buildArray([], 0)).toEqual([]);
  });

  test('handles a target that starts at 1', () => {
    expect(buildArray([1], 1)).toEqual(['Push']);
  });

  test('handles a consecutive target sequence', () => {
    expect(buildArray([1, 2, 3], 3)).toEqual(['Push', 'Push', 'Push']);
  });

  test('handles a target with a gap after the first value', () => {
    expect(buildArray([1, 3], 3)).toEqual(['Push', 'Push', 'Pop', 'Push']);
  });

  test('handles a target starting at a later value', () => {
    expect(buildArray([2], 4)).toEqual(['Push', 'Pop', 'Push']);
  });

  test('handles sparse targets with multiple invalid values before the next valid one', () => {
    expect(buildArray([1, 4], 4)).toEqual(['Push', 'Push', 'Pop', 'Push', 'Pop', 'Push']);
  });

  test('ignores n when it is larger than the final target value', () => {
    expect(buildArray([2, 3], 10)).toEqual(['Push', 'Pop', 'Push', 'Push']);
  });
});