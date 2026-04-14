# [3005] Count Elements With Maximum Frequency

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-elements-with-maximum-frequency/description/)

* algorithms
* Easy (79.84%)
* Likes:    1095
* Dislikes: 97
* Testcase Example:  '[1,2,2,3,1,4]'

```md
You are given an array nums consisting of positive integers.
Return the total frequencies of elements in numssuch that those elements all have the maximum frequency.
The frequency of an element is the number of occurrences of that element in the array.

Example 1:

Input: nums = [1,2,2,3,1,4]
Output: 4
Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
So the number of elements in the array with maximum frequency is 4.

Example 2:

Input: nums = [1,2,3,4,5]
Output: 5
Explanation: All elements of the array have a frequency of 1 which is the maximum.
So the number of elements in the array with maximum frequency is 5.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100


```

## 题目翻译

给定正整数数组 nums，返回频率最高的那些元素的总频率之和（即最大频率 × 达到最大频率的元素个数）。

## 解题思路

用 Map 统计频率，找最大频率 maxFreq，再统计有多少个元素达到该频率，返回 maxFreq × count。

## Solution

[SourceCode](./solution.js)
