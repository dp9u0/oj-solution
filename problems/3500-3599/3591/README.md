# [3591] Check if Any Element Has Prime Frequency

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-any-element-has-prime-frequency/description/)

* algorithms
* Easy (62.49%)
* Likes:    70
* Dislikes: 2
* Testcase Example:  '[1,2,3,4,5,4]'

```md
You are given an integer array nums.
Return true if the frequency of any element of the array is prime, otherwise, return false.
The frequency of an element x is the number of times it occurs in the array.
A prime number is a natural number greater than 1 with only two factors, 1 and itself.

Example 1:

Input: nums = [1,2,3,4,5,4]
Output: true
Explanation:
4 has a frequency of two, which is a prime number.

Example 2:

Input: nums = [1,2,3,4,5]
Output: false
Explanation:
All elements have a frequency of one.

Example 3:

Input: nums = [2,2,2,4,4]
Output: true
Explanation:
Both 2 and 4 have a prime frequency.


Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100


```

## 题目翻译

给定整数数组 nums，判断是否有某个元素的出现频率是质数。

## 解题思路

统计每个元素的频率，检查是否有频率为质数。数组长度最多100，质数判断直接枚举即可。

## Solution

[SourceCode](./solution.js)
