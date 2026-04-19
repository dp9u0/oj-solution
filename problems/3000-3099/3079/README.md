# [3079] Find the Sum of Encrypted Integers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/description/)

* algorithms
* Easy (74.82%)
* Likes:    136
* Dislikes: 20
* Testcase Example:  '[1,2,3]'

```md
You are given an integer array nums containing positive integers. We define a function encrypt such that encrypt(x) replaces every digit in x with the largest digit in x. For example, encrypt(523) = 555 and encrypt(213) = 333.
Return the sum of encrypted elements.

Example 1:

Input: nums = [1,2,3]
Output: 6
Explanation: The encrypted elements are[1,2,3]. The sum of encrypted elements is 1 + 2 + 3 == 6.

Example 2:

Input: nums = [10,21,31]
Output: 66
Explanation: The encrypted elements are [11,22,33]. The sum of encrypted elements is 11 + 22 + 33 == 66.


Constraints:

1 <= nums.length <= 50
1 <= nums[i] <= 1000


```

## 翻译

给定正整数数组 nums。encrypt(x) 将 x 的每一位替换为 x 中的最大数字。返回所有 encrypt(nums[i]) 之和。

## 解题思路

对每个数找最大位和位数，构造 encrypt 结果。例如 523 → max=5, len=3 → 555。

## Solution

[SourceCode](./solution.js)
