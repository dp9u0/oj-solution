/*
 * @lc app=leetcode id=3389 lang=javascript
 *
 * [3389] Minimum Operations to Make Character Frequencies Equal
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var makeStringGood = function(s) {
    const cnt = new Int32Array(26);
    for (const c of s) cnt[c.charCodeAt(0) - 97]++;
    const n = s.length;
    const maxCnt = Math.max(...cnt);
    const INF = n * 2;

    // Build target list
    let targets;
    if (maxCnt <= 500) {
        targets = [];
        for (let t = 1; t <= maxCnt; t++) targets.push(t);
    } else {
        const ts = new Set([1, maxCnt]);
        for (let i = 0; i < 26; i++) {
            if (cnt[i] > 0) {
                if (cnt[i] > 1) ts.add(cnt[i] - 1);
                ts.add(cnt[i]);
                ts.add(cnt[i] + 1);
            }
        }
        for (let i = 0; i < 26; i++) {
            let sum = 0;
            for (let j = i; j < 26; j++) {
                sum += cnt[j];
                if (sum > 0) {
                    if (sum <= maxCnt) ts.add(sum);
                    ts.add(Math.floor(sum / 2));
                    ts.add(Math.ceil(sum / 2));
                }
            }
        }
        targets = [...ts].filter(t => t >= 1 && t <= maxCnt);
        targets.sort((a, b) => a - b);
    }

    let ans = n;
    const B = Math.min(n, maxCnt + 1);
    let dp = new Int32Array(B + 1);
    let newDp = new Int32Array(B + 1);
    const minCost = new Int32Array(B + 1);

    for (const t of targets) {
        dp.fill(INF);
        dp[0] = 0;

        for (let i = 0; i < 26; i++) {
            newDp.fill(INF);
            minCost.fill(INF);
            let maxE = 0;

            for (let c = 0; c <= B; c++) {
                if (dp[c] >= INF) continue;
                const total = c + cnt[i];
                if (total > n) continue;
                const cost = dp[c];

                // Not keep: carry 0..min(total, B)
                const nk = cost + total;
                const cap = Math.min(total, B);
                if (cap > maxE) maxE = cap;
                if (nk < minCost[cap]) minCost[cap] = nk;
                if (nk < newDp[0]) newDp[0] = nk;

                // Keep at exactly t
                if (total >= t) {
                    const excess = total - t;
                    const kc = cost + excess;
                    const ec = Math.min(excess, B);
                    if (ec > maxE) maxE = ec;
                    if (kc < minCost[ec]) minCost[ec] = kc;
                    if (kc < newDp[0]) newDp[0] = kc;
                } else {
                    const kc = cost + (t - total);
                    if (kc < newDp[0]) newDp[0] = kc;
                }
            }

            // Apply range updates via suffix minimum scan
            if (maxE > 0) {
                for (let e = maxE - 1; e >= 1; e--) {
                    if (minCost[e + 1] < minCost[e]) minCost[e] = minCost[e + 1];
                }
                for (let c = 1; c <= maxE; c++) {
                    if (minCost[c] < newDp[c]) newDp[c] = minCost[c];
                }
            }
            const tmp = dp; dp = newDp; newDp = tmp;
        }

        for (let c = 0; c <= B; c++) ans = Math.min(ans, dp[c]);
        if (ans === 0) break;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(makeStringGood('acab'));    // 1
console.log(makeStringGood('wddw'));    // 0
console.log(makeStringGood('aaabc'));   // 2
console.log(makeStringGood('accdddddbebbabbe')); // 5
console.log(makeStringGood('aaa'));     // 0
console.log(makeStringGood('ruuu'));    // 1
console.log(makeStringGood('sssssttssssstt')); // 3
