# [2584] Split the Array to Make Coprime Products

## Description

[LeetCode Problem Description](https://leetcode.com/problems/split-the-array-to-make-coprime-products/description/)

* algorithms
* Hard (28.69%)
* Likes:    321
* Dislikes: 112
* Testcase Example:  '[4,7,8,15,3,5]'

```md
You are given a 0-indexed integer array nums of length n.
A split at an index i where 0 <= i <= n - 2 is called valid if the product of the first i + 1 elements and the product of the remaining elements are coprime.

For example, if nums = [2, 3, 3], then a split at the index i = 0 is valid because 2 and 9 are coprime, while a split at the index i = 1 is not valid because 6 and 3 are not coprime. A split at the index i = 2 is not valid because i == n - 1.

Return the smallest index i at which the array can be split validly or -1 if there is no such split.
Two values val1 and val2 are coprime if gcd(val1, val2) == 1 where gcd(val1, val2) is the greatest common divisor of val1 and val2.

Example 1:


Input: nums = [4,7,8,15,3,5]
Output: 2
Explanation: The table above shows the values of the product of the first i + 1 elements, the remaining elements, and their gcd at each index i.
The only valid split is at index 2.

Example 2:


Input: nums = [4,7,15,8,3,5]
Output: -1
Explanation: The table above shows the values of the product of the first i + 1 elements, the remaining elements, and their gcd at each index i.
There is no valid split.


Constraints:

n == nums.length
1 <= n <= 104
1 <= nums[i] <= 106


```

## 中文翻译

给定数组 nums，找到最小下标 i（0 <= i <= n-2）使得前 i+1 个元素的乘积与剩余元素乘积互质（gcd=1）。不存在返回 -1。

## 解题思路

转化为质因子问题：左右互质等价于无公共质因子。对每个数分解质因子，记录每个质因子的首次和末次出现位置。遍历数组时维护已出现质因子的最远末次位置，当当前位置等于最远位置时即为合法分割点。

## Solution

[SourceCode](./solution.js)
