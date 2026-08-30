/*
 * @lc app=leetcode id=3915 lang=javascript
 *
 * [3915] Maximum Sum of Alternating Subsequence With Distance at Least K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxAlternatingSum = function(nums, k) {
    const n = nums.length;
    // 值域离散化
    const vals = [...new Set(nums)].sort((a, b) => a - b);
    const m = vals.length;
    const idxOf = new Map(vals.map((v, i) => [v, i]));

    // 迭代式线段树（单点取 max 更新，区间最大值查询）
    const size = 1 << Math.ceil(Math.log2(m));
    const NEG = -Infinity;
    const tDown = new Array(2 * size).fill(NEG); // tDown[u]: 结尾值为 u、下一步需要选更大值的最大得分
    const tUp = new Array(2 * size).fill(NEG);   // tUp[u]: 结尾值为 u、下一步需要选更小值的最大得分

    const update = (tree, pos, val) => {
        let i = pos + size;
        if (tree[i] >= val) return;
        tree[i] = val;
        for (i >>= 1; i >= 1; i >>= 1) tree[i] = Math.max(tree[2 * i], tree[2 * i + 1]);
    };
    const query = (tree, l, r) => {
        if (l > r) return NEG;
        let res = NEG;
        for (let lo = l + size, hi = r + size + 1; lo < hi; lo >>= 1, hi >>= 1) {
            if (lo & 1) res = Math.max(res, tree[lo++]);
            if (hi & 1) res = Math.max(res, tree[--hi]);
        }
        return res;
    };

    // down[i]/up[i]: 以 i 结尾、下一步需要选更大/更小值的最大得分（单元素视为两种状态皆可）
    const down = new Array(n);
    const up = new Array(n);
    let p = 0; // 延迟插入：处理 i 前先把所有下标 <= i - k 的状态插入线段树
    for (let i = 0; i < n; i++) {
        while (p <= i - k) {
            const pos = idxOf.get(nums[p]);
            update(tDown, pos, down[p]);
            update(tUp, pos, up[p]);
            p++;
        }
        const v = nums[i];
        const pos = idxOf.get(v);
        const fromDown = query(tDown, 0, pos - 1); // 结尾值 u < v 且需要变大 → 接上 v 形成上升
        const fromUp = query(tUp, pos + 1, m - 1); // 结尾值 u > v 且需要变小 → 接上 v 形成下降
        up[i] = Math.max(v, fromDown + v);
        down[i] = Math.max(v, fromUp + v);
    }

    let ans = NEG;
    for (let i = 0; i < n; i++) ans = Math.max(ans, down[i], up[i]);
    return ans;
};
// @lc code=end

// TEST:
console.log(maxAlternatingSum([5, 4, 2], 2) === 7); // 例子1：选 [5,2]，5 > 2
console.log(maxAlternatingSum([3, 5, 4, 2, 4], 1) === 14); // 例子2：选 [3,5,2,4]，3<5>2<4
console.log(maxAlternatingSum([5], 1) === 5); // 例子3：单元素子序列
console.log(maxAlternatingSum([3, 3, 3], 1) === 3); // 相等值无法严格交错，只能选单个
console.log(maxAlternatingSum([10, 1, 1, 1, 10], 2) === 21); // 选 [10,1,10]（下标 0,2,4），10>1<10
console.log(maxAlternatingSum([1, 2, 3, 4, 5], 1) === 9); // 递增数组最多两个元素：[4,5]
console.log(maxAlternatingSum([5, 4, 3, 2, 1], 1) === 9); // 递减数组最多两个元素：[5,4]
console.log(maxAlternatingSum([2, 2, 1, 1, 2, 2], 2) === 5); // 选 [2,1,2]（下标 0,2,4）
console.log(maxAlternatingSum([1, 7, 3], 3) === 7); // k = n 时无法选两个下标，只能单元素最大值
console.log(maxAlternatingSum([4, 1, 2, 3, 1, 5], 2) === 12); // 选 [4,3,5]（下标 0,3,5），4>3<5
