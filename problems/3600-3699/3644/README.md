# [3644] Maximum K to Sort a Permutation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-k-to-sort-a-permutation/description/)

* algorithms
* Medium (37.35%)
* Likes:    100
* Dislikes: 35
* Testcase Example:  '[0,3,2,1]'

```md
You are given an integer array nums of length n, where nums is a permutation of the numbers in the range [0..n - 1].
You may swap elements at indices i and j only if nums[i] AND nums[j] == k, where AND denotes the bitwise AND operation and k is a non-negative integer.
Return the maximum value of k such that the array can be sorted in non-decreasing order using any number of such swaps. If nums is already sorted, return 0.

Example 1:

Input: nums = [0,3,2,1]
Output: 1
Explanation:
Choose k = 1. Swapping nums[1] = 3 and nums[3] = 1 is allowed since nums[1] AND nums[3] == 1, resulting in a sorted permutation: [0, 1, 2, 3].

Example 2:

Input: nums = [0,1,3,2]
Output: 2
Explanation:
Choose k = 2. Swapping nums[2] = 3 and nums[3] = 2 is allowed since nums[2] AND nums[3] == 2, resulting in a sorted permutation: [0, 1, 2, 3].

Example 3:

Input: nums = [3,2,1,0]
Output: 0
Explanation:
Only k = 0 allows sorting since no greater k allows the required swaps where nums[i] AND nums[j] == k.


Constraints:

1 <= n == nums.length <= 105
0 <= nums[i] <= n - 1
nums is a permutation of integers from 0 to n - 1.


```

## 中文翻译

给定长度为 n 的排列 nums，你可以交换位置 i 和 j 的元素，条件是 nums[i] AND nums[j] == k。求最大的 k 使得通过任意次交换可以将数组排序（非递减）。如果数组已排序返回 0。

## 解题思路

按位贪心 + 并查集。从高位到低位逐位检查：维护一个候选 k，初始为 0。对于每一位 b（从高位到低位），尝试将 k 的第 b 位设为 1。对于每个需要回到正确位置的元素 nums[i]，如果 nums[i] 和 i 的 AND 结果包含了 k'（候选值），说明可以通过该位连接。用并查集将所有 nums[i] 的第 b 位为 1 的位置与 i 连通，检查所有错位元素是否在同一连通分量中。如果可以排序则保留该位，否则不设。

实际上更简单的思路：对于每个错位的位置 i（nums[i] != i），我们需要通过交换把它放到正确位置。可以交换的条件是 nums[i] AND nums[j] == k。等价于：对于某个 k，所有在同一个"循环置换"中的元素都可以互相交换。判断条件是：对于错位位置 i，nums[i] & k != 0（意味着第 b 位连接了它们）。

关键观察：k 的某一位 b 为 1 时，只有 nums[i] 的第 b 位为 1 的元素才能参与以 k 为条件的交换。所以用并查集：对于 k 的每一位为 1 的位 b，将所有 nums[i] & (1<<b) != 0 的元素 i 和 nums[i] 连通。然后检查每个错位元素 i 是否和 i 在同一连通分量。

## Solution

[SourceCode](./solution.js)
