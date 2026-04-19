# [2195] Append K Integers With Minimal Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/append-k-integers-with-minimal-sum/description/)

* algorithms
* Medium (26.94%)
* Likes:    836
* Dislikes: 313
* Testcase Example:  '[1,4,25,10,25]\n2'

```md
You are given an integer array nums and an integer k. Append k unique positive integers that do not appear in nums to nums such that the resulting total sum is minimum.
Return the sum of the k integers appended to nums.

Example 1:

Input: nums = [1,4,25,10,25], k = 2
Output: 5
Explanation: The two unique positive integers that do not appear in nums which we append are 2 and 3.
The resulting sum of nums is 1 + 4 + 25 + 10 + 25 + 2 + 3 = 70, which is the minimum.
The sum of the two integers appended is 2 + 3 = 5, so we return 5.
Example 2:

Input: nums = [5,6], k = 6
Output: 25
Explanation: The six unique positive integers that do not appear in nums which we append are 1, 2, 3, 4, 7, and 8.
The resulting sum of nums is 5 + 6 + 1 + 2 + 3 + 4 + 7 + 8 = 36, which is the minimum.
The sum of the six integers appended is 1 + 2 + 3 + 4 + 7 + 8 = 25, so we return 25.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 108


```

## 题目翻译

给定数组 nums 和整数 k，追加 k 个不在 nums 中的唯一正整数，使总和最小。返回追加的 k 个数之和。

## 解题思路

**排序 + 等差数列求和**

对 nums 去重排序后，扫描每个间隙（相邻两个值之间的整数），用等差数列公式求和。剩余不足 k 个则从最大值之后继续取。O(n log n) 时间。

## Solution

[SourceCode](./solution.js)
