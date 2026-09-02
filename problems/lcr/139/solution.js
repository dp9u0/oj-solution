/*
 * @lc app=leetcode.cn id=LCR 139 lang=javascript
 *
 * [LCR 139] 训练计划 I
 */

// @lc code=start
/**
 * @param {number[]} actions
 * @return {number[]}
 */
var trainingPlan = function(actions) {
  let i = 0;
  let j = actions.length - 1;
  while (i < j) {
    // move i past odds
    while (i < j && actions[i] % 2 === 1) i++;
    // move j past evens
    while (i < j && actions[j] % 2 === 0) j--;
    if (i < j) {
      [actions[i], actions[j]] = [actions[j], actions[i]];
      i++;
      j--;
    }
  }
  return actions;
};
// @lc code=end

// TEST:
const assert = require('assert');

const oddFirst = (arr) => {
  const out = trainingPlan(arr.slice());
  let seenEven = false;
  for (const x of out) {
    if (x % 2 === 0) seenEven = true;
    else assert.strictEqual(seenEven, false, 'odd after even');
  }
  // parity multiset unchanged
  assert.deepStrictEqual(
    out.filter(x => x % 2 === 1).sort((a,b)=>a-b),
    arr.filter(x => x % 2 === 1).sort((a,b)=>a-b)
  );
  assert.deepStrictEqual(
    out.filter(x => x % 2 === 0).sort((a,b)=>a-b),
    arr.filter(x => x % 2 === 0).sort((a,b)=>a-b)
  );
  return out;
};

oddFirst([1, 2, 3, 4, 5]);
oddFirst([]);
oddFirst([2, 4, 6]);
oddFirst([1, 3, 5]);
oddFirst([2, 1, 4, 3, 6, 5]);
oddFirst([0, 1, 2, 3, 4, 5]);
// verify example 1 satisfies constraint
const ex = trainingPlan([1, 2, 3, 4, 5]);
assert.deepStrictEqual(ex.slice(0, 3).sort((a,b)=>a-b), [1, 3, 5]);
assert.deepStrictEqual(ex.slice(3).sort((a,b)=>a-b), [2, 4]);

console.log('All tests passed!');
console.log('trainingPlan([1,2,3,4,5]) =', JSON.stringify(trainingPlan([1, 2, 3, 4, 5])));
