/*
 * @lc app=leetcode id=1687 lang=javascript
 *
 * [1687] Delivering Boxes from Storage to Ports
 */

// @lc code=start
/**
 * @param {number[][]} boxes
 * @param {number} portsCount
 * @param {number} maxBoxes
 * @param {number} maxWeight
 * @return {number}
 */
var boxDelivering = function(boxes, portsCount, maxBoxes, maxWeight) {
    const n = boxes.length;
    const prefixChange = [0];
    for (let i = 1; i < n; i++) {
        prefixChange[i] = prefixChange[i - 1] + (boxes[i][0] !== boxes[i - 1][0] ? 1 : 0);
    }
    const prefixWeight = [0];
    for (let i = 0; i < n; i++) {
        prefixWeight[i + 1] = prefixWeight[i] + boxes[i][1];
    }

    const dp = [0];
    const deque = [0];

    for (let i = 1; i <= n; i++) {
        while (deque.length > 0) {
            const j = deque[0];
            if (i - j > maxBoxes || prefixWeight[i] - prefixWeight[j] > maxWeight) {
                deque.shift();
            } else {
                break;
            }
        }
        const j = deque[0];
        dp[i] = dp[j] + prefixChange[i - 1] - prefixChange[j] + 2;

        if (i < n) {
            const fi = dp[i] - prefixChange[i];
            while (deque.length > 0 && dp[deque[deque.length - 1]] - prefixChange[deque[deque.length - 1]] >= fi) {
                deque.pop();
            }
            deque.push(i);
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(boxDelivering([[1,1],[2,1],[1,1]], 2, 3, 3));
console.log(boxDelivering([[1,2],[3,3],[3,1],[3,1],[2,4]], 3, 3, 6));
console.log(boxDelivering([[1,4],[1,2],[2,1],[2,1],[3,2],[3,4]], 3, 6, 7));
