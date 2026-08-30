# [3919] Minimum Cost to Move Between Indices

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-move-between-indices/description/)

* algorithms
* Medium (50.85%)
* Likes:    87
* Dislikes: 6
* Testcase Example:  '[-5,-2,3]\n[[0,2],[2,0],[1,2]]'

```md
You are given an integer array nums where nums is strictly increasing.
For each index x, let closest(x) be the adjacent index y such that abs(nums[x] - nums[y]) is minimized. If both adjacent indices exist and give the same difference, choose the smaller index.
From any index x, you can move in two ways:

To any index y with cost abs(nums[x] - nums[y]), or
To closest(x) with cost 1.

You are also given a 2D integer array queries, where each queries[i] = [li, ri].
For each query, calculate the minimum total cost to move from index li to index ri.
Return an integer array ans, where ans[i] is the answer for the ith query.
The absolute difference between two values x and y is defined as abs(x - y).

Example 1:

Input: nums = [-5,-2,3], queries = [[0,2],[2,0],[1,2]]
Output: [6,2,5]
Explanation:​​​​​​​​​​​​​​​​​​​​

The closest indices are [1, 0, 1] respectively.
For [0, 2], the path 0 &rarr; 1 &rarr; 2 uses a closest move from index 0 to 1 with cost 1 and a move from index 1 to 2 with cost
-2 - 3
= 5, giving total 1 + 5 = 6.
For [2, 0], the path 2 &rarr; 1 &rarr; 0 uses two closest moves from index 2 to 1 and from index 1 to 0, each with cost 1, giving total 2.
For [1, 2], the direct move from index 1 to index 2 has cost
-2 - 3
= 5, which is optimal.

Thus, ans = [6, 2, 5].

Example 2:

Input: nums = [0,2,3,9], queries = [[3,0],[1,2],[2,0]]
Output: [4,1,3]
Explanation:

The closest indices are [1, 2, 1, 2] respectively.
For [3, 0], the path 3 &rarr; 2 &rarr; 1 &rarr; 0 uses closest moves from index 3 to 2 and from 2 to 1, each with cost 1, and a move from 1 to 0 with cost
2 - 0
= 2, giving total 1 + 1 + 2 = 4.
For [1, 2], the closest move from index 1 to 2 has cost 1.
For [2, 0], the path 2 &rarr; 1 &rarr; 0 uses a closest move from index 2 to 1 with cost 1 and a move from 1 to 0 with cost
2 - 0
= 2, giving total 1 + 2 = 3.

Thus, ans = [4, 1, 3].


Constraints:

2 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is strictly increasing
1 <= queries.length <= 105
queries[i] = [li, ri]​​​​​​​
0 <= li, ri < nums.length


```

## 中文翻译

给定一个严格递增的整数数组 nums。对每个下标 x，定义 closest(x) 为与 x 相邻的下标 y，使得 abs(nums[x] - nums[y]) 最小。如果左右两个相邻下标都存在且差值相同，选择更小的下标。

从任意下标 x 出发，有两种移动方式：

1. 移动到任意下标 y，代价为 abs(nums[x] - nums[y])；
2. 移动到 closest(x)，代价为 1。

再给定一个二维整数数组 queries，其中 queries[i] = [li, ri]。对每个查询，计算从下标 li 移动到下标 ri 的最小总代价。返回整数数组 ans，其中 ans[i] 为第 i 个查询的答案。

## 解题思路

**关键观察：按"边"拆解代价。**

设 gap[i] = nums[i+1] - nums[i]（数组严格递增，gap[i] >= 1）。考察跨越边 i（即从下标 <= i 一步到下标 >= i+1）的最小代价：

- 直接跳跃：从 x <= i 跳到 y >= i+1，代价 nums[y]-nums[x] >= gap[i]；
- closest 移动：只有 closest(i) = i+1 时才能以代价 1 向右跨过这条边。

因此向右走时每条边的最小跨越代价为：F(i) 成立则 1，否则 gap[i]，其中
`F(i) = (i == 0 || gap[i] < gap[i-1])`（closest 定义平局取小下标，即左侧，故需严格小于）。

同理向左走：closest(i+1) = i 当且仅当 `B(i) = (i == n-2 || gap[i] <= gap[i+1])`，此时跨边代价 1，否则 gap[i]。

任何路径对区间内每条边净跨越一次，各边代价下界可独立累加，且该下界可通过"在需要处逐边走 1 代价边、其余一次直接跳"构造达到。所以：

- l < r：ans = Σ_{i=l}^{r-1} (F(i) ? 1 : gap[i]) = (nums[r]-nums[l]) - Σ(F(i) 且 gap[i]>1 的 (gap[i]-1))
- l > r：ans = Σ_{i=r}^{l-1} (B(i) ? 1 : gap[i])，同理换成 B 的节省量
- l == r：ans = 0

用两个前缀和数组分别维护 F/B 边的节省量，每个查询 O(1)，总体 O(n + q)。

## Solution

[SourceCode](./solution.js)
