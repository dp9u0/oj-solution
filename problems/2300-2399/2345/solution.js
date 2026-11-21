/*
 * @lc app=leetcode.cn id=2345 lang=javascript
 *
 * [2345] 寻找可见山的数量
 */

// @lc code=start
/**
 * @param {number[][]} peaks
 * @return {number}
 */
var visibleMountains = function(peaks) {
    const ivs = peaks.map(([x, y]) => [x - y, x + y]);
    ivs.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    const stack = [];
    let count = 0;
    for (let i = 0; i < ivs.length; ) {
        const [l, r] = ivs[i];
        let g = 0;
        while (i < ivs.length && ivs[i][0] === l && ivs[i][1] === r) {
            i++;
            g++;
        }
        const covered = stack.length && stack[stack.length - 1][1] >= r;
        if (!covered) {
            stack.push([l, r]);
            if (g === 1) count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(visibleMountains([[2,2],[6,3],[5,4]])); // 2
console.log(visibleMountains([[1,3],[1,3]])); // 0
console.log(visibleMountains([[4,6]])); // 1
console.log(visibleMountains([[1,2],[2,2],[3,1]])); // 2
console.log(visibleMountains([[1,1],[2,1],[3,1],[2,2]])); // 1 (only the tall [0,4] mountain visible)
