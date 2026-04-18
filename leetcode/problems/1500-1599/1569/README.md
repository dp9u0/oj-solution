# [1569] Number of Ways to Reorder Array to Get Same BST

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/description/)

* algorithms
* Hard (54.02%)
* Likes:    1859
* Dislikes: 210
* Testcase Example:  '[2,1,3]'

```md
Given an array nums that represents a permutation of integers from 1 to n. We are going to construct a binary search tree (BST) by inserting the elements of nums in order into an initially empty BST. Find the number of different ways to reorder nums so that the constructed BST is identical to that formed from the original array nums.

For example, given nums = [2,1,3], we will have 2 as the root, 1 as a left child, and 3 as a right child. The array [2,3,1] also yields the same BST but [3,2,1] yields a different BST.

Return the number of ways to reorder nums such that the BST formed is identical to the original BST formed from nums.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:


Input: nums = [2,1,3]
Output: 1
Explanation: We can reorder nums to be [2,3,1] which will yield the same BST. There are no other ways to reorder nums which will yield the same BST.

Example 2:


Input: nums = [3,4,5,1,2]
Output: 5
Explanation: The following 5 arrays will yield the same BST:
[3,1,2,4,5]
[3,1,4,2,5]
[3,1,4,5,2]
[3,4,1,2,5]
[3,4,1,5,2]

Example 3:


Input: nums = [1,2,3]
Output: 0
Explanation: There are no other orderings of nums that will yield the same BST.


Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= nums.length
All integers in nums are distinct.


```

## 中文翻译

给定 1 到 n 的排列 nums，按顺序插入空 BST。求有多少种不同的排列方式能构造出相同的 BST。结果对 10^9+7 取模。

约束：1 <= nums.length <= 1000

## 解题思路

**递归分治 + 组合数学**

1. 根节点必须是第一个元素（nums[0]），它在任何合法排列中都必须保持根的位置。
2. 将剩余元素分为左子树（比根小）和右子树（比根大）。
3. 左右子树的相对顺序必须保持（即左子树内部顺序不变，右子树内部顺序不变），但左右子树的插入可以交错。
4. 交错方式数 = C(left+right, left)，即从 left+right 个位置中选 left 个给左子树。
5. 递归计算左右子树各自的方式数，最终结果 = C(left+right, left) * f(left) * f(right) - 1（减去原始排列本身）。

## Solution

[SourceCode](./solution.js)
