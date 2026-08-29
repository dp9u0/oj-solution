# [3895] Count Digit Appearances

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-digit-appearances/description/)

* algorithms
* Medium (85.76%)
* Likes:    48
* Dislikes: 4
* Testcase Example:  '[12,54,32,22]\n2'

```md
You are given an integer array nums and an integer digit.
Return the total number of times digit appears in the decimal representation of all elements in nums.

Example 1:

Input: nums = [12,54,32,22], digit = 2
Output: 4
Explanation:
The digit 2 appears once in 12 and 32, and twice in 22. Thus, the total number of times digit 2 appears is 4.

Example 2:

Input: nums = [1,34,7], digit = 9
Output: 0
Explanation:
The digit 9 does not appear in the decimal representation of any element in nums, so the total number of times digit 9 appears is 0.


Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 106​​​​​​​
0 <= digit <= 9


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定数组 `nums` 与数字 `digit`（0-9），返回所有元素十进制表示中该数字出现的总次数。

示例：`[12,54,32,22], 2` → `4`；`[1,34,7], 9` → `0`

## 解题思路

逐元素转字符串统计目标字符出现次数。O(Σ位数)。