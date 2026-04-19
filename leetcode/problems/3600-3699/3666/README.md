# [3666] Minimum Operations to Equalize Binary String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-equalize-binary-string/description/)

* algorithms
* Hard (45.19%)
* Likes:    306
* Dislikes: 34
* Testcase Example:  '"110"\n1'

```md
You are given a binary string s, and an integer k.
In one operation, you must choose exactly k different indices and flip each &#39;0&#39; to &#39;1&#39; and each &#39;1&#39; to &#39;0&#39;.
Return the minimum number of operations required to make all characters in the string equal to &#39;1&#39;. If it is not possible, return -1.

Example 1:

Input: s = '110', k = 1
Output: 1
Explanation:

There is one &#39;0&#39; in s.
Since k = 1, we can flip it directly in one operation.


Example 2:

Input: s = '0101', k = 3
Output: 2
Explanation:
One optimal set of operations choosing k = 3 indices in each operation is:

Operation 1: Flip indices [0, 1, 3]. s changes from '0101' to '1000'.
Operation 2: Flip indices [1, 2, 3]. s changes from '1000' to '1111'.

Thus, the minimum number of operations is 2.

Example 3:

Input: s = '101', k = 2
Output: -1
Explanation:
Since k = 2 and s has only one &#39;0&#39;, it is impossible to flip exactly k indices to make all &#39;1&#39;. Hence, the answer is -1.


Constraints:

1 <= s.length <= 10​​​​​​​5
s[i] is either &#39;0&#39; or &#39;1&#39;.
1 <= k <= s.length


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定二进制字符串 s 和整数 k，每次操作选恰好 k 个不同位置翻转。求使所有字符变为 '1' 的最少操作数，不可能返回 -1。

## 解题思路

设 zeros 为 '0' 的个数。每次操作翻转 a 个 0 和 k-a 个 1，zeros 变化 (k-2a)。枚举操作次数 m，检查是否存在合法方案。关键是：每次操作的 a 的范围受 zeros 和 ones 约束。用贪心+数学分析：每次尽可能多地翻 0，zeros 的变化范围为 [k-2*min(zeros,k), k-2*max(0,k-ones)]。模拟直到 zeros=0 或判定不可能。
