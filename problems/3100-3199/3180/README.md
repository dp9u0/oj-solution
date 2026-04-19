# [3180] Maximum Total Reward Using Operations I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-total-reward-using-operations-i/description/)

* algorithms
* Medium (30.82%)
* Likes:    217
* Dislikes: 18
* Testcase Example:  '[1,1,3,3]'

```md
You are given an integer array rewardValues of length n, representing the values of rewards.
Initially, your total reward x is 0, and all indices are unmarked. You are allowed to perform the following operation any number of times:

Choose an unmarked index i from the range [0, n - 1].
If rewardValues[i] is greater than your current total reward x, then add rewardValues[i] to x (i.e., x = x + rewardValues[i]), and mark the index i.

Return an integer denoting the maximum total reward you can collect by performing the operations optimally.

Example 1:

Input: rewardValues = [1,1,3,3]
Output: 4
Explanation:
During the operations, we can choose to mark the indices 0 and 2 in order, and the total reward will be 4, which is the maximum.

Example 2:

Input: rewardValues = [1,6,4,3,2]
Output: 11
Explanation:
Mark the indices 0, 2, and 1 in order. The total reward will then be 11, which is the maximum.


Constraints:

1 <= rewardValues.length <= 2000
1 <= rewardValues[i] <= 2000


```

## 题目翻译

给定一个长度为 n 的整数数组 `rewardValues`，表示奖励值。
初始时你的总奖励 x 为 0，所有索引都未标记。你可以执行以下操作任意次数：

选择一个未标记的索引 i（范围 [0, n-1]）。
如果 `rewardValues[i]` 大于当前总奖励 x，则将 `rewardValues[i]` 加到 x 上（即 x = x + rewardValues[i]），并标记该索引 i。

返回通过最优操作能获得的最大总奖励。

## 解题思路

这是一道 **背包/DP** 问题。

- 关键观察：必须按从小到大的顺序选择奖励值（因为选了值 v 后，x 增加 v，之后只能选 > x 的值）。所以先对数组排序。
- 去重后，用 `dp[s]` 表示总奖励 s 是否可达（布尔数组或 Set）。
- 遍历排序后的每个奖励值 v，对于所有已达成的总奖励 s（其中 s < v），`s + v` 也变得可达。
- 用倒序遍历避免重复使用同一个值。
- 最终返回最大的可达总奖励。

时间复杂度 O(n * maxVal)，空间复杂度 O(maxVal)。

## Solution

[SourceCode](./solution.js)
