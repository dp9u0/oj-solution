# [3181] Maximum Total Reward Using Operations II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-total-reward-using-operations-ii/description/)

* algorithms
* Hard (21.86%)
* Likes:    134
* Dislikes: 32
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

1 <= rewardValues.length <= 5 * 104
1 <= rewardValues[i] <= 5 * 104


```

## 翻译

给定一个整数数组 rewardValues，初始总奖励 x 为 0。可以多次执行操作：选择一个未标记的索引 i，如果 rewardValues[i] > 当前总奖励 x，则 x += rewardValues[i] 并标记该索引。返回能获得的最大总奖励。

## 解题思路

排序 + Bitset DP：
1. 将 rewardValues 去重并排序
2. 用 bitset 表示可达的总奖励值集合，初始 dp[0] = 1
3. 对于每个奖励值 v，新的可达值为 dp | (dp << v) & mask，但只保留 < v 的部分才能用 v 扩展
4. 使用 BigInt 模拟 bitset 进行高效位运算
5. 最终最大可达值为 bitset 中最高位的 1

## Solution

[SourceCode](./solution.js)
