/*
 * @lc app=leetcode.cn id=3041 lang=javascript
 *
 * [3041] 修改数组后最大化数组中的连续元素数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSelectedElements = function(nums) {
    nums.sort((a, b) => a - b);
    // endNoInc[v]: longest chain whose maximum final value is v, with the last
    //              element kept as-is (final value equals its original value v)
    // endInc[v]:   longest chain whose maximum final value is v, with the last
    //              element incremented (original value v - 1)
    const endNoInc = new Map();
    const endInc = new Map();
    let ans = 1;
    for (const x of nums) {
        // snapshot before this element updates the maps, so a single element
        // can never be consumed as two consecutive finals
        const prevNoInc = endNoInc.get(x) || 0;
        const prevInc = endInc.get(x) || 0;
        // use x as-is (final value x): predecessor chain must end at x - 1
        const extendNoInc =
            Math.max(endNoInc.get(x - 1) || 0, endInc.get(x - 1) || 0) + 1;
        // increment x to x + 1: predecessor chain must end at x
        const extendInc = Math.max(prevNoInc, prevInc) + 1;
        endNoInc.set(x, Math.max(prevNoInc, extendNoInc));
        endInc.set(x + 1, Math.max(prevInc, extendInc));
        ans = Math.max(ans, endNoInc.get(x), endInc.get(x + 1));
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxSelectedElements([2,1,5,1,1])); // 3
console.log(maxSelectedElements([1,4,7,10])); // 1
console.log(maxSelectedElements([1,1,2,3])); // 4 (1,1->2,2->3,3->4)
console.log(maxSelectedElements([8,5,2,7])); // 3 (5->6,7,8)
console.log(maxSelectedElements([1,1,1,1])); // 2 (1,1->2)
console.log(maxSelectedElements([7])); // 1 (single element)
console.log(maxSelectedElements([2,3,4,5])); // 4
console.log(maxSelectedElements([1,3,2,1])); // 4 (sorted 1,1,2,3 -> 1,2,3,4)
console.log(maxSelectedElements([8,10,6,12,9,12,2,3,13,19,11,18,10,16])); // 8 (7..14)
