# [1449] Form Largest Integer With Digits That Add up to Target

## Description

[LeetCode Problem Description](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/description/)

* algorithms
* Hard (49.61%)
* Likes:    721
* Dislikes: 20
* Testcase Example:  '[4,3,2,5,6,7,2,5,5]\n9'

```md
Given an array of integers cost and an integer target, return the maximum integer you can paint under the following rules:

The cost of painting a digit (i + 1) is given by cost[i] (0-indexed).
The total cost used must be equal to target.
The integer does not have 0 digits.

Since the answer may be very large, return it as a string. If there is no way to paint any integer given the condition, return '0'.

Example 1:

Input: cost = [4,3,2,5,6,7,2,5,5], target = 9
Output: '7772'
Explanation: The cost to paint the digit &#39;7&#39; is 2, and the digit &#39;2&#39; is 3. Then cost('7772') = 2*3+ 3*1 = 9. You could also paint '977', but '7772' is the largest number.
Digit    cost
1  ->   4
2  ->   3
3  ->   2
4  ->   5
5  ->   6
6  ->   7
7  ->   2
8  ->   5
9  ->   5

Example 2:

Input: cost = [7,6,5,5,5,6,8,7,8], target = 12
Output: '85'
Explanation: The cost to paint the digit &#39;8&#39; is 7, and the digit &#39;5&#39; is 5. Then cost('85') = 7 + 5 = 12.

Example 3:

Input: cost = [2,4,6,2,4,6,4,4,4], target = 5
Output: '0'
Explanation: It is impossible to paint any integer with total cost equal to target.


Constraints:

cost.length == 9
1 <= cost[i], target <= 5000


```

## 题目翻译

给定 cost[0..8] 和 target。数字 d 的代价为 cost[d-1]。选择若干数字（1-9）使总代价恰好为 target，组成最大整数（以字符串返回）。无法组成则返回 "0"。

## 解题思路

**DP + 贪心构造**

1. dp[t] = 总代价恰好为 t 时能使用的最多数字个数。dp[0]=0，dp[t] = max(dp[t-cost[d]]+1)。
2. 贪心构造：从左到右每位选最大数字 d（从 9 到 1），若 cost[d-1] <= 剩余代价 且 dp[剩余-cost[d-1]] == 剩余位数-1，则选用。

时间 O(9·target)，空间 O(target)。

## Solution

[SourceCode](./solution.js)
