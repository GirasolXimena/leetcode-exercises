# Reverse Polish Notation: stack vs. in-place evaluation

## Implementations

- `evalRPNStack` reads each token once and stores intermediate numbers in a numeric stack.
- `evalRPNInPlace` repeatedly finds an operator, replaces the operator and its two operands with one string, and shifts the rest of the token array with `splice`.

Both implementations use $O(n)$ auxiliary space in the worst case when counting the input copy needed by the in-place benchmark. The stack evaluator performs $O(n)$ work: each token is pushed or popped once.

The in-place evaluator can perform $O(n^2)$ work. On a left-associated expression such as `1 1 + 1 + 1 + ...`, each `splice` happens near the start of the array while many remaining tokens still need to be shifted. It also converts intermediate numbers to strings and parses them again, adding overhead.

## Benchmark

Run the focused Vitest benchmark with:

```sh
npx vitest bench src/exercises/array/evaluateReversePolishNotation/evaluateReversePolishNotation.bench.ts
```

The benchmark evaluates the same 4,001-token expression in both cases. The in-place function receives a fresh copy on every iteration because it mutates its input; this includes the copying cost required for a fair, repeatable call. The stack function reuses the original input because it does not mutate it.

The benchmark's `hz` column is the key result: a higher value means more evaluations per second. On this workload, the stack implementation should be faster, and the gap should grow as the expression gets longer. Exact timings depend on the machine, Node.js version, and current system load, so the benchmark is the source of measured numbers rather than a hard-coded speed claim.
