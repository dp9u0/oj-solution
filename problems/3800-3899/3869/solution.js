/*
 * @lc app=leetcode id=3869 lang=javascript
 *
 * [3869] Count Fancy Numbers in a Range
 */

// @lc code=start
/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var countFancy = function(l, r) {
    const isGood = (n) => {
        const d = String(n).split('').map(Number);
        if (d.length === 1) return true;
        let inc = true, dec = true;
        for (let i = 1; i < d.length; i++) {
            if (d[i] <= d[i-1]) inc = false;
            if (d[i] >= d[i-1]) dec = false;
        }
        return inc || dec;
    };

    const goodSet = new Set();
    for (let i = 1; i <= 135; i++) {
        if (isGood(i)) goodSet.add(i);
    }

    const countUpTo = (n) => {
        if (n <= 0) return 0;
        const digits = String(n).split('').map(Number);
        const len = digits.length;
        // memo[pos][started][monoState][lastDigit][sum]
        const memo = Array.from({ length: len }, () =>
            Array.from({ length: 2 }, () =>
                Array.from({ length: 4 }, () =>
                    Array.from({ length: 10 }, () => new Float64Array(136).fill(-1)
                )
            )
        ));

        const dp = (pos, tight, started, mono, last, sum) => {
            if (pos === len) {
                if (!started) return 0;
                return (mono !== 3 || goodSet.has(sum)) ? 1 : 0;
            }
            if (!tight && started >= 0) {
                const v = memo[pos][started][mono][last][sum];
                if (v !== -1) return v;
            }
            const limit = tight ? digits[pos] : 9;
            let res = 0;
            for (let d = 0; d <= limit; d++) {
                const nt = tight && d === limit;
                if (!started && d === 0) {
                    res += dp(pos + 1, nt, 0, 0, 0, 0);
                } else if (!started) {
                    res += dp(pos + 1, nt, 1, 0, d, d);
                } else {
                    let nm;
                    if (mono === 0) {
                        nm = d > last ? 1 : d < last ? 2 : 3;
                    } else if (mono === 1) {
                        nm = d > last ? 1 : 3;
                    } else if (mono === 2) {
                        nm = d < last ? 2 : 3;
                    } else {
                        nm = 3;
                    }
                    res += dp(pos + 1, nt, 1, nm, d, sum + d);
                }
            }
            if (!tight) {
                memo[pos][started][mono][last][sum] = res;
            }
            return res;
        };

        return dp(0, true, 0, 0, 0, 0);
    };

    return countUpTo(r) - countUpTo(l - 1);
};
// @lc code=end

// TEST:
console.log(countFancy(8, 10)); // 3
console.log(countFancy(12340, 12341)); // 1
console.log(countFancy(123456788, 123456788)); // 0
