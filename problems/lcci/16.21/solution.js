/*
 * @lc app=leetcode.cn id=面试题 16.21 lang=javascript
 *
 * [面试题 16.21] 交换和
 */

// @lc code=start
/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
var findSwapValues = function(array1, array2) {
    // 交换 a,b 后相等 ⇔ a - b = (sumA - sumB) / 2
    let sumA = 0;
    let sumB = 0;
    for (const v of array1) sumA += v;
    for (const v of array2) sumB += v;
    const diff = sumA - sumB;
    if (diff % 2 !== 0) return []; // 差为奇数无整数解
    const half = diff / 2;
    const setB = new Set(array2);
    for (const a of array1) {
        const b = a - half;
        if (setB.has(b)) return [a, b];
    }
    return [];
};
// @lc code=end

// TEST:
// 校验：返回的两值分别来自两数组，交换后总和相等
const okSwap = (a1, a2, res) => {
    if (!res.length) {
        return false; // 本测试组均有解
    }
    const [a, b] = res;
    if (!a1.includes(a) || !a2.includes(b)) return false;
    const sum = arr => arr.reduce((x, y) => x + y, 0);
    return sum(a1) - a + b === sum(a2) - b + a;
};
console.log(okSwap([4, 1, 2, 1, 1, 2], [3, 6, 3, 3], findSwapValues([4, 1, 2, 1, 1, 2], [3, 6, 3, 3])));
console.log(JSON.stringify(findSwapValues([1, 2, 3], [4, 5, 6])) === '[]'); // 差为奇数
console.log(okSwap([1, 2, 3], [3, 2, 1], findSwapValues([1, 2, 3], [3, 2, 1]))); // 和已相等
console.log(JSON.stringify(findSwapValues([5], [2])) === '[]');
console.log(okSwap([10], [1, 11], findSwapValues([10], [1, 11]))); // 10 vs 12，a=10,b=11
console.log(JSON.stringify(findSwapValues([0], [1, 2])) === '[]'); // 和差 -3 为奇数，无整数解
console.log(okSwap([-3, 1, 2], [0, 4], findSwapValues([-3, 1, 2], [0, 4]))); // 含负数，-3+1+2=0 vs 4
