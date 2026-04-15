# [2154] Keep Multiplying Found Values by Two

## Description

[LeetCode Problem Description](https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/)

* algorithms
* Easy (75.04%)
* Likes:    1065
* Dislikes: 54
* Testcase Example:  '[5,3,6,1,12]\n3'

```md
You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.
You then do the following steps:

If original is found in nums, multiply it by two (i.e., set original = 2 * original).
Otherwise, stop the process.
Repeat this process with the new number as long as you keep finding the number.

Return the final value of original.

Example 1:

Input: nums = [5,3,6,1,12], original = 3
Output: 24
Explanation:
- 3 is found in nums. 3 is multiplied by 2 to obtain 6.
- 6 is found in nums. 6 is multiplied by 2 to obtain 12.
- 12 is found in nums. 12 is multiplied by 2 to obtain 24.
- 24 is not found in nums. Thus, 24 is returned.

Example 2:

Input: nums = [2,7,9], original = 4
Output: 4
Explanation:
- 4 is not found in nums. Thus, 4 is returned.


Constraints:

1 <= nums.length <= 1000
1 <= nums[i], original <= 1000


```

## 中文翻译

给定数组 nums 和整数 original，不断在 nums 中查找 original，若找到则 original *= 2，直到找不到为止，返回最终值。

## 解题思路

将 nums 存入 Set，循环查找 original，找到则翻倍继续，找不到则返回。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
