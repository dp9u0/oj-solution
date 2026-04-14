# [473] Matchsticks to Square

## Description

[LeetCode Problem Description](https://leetcode.com/problems/matchsticks-to-square/description/)

* algorithms
* Medium (41.74%)
* Likes:    4037
* Dislikes: 309
* Testcase Example:  '[1,1,2,2,2]'

```md
You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.
Return true if you can make this square and false otherwise.

Example 1:


Input: matchsticks = [1,1,2,2,2]
Output: true
Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.

Example 2:

Input: matchsticks = [3,3,3,3,4]
Output: false
Explanation: You cannot find a way to form a square with all the matchsticks.


Constraints:

1 <= matchsticks.length <= 15
1 <= matchsticks[i] <= 108


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定火柴棒数组 matchsticks，每个元素是一根火柴的长度。用所有火柴拼成一个正方形（不能折断，每根恰好用一次）。判断是否可行。

## 解题思路

等价于将数组分成 4 个子集，每个子集和相等。经典 k-partition 问题。

1. 总和不能被 4 整除则直接返回 false
2. 目标边长 target = sum / 4
3. 降序排列加速剪枝
4. 回溯：依次将每根火柴放入 4 条边之一，超过 target 则剪枝
5. 对称剪枝：如果两条边当前长度相同，只尝试一条

n ≤ 15，回溯足够。
