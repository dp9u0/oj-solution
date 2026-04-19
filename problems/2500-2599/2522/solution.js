/*
 * @lc app=leetcode id=2522 lang=javascript
 *
 * [2522] Partition String Into Substrings With Values at Most K
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {
    let result = 0;
    let i = 0;
    const n = s.length;

    while (i < n) {
        let val = 0;
        let j = i;
        while (j < n) {
            val = val * 10 + parseInt(s[j]);
            if (val > k) break;
            j++;
        }
        if (j === i) return -1; // single digit > k
        result++;
        i = j;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minimumPartition('165462', 60));   // 4
console.log(minimumPartition('238182', 5));     // -1
console.log(minimumPartition('1', 1));          // 1
