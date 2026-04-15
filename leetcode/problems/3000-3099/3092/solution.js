/*
 * @lc app=leetcode id=3092 lang=javascript
 *
 * [3092] Most Frequent IDs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} freq
 * @return {number[]}
 */
var mostFrequentIDs = function(nums, freq) {
    const idCount = {};
    const freqOfFreq = {};
    let maxFreq = 0;
    const n = nums.length;
    const res = new Array(n);
    const dec = (m, k) => { m[k]--; if (m[k] === 0) delete m[k]; };
    for (let i = 0; i < n; i++) {
        const id = nums[i];
        const old = idCount[id] || 0;
        const nw = old + freq[i];
        idCount[id] = nw;
        if (old > 0) dec(freqOfFreq, old);
        freqOfFreq[nw] = (freqOfFreq[nw] || 0) + 1;
        if (nw > maxFreq) maxFreq = nw;
        else if (old === maxFreq && !freqOfFreq[old]) {
            while (maxFreq > 0 && !freqOfFreq[maxFreq]) maxFreq--;
        }
        res[i] = maxFreq;
    }
    return res;
};
// @lc code=end

// TEST:
console.log(mostFrequentIDs([2,3,2,1], [3,2,-3,1])); // [3,3,2,2]
console.log(mostFrequentIDs([5,5,3], [2,-2,1])); // [2,0,1]
