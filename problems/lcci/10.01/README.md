# [面试题 10.01] 合并排序的数组

## Description


```md
https://leetcode.cn/problems/sorted-merge-lcci/description/
* lcci
* Easy (56.24%)
* Likes:    191
* Dislikes: -
* Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。
初始化 A 和 B 的元素数量分别为 m 和 n。
示例：
输入：
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3
输出： [1,2,2,3,5,6]
说明：
A.length == n + m
Hint 1: 尝试从数组的末端向前端移动。

```

## Description (English)

Given two sorted arrays A and B, where A has enough buffer at the end to hold B, write a method to merge B into A in sorted order. A and B initially contain m and n elements respectively.

Example:
A = [1,2,3,0,0,0], m = 3; B = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Note: A.length == n + m.

## 思路

从尾向前三指针归并 O(m+n)/O(1)：写指针 tail 从 m+n−1 起步，比较 A[i] 与 B[j] 取大者后移——从后往前避免了前向归并的元素搬移，B 剩余时整体搬入。

## Solution

[SourceCode](./solution.js)
