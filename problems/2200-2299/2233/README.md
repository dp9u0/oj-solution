# [2233] Maximum Product After K Increments

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-product-after-k-increments/description/)

* algorithms
* Medium (43.31%)
* Likes:    791
* Dislikes: 45
* Testcase Example:  '[0,4]\n5'

```md
You are given an array of non-negative integers nums and an integer k. In one operation, you may choose any element from nums and increment it by 1.
Return the maximum product of nums after at most k operations. Since the answer may be very large, return it modulo 109 + 7. Note that you should maximize the product before taking the modulo.

Example 1:

Input: nums = [0,4], k = 5
Output: 20
Explanation: Increment the first number 5 times.
Now nums = [5, 4], with a product of 5 * 4 = 20.
It can be shown that 20 is maximum product possible, so we return 20.
Note that there may be other ways to increment nums to have the maximum product.

Example 2:

Input: nums = [6,3,3,2], k = 2
Output: 216
Explanation: Increment the second number 1 time and increment the fourth number 1 time.
Now nums = [6, 4, 3, 3], with a product of 6 * 4 * 3 * 3 = 216.
It can be shown that 216 is maximum product possible, so we return 216.
Note that there may be other ways to increment nums to have the maximum product.


Constraints:

1 <= nums.length, k <= 105
0 <= nums[i] <= 106


```

## 题目翻译

给定一个非负整数数组 `nums` 和一个整数 `k`。每次操作可以选择 `nums` 中的任意一个元素加 1。最多进行 `k` 次操作后，返回 `nums` 的最大乘积。结果对 10^9+7 取模。

## 解题思路

贪心 + 最小堆。每次将 1 加到当前最小的元素上，这样对乘积的提升最大。用最小堆维护，每次弹出最小值加 1 后放回，重复 k 次。最后计算所有元素的乘积并对 MOD 取模。

## Solution

[SourceCode](./solution.js)
