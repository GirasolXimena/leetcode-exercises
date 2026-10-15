function canJump(nums: number[]): boolean {
    let goal = nums.length - 1;

    for (let pos = nums.length - 1; pos >= 0; pos--) {
        let furthestJump = pos + nums[pos]

        // we can't jump past goal
        // so if goal is closer than furthest jump
        // we need ot set furthest jump to goal
        if (furthestJump >= goal) {
            goal = pos
        }
    }
    return goal === 0
};



// function canJump(nums: number[]): boolean {
//     const goal = nums.length - 1;

//     // fill all positions with false because we don't know
//     // the path is viable 
//     let memo: boolean[] = new Array(nums.length).fill(false);

//     // last index is always viable
//     memo[goal] = true;

//     // walk backwards through array
//     for (let pos = nums.length - 2; pos >= 0; pos--) {
//         // you can jump up to a maximum length of num
//         // you start at your current position
//         let furthestJump = pos + nums[pos]

//         // we can't jump past goal
//         // so if goal is closer than furthest jump
//         // we need ot set furthest jump to goal
//         if (goal < furthestJump) {
//             furthestJump = goal
//         }

//         for (
//             let nextPos = pos + 1;
//             nextPos <= furthestJump;
//             nextPos++
//         ) {
//             if (memo[nextPos] === true) {
//                 memo[pos] = true
//                 break;
//             }
//         }
//     }
//     return memo.shift()
// };


// function canJump(nums: number[]): boolean {
//     const goal = nums.length - 1;

//     // fill all positions with unknown 
//     let memo: Memo[] = new Array(nums.length).fill(null);

//     // last index is always good
//     memo[goal] = M.GOOD;

//     function isJumpable(position: number): boolean {
//         // if it is not null we have seen this position before
//         if (memo[position] !== null) {
//             return memo[position] === M.GOOD;
//         }

//         const num = nums[position]
//         // start at position
//         // you can jump up to a maximum length of num
//         let furthestJump = position + num

//         // we can't jump past goal
//         // so if goal is closer than furthest jump
//         // we need ot set furthest jump to goal
//         if (goal < furthestJump) {
//             furthestJump = goal
//         }

//         for (
//             let nextPosition = position + 1;
//             nextPosition <= furthestJump;
//             nextPosition++
//         ) {
//             // console.log({ position, nextPosition})
//             if (isJumpable(nextPosition)) {
//                 memo[position] = M.GOOD
//                 return true;
//             }
//         }
//         memo[position] = M.BAD
//         return false
//     }
//     return isJumpable(0);
// };

// /