# [面试题 16.06] 最小差

## Description


```md
https://leetcode.cn/problems/smallest-difference-lcci/description/
* lcci
* Medium (43.34%)
* Likes:    100
* Dislikes: -
* Testcase Example:  '[0]\n[2147483647]'
给定两个整数数组a和b，计算具有最小差绝对值的一对数值（每个数组中取一个值），并返回该对数值的差

示例：
输入：{1, 3, 15, 11, 2}, {23, 127, 235, 19, 8}
输出：3，即数值对(11, 8)

提示：
1 <= a.length, b.length <= 100000
-2147483648 <= a[i], b[i] <= 2147483647
正确结果在区间 [0, 2147483647] 内
Hint 1: 如果你对数组排序呢?
Hint 2: 考虑如何合并两个有序数组。
Hint 3: 假设你把两个数组排序，然后遍历它们。如果第一个数组中的指针指向3，第二个数组中的指针指向9，那么移动第二个指针会对这一对数字的差产生什么影响?

```

## Description (English)

Given two integer arrays a and b, compute the pair (one value from each array) with the smallest absolute difference and return that difference.

Example:
Input: {1, 3, 15, 11, 2}, {23, 127, 235, 19, 8}
Output: 3 (the pair (11, 8))

Notes: 1 <= a.length, b.length <= 100000; -2147483648 <= a[i], b[i] <= 2147483647; the result is within [0, 2147483647].

## 思路

双数组排序后归并双指针 O(n log n + m log m)：差为负推进 a 指针、为正推进 b 指针（各朝缩小差距方向），为零直接短路；JS 双精度无 2³¹ 相减溢出问题。

## Solution

[SourceCode](./solution.js)
