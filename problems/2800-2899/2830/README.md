# [2830] Maximize the Profit as the Salesman

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/description/)

* algorithms
* Medium (38.18%)
* Likes:    719
* Dislikes: 22
* Testcase Example:  '5\n[[0,0,1],[0,2,2],[1,3,2]]'

```md
You are given an integer n representing the number of houses on a number line, numbered from 0 to n - 1.
Additionally, you are given a 2D integer array offers where offers[i] = [starti, endi, goldi], indicating that ith buyer wants to buy all the houses from starti to endi for goldi amount of gold.
As a salesman, your goal is to maximize your earnings by strategically selecting and selling houses to buyers.
Return the maximum amount of gold you can earn.
Note that different buyers can&#39;t buy the same house, and some houses may remain unsold.

Example 1:

Input: n = 5, offers = [[0,0,1],[0,2,2],[1,3,2]]
Output: 3
Explanation: There are 5 houses numbered from 0 to 4 and there are 3 purchase offers.
We sell houses in the range [0,0] to 1st buyer for 1 gold and houses in the range [1,3] to 3rd buyer for 2 golds.
It can be proven that 3 is the maximum amount of gold we can achieve.

Example 2:

Input: n = 5, offers = [[0,0,1],[0,2,10],[1,3,2]]
Output: 10
Explanation: There are 5 houses numbered from 0 to 4 and there are 3 purchase offers.
We sell houses in the range [0,2] to 2nd buyer for 10 golds.
It can be proven that 10 is the maximum amount of gold we can achieve.


Constraints:

1 <= n <= 105
1 <= offers.length <= 105
offers[i].length == 3
0 <= starti <= endi <= n - 1
1 <= goldi <= 103


```

## 中文翻译

给定 n 栋房子（编号 0~n-1）和若干购房报价 [start, end, gold]，每个报价表示买家想买 start~end 范围内所有房子并支付 gold。不同买家不能买同一栋房子。求最大收益。

## 解题思路

带权区间调度。按 end 排序报价，dp[i] 表示考虑前 i 个报价的最大收益。对每个报价，用二分查找最后一个 end < 当前 start 的报价，dp[i] = max(dp[i-1], gold + dp[j])。

## Solution

[SourceCode](./solution.js)
