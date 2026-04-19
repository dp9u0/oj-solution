# [3791] Number of Balanced Integers in a Range

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-balanced-integers-in-a-range/description/)

* algorithms
* Hard (35.33%)
* Likes:    45
* Dislikes: 3
* Testcase Example:  '1\n100'

```md
You are given two integers low and high.
An integer is called balanced if it satisfies both of the following conditions:

It contains at least two digits.
The sum of digits at even positions is equal to the sum of digits at odd positions (the leftmost digit has position 1).

Return an integer representing the number of balanced integers in the range [low, high] (both inclusive).

Example 1:

Input: low = 1, high = 100
Output: 9
Explanation:
The 9 balanced numbers between 1 and 100 are 11, 22, 33, 44, 55, 66, 77, 88, and 99.

Example 2:

Input: low = 120, high = 129
Output: 1
Explanation:
Only 121 is balanced because the sum of digits at even and odd positions are both 2.

Example 3:

Input: low = 1234, high = 1234
Output: 0
Explanation:
1234 is not balanced because the sum of digits at odd positions (1 + 3 = 4) does not equal the sum at even positions (2 + 4 = 6).


Constraints:

1 <= low <= high <= 1015


```

## 翻译

给定 [low, high]，统计其中"平衡数"的个数。平衡数：至少两位，且奇数位数字之和等于偶数位数字之和（最左边为第 1 位，奇数位）。

## 解题思路

数位 DP。对每个位数 d（2 到 max_digits），计算 d 位平衡数 <= n 的个数。

count(high) - count(low-1)。

DP 状态：pos, diff（奇数位和 - 偶数位和）, tight。首位 1-9，其余 0-9。

d 最多 16 位，diff 范围 [-144, 144]，状态空间很小。

## Solution

[SourceCode](./solution.js)
