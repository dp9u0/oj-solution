# [2495] 乘积为偶数的子数组数

## Description


```md
https://leetcode.cn/problems/number-of-subarrays-having-even-product/description/
* algorithms
* Medium (61.47%)
* Likes:    8
* Dislikes: -
* Testcase Example:  '[9,6,7,13]'
给定一个整数数组 nums，返回具有偶数乘积的 nums 子数组的数目。

示例 1:
输入: nums = [9,6,7,13]
输出: 6
解释: 有6个子数组的乘积是偶数:
- nums[0..1] = 9 * 6 = 54.
- nums[0..2] = 9 * 6 * 7 = 378.
- nums[0..3] = 9 * 6 * 7 * 13 = 4914.
- nums[1..1] = 6.
- nums[1..2] = 6 * 7 = 42.
- nums[1..3] = 6 * 7 * 13 = 546.
示例 2:
输入: nums = [7,3,5]
输出: 0
解释: 没有乘积是偶数的子数组

提示:
1 <= nums.length <= 105
1 <= nums[i] <= 105
Hint 1: The product of elements in a subarray is even if it contains at least one even element.
Hint 2: Iterate from left to right and save the last index of an even number. Let that saved index be “j”.
Hint 3: It can be seen that every subarray starting from earlier than index “j” and ending at the current index has an even product.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Count subarrays of nums whose product is even (contains at least one even element).

Example 1:
Input: nums = [9,6,7,13]
Output: 6

Example 2:
Input: nums = [7,3,5]
Output: 0

Constraints: 1 <= nums.length <= 10^5.

## Approach

Complement counting: total subarrays = n(n+1)/2. Subtract all-odd runs: a maximal run of L odd numbers contributes L(L+1)/2 odd-product subarrays. Sweep once.
