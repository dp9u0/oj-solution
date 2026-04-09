# [3834] Merge Adjacent Equal Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/merge-adjacent-equal-elements/description/)

* algorithms
* Medium (42.23%)
* Likes:    93
* Dislikes: 2
* Testcase Example:  '[3,1,1,2]'

```md
You are given an integer array nums.
You must repeatedly apply the following merge operation until no more changes can be made:

If any two adjacent elements are equal, choose the leftmost such adjacent pair in the current array and replace them with a single element equal to their sum.

After each merge operation, the array size decreases by 1. Repeat the process on the updated array until no more changes can be made.
Return the final array after all possible merge operations.

Example 1:

Input: nums = [3,1,1,2]
Output: [3,4]
Explanation:

The middle two elements are equal and merged into 1 + 1 = 2, resulting in [3, 2, 2].
The last two elements are equal and merged into 2 + 2 = 4, resulting in [3, 4].
No adjacent equal elements remain. Thus, the answer is [3, 4].


Example 2:

Input: nums = [2,2,4]
Output: [8]
Explanation:

The first two elements are equal and merged into 2 + 2 = 4, resulting in [4, 4].
The first two elements are equal and merged into 4 + 4 = 8, resulting in [8].


Example 3:

Input: nums = [3,7,5]
Output: [3,7,5]
Explanation:
There are no adjacent equal elements in the array, so no operations are performed.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105​​​​​​​


```

## 翻译

给定一个整数数组 nums。反复执行以下合并操作，直到无法再进行更改：
如果存在两个相邻的相等元素，选择当前数组中最左边的相邻相等对，将它们替换为一个等于它们之和的单个元素。
每次合并后数组长度减 1。返回所有可能合并操作后的最终数组。

## Approach

用栈模拟合并过程。遍历数组，将每个元素压栈，压入后检查栈顶两个元素是否相等：
- 若相等，弹出两个，将它们的和压栈，然后继续检查新栈顶是否又与更前面的元素相等（用 while 循环）。
- 若不等，继续处理下一个元素。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
