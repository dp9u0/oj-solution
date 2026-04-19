# [3560] Find Minimum Log Transportation Cost

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-minimum-log-transportation-cost/description/)

* algorithms
* Easy (42.24%)
* Likes:    60
* Dislikes: 17
* Testcase Example:  '6\n5\n5'

```md
You are given integers n, m, and k.
There are two logs of lengths n and m units, which need to be transported in three trucks where each truck can carry one log with length at most k units.
You may cut the logs into smaller pieces, where the cost of cutting a log of length x into logs of length len1 and len2 is cost = len1 * len2 such that len1 + len2 = x.
Return the minimum total cost to distribute the logs onto the trucks. If the logs don&#39;t need to be cut, the total cost is 0.

Example 1:

Input: n = 6, m = 5, k = 5
Output: 5
Explanation:
Cut the log with length 6 into logs with length 1 and 5, at a cost equal to 1 * 5 == 5. Now the three logs of length 1, 5, and 5 can fit in one truck each.

Example 2:

Input: n = 4, m = 4, k = 6
Output: 0
Explanation:
The two logs can fit in the trucks already, hence we don&#39;t need to cut the logs.


Constraints:

2 <= k <= 105
1 <= n, m <= 2 * k
The input is generated such that it is always possible to transport the logs.


```

## 中文翻译

两根原木长度 n 和 m，三辆卡车每辆最多载 k 单位。可将原木切成更小的段，切割代价为两段长度之积。求最小总切割代价。

## 解题思路

若两根都 <= k 则无需切割，代价 0。若某根 > k，需切成两段各 <= k，最优切法为切出 k 长度的一段，代价为 (长度 - k) * k。由于保证可运输，最多一根超过 k。

## Solution

[SourceCode](./solution.js)
