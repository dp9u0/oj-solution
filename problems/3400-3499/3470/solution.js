/*
 * @lc app=leetcode id=3470 lang=javascript
 *
 * [3470] Permutations IV
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var permute = function(n, k) {
    const oddCnt = Math.ceil(n / 2);
    const evenCnt = Math.floor(n / 2);

    if (Math.abs(oddCnt - evenCnt) > 1) return [];

    const CAP = 1000000000000001n;
    const cap = (x) => x > CAP ? CAP : x;

    // dp[o][e][s]: s=1 need odd next, s=0 need even next
    const dp = Array.from({ length: oddCnt + 1 }, () =>
        Array.from({ length: evenCnt + 1 }, () => [0n, 0n]));
    dp[0][0] = [1n, 1n];

    for (let o = 0; o <= oddCnt; o++) {
        for (let e = 0; e <= evenCnt; e++) {
            if (o === 0 && e === 0) continue;
            dp[o][e][1] = o > 0 ? cap(BigInt(o) * dp[o - 1][e][0]) : 0n;
            dp[o][e][0] = e > 0 ? cap(BigInt(e) * dp[o][e - 1][1]) : 0n;
        }
    }

    const kk = BigInt(k);
    const total = cap(dp[oddCnt][evenCnt][0] + dp[oddCnt][evenCnt][1]);
    if (kk > total) return [];

    const result = [];
    const used = new Set();
    let remO = oddCnt, remE = evenCnt;
    let curK = kk;

    for (let pos = 0; pos < n; pos++) {
        const lastEven = pos > 0 && result[pos - 1] % 2 === 0;
        const needOdd = pos === 0 ? null : lastEven;

        let found = false;
        for (let x = 1; x <= n; x++) {
            if (used.has(x)) continue;
            const xOdd = x % 2 === 1;
            if (needOdd === true && !xOdd) continue;
            if (needOdd === false && xOdd) continue;

            const newO = remO - (xOdd ? 1 : 0);
            const newE = remE - (xOdd ? 0 : 1);
            if (newO < 0 || newE < 0) continue;

            const count = dp[newO][newE][xOdd ? 0 : 1];

            if (curK > count) {
                curK -= count;
            } else {
                result.push(x);
                used.add(x);
                remO = newO;
                remE = newE;
                found = true;
                break;
            }
        }
        if (!found) return [];
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(permute(4, 6))); // [3,4,1,2]
console.log(JSON.stringify(permute(3, 2))); // [3,2,1]
console.log(JSON.stringify(permute(2, 3))); // []
console.log(JSON.stringify(permute(1, 1))); // [1]
console.log(JSON.stringify(permute(4, 1))); // [1,2,3,4]
console.log(JSON.stringify(permute(4, 8))); // [4,3,2,1]
console.log(JSON.stringify(permute(2, 1))); // [1,2]
console.log(JSON.stringify(permute(5, 12))); // [5,4,3,2,1]
