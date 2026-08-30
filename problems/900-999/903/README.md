# [903] Valid Permutations for DI Sequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-permutations-for-di-sequence/description/)

* algorithms
* Hard (56.67%)
* Likes:    756
* Dislikes: 47
* Testcase Example:  '"DID"'

```md
You are given a string s of length n where s[i] is either:

&#39;D&#39; means decreasing, or
&#39;I&#39; means increasing.

A permutation perm of n + 1 integers of all the integers in the range [0, n] is called a valid permutation if for all valid i:

If s[i] == &#39;D&#39;, then perm[i] > perm[i + 1], and
If s[i] == &#39;I&#39;, then perm[i] < perm[i + 1].

Return the number of valid permutations perm. Since the answer may be large, return it modulo 109 + 7.

Example 1:

Input: s = 'DID'
Output: 5
Explanation: The 5 valid permutations of (0, 1, 2, 3) are:
(1, 0, 3, 2)
(2, 0, 3, 1)
(2, 1, 3, 0)
(3, 0, 2, 1)
(3, 1, 2, 0)

Example 2:

Input: s = 'D'
Output: 1


Constraints:

n == s.length
1 <= n <= 200
s[i] is either &#39;I&#39; or &#39;D&#39;.


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你一个长度为 n 的字符串 s，其中 s[i] 是：

- 'D' 表示递减，或者
- 'I' 表示递增。

如果对所有有效的 i 满足以下条件，则由 [0, n] 范围内所有整数组成的 n + 1 个整数的排列 perm 被称为有效排列：

- 如果 s[i] == 'D'，则 perm[i] > perm[i + 1]
- 如果 s[i] == 'I'，则 perm[i] < perm[i + 1]

返回有效排列 perm 的数量。由于答案可能很大，请返回它对 10^9 + 7 取模的结果。

示例 1：输入 s = 'DID'，输出 5。（5 个有效排列：(1,0,3,2)、(2,0,3,1)、(2,1,3,0)、(3,0,2,1)、(3,1,2,0)）

示例 2：输入 s = 'D'，输出 1。

约束：n == s.length，1 <= n <= 200，s[i] 是 'I' 或 'D'。

## 解题思路

**动态规划（相对排名 DP），时间 O(n²)，空间 O(n)。**

关键观察：只关心元素之间的大小关系，而不关心具体数值。直接枚举具体数值的状态空间太大，因此用「相对排名」来定义状态。

定义 `dp[i][j]`：已填好前 i+1 个位置（合法满足 s[0..i-1] 的关系），且最后一个元素在这 i+1 个数中是第 j 小（j 从 0 开始，0 <= j <= i）的方案数。

转移时考虑「插入一个新元素并腾出排名」：给已有排列新增一个最后元素，其最终排名为 j，则原排名 >= j 的元素整体上移一位。设前 i 个元素的最后一个元素原排名为 k，其新排名为 k（k < j 时）或 k+1（k >= j 时）：

- s[i-1] == 'I'（要求前一个 < 新的）：需要 k < j，即 `dp[i][j] = sum(dp[i-1][k]) for k in [0, j-1]`
- s[i-1] == 'D'（要求前一个 > 新的）：需要 k >= j，即 `dp[i][j] = sum(dp[i-1][k]) for k in [j, i-1]`

初始：`dp[0][0] = 1`。答案为 `sum(dp[n][j]) for j in [0, n]`。

两种转移都是区间和，用滚动数组 + 前缀和即可 O(n²) 完成。n <= 200，绰绰有余。

验证 'DID'：
- dp=[1] → 'D': [1,0] → 'I': [0,1,1] → 'D': [2,2,1,0]，总和 = 5 ✓
