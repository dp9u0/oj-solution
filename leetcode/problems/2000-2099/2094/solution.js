/*
 * @lc app=leetcode id=2094 lang=javascript
 *
 * [2094] Finding 3-Digit Even Numbers
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const freq = new Array(10).fill(0);
    for (const d of digits) freq[d]++;

    const result = [];
    for (let num = 100; num <= 998; num += 2) {
        const a = Math.floor(num / 100);
        const b = Math.floor((num % 100) / 10);
        const c = num % 10;
        freq[a]--;
        freq[b]--;
        freq[c]--;
        if (freq[a] >= 0 && freq[b] >= 0 && freq[c] >= 0) {
            result.push(num);
        }
        freq[a]++;
        freq[b]++;
        freq[c]++;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(findEvenNumbers([2,1,3,0]));
// Expected: [102,120,130,132,210,230,302,310,312,320]

console.log(findEvenNumbers([2,2,8,8,2]));
// Expected: [222,228,282,288,822,828,882]

console.log(findEvenNumbers([3,7,5]));
// Expected: []
