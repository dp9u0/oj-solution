# [378] Kth Smallest Element in a Sorted Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/)

* algorithms
* Medium (64.50%)
* Testcase Example:  '[[1,5,9],[10,11,13],[12,13,15]]\n8'

```md
Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the k^th smallest element in the matrix.
Note that it is the k^th smallest element in the sorted order, not the k^th distinct element.
You must find a solution with a memory complexity better than O(n^2).

Example 1:
Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8^th smallest number is 13
Example 2:
Input: matrix = [[-5]], k = 1
Output: -5

Constraints:
n == matrix.length == matrix[i].length
1
-10^9
All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
1

Follow up:
Could you solve the problem with a constant memory (i.e., O(1) memory complexity)?
Could you solve the problem in O(n) time complexity? The solution may be too advanced for an interview but you may find reading this paper fun.

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)
给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。
你必须找到一个内存复杂度优于 O(n^2) 的解决方案。

示例 1:
输入: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
输出: 13
解释: 矩阵中的元素为 [1,5,9,10,11,12,13,13,15]，第 8 小的数字是 13

示例 2:
输入: matrix = [[-5]], k = 1
输出: -5

约束条件:
n == matrix.length == matrix[i].length
1 <= n <= 300
-10^9 <= matrix[i][j] <= 10^9
所有行和列都保证按非递减顺序排序。
1 <= k <= n^2

### 解题思路 (Approach)
这是一个经典的在有序矩阵中寻找第k小元素的问题。
有两种常见的最优解法：
1. **优先队列（小顶堆）**：类似于合并K个有序链表。将每一行的第一个元素加入最小堆，然后每次弹出最小元素，并将该元素所在行的下一个元素加入堆中。执行 k 次操作后弹出的就是第 k 小的元素。时间复杂度 O(k log n)，空间复杂度 O(n)。
2. **二分查找（值域二分）**：由于矩阵是有序的，矩阵的最小值在左上角 `matrix[0][0]`，最大值在右下角 `matrix[n-1][n-1]`。我们可以在这个数值范围内进行二分查找。每次取中间值 `mid`，然后统计矩阵中 <= `mid` 的元素个数。
   统计 <= `mid` 的元素个数由于矩阵行和列都有序，可以从左下角或右上角开始遍历，时间复杂度为 O(n)。
   如果 <= `mid` 的个数小于 k，说明第 k 小的数在 `mid` 的右侧，否则在左侧（包含 `mid`）。
   二分查找的时间复杂度为 O(n log(Max-Min))，空间复杂度为 O(1)。
   进阶要求 O(1) 空间复杂度，二分查找是更好的选择。
