# [LCR 163] 找到第 k 位数字

## Description


```md
https://leetcode.cn/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/description/
* algorithms
* Medium (43.05%)
* Likes:    372
* Dislikes: -
* Testcase Example:  '5'
某班级学号记录系统发生错乱，原整数学号序列 [1,2,3,4,...] 分隔符丢失后变为 1234... 的字符序列。请实现一个函数返回该字符序列中的第 k 位数字。

示例 1：
输入：k = 5
输出：5
示例 2：
输入：k = 12
输出：1
解释：第 12 位数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 1 ，它是 11 的一部分。

提示：
0 <= k < 231
注意：本题与主站 400 题相同：https://leetcode.cn/problems/nth-digit/

```

## English Translation

Given an integer n, return the nth digit of the infinite integer sequence `1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...`, which is formed by concatenating all positive integers in order.

Example 1:
Input: k = 5
Output: 5

Example 2:
Input: k = 12
Output: 1
Explanation: The 12th digit in the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is 1, which is part of 11.

Constraints:
0 <= k < 2^31
Note: This problem is the same as LeetCode 400 (Nth Digit).

## 解题思路

**数学 + 定位法（无需暴力拼接）。**

序列由连续正整数拼接而成。第 k 位落在某个位数段内：

1. **按位数分段**：1 位数共 9 个（1-9）占 9 位；2 位数共 90 个（10-99）占 180 位；3 位数共 900 个占 2700 位……第 `digits` 位数段有 `9 * 10^(digits-1)` 个数字，占 `9 * 10^(digits-1) * digits` 位。
2. **定位位数段**：从 k 中不断减去当前位数段占用的位数，直到 `k <= count * digits`，此时 k 落在 `digits` 位数段内。
3. **定位具体数字**：该段的起始数字为 `start = 10^(digits-1)`。段内索引为 `(k - 1) / digits`（向下取整），目标数字为 `start + index`。
4. **定位具体位**：段内偏移为 `(k - 1) % digits`，取目标数字对应位置的字符即可。

时间复杂度 O(log k)（位数段数量约 10），空间复杂度 O(1)。
