# [1726] Tuple with Same Product

## Description

[LeetCode Problem Description](https://leetcode.com/problems/tuple-with-same-product/description/)

* algorithms
* Medium (70.09%)
* Likes:    1375
* Dislikes: 59
* Testcase Example:  '[2,3,4,6]'

```md
Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.

Example 1:

Input: nums = [2,3,4,6]
Output: 8
Explanation: There are 8 valid tuples:
(2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
(3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)

Example 2:

Input: nums = [1,2,4,5,10]
Output: 16
Explanation: There are 16 valid tuples:
(1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
(2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
(2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)
(4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)


Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 104
All elements in nums are distinct.


```

## 翻译

给定互不相同的正整数数组 nums，返回满足 a*b = c*d 且 a,b,c,d 互不相同的四元组 (a,b,c,d) 的个数。

## Approach

枚举所有数对 (i,j)（i<j），统计每个乘积出现的次数。对于某个乘积出现 count 次，从中选 2 对的组合数为 C(count,2)，每对可以交换顺序（a,b 可交换，c,d 可交换，两组也可交换），所以贡献 = C(count,2) * 8。

## Solution

[SourceCode](./solution.js)
