/*
 * @lc app=leetcode.cn id=4061 lang=javascript
 *
 * [4061] 皇后到达目标格子的最少移动步数
 */

// @lc code=start
/**
 * @param {number[]} source
 * @param {number[]} target
 * @return {number}
 */
var minQueenMoves = function(source, target) {
    const [sr, sc] = source;
    const [tr, tc] = target;
    if (sr === tr && sc === tc) return 0;
    if (sr === tr || sc === tc || Math.abs(sr - tr) === Math.abs(sc - tc)) return 1;
    // 先沿列到 (tr, sc)，再沿行到 (tr, tc)
    return 2;
};
// @lc code=end

// TEST:
console.log(minQueenMoves([8, 1], [1, 8])); // 1 (同对角线)
console.log(minQueenMoves([4, 2], [1, 3])); // 2
console.log(minQueenMoves([1, 1], [1, 1])); // 0 (重合)
console.log(minQueenMoves([3, 5], [7, 5])); // 1 (同列)
console.log(minQueenMoves([2, 6], [2, 1])); // 1 (同行)
console.log(minQueenMoves([1, 2], [8, 7])); // 2 (|dr|=7, |dc|=5, 不共线)
console.log(minQueenMoves([5, 4], [8, 1])); // 1 (|dr|=|dc|=3, 主对角线)
