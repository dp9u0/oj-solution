# [1621] 大小为 K 的不重叠线段的数目

## Description


```md
https://leetcode.cn/problems/number-of-sets-of-k-non-overlapping-line-segments/description/
* algorithms
* Medium (51.54%)
* Likes:    72
* Dislikes: -
* Testcase Example:  '4\n2'
给你一维空间的 n 个点，其中第 i 个点（编号从 0 到 n-1）位于 x = i 处，请你找到 恰好 k 个不重叠 线段且每个线段至少覆盖两个点的方案数。线段的两个端点必须都是 整数坐标 。这 k 个线段不需要全部覆盖全部 n 个点，且它们的端点 可以 重合。
请你返回 k 个不重叠线段的方案数。由于答案可能很大，请将结果对 109 + 7 取余 后返回。

示例 1：
输入：n = 4, k = 2
输出：5
解释：
如图所示，两个线段分别用红色和蓝色标出。
上图展示了 5 种不同的方案 {(0,2),(2,3)}，{(0,1),(1,3)}，{(0,1),(2,3)}，{(1,2),(2,3)}，{(0,1),(1,2)} 。
示例 2：
输入：n = 3, k = 1
输出：3
解释：总共有 3 种不同的方案 {(0,1)}, {(0,2)}, {(1,2)} 。
示例 3：
输入：n = 30, k = 7
输出：796297179
解释：画 7 条线段的总方案数为 3796297200 种。将这个数对 109 + 7 取余得到 796297179 。
示例 4：
输入：n = 5, k = 3
输出：7
示例 5：
输入：n = 3, k = 2
输出：1

提示：
2 <= n <= 1000
1 <= k <= n-1
Hint 1: Try to use dynamic programming where the current index and remaining number of line segments to form can describe any intermediate state.
Hint 2: To make the computation of each state in constant time, we could add another flag to the state that indicates whether or not we are in the middle of placing a line (placed start point but no endpoint).

```

## Description (English)

Given `n` points on a 1-D plane, where the `i`-th point (0-indexed) is located at `x = i`, find the number of ways to draw **exactly `k` non-overlapping line segments** such that each segment covers at least two points. The endpoints of each segment must have integer coordinates. The `k` segments do not need to cover all `n` points, and their endpoints **may** coincide (segments may share an endpoint).

Return the number of ways modulo `10^9 + 7`.

Example 1: n = 4, k = 2 → 5 — the 5 ways are {(0,2),(2,3)}, {(0,1),(1,3)}, {(0,1),(2,3)}, {(1,2),(2,3)}, {(0,1),(1,2)}.
Example 2: n = 3, k = 1 → 3 — {(0,1)}, {(0,2)}, {(1,2)}.
Example 3: n = 30, k = 7 → 796297179 (total 3796297200 mod 1e9+7).
Example 4: n = 5, k = 3 → 7.
Example 5: n = 3, k = 2 → 1.

Constraints: 2 <= n <= 1000, 1 <= k <= n-1.

## 思路

**组合数学（隔板法/平移映射），答案为 C(n+k-1, 2k)。**

设第 i 条线段为 `[s_i, e_i]`（按顺序排列），合法方案满足：

- `s_1 <= e_1 <= s_2 <= e_2 <= ... <= s_k <= e_k`（不重叠，端点可重合）
- `e_i > s_i`（每条线段至少覆盖两个点，长度 >= 1）

做平移映射：`u_{2i-1} = s_i + i`，`u_{2i} = e_i + i`。

- 相邻同段：`u_{2i} - u_{2i-1} = e_i - s_i >= 1`，严格递增（对应长度约束）。
- 相邻跨段：`u_{2i+1} - u_{2i} = s_{i+1} - e_i + 1 >= 1`，也严格递增（对应端点可重合，重合时差恰为 1）。
- 值域：`u_1 = s_1 + 1 >= 1`，`u_{2k} = e_k + k <= n - 1 + k`，即 2k 个互不相同的整数落在大小为 `n+k-1` 的区间内。

该映射是双射，所以方案数 = `C(n+k-1, 2k)`。

验证：n=4,k=2 → C(5,4)=5 ✓；n=3,k=1 → C(3,2)=3 ✓；n=30,k=7 → C(36,14)=3796297200 → mod 1e9+7 = 796297179 ✓；n=5,k=3 → C(7,6)=7 ✓；n=3,k=2 → C(4,4)=1 ✓。

计算：对 1e9+7（质数）用乘法公式 + 费马小定理求逆元，时间复杂度 O(k)。

## Solution

[SourceCode](./solution.js)
