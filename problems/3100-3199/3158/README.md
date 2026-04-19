# [3158] Find the XOR of Numbers Which Appear Twice

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/description/)

* algorithms
* Easy (78.86%)
* Likes:    167
* Dislikes: 14
* Testcase Example:  '[1,2,1,3]'

```md
You are given an array nums, where each number in the array appears either once or twice.
Return the bitwise XOR of all the numbers that appear twice in the array, or 0 if no number appears twice.

Example 1:

Input: nums = [1,2,1,3]
Output: 1
Explanation:
The only number that appears twice innumsis 1.

Example 2:

Input: nums = [1,2,3]
Output: 0
Explanation:
No number appears twice innums.

Example 3:

Input: nums = [1,2,2,1]
Output: 3
Explanation:
Numbers 1 and 2 appeared twice. 1 XOR 2 == 3.


Constraints:

1 <= nums.length <= 50
1 <= nums[i] <= 50
Each number in nums appears either once or twice.


```

## 题目翻译

给定数组，每个数字出现一次或两次。返回所有出现两次的数字的异或值。

## 解题思路

用 Set 记录已出现的数字，遇到重复时累加异或值。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
