/*
 * @lc app=leetcode id=3704 lang=javascript
 *
 * [3704] Count No-Zero Pairs That Sum to N
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countNoZeroPairs = function(n) {
    const s = String(n);
    const k = s.length;
    const digits = [];
    for (let i = k - 1; i >= 0; i--) digits.push(Number(s[i]));

    // dp[carry][phaseA][phaseB], phase: 0=all non-zero, 1=zero seen
    let dp = [[[0,0],[0,0]],[[0,0],[0,0]]];
    dp[0][0][0] = 1;

    for (let pos = 0; pos < k; pos++) {
        const dn = digits[pos];
        const ndp = [[[0,0],[0,0]],[[0,0],[0,0]]];
        for (let carry = 0; carry <= 1; carry++) {
            for (let pa = 0; pa <= 1; pa++) {
                for (let pb = 0; pb <= 1; pb++) {
                    const cur = dp[carry][pa][pb];
                    if (!cur) continue;
                    const daLo = pos === 0 ? 1 : 0;
                    const daHi = (pos > 0 && pa === 1) ? 0 : 9;
                    const dbLo = pos === 0 ? 1 : 0;
                    const dbHi = (pos > 0 && pb === 1) ? 0 : 9;
                    for (let da = daLo; da <= daHi; da++) {
                        for (let db = dbLo; db <= dbHi; db++) {
                            const sum = da + db + carry;
                            if (sum % 10 !== dn) continue;
                            const co = (sum / 10) | 0;
                            const npa = pos === 0 ? 0 : (pa || da === 0) ? 1 : 0;
                            const npb = pos === 0 ? 0 : (pb || db === 0) ? 1 : 0;
                            ndp[co][npa][npb] += cur;
                        }
                    }
                }
            }
        }
        dp = ndp;
    }

    let ans = 0;
    for (let pa = 0; pa <= 1; pa++)
        for (let pb = 0; pb <= 1; pb++)
            ans += dp[0][pa][pb];
    return ans;
};
// @lc code=end

// TEST:
console.log(countNoZeroPairs(2) === 1);
console.log(countNoZeroPairs(3) === 2);
console.log(countNoZeroPairs(11) === 8);
console.log(countNoZeroPairs(10) === 9);
console.log(countNoZeroPairs(100) === 90);
