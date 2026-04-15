# [1866] Number of Ways to Rearrange Sticks With K Sticks Visible

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/description/)

* algorithms
* Hard (61.07%)
* Likes:    765
* Dislikes: 24
* Testcase Example:  '3\n2'

```md
There are n uniquely-sized sticks whose lengths are integers from 1 to n. You want to arrange the sticks such that exactly ksticks are visible from the left. A stickis visible from the left if there are no longersticks to the left of it.

For example, if the sticks are arranged [1,3,2,5,4], then the sticks with lengths 1, 3, and 5 are visible from the left.

Given n and k, return the number of such arrangements. Since the answer may be large, return it modulo 109 + 7.

Example 1:

Input: n = 3, k = 2
Output: 3
Explanation: [1,3,2], [2,3,1], and [2,1,3] are the only arrangements such that exactly 2 sticks are visible.
The visible sticks are underlined.

Example 2:

Input: n = 5, k = 5
Output: 1
Explanation: [1,2,3,4,5] is the only arrangement such that all 5 sticks are visible.
The visible sticks are underlined.

Example 3:

Input: n = 20, k = 11
Output: 647427950
Explanation: There are 647427950 (mod 109 + 7) ways to rearrange the sticks such that exactly 11 sticks are visible.


Constraints:

1 <= n <= 1000
1 <= k <= n


```

## 题目翻译

有 n 根长度为 1 到 n 的不同木棒，排列后从左边能看到恰好 k 根（当且仅当左边没有比它更长的棒时可见）。求满足条件的排列数，对 10^9+7 取模。

## 解题思路

DP，本质是无符号第一类 Stirling 数。

考虑最短的棒（长度 1）放在哪里：
- 放在最左边：它一定可见，剩下 n-1 根棒需要 k-1 根可见 → dp[n-1][k-1]
- 放在其他位置（n-1 个选择）：它一定不可见，剩下 n-1 根棒需要 k 根可见 → (n-1) * dp[n-1][k]

递推：dp[n][k] = dp[n-1][k-1] + (n-1) * dp[n-1][k]

时间复杂度 O(nk)，空间复杂度 O(k)（滚动数组）

## Solution

[SourceCode](./solution.js)
