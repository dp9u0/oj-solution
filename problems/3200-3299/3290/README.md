# [3290] Maximum Multiplication Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-multiplication-score/description/)

* algorithms
* Medium (41.28%)
* Likes:    189
* Dislikes: 14
* Testcase Example:  '[3,2,5,6]\n[2,-6,4,-5,-3,2,-7]'

```md
You are given an integer array a of size 4 and another integer array b of size at least 4.
You need to choose 4 indices i0, i1, i2, and i3 from the array b such that i0 < i1 < i2 < i3. Your score will be equal to the value a[0] * b[i0] + a[1] * b[i1] + a[2] * b[i2] + a[3] * b[i3].
Return the maximum score you can achieve.

Example 1:

Input: a = [3,2,5,6], b = [2,-6,4,-5,-3,2,-7]
Output: 26
Explanation:
We can choose the indices 0, 1, 2, and 5. The score will be 3 * 2 + 2 * (-6) + 5 * 4 + 6 * 2 = 26.

Example 2:

Input: a = [-1,4,5,-2], b = [-5,-1,-3,-2,-4]
Output: -1
Explanation:
We can choose the indices 0, 1, 3, and 4. The score will be (-1) * (-5) + 4 * (-1) + 5 * (-2) + (-2) * (-4) = -1.


Constraints:

a.length == 4
4 <= b.length <= 105
-105 <= a[i], b[i] <= 105


```

## 中文翻译

给定长度为 4 的数组 a 和长度至少为 4 的数组 b。从 b 中选 4 个下标 i0 < i1 < i2 < i3，使得 a[0]*b[i0] + a[1]*b[i1] + a[2]*b[i2] + a[3]*b[i3] 最大。返回最大分数。

## 解题思路

DP。维护 4 个状态 dp[j] 表示已经选了 j+1 个元素时的最大得分。遍历 b 数组，对每个 b[i] 从后往前更新 dp（类似 01 背包），dp[j] = max(dp[j], dp[j-1] + a[j]*b[i])。

时间复杂度：O(4*n) = O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
