/*
 * @lc app=leetcode id=1769 lang=javascript
 *
 * [1769] Minimum Number of Operations to Move All Balls to Each Box
 */

// @lc code=start
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const n = boxes.length;
    const answer = new Array(n).fill(0);

    let leftCount = 0, leftOps = 0;
    for (let i = 0; i < n; i++) {
        answer[i] += leftOps;
        if (boxes[i] === '1') leftCount++;
        leftOps += leftCount;
    }

    let rightCount = 0, rightOps = 0;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] += rightOps;
        if (boxes[i] === '1') rightCount++;
        rightOps += rightCount;
    }

    return answer;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minOperations('110')));
console.log(JSON.stringify(minOperations('001011')));
console.log(JSON.stringify(minOperations('0')));
console.log(JSON.stringify(minOperations('1')));
