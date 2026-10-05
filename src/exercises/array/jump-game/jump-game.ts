export function canJump(nums: number[]): boolean {
    const goal = nums.length - 1;

    function isJumpable(position: number): boolean {
        // we have reached goal
        if (position === goal) {
            return true;
        }

        const num = nums[position]
        // start at position
        // you can jump up to a maximum length of num
        let furthestJump = position + num

        // we can't jump past goal
        // so if goal is closer than furthest jump
        // we need ot set furthest jump to goal
        // if (goal < furthestJump) {
            // furthestJump = goal
        // }

        for (
            let nextPosition = position + 1;
            nextPosition <= furthestJump;
            nextPosition++
        ) {
            if (isJumpable(nextPosition)) {
                return true;
            }
        }
        return false
    }

    return isJumpable(0);
};