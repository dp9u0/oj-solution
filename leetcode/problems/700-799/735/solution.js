/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
    for (const a of asteroids) {
        let alive = true;
        while (alive && a < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            const top = stack[stack.length - 1];
            if (top < -a) {
                stack.pop();
            } else if (top === -a) {
                stack.pop();
                alive = false;
            } else {
                alive = false;
            }
        }
        if (alive) stack.push(a);
    }
    return stack;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(asteroidCollision([5,10,-5]))); // [5,10]
console.log(JSON.stringify(asteroidCollision([8,-8]))); // []
console.log(JSON.stringify(asteroidCollision([10,2,-5]))); // [10]
console.log(JSON.stringify(asteroidCollision([3,5,-6,2,-1,4]))); // [-6,2,4]
