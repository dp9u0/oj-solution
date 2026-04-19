# [1550] Three Consecutive Odds

## Description

[LeetCode Problem Description](https://leetcode.com/problems/three-consecutive-odds/description/)

* algorithms
* Easy (69.30%)
* Likes:    1411
* Dislikes: 108
* Testcase Example:  '[2,6,4,1]'

```md
Given an integer array arr, return trueif there are three consecutive odd numbers in the array. Otherwise, returnfalse.

Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.

Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.


Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000


```

## 中文翻译

判断数组中是否存在三个连续的奇数。

## 解题思路

遍历数组，维护连续奇数计数器，遇到偶数重置为 0，达到 3 返回 true。

## Solution

[SourceCode](./solution.js)
