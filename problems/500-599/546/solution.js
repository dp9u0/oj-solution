/*
 * @lc app=leetcode id=546 lang=javascript
 *
 * [546] Remove Boxes
 */

// @lc code=start
/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
    const n = boxes.length;
    // memo[l][r][k]: 处理 boxes[l..r],左侧另有 k 个与 boxes[l] 同色的盒子时的最大得分
    const memo = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => new Int32Array(n).fill(-1))
    );

    function dp(l, r, k) {
        if (l > r) return 0;
        // 记忆化键必须是折叠前的 (l, r, k):折叠非单射,折叠后的 k 会混淆不同状态
        let cached = memo[l][r][k];
        if (cached !== -1) return cached;

        // 折叠:boxes[l] 后面紧跟的同色盒子直接计入 kk,仅用于本层计算
        const color = boxes[l];
        let lo = l, kk = k;
        while (lo + 1 <= r && boxes[lo + 1] === color) {
            lo++;
            kk++;
        }

        // 方案一:连同左侧 kk 个同色盒子一起删除 boxes[lo]
        let best = (kk + 1) * (kk + 1) + dp(lo + 1, r, 0);

        // 方案二:保留 boxes[l](及折叠段),先删中间段 boxes[lo+1..m-1],让 m 处同色盒与左侧合并
        for (let m = lo + 1; m <= r; m++) {
            if (boxes[m] === color) {
                best = Math.max(best, dp(lo + 1, m - 1, 0) + dp(m, r, kk + 1));
            }
        }

        memo[l][r][k] = best;
        return best;
    }

    return dp(0, n - 1, 0);
};
// @lc code=end

// TEST:
console.log(removeBoxes([1, 3, 2, 2, 2, 3, 4, 3, 1]) === 23); // true
console.log(removeBoxes([1, 1, 1]) === 9); // true
console.log(removeBoxes([1]) === 1); // true
console.log(removeBoxes([1, 2, 1, 2, 1]) === 11); // true: 先删两个 2 再合并三个 1
console.log(removeBoxes([1, 1, 2, 2, 1, 1]) === 20); // true: 先删 2,2 再合并四个 1
console.log(removeBoxes([2, 2, 2]) === 9); // true
console.log(removeBoxes([1, 2, 3, 4, 5]) === 5); // true
