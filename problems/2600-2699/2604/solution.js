/*
 * @lc app=leetcode.cn id=2604 lang=javascript
 *
 * [2604] 吃掉所有谷子的最短时间
 */

// @lc code=start
/**
 * @param {number[]} hens
 * @param {number[]} grains
 * @return {number}
 */
var minimumTime = function(hens, grains) {
    const hs = hens.slice().sort((a, b) => a - b);
    const gs = grains.slice().sort((a, b) => a - b);
    const m = gs.length;
    const feasible = (T) => {
        let j = 0;
        for (const h of hs) {
            if (j === m) return true;
            const gl = gs[j];
            let r = -Infinity;
            if (h < gl) {
                if (gl - h > T) continue; // can't reach leftmost uneaten grain
                r = h + T; // go to gl, then right: time = r - h
            } else {
                if (h - gl > T) continue;
                const rLeft = 2 * gl + T - h; // left first: (h-gl) + (r-gl)
                const rRight = Math.floor((T + h + gl) / 2); // right then back: (r-h)+(r-gl)
                r = Math.max(rLeft, rRight, gl);
            }
            while (j < m && gs[j] <= r) j++;
        }
        return j === m;
    };
    let lo = 0, hi = 2e9;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (feasible(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minimumTime([3,6,7], [2,4,7,9])); // 2
console.log(minimumTime([4,6,109,111,213,215], [5,110,214])); // 1
console.log(minimumTime([1], [5])); // 4
console.log(minimumTime([3], [3,4,5])); // 2
console.log(minimumTime([0,100], [50])); // 50
