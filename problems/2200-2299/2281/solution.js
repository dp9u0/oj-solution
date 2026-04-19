/*
 * @lc app=leetcode id=2281 lang=javascript
 *
 * [2281] Sum of Total Strength of Wizards
 */

// @lc code=start
/**
 * @param {number[]} strength
 * @return {number}
 */
var totalStrength = function(strength) {
    const MOD = BigInt(1e9 + 7);
    const n = strength.length;
    const a = strength.map(BigInt);

    // Prefix sum
    const prefix = [0n];
    for (let i = 0; i < n; i++) prefix.push(prefix[i] + a[i]);

    // Prefix of prefix sum
    const ppx = [0n];
    for (let i = 0; i <= n; i++) ppx.push(ppx[i] + prefix[i]);

    // Monotonic stack to find leftBound (first < on left) and rightBound (first <= on right)
    const leftBound = new Int32Array(n).fill(-1);
    const rightBound = new Int32Array(n).fill(n);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && a[stack[stack.length - 1]] > a[i]) {
            rightBound[stack.pop()] = i;
        }
        stack.push(i);
    }
    stack.length = 0;
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && a[stack[stack.length - 1]] >= a[i]) {
            leftBound[stack.pop()] = i;
        }
        stack.push(i);
    }

    let result = 0n;
    for (let i = 0; i < n; i++) {
        const L = i - leftBound[i];
        const R = rightBound[i] - i;
        // Sum of sums for subarrays where i is min:
        // left in (leftBound, i], right in [i, rightBound)
        // sum = ppx[rightBound+1] - ppx[i+1] - (ppx[i+1] - ppx[leftBound+1]) * R
        //     - (ppx[rightBound+1] - ppx[i+1]) * 0 + ...
        // Using the formula:
        // total_sum = R * (ppx[i+1] - ppx[leftBound+1]) - L * (ppx[rightBound+1] - ppx[i+1])
        const positive = (BigInt(L) * (ppx[rightBound[i] + 1] - ppx[i + 1])) % MOD;
        const negative = (BigInt(R) * (ppx[i + 1] - ppx[leftBound[i] + 1])) % MOD;
        const contrib = ((positive - negative + MOD) % MOD * a[i]) % MOD;
        result = (result + contrib) % MOD;
    }

    return Number(result);
};
// @lc code=end

// TEST:
console.log(totalStrength([1,3,1,2])); // 44
console.log(totalStrength([5,4,6])); // 213
console.log(totalStrength([1])); // 1
console.log(totalStrength([1,2])); // 8 (1+4+3)
console.log(totalStrength([2,1,3])); // 27 (4+1+9+3+3+6+7) let me calc: [2]=4,[1]=1,[3]=9,[2,1]=1*3=3,[1,3]=1*4=4,[2,1,3]=1*6=6 => 4+1+9+3+4+6=27
console.log(totalStrength([3])); // 9
