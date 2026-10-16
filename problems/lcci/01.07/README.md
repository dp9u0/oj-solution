# [面试题 01.07] 旋转矩阵

## Description


```md
https://leetcode.cn/problems/rotate-matrix-lcci/description/
* lcci
* Medium (71.64%)
* Likes:    308
* Dislikes: -
* Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
不占用额外内存空间能否做到？

示例 1：
给定 matrix =
[
[1,2,3],
[4,5,6],
[7,8,9]
],
原地旋转输入矩阵，使其变为:
[
[7,4,1],
[8,5,2],
[9,6,3]
]
示例 2：
给定 matrix =
[
[ 5, 1, 9,11],
[ 2, 4, 8,10],
[13, 3, 6, 7],
[15,14,12,16]
],
原地旋转输入矩阵，使其变为:
[
[15,13, 2, 5],
[14, 3, 4, 1],
[12, 6, 8, 9],
[16, 7,10,11]
]
注意：本题与主站 48 题相同：https://leetcode.cn/problems/rotate-image/
Hint 1: 尝试逐层思考。你能旋转某个特定图层吗？
Hint 2: 旋转一个特定的层只意味着在4个数组中交换值。如果要求你在2个数组中交换值，你能做到吗？你能把它扩展到4个数组吗？

```

## Description (English)

Given an N×N matrix representing an image where each pixel is 4 bytes, rotate the image by 90 degrees. Can you do this without using extra memory (in-place)?

Example 1:
Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:
Input: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

## 思路

转置 + 每行水平翻转，两步原地完成顺时针 90°（(i,j) → (j,n-1-i)）。转置只走上三角防二次交换，O(n²) 时间、O(1) 空间，比逐环四向交换代码更短。

## Solution

[SourceCode](./solution.js)
