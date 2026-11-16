# [1133] 最大唯一数

## Description


```md
https://leetcode.cn/problems/largest-unique-number/description/
* algorithms
* Easy (70.61%)
* Likes:    23
* Dislikes: -
* Testcase Example:  '[5,7,3,9,4,9,8,3,1]'
给你一个整数数组 A，请找出并返回在该数组中仅出现一次的最大整数。
如果不存在这个只出现一次的整数，则返回 -1。

示例 1：
输入：[5,7,3,9,4,9,8,3,1]
输出：8
解释：
数组中最大的整数是 9，但它在数组中重复出现了。而第二大的整数是 8，它只出现了一次，所以答案是 8。
示例 2：
输入：[9,9,8,8]
输出：-1
解释：
数组中不存在仅出现一次的整数。

提示：
1 <= A.length <= 2000
0 <= A[i] <= 1000
Hint 1: Find the number of occurrences of each value.
Hint 2: Use an array or a hash table to do that.
Hint 3: Look for the largest value with number of occurrences = 1.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an integer array `A`, return the largest integer that occurs exactly once; if none exists, return -1.

**Example 1:**
[5,7,3,9,4,9,8,3,1] → 8 (9 is larger but occurs twice)

**Constraints:**
- 1 <= A.length <= 2000
- 0 <= A[i] <= 1000

## Approach

值域计数数组统计频率,从 1000 向下找第一个频率为 1 的值。

时间 O(n + V),空间 O(V),V = 1001。
