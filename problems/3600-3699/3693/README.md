# [3693] 爬楼梯 II

## Description


```md
https://leetcode.cn/problems/climbing-stairs-ii/description/
* algorithms
* Medium (64.03%)
* Likes:    33
* Dislikes: -
* Testcase Example:  '4\n[1,2,3,4]'
你正在爬一个有 n + 1 级台阶的楼梯，台阶编号从 0 到 n。
你还得到了一个长度为 n 的 下标从 1 开始 的整数数组 costs，其中 costs[i] 是第 i 级台阶的成本。
从第 i 级台阶，你 只能 跳到第 i + 1、i + 2 或 i + 3 级台阶。从第 i 级台阶跳到第 j 级台阶的成本定义为： costs[j] + (j - i)2
你从第 0 级台阶开始，初始 cost = 0。
返回到达第 n 级台阶所需的 最小 总成本。

示例 1:
输入：n = 4, costs = [1,2,3,4]
输出：13
解释：
一个最优路径是 0 → 1 → 2 → 4


跳跃
成本计算
成本




0 → 1
costs[1] + (1 - 0)2 = 1 + 1
2


1 → 2
costs[2] + (2 - 1)2 = 2 + 1
3


2 → 4
costs[4] + (4 - 2)2 = 4 + 4
8


因此，最小总成本为 2 + 3 + 8 = 13
示例 2:
输入：n = 4, costs = [5,1,6,2]
输出：11
解释：
一个最优路径是 0 → 2 → 4


跳跃
成本计算
成本




0 → 2
costs[2] + (2 - 0)2 = 1 + 4
5


2 → 4
costs[4] + (4 - 2)2 = 2 + 4
6


因此，最小总成本为 5 + 6 = 11
示例 3:
输入：n = 3, costs = [9,8,3]
输出：12
解释：
最优路径是 0 → 3，总成本 = costs[3] + (3 - 0)2 = 3 + 9 = 12

提示:
1 <= n == costs.length <= 105
1 <= costs[i] <= 104
Hint 1: Use dynamic programming where dp[j] represents the minimum cost to reach step j.
Hint 2: From step i, you can jump to i+1, i+2, or i+3. Transition depends only on the previous three states.
Hint 3: dp[j] = min(dp[i] + costs[j] + (j - i)2) for all i in {j-1, j-2, j-3}.
Hint 4: Initialize dp[0] = 0 and compute up to dp[n]; the answer is dp[n].

```

## Description (EN)

```md
You are climbing a staircase with n + 1 steps, numbered 0 to n.

You are also given a 1-indexed integer array costs of length n, where costs[i] is the cost of step i.

From step i, you can only jump to step i + 1, i + 2, or i + 3. The cost of jumping from step i to step j is defined as: costs[j] + (j - i)^2.

You start from step 0 with initial cost = 0.

Return the minimum total cost to reach step n.

Example 1:
Input: n = 4, costs = [1,2,3,4]
Output: 13
Explanation: An optimal path is 0 → 1 → 2 → 4
- 0 → 1: costs[1] + (1-0)^2 = 1 + 1 = 2
- 1 → 2: costs[2] + (2-1)^2 = 2 + 1 = 3
- 2 → 4: costs[4] + (4-2)^2 = 4 + 4 = 8
Total: 2 + 3 + 8 = 13

Example 2:
Input: n = 4, costs = [5,1,6,2]
Output: 11
Explanation: An optimal path is 0 → 2 → 4
- 0 → 2: costs[2] + (2-0)^2 = 1 + 4 = 5
- 2 → 4: costs[4] + (4-2)^2 = 2 + 4 = 6
Total: 5 + 6 = 11

Example 3:
Input: n = 3, costs = [9,8,3]
Output: 12
Explanation: Optimal path is 0 → 3, total cost = costs[3] + (3-0)^2 = 3 + 9 = 12

Constraints:
1 <= n == costs.length <= 10^5
1 <= costs[i] <= 10^4
```

## 思路

线性动态规划。

- 定义 `dp[j]` 为到达第 j 级台阶的最小总成本，`dp[0] = 0`。
- 从台阶 i 只能跳到 i+1 / i+2 / i+3，因此到达 j 的来源只有 j-1、j-2、j-3，跳跃距离 d ∈ {1, 2, 3}，代价为 costs[j] + d²（即 +1 / +4 / +9）。
- 转移方程：`dp[j] = costs[j] + min(dp[j-1] + 1, dp[j-2] + 4, dp[j-3] + 9)`（下标存在时）。
- 答案为 `dp[n]`。时间复杂度 O(n)，空间可用滚动变量降为 O(1)。

## Solution

[SourceCode](./solution.js)
