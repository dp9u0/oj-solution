# [1998] GCD Sort of an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/gcd-sort-of-an-array/description/)

* algorithms
* Hard (49.62%)
* Likes:    540
* Dislikes: 15
* Testcase Example:  '[7,21,3]'

```md
You are given an integer array nums, and you can perform the following operation any number of times on nums:

Swap the positions of two elements nums[i] and nums[j] if gcd(nums[i], nums[j]) > 1 where gcd(nums[i], nums[j]) is the greatest common divisor of nums[i] and nums[j].

Return true if it is possible to sort nums in non-decreasing order using the above swap method, or false otherwise.

Example 1:

Input: nums = [7,21,3]
Output: true
Explanation: We can sort [7,21,3] by performing the following operations:
- Swap 7 and 21 because gcd(7,21) = 7. nums = [21,7,3]
- Swap 21 and 3 because gcd(21,3) = 3. nums = [3,7,21]

Example 2:

Input: nums = [5,2,6,2]
Output: false
Explanation: It is impossible to sort the array because 5 cannot be swapped with any other element.

Example 3:

Input: nums = [10,5,9,3,15]
Output: true
We can sort [10,5,9,3,15] by performing the following operations:
- Swap 10 and 15 because gcd(10,15) = 5. nums = [15,5,9,3,10]
- Swap 15 and 3 because gcd(15,3) = 3. nums = [3,5,9,15,10]
- Swap 10 and 15 because gcd(10,15) = 5. nums = [3,5,9,10,15]


Constraints:

1 <= nums.length <= 3 * 104
2 <= nums[i] <= 105


```

## 题目翻译

给定整数数组 nums，可以进行任意次操作：当 gcd(nums[i], nums[j]) > 1 时交换 nums[i] 和 nums[j]。判断是否能通过操作将数组排序为非递减顺序。

## 解题思路

**素数筛 + 并查集**

1. 用埃氏筛预处理每个数的最小质因子 (SPF)
2. 对每个数，分解质因子，用并查集将数与它的所有质因子 union
3. 两个数能间接交换 ⟺ 它们共享某个质因子（在同一个并查集分量中）
4. 比较 nums 和排序后的数组，每个位置 i 的 nums[i] 和 sorted[i] 必须在同一个分量中

时间复杂度 O(M log log M + n log M)，其中 M = max(nums)。

## Solution

[SourceCode](./solution.js)
