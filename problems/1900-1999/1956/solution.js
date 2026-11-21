/*
 * @lc app=leetcode.cn id=1956 lang=javascript
 *
 * [1956] 感染 K 种病毒所需的最短时间
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var minDayskVariants = function(points, k) {
    const n = points.length;
    const us = points.map(([x, y]) => x + y);
    const vs = points.map(([x, y]) => x - y);
    const depthAt = (t) => {
        const uCand = new Set();
        for (let i = 0; i < n; i++) {
            uCand.add(us[i] - t); uCand.add(us[i] + t);
            uCand.add(us[i] - t - 1); uCand.add(us[i] - t + 1);
            uCand.add(us[i] + t - 1); uCand.add(us[i] + t + 1);
        }
        let best = 0;
        for (const U of uCand) {
            const p = ((U % 2) + 2) % 2;
            const events = new Map();
            for (let i = 0; i < n; i++) {
                if (us[i] - t > U || us[i] + t < U) continue;
                const lo = vs[i] - t, hi = vs[i] + t;
                const a = lo + ((p - (lo % 2) + 2) % 2); // first int >= lo with parity p
                if (a > hi) continue;
                const b = hi - (((hi - p) % 2 + 2) % 2); // last int <= hi with parity p
                events.set(a, (events.get(a) || 0) + 1);
                events.set(b + 2, (events.get(b + 2) || 0) - 1);
            }
            let run = 0, mx = 0;
            for (const key of [...events.keys()].sort((x, y) => x - y)) {
                run += events.get(key);
                if (run > mx) mx = run;
            }
            if (mx > best) best = mx;
        }
        return best;
    };
    let lo = 0, hi = 2000000000;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (depthAt(mid) >= k) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minDayskVariants([[1,1],[6,1]], 2)); // 3
console.log(minDayskVariants([[3,3],[1,2],[9,2]], 2)); // 2
console.log(minDayskVariants([[3,3],[1,2],[9,2]], 3)); // 4
console.log(minDayskVariants([[5,5],[5,5]], 2)); // 0
console.log(minDayskVariants([[1,1],[1,2],[2,2],[2,1]], 4)); // 2
console.log(minDayskVariants([[1,1],[1000000000,1000000000]], 2)); // 999999999
