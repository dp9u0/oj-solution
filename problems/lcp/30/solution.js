/*
 * @lc app=leetcode.cn id=LCP 30 lang=javascript
 *
 * [LCP 30] 魔塔游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var magicTower = function(nums) {
  // total must be >= 0 to finish with positive HP (start 1)
  let sum = 0;
  for (const v of nums) sum += v;
  if (sum < 0) return -1;

  let hp = 1;
  const heap = []; // min-heap of negative monsters currently in the active path
  let moves = 0;

  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let j = 0;
      const n = heap.length;
      for (;;) {
        const l = 2 * j + 1;
        const r = 2 * j + 2;
        let s = j;
        if (l < n && heap[l] < heap[s]) s = l;
        if (r < n && heap[r] < heap[s]) s = r;
        if (s === j) break;
        [heap[j], heap[s]] = [heap[s], heap[j]];
        j = s;
      }
    }
    return top;
  };

  for (const v of nums) {
    if (v >= 0) {
      hp += v;
    } else {
      hp += v;
      push(v);
      if (hp <= 0) {
        const worst = pop(); // most negative room: defer it to the end
        hp -= worst;         // undo its damage
        moves++;
      }
    }
  }
  return moves;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(magicTower([100, 100, 100, -250, -60, -140, -50, -50, 100, 150]), 1);
assert.strictEqual(magicTower([-200, -300, 400, 0]), -1);
// all positive, no moves
assert.strictEqual(magicTower([1, 2, 3]), 0);
// impossible even all deferred
assert.strictEqual(magicTower([-5, 1]), -1);
// total negative -> impossible even deferred
assert.strictEqual(magicTower([100, -90, -20]), -1);
// two crises each need a deferral
assert.strictEqual(magicTower([-1, -1, 3]), 2);
// two crises need two moves
assert.strictEqual(magicTower([1, -10, 3, -10, 20]), 2);
// sum 0 but first room needs one deferral
assert.strictEqual(magicTower([-10, 10]), 1);

console.log('All tests passed!');
console.log('magicTower([100,100,100,-250,-60,-140,-50,-50,100,150]) =', magicTower([100, 100, 100, -250, -60, -140, -50, -50, 100, 150]));
