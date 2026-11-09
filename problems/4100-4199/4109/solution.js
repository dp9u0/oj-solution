/*
 * @lc app=leetcode.cn id=4109 lang=javascript
 *
 * [4109] 统计有效后缀排序的数量 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number[]}
 */
var countSuffix = function(nums, target) {
    const n = nums.length;
    const m = target.length;

    // z[k]: LCP length of nums with target[k..]
    const z = calcLcp(nums, target);

    // runEnd[j]: length of longest non-increasing segment ending at j
    const runEnd = new Array(m);
    for (let j = 0; j < m; j++) {
        runEnd[j] = j > 0 && target[j - 1] >= target[j] ? runEnd[j - 1] + 1 : 1;
    }

    // diff: number of values whose count in current window differs from count in nums
    const cntNums = new Map();
    const cntWin = new Map();
    for (const v of nums) cntNums.set(v, (cntNums.get(v) || 0) + 1);
    for (let j = 0; j < n; j++) cntWin.set(target[j], (cntWin.get(target[j]) || 0) + 1);
    let diff = 0;
    for (const [v, c] of cntWin) if (c !== (cntNums.get(v) || 0)) diff++;
    for (const [v, c] of cntNums) if (!cntWin.has(v)) diff++;

    const ans = new Array(m - n + 1);
    for (let k = 0; k + n <= m; k++) {
        if (diff === 0) {
            // smallest i whose tail [k+i, k+n-1] is non-increasing
            const i0 = Math.max(0, n - runEnd[k + n - 1]);
            const hi = Math.min(z[k], n - 1);
            ans[k] = hi >= i0 ? hi - i0 + 1 : 0;
        } else {
            ans[k] = 0;
        }
        if (k + n < m) {
            const vOut = target[k];
            const vIn = target[k + n];
            if (vOut !== vIn) {
                const cOut = cntWin.get(vOut);
                const cnOut = cntNums.get(vOut) || 0;
                if (cOut === cnOut) diff++;
                if (cOut - 1 === cnOut) diff--;
                cntWin.set(vOut, cOut - 1);

                const cIn = cntWin.get(vIn) || 0;
                const cnIn = cntNums.get(vIn) || 0;
                if (cIn === cnIn) diff++;
                if (cIn + 1 === cnIn) diff--;
                cntWin.set(vIn, cIn + 1);
            }
        }
    }
    return ans;
};

// z[k] = length of longest common prefix of nums and target[k..]
const calcLcp = (nums, target) => {
    const n = nums.length;
    const m = target.length;
    const s = nums.concat([-1], target);
    const len = s.length;
    const zArr = new Array(len).fill(0);
    let l = 0;
    let r = 0;
    for (let i = 1; i < len; i++) {
        let zi = i < r ? Math.min(r - i, zArr[i - l]) : 0;
        while (i + zi < len && s[zi] === s[i + zi]) zi++;
        zArr[i] = zi;
        if (i + zi > r) {
            l = i;
            r = i + zi;
        }
    }
    const z = new Array(m - n + 1);
    for (let k = 0; k + n <= m; k++) z[k] = zArr[n + 1 + k];
    return z;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countSuffix([2, 2, 3], [2, 2, 3, 2, 1, 3, 2, 2])) === JSON.stringify([1, 1, 0, 0, 0, 1]));
console.log(JSON.stringify(countSuffix([5, 6, 5], [5, 6, 5, 5, 6, 5])) === JSON.stringify([2, 1, 0, 2]));
console.log(JSON.stringify(countSuffix([1], [1, 1])) === JSON.stringify([1, 1]));
console.log(JSON.stringify(countSuffix([2, 1], [1, 2, 1, 2])) === JSON.stringify([0, 2, 0]));
console.log(JSON.stringify(countSuffix([3, 3], [3, 3, 3, 3])) === JSON.stringify([2, 2, 2]));
console.log(JSON.stringify(countSuffix([1, 2], [2, 1, 1, 2])) === JSON.stringify([1, 0, 1]));
