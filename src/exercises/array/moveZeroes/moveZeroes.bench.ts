import { bench, describe } from 'vitest';
import { moveZeroes } from './moveZeroes';

const input = Array.from({ length: 20_000 }, (_, index) =>
  index % 3 === 0 ? 0 : index,
);

describe('move zeroes performance', () => {
  bench('two-pointer compaction', () => {
    moveZeroes([...input]);
  });
});
