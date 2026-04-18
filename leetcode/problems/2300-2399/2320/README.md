# [2320] Count Number of Ways to Place Houses

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-ways-to-place-houses/description/)

* algorithms
* Medium (43.86%)
* Likes:    644
* Dislikes: 202
* Testcase Example:  '1'

```md
There is a street with n * 2 plots, where there are n plots on each side of the street. The plots on each side are numbered from 1 to n. On each plot, a house can be placed.
Return the number of ways houses can be placed such that no two houses are adjacent to each other on the same side of the street. Since the answer may be very large, return it modulo 109 + 7.
Note that if a house is placed on the ith plot on one side of the street, a house can also be placed on the ith plot on the other side of the street.

Example 1:

Input: n = 1
Output: 4
Explanation:
Possible arrangements:
1. All plots are empty.
2. A house is placed on one side of the street.
3. A house is placed on the other side of the street.
4. Two houses are placed, one on each side of the street.

Example 2:


Input: n = 2
Output: 9
Explanation: The 9 possible arrangements are shown in the diagram above.


Constraints:

1 <= n <= 104


```

## 题目翻译

街道两侧各n个地块，每侧编号1到n。每个地块可放一栋房子，要求同一侧相邻地块不能同时放房子。返回方案数对10^9+7取模。两侧独立，第i个位置两侧可以同时放房子。

## 解题思路

两侧独立，先求一侧的方案数f(n)，答案为f(n)^2。一侧是经典的不相邻放置问题：dp[i]表示前i个地块的方案数，dp[i]=dp[i-1]+dp[i-2]（不放/放），即斐波那契。f(1)=2, f(2)=3, f(n)=f(n-1)+f(n-2)。

## Solution

[SourceCode](./solution.js)
