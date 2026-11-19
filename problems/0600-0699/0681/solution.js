/*
 * @lc app=leetcode.cn id=681 lang=javascript
 *
 * [681] 最近时刻
 */

// @lc code=start
/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
    const digits = new Set(time.replace(':', ''));
    const [h, m] = time.split(':').map(Number);
    const total = h * 60 + m;
    for (let step = 1; step <= 1440; step++) {
        const t = (total + step) % 1440;
        const hh = String(Math.floor(t / 60)).padStart(2, '0');
        const mm = String(t % 60).padStart(2, '0');
        let ok = true;
        for (const ch of hh + mm) {
            if (!digits.has(ch)) { ok = false; break; }
        }
        if (ok) return hh + ':' + mm;
    }
    return time; // only reachable when every digit matches (e.g. "11:11")
};
// @lc code=end

// TEST:
console.log(nextClosestTime('19:34')); // "19:39"
console.log(nextClosestTime('23:59')); // "22:22"
console.log(nextClosestTime('11:11')); // "11:11"
console.log(nextClosestTime('00:00')); // "00:00"
console.log(nextClosestTime('13:55')); // "15:11"
