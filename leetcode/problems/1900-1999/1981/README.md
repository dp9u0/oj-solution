# [1981] Minimize the Difference Between Target and Chosen Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/description/)

* algorithms
* Medium (36.82%)
* Likes:    1062
* Dislikes: 145
* Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]\n13'

```md
You are given an m x n integer matrix mat and an integer target.
Choose one integer from each row in the matrix such that the absolute difference between target and the sum of the chosen elements is minimized.
Return the minimum absolute difference.
The absolute difference between two numbers a and b is the absolute value of a - b.

Example 1:


Input: mat = [[1,2,3],[4,5,6],[7,8,9]], target = 13
Output: 0
Explanation: One possible choice is to:
- Choose 1 from the first row.
- Choose 5 from the second row.
- Choose 7 from the third row.
The sum of the chosen elements is 13, which equals the target, so the absolute difference is 0.

Example 2:


Input: mat = [[1],[2],[3]], target = 100
Output: 94
Explanation: The best possible choice is to:
- Choose 1 from the first row.
- Choose 2 from the second row.
- Choose 3 from the third row.
The sum of the chosen elements is 6, and the absolute difference is 94.

Example 3:


Input: mat = [[1,2,9,8,7]], target = 6
Output: 1
Explanation: The best choice is to choose 7 from the first row.
The absolute difference is 1.


Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 70
1 <= mat[i][j] <= 70
1 <= target <= 800


```

## 中文翻译

给定 m×n 矩阵和 target，从每行选一个数，使选出的 m 个数之和与 target 的绝对差最小。

## 解题思路

**集合 DP（可达和）**

用 Set 维护所有可达的和，逐行处理。每行先去重，然后将当前所有可达和加上该行每个元素得到新的可达和。最终遍历所有可达和，找最接近 target 的。时间复杂度 O(m * n * maxSum)。

## Solution

[SourceCode](./solution.js)
