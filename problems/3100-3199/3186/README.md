# [3186] Maximum Total Damage With Spell Casting

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/description/)

* algorithms
* Medium (45.09%)
* Likes:    754
* Dislikes: 65
* Testcase Example:  '[1,1,3,4]'

```md
A magician has various spells.
You are given an array power, where each element represents the damage of a spell. Multiple spells can have the same damage value.
It is a known fact that if a magician decides to cast a spell with a damage of power[i], they cannot cast any spell with a damage of power[i] - 2, power[i] - 1, power[i] + 1, or power[i] + 2.
Each spell can be cast only once.
Return the maximum possible total damage that a magician can cast.

Example 1:

Input: power = [1,1,3,4]
Output: 6
Explanation:
The maximum possible damage of 6 is produced by casting spells 0, 1, 3 with damage 1, 1, 4.

Example 2:

Input: power = [7,1,6,6]
Output: 13
Explanation:
The maximum possible damage of 13 is produced by casting spells 1, 2, 3 with damage 1, 6, 6.


Constraints:

1 <= power.length <= 105
1 <= power[i] <= 109


```

## 中文翻译

给定数组 power，选择若干元素使总和最大，但不能同时选差值 <= 2 的元素。每个元素只能选一次。

## 解题思路

类似 House Robber / Delete and Earn。先排序去重统计每个值的总和，然后 DP：dp[i] 表示前 i 个不同值能获得的最大伤害。对于第 i 个值 val[i]，如果不选则 dp[i] = dp[i-1]；如果选则找到最远的 j 使得 val[j] < val[i] - 2，dp[i] = dp[j] + sum[i]。

时间复杂度：O(n log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
