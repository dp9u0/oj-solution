/*
 * @lc app=leetcode.cn id=364 lang=javascript
 *
 * [364] 嵌套列表加权和 II
 */

// @lc code=start
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
    // level-order BFS; `prev` accumulates sums of all levels seen so far.
    // An integer at depth d is added once per level from d to maxDepth,
    // i.e. maxDepth - d + 1 times — exactly its weight.
    let prev = 0, ans = 0;
    let level = nestedList;
    while (level.length) {
        const next = [];
        let levelSum = 0;
        for (const ni of level) {
            if (ni.isInteger()) levelSum += ni.getInteger();
            else next.push(...ni.getList());
        }
        prev += levelSum;
        ans += prev;
        level = next;
    }
    return ans;
};
// @lc code=end

// TEST:
class NI {
    constructor(v) { this.v = v; } // number | NI[]
    isInteger() { return typeof this.v === 'number'; }
    getInteger() { return this.v; }
    getList() { return this.v; }
}
const I = n => new NI(n);
const L = (...items) => new NI(items);

console.log(depthSumInverse([L(I(1), I(1)), I(2), L(I(1), I(1))])); // 8
console.log(depthSumInverse([I(1), L(I(4), L(I(6)))])); // 17
console.log(depthSumInverse([I(6)])); // 6 (single top-level integer)
console.log(depthSumInverse([L(L(L(I(3))))])); // 3 (deep nesting)
console.log(depthSumInverse([L(I(1)), I(-2), L(I(-3))])); // -6 (negatives: 2-2-6)
console.log(depthSumInverse([L(I(5), L(I(2))), I(1)])); // 15 (5w2+2w1+1w3)
