/*
 * @lc app=leetcode.cn id=2198 lang=javascript
 *
 * [2198] 单因数三元组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleDivisorTriplet = function(nums) {
    const cnt = new Int32Array(101);
    for (const v of nums) cnt[v]++;
    const C2 = (x) => (x * (x - 1)) / 2;
    const C3 = (x) => (x * (x - 1) * (x - 2)) / 6;
    let ans = 0;
    for (let a = 1; a <= 100; a++) {
        if (!cnt[a]) continue;
        for (let b = a; b <= 100; b++) {
            if (!cnt[b]) continue;
            for (let c = b; c <= 100; c++) {
                if (!cnt[c]) continue;
                const s = a + b + c;
                let div = 0;
                if (s % a === 0) div++;
                if (s % b === 0) div++;
                if (s % c === 0) div++;
                if (div !== 1) continue;
                if (a === b && b === c) ans += C3(cnt[a]) * 6;
                else if (a === b) ans += C2(cnt[a]) * cnt[c] * 6;
                else if (b === c) ans += cnt[a] * C2(cnt[b]) * 6;
                else ans += cnt[a] * cnt[b] * cnt[c] * 6;
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(singleDivisorTriplet([4,6,7,3,2])); // 12
console.log(singleDivisorTriplet([1,2,2])); // 6
console.log(singleDivisorTriplet([1,1,1])); // 0
console.log(singleDivisorTriplet([1,2,3])); // 0 (sum 6 divisible by all three)
console.log(singleDivisorTriplet([2,3,4])); // 6 (sum 9 divisible only by 3)
