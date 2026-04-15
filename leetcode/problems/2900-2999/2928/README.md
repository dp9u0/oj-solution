# [2928] Distribute Candies Among Children I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/distribute-candies-among-children-i/description/)

* algorithms
* Easy (76.29%)
* Likes:    153
* Dislikes: 74
* Testcase Example:  '5\n2'

```md
You are given two positive integers n and limit.
Return the total number of ways to distribute n candies among 3 children such that no child gets more than limit candies.

Example 1:

Input: n = 5, limit = 2
Output: 3
Explanation: There are 3 ways to distribute 5 candies such that no child gets more than 2 candies: (1, 2, 2), (2, 1, 2) and (2, 2, 1).

Example 2:

Input: n = 3, limit = 3
Output: 10
Explanation: There are 10 ways to distribute 3 candies such that no child gets more than 3 candies: (0, 0, 3), (0, 1, 2), (0, 2, 1), (0, 3, 0), (1, 0, 2), (1, 1, 1), (1, 2, 0), (2, 0, 1), (2, 1, 0) and (3, 0, 0).


Constraints:

1 <= n <= 50
1 <= limit <= 50


```

## 中文翻译

给定 n 颗糖果和 limit，分配给 3 个孩子，每个孩子最多 limit 颗。返回分配方案数。

## 解题思路

**容斥原理：**

- 总方案数 C(n+2, 2)（n 颗糖果分给 3 人，允许为 0）
- 减去至少 1 人超过 limit：3 * C(n-limit+1, 2)
- 加上至少 2 人超过 limit：3 * C(n-2*limit, 2)
- 减去 3 人都超过 limit：C(n-3*limit-1, 2)

其中 C(x, 2) = x*(x-1)/2，当 x < 2 时为 0。

时间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
