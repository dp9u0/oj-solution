# [1526] Minimum Number of Increments on Subarrays to Form a Target Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/description/)

* algorithms
* Hard (78.16%)
* Likes:    2146
* Dislikes: 108
* Testcase Example:  '[1,2,3,2,1]'

```md
You are given an integer array target. You have an integer array initial of the same size as target with all elements initially zeros.
In one operation you can choose any subarray from initial and increment each value by one.
Return the minimum number of operations to form a target array from initial.
The test cases are generated so that the answer fits in a 32-bit integer.

Example 1:

Input: target = [1,2,3,2,1]
Output: 3
Explanation: We need at least 3 operations to form the target array from the initial array.
[0,0,0,0,0] increment 1 from index 0 to 4 (inclusive).
[1,1,1,1,1] increment 1 from index 1 to 3 (inclusive).
[1,2,2,2,1] increment 1 at index 2.
[1,2,3,2,1] target array is formed.

Example 2:

Input: target = [3,1,1,2]
Output: 4
Explanation: [0,0,0,0] -> [1,1,1,1] -> [1,1,1,2] -> [2,1,1,2] -> [3,1,1,2]

Example 3:

Input: target = [3,1,5,4,2]
Output: 7
Explanation: [0,0,0,0,0] -> [1,1,1,1,1] -> [2,1,1,1,1] -> [3,1,1,1,1] -> [3,1,2,2,2] -> [3,1,3,3,2] -> [3,1,4,4,2] -> [3,1,5,4,2].


Constraints:

1 <= target.length <= 105
1 <= target[i] <= 105
​​​​​​​The input is generated such that the answer fits inside a 32 bit integer.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定目标数组 target，初始全为 0。每次操作可以选任意子数组全部 +1。求最少操作次数使初始数组变为 target。

## 解题思路

每次操作对一段连续区间 +1。答案 = target[0] + sum(max(0, target[i] - target[i-1]))。直观理解：每个位置比前一个位置多出的部分需要新的操作层。O(n)。
