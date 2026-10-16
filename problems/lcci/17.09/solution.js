/*
 * @lc app=leetcode.cn id=面试题 17.09 lang=javascript
 *
 * [面试题 17.09] 第 k 个数
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {
    const dp = new Array(k);
    dp[0] = 1;
    let p3 = 0, p5 = 0, p7 = 0;
    for (let i = 1; i < k; i++) {
        const v3 = dp[p3] * 3;
        const v5 = dp[p5] * 5;
        const v7 = dp[p7] * 7;
        const next = Math.min(v3, v5, v7);
        dp[i] = next;
        // 不用 else if：重复值(如 15=3*5=5*3)一次推过所有相等指针
        if (next === v3) p3++;
        if (next === v5) p5++;
        if (next === v7) p7++;
    }
    return dp[k - 1];
};
// @lc code=end

// TEST:
console.log(getKthMagicNumber(1) === 1);
console.log(getKthMagicNumber(5) === 9);
console.log(getKthMagicNumber(7) === 21);
console.log(getKthMagicNumber(3) === 5);
console.log(getKthMagicNumber(10) === 35); // 1,3,5,7,9,15,21,25,27,35
