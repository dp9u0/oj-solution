# [1621] Number of Sets of K Non-Overlapping Line Segments

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/description/)

* algorithms
* Medium (45.73%)
* Likes:    492
* Dislikes: 50
* Testcase Example:  '4\n2'

```md
Given n points on a 1-D plane, where the ith point (from 0 to n-1) is at x = i, find the number of ways we can draw exactly k non-overlapping line segments such that each segment covers two or more points. The endpoints of each segment must have integral coordinates. The k line segments do not have to cover all n points, and they are allowed to share endpoints.
Return the number of ways we can draw k non-overlapping line segments. Since this number can be huge, return it modulo 109 + 7.

Example 1:


Input: n = 4, k = 2
Output: 5
Explanation: The two line segments are shown in red and blue.
The image above shows the 5 different ways {(0,2),(2,3)}, {(0,1),(1,3)}, {(0,1),(2,3)}, {(1,2),(2,3)}, {(0,1),(1,2)}.

Example 2:

Input: n = 3, k = 1
Output: 3
Explanation: The 3 ways are {(0,1)}, {(0,2)}, {(1,2)}.

Example 3:

Input: n = 30, k = 7
Output: 796297179
Explanation: The total number of possible ways to draw 7 line segments is 3796297200. Taking this number modulo 109 + 7 gives us 796297179.


Constraints:

2 <= n <= 1000
1 <= k <= n-1


```

## 中文翻译

在1维平面上有 n 个点（0 到 n-1），要画恰好 k 条不重叠的线段，每条线段至少覆盖2个点。线段可以共享端点。求方案数，对 10^9+7 取模。

## 解题思路

经典组合数学。答案为 C(n+k-1, 2k)。

证明：将 k 条线段的 2k 个端点选择问题，通过插入 k-1 个"分隔符"（线段之间的间隔）转化为组合问题。等价于在 n+k-1 个位置中选 2k 个位置，即 C(n+k-1, 2k)。

验证：n=4,k=2 → C(5,4)=5 ✓；n=3,k=1 → C(3,2)=3 ✓。

用预计算阶乘 + 模逆元计算组合数。时间 O(n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
