import { bench, describe } from 'vitest';
import {
  singleNumber,
  singleNumberHashTable,
  singleNumberSet,
  singleNumberSetBitwise,
} from './singleNumber';

const input = Array.from({ length: 4_000 }, (_, index) => Math.floor(index / 2)).concat(-1);

const implementations = {
  dictionaryToggle: singleNumber,
  hashTableCounts: singleNumberHashTable,
  setAndSums: singleNumberSet,
  xor: singleNumberSetBitwise,
};

describe('single number performance', () => {
  for (const [name, implementation] of Object.entries(implementations)) {
    bench(name, () => {
      implementation(input);
    });
  }
});
