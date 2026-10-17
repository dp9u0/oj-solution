# [面试题 17.19] 消失的两个数字

## Description


```md
https://leetcode.cn/problems/missing-two-lcci/description/
* lcci
* Hard (60.20%)
* Likes:    251
* Dislikes: -
* Testcase Example:  '[1]'
给定一个数组，包含从 1 到 N 所有的整数，但其中缺了两个数字。你能在 O(N) 时间内只用 O(1) 的空间找到它们吗？
以任意顺序返回这两个数字均可。
示例 1：
输入：[1]
输出：[2,3]
示例 2：
输入：[2,3]
输出：[1,4]
提示：
nums.length <= 30000
Hint 1: 从第一部分开始：如果只缺少一个数字，那么找到它。
Hint 2: 第1部分：如果你必须在O(1)的空间复杂度和O(N)的时间复杂度下找到丢失的数字，那么只能在数组中执行常数次遍历，并且只能存储少许变量。
Hint 3: 第1部分：如果将数组中的所有值相加会怎么样？然后你能算出缺失的数字吗？
Hint 4: 第2部分：我们现在正在寻找两个缺失的数字，可以称其为a和b。第1部分中的计算方法将告诉我们a和b的和，但它实际上不会告诉我们a和b。还需要做什么计算？
Hint 5: 第2部分：有很多不同的计算方法可以试一试。例如，可以把所有的数都相乘，但这只会得到a和b的乘积。
Hint 6: 第2部分：把数字加在一起会得到a + b的结果。把数字相乘会得到a × b的结果。怎样才能得到a和b的确切值？
Hint 7: 第2部分：我们可以两者都计算。如果知道a + b = 87，a×b = 962，那么就解出a和b : a = 13且b = 74。但这也将导致必须对非常大的数相乘。所有数的乘积可以大于10^157。还有更简单的计算方法吗？
Hint 8: 第2部分：几乎任何我们能想到的“方程”都可以用在这里（只要它和线性和不等价）。只要保持这个和很小就可以。
Hint 9: 第2部分：试着求所有值的平方的和。
Hint 10: 第2部分：你可能需要二次公式。如果你不记得也没什么大不了的，大多数人都不会记得。知道二次公式的存在即可。

```

## Description (English)

Given an array containing all integers from 1 to N except two missing ones, find them in O(N) time and O(1) space. Return in any order.

Example 1:
Input: [1]
Output: [2,3]

Example 2:
Input: [2,3]
Output: [1,4]

Note: nums.length <= 30000 (N = nums.length + 2).

## 思路

和 + 平方和联立 O(n)/O(1)：缺的两数 a+b = 全量和 − 数组和（记 s），a²+b² = 全量平方和 − 数组平方和（记 q）→ ab = (s²−q)/2，解 x² − sx + p = 0 取 ±√(s²−4p)。N ≤ 3e4 时 s² ≤ 3.6e9、q ≤ 9e12，均在双精度精确整数范围内，√ 必为精确整数。

## Solution

[SourceCode](./solution.js)
