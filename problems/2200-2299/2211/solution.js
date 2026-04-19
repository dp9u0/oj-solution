/*
 * @lc app=leetcode id=2211 lang=javascript
 *
 * [2211] Count Collisions on a Road
 */

// @lc code=start
/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let collisions = 0;
    const stack = [];

    for (const d of directions) {
        if (d === 'L') {
            if (stack.length > 0 && stack[stack.length - 1] === 'R') {
                collisions += 2;
                stack.pop();
                // collided car becomes stationary, may chain with more R's
                while (stack.length > 0 && stack[stack.length - 1] === 'R') {
                    collisions += 1;
                    stack.pop();
                }
                stack.push('S');
            } else if (stack.length > 0 && stack[stack.length - 1] === 'S') {
                collisions += 1;
            }
            // else: stack empty or top is 'L', no collision, L moves away
        } else if (d === 'S') {
            while (stack.length > 0 && stack[stack.length - 1] === 'R') {
                collisions += 1;
                stack.pop();
            }
            stack.push('S');
        } else {
            stack.push('R');
        }
    }

    return collisions;
};
// @lc code=end

// TEST:
console.log(countCollisions("RLRSLL"));  // 5
console.log(countCollisions("LLRR"));    // 0
console.log(countCollisions("SSRSSRLL")); // 4
console.log(countCollisions("RRRRS"));   // 4
