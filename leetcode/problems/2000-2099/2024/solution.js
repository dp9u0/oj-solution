/*
 * @lc app=leetcode id=2024 lang=javascript
 *
 * [2024] Maximize the Confusion of an Exam
 */

// @lc code=start
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    const maxLen = (target) => {
        let left = 0, count = 0, result = 0;
        for (let right = 0; right < answerKey.length; right++) {
            if (answerKey[right] !== target) count++;
            while (count > k) {
                if (answerKey[left] !== target) count--;
                left++;
            }
            result = Math.max(result, right - left + 1);
        }
        return result;
    };

    return Math.max(maxLen('T'), maxLen('F'));
};
// @lc code=end

// TEST:
console.log(maxConsecutiveAnswers("TTFF", 2));       // 4
console.log(maxConsecutiveAnswers("TFFT", 1));       // 3
console.log(maxConsecutiveAnswers("TTFTTFTT", 1));   // 5
