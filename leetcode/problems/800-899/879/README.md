# [879] Profitable Schemes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/profitable-schemes/description/)

* algorithms
* Hard (48.29%)
* Likes:    1956
* Dislikes: 126
* Testcase Example:  '5\n3\n[2,2]\n[2,3]'

```md
There is a group of n members, and a list of various crimes they could commit. The ith crime generates a profit[i] and requires group[i] members to participate in it. If a member participates in one crime, that member can&#39;t participate in another crime.
Let&#39;s call a profitable scheme any subset of these crimes that generates at least minProfit profit, and the total number of members participating in that subset of crimes is at most n.
Return the number of schemes that can be chosen. Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: n = 5, minProfit = 3, group = [2,2], profit = [2,3]
Output: 2
Explanation: To make a profit of at least 3, the group could either commit crimes 0 and 1, or just crime 1.
In total, there are 2 schemes.
Example 2:

Input: n = 10, minProfit = 5, group = [2,3,5], profit = [6,7,8]
Output: 7
Explanation: To make a profit of at least 5, the group could commit any crimes, as long as they commit one.
There are 7 possible schemes: (0), (1), (2), (0,1), (0,2), (1,2), and (0,1,2).

Constraints:

1 <= n <= 100
0 <= minProfit <= 100
1 <= group.length <= 100
1 <= group[i] <= 100
profit.length == group.length
0 <= profit[i] <= 100


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 n 个成员和若干犯罪，第 i 个犯罪产生 profit[i] 利润、需要 group[i] 人参与。每人只能参与一次。求利润 >= minProfit 且参与人数 <= n 的方案数，对 10^9+7 取模。

## 解题思路

01背包 DP。dp[i][j] 表示使用恰好 i 个人、获得至少 j 利润的方案数。对每个犯罪枚举是否选择，profit 维度用 min(minProfit, j+profit[k]) 压缩。最终答案为 sum(dp[i][minProfit]) for i in [0,n]。
