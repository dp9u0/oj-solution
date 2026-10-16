/*
 * @lc app=leetcode.cn id=面试题 17.18 lang=javascript
 *
 * [面试题 17.18] 最短超串
 */

// @lc code=start
/**
 * @param {number[]} big
 * @param {number[]} small
 * @return {number[]}
 */
var shortestSeq = function(big, small) {
    // 最小覆盖滑动窗口：covered 为已覆盖的 small 元素种类数
    const inSmall = new Set(small);
    const window = new Map();
    let covered = 0;
    let best = [-1, -1];
    let left = 0;
    for (let right = 0; right < big.length; right++) {
        const v = big[right];
        if (!inSmall.has(v)) continue;
        const c = (window.get(v) || 0) + 1;
        window.set(v, c);
        if (c === 1) covered++;
        while (covered === small.length) {
            // 只接受严格更短，并列时保留左端点最小者
            if (best[0] === -1 || right - left < best[1] - best[0]) {
                best = [left, right];
            }
            const lv = big[left];
            if (inSmall.has(lv)) {
                const lc = window.get(lv) - 1;
                window.set(lv, lc);
                if (lc === 0) covered--;
            }
            left++;
        }
    }
    return best[0] === -1 ? [] : best;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(shortestSeq([7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7], [1, 5, 9])) === '[7,10]');
console.log(JSON.stringify(shortestSeq([1, 2, 3], [4])) === '[]');
console.log(JSON.stringify(shortestSeq([1, 2, 3], [3])) === '[2,2]');
console.log(JSON.stringify(shortestSeq([1, 2, 1, 2], [1, 2])) === '[0,1]'); // 并列取左端点最小
console.log(JSON.stringify(shortestSeq([4, 5, 6, 1, 2, 3], [1, 2, 3])) === '[3,5]');
console.log(JSON.stringify(shortestSeq([2, 3, 1, 4], [1, 2])) === '[0,2]');
