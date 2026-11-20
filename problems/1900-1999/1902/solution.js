/*
 * @lc app=leetcode.cn id=1902 lang=javascript
 *
 * [1902] 给定二叉搜索树的插入顺序求深度
 */

// @lc code=start
/**
 * @param {number[]} order
 * @return {number}
 */
var maxDepthBST = function(order) {
    const n = order.length;
    const pre = new Int32Array(n + 1); // pre[i]: max inserted value <= i
    const suf = new Int32Array(n + 1); // reversed axis: max of (n+1-u) for u >= n+1-i
    const pMax = (t, i) => {
        let m = 0;
        for (; i > 0; i -= i & (-i)) if (t[i] > m) m = t[i];
        return m;
    };
    const pSet = (t, i, v) => {
        for (; i <= n; i += i & (-i)) if (t[i] < v) t[i] = v;
    };
    const depth = new Int32Array(n + 2);
    let ans = 0;
    for (const v of order) {
        const d = pMax(pre, v - 1); // predecessor value (0 if none)
        const u = pMax(suf, n - v); // n+1-successor (0 if none)
        const dp = d > 0 ? depth[d] : 0;
        const ds = u > 0 ? depth[n + 1 - u] : 0;
        depth[v] = 1 + Math.max(dp, ds);
        if (depth[v] > ans) ans = depth[v];
        pSet(pre, v, v);
        pSet(suf, n + 1 - v, n + 1 - v);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxDepthBST([2,1,4,3])); // 3
console.log(maxDepthBST([2,1,3,4])); // 3
console.log(maxDepthBST([1,2,3,4])); // 4
console.log(maxDepthBST([4,3,2,1])); // 4
console.log(maxDepthBST([5])); // 1
