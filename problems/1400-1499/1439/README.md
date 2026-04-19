# [1439] Find the Kth Smallest Sum of a Matrix With Sorted Rows

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/description/)

* algorithms
* Hard (62.30%)
* Likes:    1295
* Dislikes: 21
* Testcase Example:  '[[1,3,11],[2,4,6]]\n5'

```md
You are given an m x n matrix mat that has its rows sorted in non-decreasing order and an integer k.
You are allowed to choose exactly one element from each row to form an array.
Return the kth smallest array sum among all possible arrays.

Example 1:

Input: mat = [[1,3,11],[2,4,6]], k = 5
Output: 7
Explanation: Choosing one element from each row, the first k smallest sum are:
[1,2], [1,4], [3,2], [3,4], [1,6]. Where the 5th sum is 7.

Example 2:

Input: mat = [[1,3,11],[2,4,6]], k = 9
Output: 17

Example 3:

Input: mat = [[1,10,10],[1,4,5],[2,3,6]], k = 7
Output: 9
Explanation: Choosing one element from each row, the first k smallest sum are:
[1,1,2], [1,1,3], [1,4,2], [1,4,3], [1,1,6], [1,5,2], [1,5,3]. Where the 7th sum is 9.


Constraints:

m == mat.length
n == mat.length[i]
1 <= m, n <= 40
1 <= mat[i][j] <= 5000
1 <= k <= min(200, nm)
mat[i] is a non-decreasing array.


```

## 题意翻译

给定一个 m×n 矩阵 mat，每行已非递减排序。从每行恰好选一个元素组成数组，返回所有可能数组的和之中第 k 小的值。

## 解题思路

**逐行归并 + 最小堆**

1. 初始化候选和集合 `sums = [0]`（第一行之前的空选法和为 0）。
2. 逐行处理：对于当前行的每个元素 x，与 sums 中每个已有和相加，得到新的候选和集合。用最小堆（优先队列）保留前 k 小的和，避免集合爆炸。
3. 具体做法：每次归并时，将 (sums[j] + row[i]) 放入小顶堆，去重后只保留前 k 个。
4. 处理完所有行后，sums[k-1] 即为答案。
5. 时间 O(m * k * log(k))，空间 O(k)。

## Solution

[SourceCode](./solution.js)
