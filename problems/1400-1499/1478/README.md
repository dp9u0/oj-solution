# [1478] Allocate Mailboxes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/allocate-mailboxes/description/)

* algorithms
* Hard (56.51%)
* Likes:    1176
* Dislikes: 23
* Testcase Example:  '[1,4,8,10,20]\n3'

```md
Given the array houses where houses[i] is the location of the ith house along a street and an integer k, allocate k mailboxes in the street.
Return the minimum total distance between each house and its nearest mailbox.
The test cases are generated so that the answer fits in a 32-bit integer.

Example 1:


Input: houses = [1,4,8,10,20], k = 3
Output: 5
Explanation: Allocate mailboxes in position 3, 9 and 20.
Minimum total distance from each houses to nearest mailboxes is
3-1
+
4-3
+
9-8
+
10-9
+
20-20
= 5

Example 2:


Input: houses = [2,3,5,12,18], k = 2
Output: 9
Explanation: Allocate mailboxes in position 3 and 14.
Minimum total distance from each houses to nearest mailboxes is
2-3
+
3-3
+
5-3
+
12-14
+
18-14
= 9.


Constraints:

1 <= k <= houses.length <= 100
1 <= houses[i] <= 104
All the integers of houses are unique.


```

## 翻译

给定街道上房屋位置数组 houses 和邮箱数量 k，分配 k 个邮箱位置，使每栋房子到最近邮箱的距离之和最小。

## 解题思路

排序后区间DP。先预处理 cost[i][j] 表示 houses[i..j] 放一个邮箱的最小距离和（邮箱放中位数位置最优）。然后 dp[i][j] 表示前 i 个房子放 j 个邮箱的最小距离。转移：dp[i][j] = min(dp[t][j-1] + cost[t+1][i])。O(n^2 * k)。

## Solution

[SourceCode](./solution.js)
