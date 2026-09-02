/*
 * @lc app=leetcode.cn id=LCP 09 lang=javascript
 *
 * [LCP 09] 最小跳跃次数
 */

// @lc code=start
/**
 * @param {number[]} jump
 * @return {number}
 */
var minJump = function(jump) {
  const n = jump.length;
  const visited = new Uint8Array(n);
  const depth = new Int32Array(n);
  const queue = new Array(n);
  visited[0] = 1;
  queue[0] = 0;
  let head = 0, tail = 1;
  let p = 1; // smallest index not yet reached
  while (head < tail) {
    const i = queue[head++];
    const d = depth[i];
    const r = i + jump[i];
    if (r >= n) return d + 1;
    if (r < n && !visited[r]) {
      visited[r] = 1;
      depth[r] = d + 1;
      queue[tail++] = r;
    }
    while (p < i && p < n) {
      if (!visited[p]) {
        visited[p] = 1;
        depth[p] = d + 1;
        queue[tail++] = p;
      }
      p++;
    }
  }
  return -1;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minJump([2, 5, 1, 1, 1, 1]), 3);
assert.strictEqual(minJump([1, 1, 1]), 3); // 0->1->2->3 exit
assert.strictEqual(minJump([5]), 1); // exit directly
assert.strictEqual(minJump([1]), 1); // 0+jump[0]=1 >= n exits
assert.strictEqual(minJump([1, 1]), 2); // 0->1->2 exit
assert.strictEqual(minJump([2, 2, 2]), 2); // 0->2->4 exit
assert.strictEqual(minJump([1, 1, 1, 1]), 4);

console.log('All tests passed!');
console.log('minJump([2,5,1,1,1,1]) =', minJump([2, 5, 1, 1, 1, 1]));
