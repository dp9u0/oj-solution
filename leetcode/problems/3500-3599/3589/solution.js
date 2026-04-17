/*
 * @lc app=leetcode id=3589 lang=javascript
 *
 * [3589] Count Prime-Gap Balanced Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var primeSubarray = function(nums, k) {
    const zelmoricad = nums;
    const n = nums.length;
    const maxVal = Math.max(...nums);

    const isPrime = new Uint8Array(maxVal + 1).fill(1);
    if (maxVal >= 0) isPrime[0] = 0;
    if (maxVal >= 1) isPrime[1] = 0;
    for (let i = 2; i * i <= maxVal; i++)
        if (isPrime[i])
            for (let j = i * i; j <= maxVal; j += i) isPrime[j] = 0;

    let ans = 0, L = 0;
    const minD = [], maxD = [], pPos = [];
    let minH = 0, maxH = 0, pH = 0;

    for (let R = 0; R < n; R++) {
        const v = nums[R];
        if (isPrime[v]) {
            while (minD.length > minH && nums[minD[minD.length - 1]] >= v) minD.pop();
            minD.push(R);
            while (maxD.length > maxH && nums[maxD[maxD.length - 1]] <= v) maxD.pop();
            maxD.push(R);
            pPos.push(R);
        }

        while (pPos.length - pH >= 2 && nums[maxD[maxH]] - nums[minD[minH]] > k) {
            if (isPrime[nums[L]]) {
                if (minD[minH] === L) minH++;
                if (maxD[maxH] === L) maxH++;
                pH++;
            }
            L++;
        }

        if (pPos.length - pH >= 2)
            ans += pPos[pPos.length - 2] - L + 1;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(primeSubarray([1,2,3], 1));         // 2
console.log(primeSubarray([2,3,5,7], 3));        // 4
console.log(primeSubarray([1,2,3,4,5], 1));      // [2,3],[1,2,3],[2,3,4],[1,2,3,4],[3,5],[4,5]... let me check
console.log(primeSubarray([2,2], 0));            // 1 (two 2s, gap=0)
console.log(primeSubarray([1,4,6,8], 5));        // 0 (no primes)
