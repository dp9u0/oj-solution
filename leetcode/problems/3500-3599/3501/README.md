# [3501] Maximize Active Section with Trade II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-active-section-with-trade-ii/description/)

* algorithms
* Hard (20.81%)
* Likes:    27
* Dislikes: 9
* Testcase Example:  '"01"\n[[0,1]]'

```md
You are given a binary string s of length n, where:

&#39;1&#39; represents an active section.
&#39;0&#39; represents an inactive section.

You can perform at most one trade to maximize the number of active sections in s. In a trade, you:

Convert a contiguous block of &#39;1&#39;s that is surrounded by &#39;0&#39;s to all &#39;0&#39;s.
Afterward, convert a contiguous block of &#39;0&#39;s that is surrounded by &#39;1&#39;s to all &#39;1&#39;s.

Additionally, you are given a 2D array queries, where queries[i] = [li, ri] represents a substring s[li...ri].
For each query, determine the maximum possible number of active sections in s after making the optimal trade on the substring s[li...ri].
Return an array answer, where answer[i] is the result for queries[i].
Note

For each query, treat s[li...ri] as if it is augmented with a &#39;1&#39; at both ends, forming t = &#39;1&#39; + s[li...ri] + &#39;1&#39;. The augmented &#39;1&#39;s do not contribute to the final count.
The queries are independent of each other.


Example 1:

Input: s = '01', queries = [[0,1]]
Output: [1]
Explanation:
Because there is no block of &#39;1&#39;s surrounded by &#39;0&#39;s, no valid trade is possible. The maximum number of active sections is 1.

Example 2:

Input: s = '0100', queries = [[0,3],[0,2],[1,3],[2,3]]
Output: [4,3,1,1]
Explanation:


Query [0, 3] &rarr; Substring '0100' &rarr; Augmented to '101001'
Choose '0100', convert '0100' &rarr; '0000' &rarr; '1111'.
The final string without augmentation is '1111'. The maximum number of active sections is 4.


Query [0, 2] &rarr; Substring '010' &rarr; Augmented to '10101'
Choose '010', convert '010' &rarr; '000' &rarr; '111'.
The final string without augmentation is '1110'. The maximum number of active sections is 3.


Query [1, 3] &rarr; Substring '100' &rarr; Augmented to '11001'
Because there is no block of &#39;1&#39;s surrounded by &#39;0&#39;s, no valid trade is possible. The maximum number of active sections is 1.


Query [2, 3] &rarr; Substring '00' &rarr; Augmented to '1001'
Because there is no block of &#39;1&#39;s surrounded by &#39;0&#39;s, no valid trade is possible. The maximum number of active sections is 1.



Example 3:

Input: s = '1000100', queries = [[1,5],[0,6],[0,4]]
Output: [6,7,2]
Explanation:


Query [1, 5] &rarr; Substring '00010' &rarr; Augmented to '1000101'
Choose '00010', convert '00010' &rarr; '00000' &rarr; '11111'.
The final string without augmentation is '1111110'. The maximum number of active sections is 6.


Query [0, 6] &rarr; Substring '1000100' &rarr; Augmented to '110001001'
Choose '000100', convert '000100' &rarr; '000000' &rarr; '111111'.
The final string without augmentation is '1111111'. The maximum number of active sections is 7.


Query [0, 4] &rarr; Substring '10001' &rarr; Augmented to '1100011'
Because there is no block of &#39;1&#39;s surrounded by &#39;0&#39;s, no valid trade is possible. The maximum number of active sections is 2.



Example 4:

Input: s = '01010', queries = [[0,3],[1,4],[1,3]]
Output: [4,4,2]
Explanation:


Query [0, 3] &rarr; Substring '0101' &rarr; Augmented to '101011'
Choose '010', convert '010' &rarr; '000' &rarr; '111'.
The final string without augmentation is '11110'. The maximum number of active sections is 4.


Query [1, 4] &rarr; Substring '1010' &rarr; Augmented to '110101'
Choose '010', convert '010' &rarr; '000' &rarr; '111'.
The final string without augmentation is '01111'. The maximum number of active sections is 4.


Query [1, 3] &rarr; Substring '101' &rarr; Augmented to '11011'
Because there is no block of &#39;1&#39;s surrounded by &#39;0&#39;s, no valid trade is possible. The maximum number of active sections is 2.




Constraints:

1 <= n == s.length <= 105
1 <= queries.length <= 105
s[i] is either &#39;0&#39; or &#39;1&#39;.
queries[i] = [li, ri]
0 <= li <= ri < n


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定二进制字符串 s，对每个查询 [l, r]，在 s[l..r] 上做至多一次交易（先将一个被 0 包围的 1-block 变 0，再将一个被 1 包围的 0-block 变 1），查询时两端虚拟补 '1'。求交易后整个 s 中 1 的最大个数。

## 解题思路

交易净增 = 被转换的 1-block 左右两个相邻 0-block 长度之和。对每个 1-block 预计算 trade = left0 + right0。用稀疏表做区间最大值查询。每个查询中只有第一个和最后一个 1-block 的 trade 值可能被截断（由查询边界导致），中间的 1-block 的 trade 值不变。答案 = 全局 1 的个数 + max_gain。
