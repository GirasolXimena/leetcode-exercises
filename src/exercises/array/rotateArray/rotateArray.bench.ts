import { bench, describe } from 'vitest';
import { rotate } from './rotateArray';

const input = Array.from({ length: 20_000 }, (_, index) => index);
const steps = 10_000;

describe('rotate array performance', () => {
  bench('rotate with normalized steps', () => {
    const values = [...input];
    rotate(values, steps);
  });
});
