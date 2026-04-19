/*
 * @lc app=leetcode id=2007 lang=javascript
 *
 * [2007] Find Original Array From Doubled Array
 */

// @lc code=start
/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    const n = changed.length;
    if (n % 2 !== 0) return [];

    const count = new Map();
    for (const num of changed) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    const sorted = [...count.keys()].sort((a, b) => a - b);
    const result = [];

    for (const num of sorted) {
        const cnt = count.get(num);
        if (cnt === 0) continue;

        if (num === 0) {
            if (cnt % 2 !== 0) return [];
            for (let i = 0; i < cnt / 2; i++) result.push(0);
            continue;
        }

        const doubleCnt = count.get(num * 2) || 0;
        if (doubleCnt < cnt) return [];

        count.set(num * 2, doubleCnt - cnt);
        for (let i = 0; i < cnt; i++) result.push(num);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findOriginalArray([1, 3, 4, 2, 6, 8]))); // [1,3,4]
console.log(JSON.stringify(findOriginalArray([6, 3, 0, 1]))); // []
console.log(JSON.stringify(findOriginalArray([1]))); // []
console.log(JSON.stringify(findOriginalArray([0, 0, 0, 0]))); // [0,0]
