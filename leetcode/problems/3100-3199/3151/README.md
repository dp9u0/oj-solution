# [3151] Special Array I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/special-array-i/description/)

* algorithms
* Easy (81.62%)
* Likes:    582
* Dislikes: 33
* Testcase Example:  '[1]'

```md
An array is considered special if the parity of every pair of adjacent elements is different. In other words, one element in each pair must be even, and the other must be odd.
You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.

Example 1:

Input: nums = [1]
Output: true
Explanation:
There is only one element. So the answer is true.

Example 2:

Input: nums = [2,1,4]
Output: true
Explanation:
There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

Example 3:

Input: nums = [4,3,1,6]
Output: false
Explanation:
nums[1] and nums[2] are both odd. So the answer is false.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100


```

## 翻译

判断数组是否"特殊"：每对相邻元素的奇偶性不同。

## Approach

遍历数组，检查每对相邻元素是否奇偶性不同（即 nums[i] % 2 !== nums[i+1] % 2）。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
