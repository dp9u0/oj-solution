# [3499] Maximize Active Section with Trade I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-active-section-with-trade-i/description/)

* algorithms
* Medium (31.37%)
* Likes:    70
* Dislikes: 28
* Testcase Example:  '"01"'

```md
You are given a binary string s of length n, where:

&#39;1&#39; represents an active section.
&#39;0&#39; represents an inactive section.

You can perform at most one trade to maximize the number of active sections in s. In a trade, you:

Convert a contiguous block of &#39;1&#39;s that is surrounded by &#39;0&#39;s to all &#39;0&#39;s.
Afterward, convert a contiguous block of &#39;0&#39;s that is surrounded by &#39;1&#39;s to all &#39;1&#39;s.

Return the maximum number of active sections in s after making the optimal trade.
Note: Treat s as if it is augmented with a &#39;1&#39; at both ends, forming t = &#39;1&#39; + s + &#39;1&#39;. The augmented &#39;1&#39;s do not contribute to the final count.

Example 1:

Input: s = '01'
Output: 1
Explanation:
Because there is no block of &#39;1&#39;s surrounded by &#39;0&#39;s, no valid trade is possible. The maximum number of active sections is 1.

Example 2:

Input: s = '0100'
Output: 4
Explanation:

String '0100' &rarr; Augmented to '101001'.
Choose '0100', convert '101001' &rarr; '100001' &rarr; '111111'.
The final string without augmentation is '1111'. The maximum number of active sections is 4.


Example 3:

Input: s = '1000100'
Output: 7
Explanation:

String '1000100' &rarr; Augmented to '110001001'.
Choose '000100', convert '110001001' &rarr; '110000001' &rarr; '111111111'.
The final string without augmentation is '1111111'. The maximum number of active sections is 7.


Example 4:

Input: s = '01010'
Output: 4
Explanation:

String '01010' &rarr; Augmented to '1010101'.
Choose '010', convert '1010101' &rarr; '1000101' &rarr; '1111101'.
The final string without augmentation is '11110'. The maximum number of active sections is 4.



Constraints:

1 <= n == s.length <= 105
s[i] is either &#39;0&#39; or &#39;1&#39;


```

## 题目翻译

给定二进制字符串 `s`（'1' 表示活跃，'0' 表示不活跃）。你可以执行最多一次交易：
1. 将一段被 '0' 包围的连续 '1' 块全部变成 '0'。
2. 然后将一段被 '1' 包围的连续 '0' 块全部变成 '1'。

将 s 视为两端各加了 '1'（t = '1' + s + '1'）。返回交易后最大活跃段数。

## 解题思路

将字符串 t = '1' + s + '1' 进行游程编码（run-length encoding），得到交替的 0 块和 1 块。

交易的本质：选一个 0 块（被两个 1 块包围），将其和其两侧的 1 块中的一侧变成 0，然后选择另一个 0 块全部变成 1。

简化理解：对于任意两个不同的 0 块 i 和 j（i < j），交易收益 = zeros[j]（把第 j 个 0 块全变 1）- ones[i+1]（把第 i 个 0 块右侧的 1 块变 0）。但实际收益 = zeros[j] - 中间被消耗的 1 块。

更准确地说：枚举每个 0 块作为"变成 1"的目标，找到前面或后面最优的"变成 0"的 1 块。最终答案 = 原始 1 的个数 + zeros[target] - ones[sacrificed]。

具体实现：预处理前缀最大值和后缀最大值。

## Solution

[SourceCode](./solution.js)
