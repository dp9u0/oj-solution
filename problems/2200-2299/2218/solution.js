/*
 * @lc app=leetcode id=2218 lang=javascript
 *
 * [2218] Maximum Value of K Coins From Piles
 */

// @lc code=start
/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    let dp = new Array(k + 1).fill(0);

    for (const pile of piles) {
        // prefix sum of this pile
        const prefix = [0];
        for (const coin of pile) {
            prefix.push(prefix[prefix.length - 1] + coin);
        }
        const m = Math.min(pile.length, k);
        const newDp = new Array(k + 1).fill(0);
        for (let j = 0; j <= k; j++) {
            let best = dp[j]; // take 0 from this pile
            for (let t = 1; t <= m && t <= j; t++) {
                const val = dp[j - t] + prefix[t];
                if (val > best) best = val;
            }
            newDp[j] = best;
        }
        dp = newDp;
    }

    return dp[k];
};
// @lc code=end

// TEST:
console.log(maxValueOfCoins([[1,100,3],[7,8,9]], 2));       // 101
console.log(maxValueOfCoins([[100],[100],[100],[100],[100],[100],[1,1,1,1,1,1,700]], 7)); // 706
console.log(maxValueOfCoins([[1]], 1));                       // 1
console.log(maxValueOfCoins([[1,2],[3,4]], 3));              // 7 (2+4+1 or 3+4)
console.log(maxValueOfCoins([[1,2,3],[4,5,6]], 4));          // 15 (4+5+6 or 3+5+6+1)
console.log(maxValueOfCoins([[100]], 1));                     // 100
