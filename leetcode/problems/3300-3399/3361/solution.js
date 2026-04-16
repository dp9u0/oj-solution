/*
 * @lc app=leetcode id=3361 lang=javascript
 *
 * [3361] Shift Distance Between Two Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @param {number[]} nextCost
 * @param {number[]} previousCost
 * @return {number}
 */
var shiftDistance = function(s, t, nextCost, previousCost) {
    const MOD = BigInt(1e18 + 7); // just for big int context
    let n = s.length;
    // Build prefix sums for next direction (0->1->2...->25->0)
    let nextSum = new Array(27).fill(0n); // nextSum[i] = sum of nextCost[0..i-1]
    for (let i = 0; i < 26; i++) nextSum[i + 1] = nextSum[i] + BigInt(nextCost[i]);
    // Build prefix sums for prev direction (0->25->24...->1->0)
    let prevSum = new Array(27).fill(0n); // prevSum[i] = sum of previousCost[25..i+1]... actually let's define differently
    // prevSum[i] = cost to go from i to i-1 (wrapping) = sum previousCost from i down to (target+1)
    // Let me use: prev direction from a to b means going a, a-1, a-2, ..., b
    // prevPrefix[i] = sum of previousCost[0..i-1]... no
    // Let me just compute directly for each pair
    let prevPrefix = new Array(27).fill(0n); // prevPrefix[i] = sum previousCost[i..25]
    for (let i = 25; i >= 0; i--) prevPrefix[i] = prevPrefix[i + 1] + BigInt(previousCost[i]);

    let res = 0n;
    for (let i = 0; i < n; i++) {
        let a = s.charCodeAt(i) - 97;
        let b = t.charCodeAt(i) - 97;
        if (a === b) continue;
        // next direction: a -> a+1 -> ... -> b (wrapping around)
        let nextCost_total;
        if (a < b) {
            nextCost_total = nextSum[b] - nextSum[a];
        } else {
            nextCost_total = (nextSum[26] - nextSum[a]) + (nextSum[b] - nextSum[0]);
        }
        // prev direction: a -> a-1 -> ... -> b (wrapping around)
        let prevCost_total;
        if (a > b) {
            prevCost_total = prevPrefix[b + 1] - prevPrefix[a + 1];
        } else {
            prevCost_total = (prevPrefix[0] - prevPrefix[a + 1]) + (prevPrefix[b + 1] - prevPrefix[26]);
        }
        res += (nextCost_total < prevCost_total ? nextCost_total : prevCost_total);
    }
    return Number(res % BigInt(Number.MAX_SAFE_INTEGER));
};
// @lc code=end

// TEST:
let nc = [100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let pc = [1,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
console.log(shiftDistance('abab', 'baba', nc, pc)); // 2
let nc2 = new Array(26).fill(1);
let pc2 = new Array(26).fill(1);
console.log(shiftDistance('leet', 'code', nc2, pc2)); // 31
