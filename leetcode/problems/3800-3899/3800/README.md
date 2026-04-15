# [3800] Minimum Cost to Make Two Binary Strings Equal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-make-two-binary-strings-equal/description/)

* algorithms
* Medium (38.85%)
* Likes:    98
* Dislikes: 4
* Testcase Example:  '"01000"\n"10111"\n10\n2\n2'

```md
You are given two binary strings s and t, both of length n, and three positive integers flipCost, swapCost, and crossCost.
You are allowed to apply the following operations any number of times (in any order) to the strings s and t:

Choose any index i and flip s[i] or t[i] (change &#39;0&#39; to &#39;1&#39; or &#39;1&#39; to &#39;0&#39;). The cost of this operation is flipCost.
Choose two distinct indices i and j, and swap either s[i] and s[j] or t[i] and t[j]. The cost of this operation is swapCost.
Choose an index i and swap s[i] with t[i]. The cost of this operation is crossCost.

Return an integer denoting the minimum total cost needed to make the strings s and t equal.

Example 1:

Input: s = '01000', t = '10111', flipCost = 10, swapCost = 2, crossCost = 2
Output: 16
Explanation:
We can perform the following operations:

Swap s[0] and s[1] (swapCost = 2). After this operation, s = '10000' and t = '10111'.
Cross swap s[2] and t[2] (crossCost = 2). After this operation, s = '10100' and t = '10011'.
Swap s[2] and s[3] (swapCost = 2). After this operation, s = '10010' and t = '10011'.
Flip s[4] (flipCost = 10). After this operation, s = t = '10011'.

The total cost is 2 + 2 + 2 + 10 = 16.

Example 2:

Input: s = '001', t = '110', flipCost = 2, swapCost = 100, crossCost = 100
Output: 6
Explanation:
Flipping all the bits of s makes the strings equal, and the total cost is 3 * flipCost = 3 * 2 = 6.

Example 3:

Input: s = '1010', t = '1010', flipCost = 5, swapCost = 5, crossCost = 5
Output: 0
Explanation:
The strings are already equal, so no operations are required.


Constraints:

n == s.length == t.length
1 <= n <= 105​​​​​​​
1 <= flipCost, swapCost, crossCost <= 109
s and t consist only of the characters &#39;0&#39; and &#39;1&#39;.


```

## 题目翻译

给定两个等长二进制字符串 s、t，和三种操作的花费：flipCost（翻转某一位）、swapCost（同一字符串内交换两位）、crossCost（交换 s[i] 和 t[i]）。求使 s == t 的最小总花费。

## 解题思路

对每个位置分类：(0,1) 类型 A 计 a 个，(1,0) 类型 B 计 b 个。

- 配对 min(a,b) 对相反类型：用 swapCost（同一字符串内交换，一次修复两个）
- 剩余 |a-b| 个同类型，两两分组：
  - 先 cross swap 一个变为相反类型，再 swap 配对：crossCost + swapCost 修复两个
  - 或直接 flip 两个：2 * flipCost
  - 取较小值
- 若剩 1 个单独的：flip 修复，flipCost

公式：pairs * min(swapCost, 2*flipCost) + samePairs * min(2*flipCost, crossCost+swapCost) + sameSingle * flipCost

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
