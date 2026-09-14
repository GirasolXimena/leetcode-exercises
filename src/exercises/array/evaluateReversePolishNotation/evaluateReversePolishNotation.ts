const actions: Record<string, (a: number, b: number) => number> = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    // `| 0 ` is used to truncate the result to an integer
    // faster than Math.trunc() and works for both positive and negative numbers
    // how it works is: 
    // 1. The division operation is performed, resulting in a floating-point number.
    // 2. The bitwise OR operation with 0 is applied to the floating-point number.
    // 3. The result of the bitwise OR operation is an integer, effectively truncating the decimal part.
    '/': (a, b) => a / b | 0,
}

export function evalRPNInPlace(tokens: string[]): number {
    const operands = ["+", "-", "*", "/"];
    let result = 0;
    for (let i = 0; i <= tokens.length; i++) {
        if (tokens.length === 1) {
            return Number(tokens[0]);
        }
        if (operands.includes(tokens[i])) {
            // two previous numbers are integers
            let first = Number(tokens[i - 2])
            const second = Number(tokens[i - 1])

        /*
            // replace switch statement with actions object
            // it helps to avoid the switch statement and makes it easier to add new operations in the future
            switch (tokens[i]) {
                case "+":
                    result = first + second;
                    break;
                case "-":
                    result = first - second;
                    break;
                case "*":
                    result = first * second;
                    break;
                case "/":
                    result = Math.trunc(first / second);
                    break;

            }
        */
            result = actions[tokens[i]](first, second)

            // replace operation we did with result
            tokens.splice(i - 2, 3, String(result))
            // if there is only 1 item in array
            // it is the final result
            // so we can end the loop early

            i = 0

        }
            

    }

    return Number(result);
};

export function evalRPNStack(tokens: string[]): number {
    const stack: number[] = [];
    let result = 0;

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (Object.hasOwn(actions, token)) {
            const b = stack.pop()!;
            const a = stack.pop()!;
            result = actions[token](a, b);
            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0] ?? 0;   
}