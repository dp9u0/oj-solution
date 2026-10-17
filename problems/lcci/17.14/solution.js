/*
 * @lc app=leetcode.cn id=面试题 17.14 lang=javascript
 *
 * [面试题 17.14] 最小K个数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
    if (k === 0) return [];
    const res = arr.slice();
    let lo = 0;
    let hi = res.length - 1;
    while (lo < hi) {
        const p = partition(res, lo, hi);
        if (p === k - 1) break;
        if (p < k - 1) lo = p + 1;
        else hi = p - 1;
    }
    return res.slice(0, k);
};

// 随机基准 Lomuto 分区
const partition = (a, lo, hi) => {
    const r = lo + Math.floor(Math.random() * (hi - lo + 1));
    [a[r], a[hi]] = [a[hi], a[r]];
    const pivot = a[hi];
    let i = lo;
    for (let j = lo; j < hi; j++) {
        if (a[j] < pivot) {
            [a[i], a[j]] = [a[j], a[i]];
            i++;
        }
    }
    [a[i], a[hi]] = [a[hi], a[i]];
    return i;
};
// @lc code=end

// TEST:
const sortedEq = (a, b) => JSON.stringify(a.slice().sort((x, y) => x - y)) === JSON.stringify(b);
console.log(JSON.stringify(smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4).slice().sort((a, b) => a - b)) === '[1,2,3,4]');
console.log(JSON.stringify(smallestK([1, 3, 5, 7, 2, 4, 6, 8], 0)) === '[]');
const all = smallestK([1, 3, 5, 7, 2, 4, 6, 8], 8);
console.log(sortedEq(all, [1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sortedEq(smallestK([3, 1, 3, 1, 2], 2), [1, 1]));
console.log(sortedEq(smallestK([9], 1), [9]));
const big = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000000));
const bigRes = smallestK(big, 1000);
console.log(bigRes.length === 1000 && Math.max(...bigRes) <= Math.min(...[...big].sort((a, b) => a - b).slice(1000)));
