# [1053] Previous Permutation With One Swap

## Description

[LeetCode Problem Description](https://leetcode.com/problems/previous-permutation-with-one-swap/description/)

* algorithms
* Medium (49.25%)
* Likes:    481
* Dislikes: 44
* Testcase Example:  '[3,2,1]'

```md
Given an array of positive integers arr (not necessarily distinct), return the lexicographically largest permutation that is smaller than arr, that can be made with exactly one swap. If it cannot be done, then return the same array.
Note that a swap exchanges the positions of two numbers arr[i] and arr[j]

Example 1:

Input: arr = [3,2,1]
Output: [3,1,2]
Explanation: Swapping 2 and 1.

Example 2:

Input: arr = [1,1,5]
Output: [1,1,5]
Explanation: This is already the smallest permutation.

Example 3:

Input: arr = [1,9,4,6,7]
Output: [1,7,4,6,9]
Explanation: Swapping 9 and 7.


Constraints:

1 <= arr.length <= 104
1 <= arr[i] <= 104


```

## 题目翻译

给定正整数数组 arr，恰好交换一次，求字典序小于 arr 的最大排列。无法做到则返回原数组。

## 解题思路

**贪心：从右找第一个下降点**

1. 从右向左找第一个 arr[i] > arr[i+1] 的位置 i（右most 下降点）
2. 在 arr[i+1..n-1] 中找最大的小于 arr[i] 的值，交换
3. 无下降点则已是最小排列，返回原数组

O(n) 时间，一次扫描。

## Solution

[SourceCode](./solution.js)
