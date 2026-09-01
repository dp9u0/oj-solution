# [654] Maximum Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-binary-tree/description/)

* algorithms
* Medium (86.33%)
* Likes:    5430
* Dislikes: 352
* Testcase Example:  '[3,2,1,6,0,5]'

```md
You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

Create a root node whose value is the maximum value in nums.
Recursively build the left subtree on the subarray prefix to the left of the maximum value.
Recursively build the right subtree on the subarray suffix to the right of the maximum value.

Return the maximum binary tree built from nums.

Example 1:


Input: nums = [3,2,1,6,0,5]
Output: [6,3,5,null,2,0,null,null,1]
Explanation: The recursive calls are as follow:
- The largest value in [3,2,1,6,0,5] is 6. Left prefix is [3,2,1] and right suffix is [0,5].
- The largest value in [3,2,1] is 3. Left prefix is [] and right suffix is [2,1].
- Empty array, so no child.
- The largest value in [2,1] is 2. Left prefix is [] and right suffix is [1].
- Empty array, so no child.
- Only one element, so child is a node with value 1.
- The largest value in [0,5] is 5. Left prefix is [0] and right suffix is [].
- Only one element, so child is a node with value 0.
- Empty array, so no child.

Example 2:


Input: nums = [3,2,1]
Output: [3,null,2,null,1]


Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 1000
All integers in nums are unique.


```

## 题目翻译

给定无重复整数数组，递归构建最大二叉树：根为子数组最大值，左子树为左边部分，右子树为右边部分。

## 解题思路

递归：找最大值作为根，递归处理左右子数组。使用索引范围避免数组拷贝。

时间复杂度 O(n^2)

## Solution

[SourceCode](./solution.js)
