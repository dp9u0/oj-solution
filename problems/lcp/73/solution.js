/*
 * @lc app=leetcode.cn id=LCP 73 lang=javascript
 *
 * [LCP 73] 探险营地
 */

// @lc code=start
/**
 * @param {string[]} expeditions
 * @return {number}
 */
var adventureCamp = function(expeditions) {
  const known = new Set();
  if (expeditions[0]) {
    for (const camp of expeditions[0].split('->')) known.add(camp);
  }
  let bestIdx = -1;
  let bestCount = 0;
  for (let i = 1; i < expeditions.length; i++) {
    const rec = expeditions[i];
    if (!rec) continue;
    let newCount = 0;
    for (const camp of rec.split('->')) {
      if (!known.has(camp)) {
        known.add(camp);
        newCount++;
      }
    }
    if (newCount > bestCount) {
      bestCount = newCount;
      bestIdx = i;
    }
  }
  return bestIdx;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(adventureCamp(['leet->code', 'leet->code->Campsite->Leet', 'leet->code->leet->courier']), 1);
assert.strictEqual(adventureCamp(['Alice->Dex', '', 'Dex']), -1);
assert.strictEqual(adventureCamp(['', 'Gryffindor->Slytherin->Gryffindor', 'Hogwarts->Hufflepuff->Ravenclaw']), 2);
// case sensitivity
assert.strictEqual(adventureCamp(['a', 'A', 'a']), 1);
// empty initial, one later discovers 1
assert.strictEqual(adventureCamp(['', 'x', 'x']), 1);
// tie prefers smaller index
assert.strictEqual(adventureCamp(['a', 'b', 'c']), 1);
// duplicate within a single record counts once
assert.strictEqual(adventureCamp(['', 'y->y->y']), 1);

console.log('All tests passed!');
console.log('adventureCamp(["leet->code","leet->code->Campsite->Leet","leet->code->leet->courier"]) =', adventureCamp(['leet->code', 'leet->code->Campsite->Leet', 'leet->code->leet->courier']));
