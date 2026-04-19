# [835] Image Overlap

## Description

[LeetCode Problem Description](https://leetcode.com/problems/image-overlap/description/)

* algorithms
* Medium (64.01%)
* Likes:    1412
* Dislikes: 506
* Testcase Example:  '[[1,1,0],[0,1,0],[0,1,0]]\n[[0,0,0],[0,1,1],[0,0,1]]'

```md
You are given two images, img1 and img2, represented as binary, square matrices of size n x n. A binary matrix has only 0s and 1s as values.
We translate one image however we choose by sliding all the 1 bits left, right, up, and/or down any number of units. We then place it on top of the other image. We can then calculate the overlap by counting the number of positions that have a 1 in both images.
Note also that a translation does not include any kind of rotation. Any 1 bits that are translated outside of the matrix borders are erased.
Return the largest possible overlap.

Example 1:


Input: img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]]
Output: 3
Explanation: We translate img1 to right by 1 unit and down by 1 unit.

The number of positions that have a 1 in both images is 3 (shown in red).


Example 2:

Input: img1 = [[1]], img2 = [[1]]
Output: 1

Example 3:

Input: img1 = [[0]], img2 = [[0]]
Output: 0


Constraints:

n == img1.length == img1[i].length
n == img2.length == img2[i].length
1 <= n <= 30
img1[i][j] is either 0 or 1.
img2[i][j] is either 0 or 1.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定两个 n×n 二值矩阵 img1 和 img2。将 img1 平移任意量后叠加到 img2 上，返回 1 重叠位置的最大数量。

## 解题思路

对 img1 中每个 1 位置 (i1, j1) 和 img2 中每个 1 位置 (i2, j2)，计算平移向量 (i2-i1, j2-j1)。用 Map 统计每个平移向量出现的次数，最大值即为答案。

n ≤ 30，最多 900 个 1，O(n^4) 可行。
