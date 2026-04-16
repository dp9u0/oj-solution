/*
 * @lc app=leetcode id=2086 lang=javascript
 *
 * [2086] Minimum Number of Food Buckets to Feed the Hamsters
 */

// @lc code=start
/**
 * @param {string} hamsters
 * @return {number}
 */
var minimumBuckets = function(hamsters) {
    const n = hamsters.length;
    const arr = hamsters.split('');
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 'H') continue;
        if (i > 0 && arr[i - 1] === 'B') continue;
        if (i + 1 < n && arr[i + 1] === '.') {
            arr[i + 1] = 'B';
            count++;
        } else if (i > 0 && arr[i - 1] === '.') {
            arr[i - 1] = 'B';
            count++;
        } else {
            return -1;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(minimumBuckets('H..H'));   // 2
console.log(minimumBuckets('.H.H.'));  // 1
console.log(minimumBuckets('.HHH.'));  // -1
