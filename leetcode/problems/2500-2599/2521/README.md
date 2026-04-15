# [2521] Distinct Prime Factors of Product of Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/description/)

* algorithms
* Medium (54.32%)
* Likes:    548
* Dislikes: 13
* Testcase Example:  '[2,4,3,7,10,6]'

```md
Given an array of positive integers nums, return the number of distinct prime factors in the product of the elements of nums.
Note that:

A number greater than 1 is called prime if it is divisible by only 1 and itself.
An integer val1 is a factor of another integer val2 if val2 / val1 is an integer.


Example 1:

Input: nums = [2,4,3,7,10,6]
Output: 4
Explanation:
The product of all the elements in nums is: 2 * 4 * 3 * 7 * 10 * 6 = 10080 = 25 * 32 * 5 * 7.
There are 4 distinct prime factors so we return 4.

Example 2:

Input: nums = [2,4,8,16]
Output: 1
Explanation:
The product of all the elements in nums is: 2 * 4 * 8 * 16 = 1024 = 210.
There is 1 distinct prime factor so we return 1.


Constraints:

1 <= nums.length <= 104
2 <= nums[i] <= 1000


```

## 中文翻译

给定正整数数组 nums，返回数组元素乘积的不同质因数个数。

## 解题思路

对每个数做质因数分解（试除法），将所有质因数收集到 Set 中，返回 Set 大小。

时间复杂度：O(n * sqrt(max))，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
