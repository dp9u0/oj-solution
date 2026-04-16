# [2442] Count Number of Distinct Integers After Reverse Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/description/)

* algorithms
* Medium (81.40%)
* Likes:    749
* Dislikes: 61
* Testcase Example:  '[1,13,10,12,31]'

```md
You are given an array nums consisting of positive integers.
You have to take each integer in the array, reverse its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.
Return the number of distinct integers in the final array.

Example 1:

Input: nums = [1,13,10,12,31]
Output: 6
Explanation: After including the reverse of each number, the resulting array is [1,13,10,12,31,1,31,1,21,13].
The reversed integers that were added to the end of the array are underlined. Note that for the integer 10, after reversing it, it becomes 01 which is just 1.
The number of distinct integers in this array is 6 (The numbers 1, 10, 12, 13, 21, and 31).
Example 2:

Input: nums = [2,2,2]
Output: 1
Explanation: After including the reverse of each number, the resulting array is [2,2,2,2,2,2].
The number of distinct integers in this array is 1 (The number 2).


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106


```

## 中文翻译

给定正整数数组 nums，将每个整数翻转数字后追加到数组末尾，返回最终数组中不同整数的个数。

## 解题思路

用 Set 存所有数及其翻转。翻转用字符串 reverse 或数学方法。

## Solution

[SourceCode](./solution.js)
