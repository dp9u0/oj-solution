/*
 * @lc app=leetcode id=2555 lang=javascript
 *
 * [2555] Maximize Win From Two Segments
 */

// @lc code=start
/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function(prizePositions, k) {
    const n = prizePositions.length;
    const pre = new Array(n).fill(0);
    let ans = 0, l = 0;
    for (let r = 0; r < n; r++) {
        while (prizePositions[r] - prizePositions[l] > k) l++;
        const cnt = r - l + 1;
        pre[r] = Math.max(r > 0 ? pre[r - 1] : 0, cnt);
        ans = Math.max(ans, cnt + (l > 0 ? pre[l - 1] : 0));
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maximizeWin([1,1,2,2,3,3,5], 2)); // 7
console.log(maximizeWin([1,2,3,4], 0));        // 2
