# [面试题 17.04] 消失的数字

## Description


```md
https://leetcode.cn/problems/missing-number-lcci/description/
* lcci
* Easy (58.01%)
* Likes:    133
* Dislikes: -
* Testcase Example:  '[3,0,1]'
数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？
注意：本题相对书上原题稍作改动
示例 1：
输入：[3,0,1]
输出：2

示例 2：
输入：[9,6,4,2,3,5,7,0,1]
输出：8
Hint 1: 你需要多长时间才能算出缺失数字的最小有效位?
Hint 2: 要找到缺失的数字中的最小有效位，你其实知道有多少个 0 和 1。例如，如果你看到最小有效位有 3 个 0 和 3 个 1，那么缺失的数字的最小值必定是 1。想想看:在任何 0 和 1 的序列中，你会得到 0，然后是 1，然后又是 0，然后又是 1，以此类推。
Hint 3: 一旦确定最小有效位是 0(或 1)，就可以排除所有不以 0 作为最小有效位的数。这个问题和前面的有什么不同?

```

## Description (English)

An array `nums` contains all integers from 0 to n except one. Write code to find the missing integer. Can you do it in O(n) time?

Example 1:
Input: [3, 0, 1]
Output: 2

Example 2:
Input: [9, 6, 4, 2, 3, 5, 7, 0, 1]
Output: 8

## 思路

异或（XOR 消去律）：完整集合应为 0..n 共 n+1 个数，把下标 0..n-1、n（初值）与数组所有元素一起异或，出现两次的全部抵消，剩下的就是缺失数字。

相比等差求和 `n(n+1)/2 - sum`，异或无大数溢出顾虑，O(n) 时间、O(1) 空间。

## Solution

[SourceCode](./solution.js)
