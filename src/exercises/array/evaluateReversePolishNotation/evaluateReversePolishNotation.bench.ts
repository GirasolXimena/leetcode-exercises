import { bench, describe } from 'vitest';
import {
  evalRPNInPlace,
  evalRPNStack,
} from './evaluateReversePolishNotation';

function createLeftAssociatedExpression(operationCount: number): string[] {
  const tokens = ['1', '1', '+'];

  for (let operation = 1; operation < operationCount; operation++) {
    tokens.push('1', '+');
  }

  return tokens;
}

const tokens = createLeftAssociatedExpression(2_000);

describe('RPN evaluator performance', () => {
  bench('stack', () => {
    evalRPNStack(tokens);
  });

  bench('in place', () => {
    evalRPNInPlace([...tokens]);
  });
});
