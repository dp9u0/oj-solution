/*
 * @lc app=leetcode.cn id=2921 lang=javascript
 *
 * [2921] 价格递增的最大利润三元组 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number[]} profits
 * @return {number}
 */
var maxProfit = function(prices, profits) {
    const n = prices.length;
    const MAXP = 5000;
    const makeMaxBit = (size) => {
        const tree = new Array(size + 1).fill(0);
        return {
            update(pos, val) {
                for (; pos <= size; pos += pos & (-pos)) if (val > tree[pos]) tree[pos] = val;
            },
            query(pos) {
                let r = 0;
                for (; pos > 0; pos -= pos & (-pos)) if (tree[pos] > r) r = tree[pos];
                return r;
            }
        };
    };
    const leftMax = new Array(n);
    const bitL = makeMaxBit(MAXP);
    for (let j = 0; j < n; j++) {
        leftMax[j] = bitL.query(prices[j] - 1);
        bitL.update(prices[j], profits[j]);
    }
    const rightMax = new Array(n);
    const bitR = makeMaxBit(MAXP);
    for (let j = n - 1; j >= 0; j--) {
        rightMax[j] = bitR.query(MAXP - prices[j]);
        bitR.update(MAXP + 1 - prices[j], profits[j]);
    }
    let ans = -1;
    for (let j = 1; j < n - 1; j++) {
        if (leftMax[j] > 0 && rightMax[j] > 0) {
            const cand = leftMax[j] + profits[j] + rightMax[j];
            if (cand > ans) ans = cand;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxProfit([10,2,3,4], [100,2,7,10])); // 19
console.log(maxProfit([1,2,3,4,5], [1,5,3,4,6])); // 15
console.log(maxProfit([4,3,2,1], [33,20,19,87])); // -1
console.log(maxProfit([1,2,3], [30,20,10])); // 60
console.log(maxProfit([1,1,2,3], [9,8,7,6])); // 22
