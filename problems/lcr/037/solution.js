/*
 * @lc app=leetcode.cn id=LCR 037 lang=javascript
 *
 * [LCR 037] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];
  for (const a of asteroids) {
    if (a > 0) {
      stack.push(a);
    } else {
      // left-moving asteroid; destroy smaller/equal right-moving ones on top
      while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < -a) {
        stack.pop();
      }
      if (!stack.length || stack[stack.length - 1] < 0) {
        stack.push(a); // survives
      } else if (stack[stack.length - 1] === -a) {
        stack.pop(); // both explode
      }
      // else top is bigger positive -> this asteroid explodes (do nothing)
    }
  }
  return stack;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(asteroidCollision([5, 10, -5]), [5, 10]);
assert.deepStrictEqual(asteroidCollision([8, -8]), []);
assert.deepStrictEqual(asteroidCollision([10, 2, -5]), [10]);
assert.deepStrictEqual(asteroidCollision([-2, -1, 1, 2]), [-2, -1, 1, 2]);
// chain collision
assert.deepStrictEqual(asteroidCollision([10, 2, -5, -5]), [10]);
assert.deepStrictEqual(asteroidCollision([10, 2, -5, -10]), []);
// left-movers first survive, then right-movers
assert.deepStrictEqual(asteroidCollision([-1, 1]), [-1, 1]);
assert.deepStrictEqual(asteroidCollision([1, -1]), []);
assert.deepStrictEqual(asteroidCollision([3, 2, -5]), [-5]);
assert.deepStrictEqual(asteroidCollision([-5, 3, 2]), [-5, 3, 2]);

console.log('All tests passed!');
console.log('asteroidCollision([5,10,-5]) =', JSON.stringify(asteroidCollision([5, 10, -5])));
