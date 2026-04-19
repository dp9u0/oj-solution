# [3551] Minimum Swaps to Sort by Digit Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-swaps-to-sort-by-digit-sum/description/)

* algorithms
* Medium (50.46%)
* Likes:    147
* Dislikes: 5
* Testcase Example:  '[37,100]'

```md
You are given an array nums of distinct positive integers. You need to sort the array in increasing order based on the sum of the digits of each number. If two numbers have the same digit sum, the smaller number appears first in the sorted order.
Return the minimum number of swaps required to rearrange nums into this sorted order.
A swap is defined as exchanging the values at two distinct positions in the array.

Example 1:

Input: nums = [37,100]
Output: 1
Explanation:

Compute the digit sum for each integer: [3 + 7 = 10, 1 + 0 + 0 = 1] &rarr; [10, 1]
Sort the integers based on digit sum: [100, 37]. Swap 37 with 100 to obtain the sorted order.
Thus, the minimum number of swaps required to rearrange nums is 1.


Example 2:

Input: nums = [22,14,33,7]
Output: 0
Explanation:

Compute the digit sum for each integer: [2 + 2 = 4, 1 + 4 = 5, 3 + 3 = 6, 7 = 7] &rarr; [4, 5, 6, 7]
Sort the integers based on digit sum: [22, 14, 33, 7]. The array is already sorted.
Thus, the minimum number of swaps required to rearrange nums is 0.


Example 3:

Input: nums = [18,43,34,16]
Output: 2
Explanation:

Compute the digit sum for each integer: [1 + 8 = 9, 4 + 3 = 7, 3 + 4 = 7, 1 + 6 = 7] &rarr; [9, 7, 7, 7]
Sort the integers based on digit sum: [16, 34, 43, 18]. Swap 18 with 16, and swap 43 with 34 to obtain the sorted order.
Thus, the minimum number of swaps required to rearrange nums is 2.



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
nums consists of distinct positive integers.


```

## 中文翻译

给定一个由不同正整数组成的数组 nums，按照每个数的数位之和升序排序。数位和相同时，较小的数排在前面。返回将数组重排为该顺序所需的最少交换次数。

## 解题思路

**排列环分解**：

1. 计算每个数的数位和
2. 按 (数位和, 值) 排序得到目标顺序
3. 构建排列映射：原位置 → 目标位置
4. 统计环的个数，每个长度为 k 的环需要 k-1 次交换
5. 总交换次数 = n - 环的个数

## Solution

[SourceCode](./solution.js)
