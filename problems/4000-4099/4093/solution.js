/*
 * @lc app=leetcode.cn id=4093 lang=javascript
 *
 * [4093] 至多 K 次数字重排后的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    const desc = x => {
        const ds = String(x).split('').sort((a, b) => b.localeCompare(a)).join('');
        return Number(ds);
    };
    let base = 0;
    const gains = [];
    for (const x of nums) {
        base += x;
        const g = desc(x) - x;
        if (g > 0) gains.push(g);
    }
    gains.sort((a, b) => b - a);
    let extra = 0;
    const t = Math.min(k, gains.length);
    for (let i = 0; i < t; i++) extra += gains[i];
    return base + extra;
};
// @lc code=end

// TEST:
console.log(maximizeSum([123,45], 1) === 366);
console.log(maximizeSum([102,90,14], 2) === 341);
console.log(maximizeSum([5,5,5], 3) === 15); // 降序无收益
console.log(maximizeSum([987654321], 1) === 987654321); // 已降序
console.log(maximizeSum([21,12], 2) === 33 + 9); // 21→12... 21 降序 21 无收益,12→21 +9 → 21+21=42
