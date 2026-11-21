/*
 * @lc app=leetcode.cn id=2137 lang=javascript
 *
 * [2137] 通过倒水操作让所有的水桶所含水量相等
 */

// @lc code=start
/**
 * @param {number[]} buckets
 * @param {number} loss
 * @return {number}
 */
var equalizeWater = function(buckets, loss) {
    const keep = 1 - loss / 100;
    let lo = 0, hi = Math.max(...buckets);
    for (let iter = 0; iter < 100; iter++) {
        const mid = (lo + hi) / 2;
        let need = 0, have = 0;
        for (const b of buckets) {
            if (b < mid) need += mid - b;
            else have += b - mid;
        }
        if (have * keep >= need) lo = mid;
        else hi = mid;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(equalizeWater([1,2,7], 80).toFixed(5)); // 2.00000
console.log(equalizeWater([2,4,6], 50).toFixed(5)); // 3.50000
console.log(equalizeWater([3,3,3,3], 40).toFixed(5)); // 3.00000
console.log(equalizeWater([5], 10).toFixed(5)); // 5.00000
console.log(equalizeWater([0,10], 100).toFixed(5)); // 0.00000 (100% loss keeps everything)
