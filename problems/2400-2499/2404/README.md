# [2404] Most Frequent Even Element

## Description

[LeetCode Problem Description](https://leetcode.com/problems/most-frequent-even-element/description/)

* algorithms
* Easy (53.46%)
* Likes:    1125
* Dislikes: 42
* Testcase Example:  '[0,1,2,2,4,4,1]'

```md
Given an integer array nums, return the most frequent even element.
If there is a tie, return the smallest one. If there is no such element, return -1.

Example 1:

Input: nums = [0,1,2,2,4,4,1]
Output: 2
Explanation:
The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
We return the smallest one, which is 2.
Example 2:

Input: nums = [4,4,4,9,2,4]
Output: 4
Explanation: 4 is the even element appears the most.

Example 3:

Input: nums = [29,47,21,41,13,37,25,7]
Output: -1
Explanation: There is no even element.


Constraints:

1 <= nums.length <= 2000
0 <= nums[i] <= 105


```

## 中文翻译

给定整数数组 nums，返回出现次数最多的偶数元素。如果有多个偶数出现次数相同，返回最小的那个。如果没有偶数元素，返回 -1。

## 解题思路

用 Map 统计偶数元素的出现次数，然后遍历 Map 找到出现次数最多且值最小的偶数。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
