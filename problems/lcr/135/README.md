# [LCR 135] 报数

## Description


```md
https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/description/
* algorithms
* Easy (77.57%)
* Likes:    320
* Dislikes: -
* Testcase Example:  '2'
实现一个十进制数字报数程序，请按照数字从小到大的顺序返回一个整数数列，该数列从数字 1 开始，到最大的正整数 cnt 位数字结束。

示例 1：
输入：cnt = 2
输出：[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Implement a decimal counting program that returns an integer sequence from `1` up to the largest `cnt`-digit positive integer, in ascending order.

**Example:** `cnt = 2` → `[1,2,...,99]`

**Constraints:** (LeetCode context) `cnt` is small enough that the result fits in memory / JS arrays.

---

## Approach

The largest `cnt`-digit number is `10^cnt - 1` (e.g. cnt=2 → 99). Produce the array from `1` to that bound.

Complexity: `O(10^cnt)`.
