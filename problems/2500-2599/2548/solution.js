/*
 * @lc app=leetcode.cn id=2548 lang=javascript
 *
 * [2548] 填满背包的最大价格
 */

// @lc code=start
/**
 * @param {number[][]} items
 * @param {number} capacity
 * @return {number}
 */
var maxPrice = function(items, capacity) {
    const sorted = items.slice().sort((a, b) => b[0] * a[1] - a[0] * b[1]); // price/weight desc
    let totalW = 0;
    for (const [, w] of sorted) totalW += w;
    if (totalW < capacity) return -1;
    let price = 0, rem = capacity;
    for (const [p, w] of sorted) {
        if (rem <= 0) break;
        if (w <= rem) {
            price += p;
            rem -= w;
        } else {
            price += (p * rem) / w;
            rem = 0;
        }
    }
    return price;
};
// @lc code=end

// TEST:
console.log(maxPrice([[50,1],[10,8]], 5).toFixed(5)); // 55.00000
console.log(maxPrice([[100,30]], 50).toFixed(5)); // -1.00000
console.log(maxPrice([[10,5]], 5).toFixed(5)); // 10.00000
console.log(maxPrice([[1,1],[2,2],[3,3]], 6).toFixed(5)); // 6.00000
console.log(maxPrice([[10000,1]], 1).toFixed(5)); // 10000.00000
