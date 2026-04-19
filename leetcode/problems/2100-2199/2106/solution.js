/*
 * @lc app=leetcode id=2106 lang=javascript
 *
 * [2106] Maximum Fruits Harvested After at Most K Steps
 */

// @lc code=start
/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    const n = fruits.length;
    const pre = [0];
    for (let i = 0; i < n; i++) pre.push(pre[i] + fruits[i][1]);

    const getCost = (l, r) => {
        const pL = fruits[l][0], pR = fruits[r][0];
        if (pL >= startPos) return pR - startPos;
        if (pR <= startPos) return startPos - pL;
        return Math.min(startPos + pR - 2 * pL, 2 * pR - startPos - pL);
    };

    let ans = 0, l = 0;
    for (let r = 0; r < n; r++) {
        while (l <= r && getCost(l, r) > k) l++;
        if (l <= r) ans = Math.max(ans, pre[r + 1] - pre[l]);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxTotalFruits([[2,8],[6,3],[8,6]], 5, 4)); // 9
console.log(maxTotalFruits([[0,9],[4,1],[5,7],[6,2],[7,4],[10,9]], 5, 4)); // 14
console.log(maxTotalFruits([[0,3],[6,4],[8,5]], 3, 2)); // 0
console.log(maxTotalFruits([[1,1]], 0, 1)); // 1
console.log(maxTotalFruits([[0,10],[1,20],[2,30]], 1, 2)); // 50
