# [2929] Distribute Candies Among Children II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/distribute-candies-among-children-ii/description/)

* algorithms
* Medium (55.66%)
* Likes:    567
* Dislikes: 176
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

1 <= n <= 106
1 <= limit <= 106


```

## 中文翻译

将 n 颗糖果分给 3 个孩子，每个孩子不超过 limit 颗。返回方案数。

## 解题思路

容斥原理。无限制时 x1+x2+x3=n 的非负整数解为 C(n+2,2)。减去至少一个孩子超过 limit 的情况（3*C(n-limit+1,2)），加上至少两个超过 limit 的情况（3*C(n-2*limit,2)），减去三个都超过的情况（C(n-3*limit-1,2)）。注意 C(x,2) 在 x<2 时为 0。

## Solution

[SourceCode](./solution.js)
