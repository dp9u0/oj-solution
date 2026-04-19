/*
 * @lc app=leetcode id=3883 lang=javascript
 *
 * [3883] Count Non Decreasing Arrays With Given Digit Sums
 */

// @lc code=start
/**
 * @param {number[]} digitSum
 * @return {number}
 */
var countArrays = function(digitSum) {
    const MOD = 1e9 + 7;
    const n = digitSum.length;

    // Precompute: for each digit sum s, sorted list of numbers in [0,5000]
    const valid = Array.from({ length: 51 }, () => []);
    for (let x = 0; x <= 5000; x++) {
        let s = 0, t = x;
        while (t > 0) { s += t % 10; t = Math.floor(t / 10); }
        valid[s].push(x);
    }

    for (const s of digitSum) {
        if (valid[s].length === 0) return 0;
    }

    let prevDp = new Float64Array(valid[digitSum[0]].length).fill(1);

    for (let i = 1; i < n; i++) {
        const prevVals = valid[digitSum[i - 1]];
        const currVals = valid[digitSum[i]];

        // Prefix sums of prevDp
        const prefix = new Float64Array(prevDp.length + 1);
        for (let j = 0; j < prevDp.length; j++) {
            prefix[j + 1] = (prefix[j] + prevDp[j]) % MOD;
        }

        const newDp = new Float64Array(currVals.length);
        let k = 0;
        for (let j = 0; j < currVals.length; j++) {
            while (k < prevVals.length && prevVals[k] <= currVals[j]) k++;
            newDp[j] = prefix[k];
        }
        prevDp = newDp;
    }

    let result = 0;
    for (let j = 0; j < prevDp.length; j++) {
        result = (result + prevDp[j]) % MOD;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(countArrays([25, 1])); // 6
console.log(countArrays([1])); // 4
console.log(countArrays([2, 49, 23])); // 0
console.log(countArrays([0])); // 1 (only [0])
console.log(countArrays([0, 0])); // 1 (only [0,0])
