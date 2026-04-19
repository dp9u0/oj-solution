# [1437] Check If All 1's Are at Least Length K Places Away

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/description/)

* algorithms
* Easy (64.27%)
* Likes:    966
* Dislikes: 243
* Testcase Example:  '[1,0,0,0,1,0,0,1]\n2'

```md
Given an binary array nums and an integer k, return true if all 1&#39;s are at least k places away from each other, otherwise return false.

Example 1:


Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.

Example 2:


Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.


Constraints:

1 <= nums.length <= 105
0 <= k <= nums.length
nums[i] is 0 or 1


```

## 中文翻译

给定二进制数组 nums 和整数 k，判断所有 1 之间的距离是否都至少为 k。

## 解题思路

记录上一个 1 的位置，遍历时遇到 1 检查与上一个 1 的间距是否 >= k。

## Solution

[SourceCode](./solution.js)
