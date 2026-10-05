export function buildArray(target: number[], _n: number): string[] {
    let result: string[] = [];
    let stack: number[] = [];
    // need to iterate until we get to the last number in our target
    // last number is last item in target array
    // since array is in sequential order
    for (let i = 1; i <= target[target.length-1]; i++) {
    
        // we must push to get to the next number
        // and add it to the stack
        // so this happens every loop
        result.push("Push");
        stack.push(i);

        // if we just pushed an invalid number
        // we pop it
        if(!target.includes(i)) {
            result.push("Pop")
            stack.pop();
        }
    }
    return result;
};
