# [1551] Minimum Operations to Make Array Equal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-array-equal/description/)

* algorithms
* Medium (82.69%)
* Likes:    1503
* Dislikes: 187
* Testcase Example:  '3'

```md
You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid values of i (i.e.,0 <= i < n).
In one operation, you can select two indices x and y where 0 <= x, y < n and subtract 1 from arr[x] and add 1 to arr[y] (i.e., perform arr[x] -=1 and arr[y] += 1). The goal is to make all the elements of the array equal. It is guaranteed that all the elements of the array can be made equal using some operations.
Given an integer n, the length of the array, return the minimum number of operations needed to make all the elements of arr equal.

Example 1:

Input: n = 3
Output: 2
Explanation: arr = [1, 3, 5]
First operation choose x = 2 and y = 0, this leads arr to be [2, 3, 4]
In the second operation choose x = 2 and y = 0 again, thus arr = [3, 3, 3].

Example 2:

Input: n = 6
Output: 9


Constraints:

1 <= n <= 104


```

## 中文翻译

数组 arr[i] = 2i+1 (i=0..n-1)，每次操作选两个下标，一个减 1 一个加 1。求使所有元素相等的最少操作次数。

## 解题思路

**数学公式：**

1. 目标值 = 平均值 = n
2. 操作数 = 低于目标值的差之和 = floor(n/2) * ceil(n/2) = floor(n²/4)

时间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
