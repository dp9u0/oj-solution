# [3361] Shift Distance Between Two Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shift-distance-between-two-strings/description/)

* algorithms
* Medium (53.50%)
* Likes:    68
* Dislikes: 46
* Testcase Example:  '"abab"\n' +

```md
'"baba"\n' +
'[100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n' +
'[1,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]'
You are given two strings s and t of the same length, and two integer arrays nextCost and previousCost.
In one operation, you can pick any index i of s, and perform either one of the following actions:

Shift s[i] to the next letter in the alphabet. If s[i] == &#39;z&#39;, you should replace it with &#39;a&#39;. This operation costs nextCost[j] where j is the index of s[i] in the alphabet.
Shift s[i] to the previous letter in the alphabet. If s[i] == &#39;a&#39;, you should replace it with &#39;z&#39;. This operation costs previousCost[j] where j is the index of s[i] in the alphabet.

The shift distance is the minimum total cost of operations required to transform s into t.
Return the shift distance from s to t.

Example 1:

Input: s = 'abab', t = 'baba', nextCost = [100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], previousCost = [1,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: 2
Explanation:

We choose index i = 0 and shift s[0] 25 times to the previous character for a total cost of 1.
We choose index i = 1 and shift s[1] 25 times to the next character for a total cost of 0.
We choose index i = 2 and shift s[2] 25 times to the previous character for a total cost of 1.
We choose index i = 3 and shift s[3] 25 times to the next character for a total cost of 0.


Example 2:

Input: s = 'leet', t = 'code', nextCost = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], previousCost = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
Output: 31
Explanation:

We choose index i = 0 and shift s[0] 9 times to the previous character for a total cost of 9.
We choose index i = 1 and shift s[1] 10 times to the next character for a total cost of 10.
We choose index i = 2 and shift s[2] 1 time to the previous character for a total cost of 1.
We choose index i = 3 and shift s[3] 11 times to the next character for a total cost of 11.



Constraints:

1 <= s.length == t.length <= 105
s and t consist only of lowercase English letters.
nextCost.length == previousCost.length == 26
0 <= nextCost[i], previousCost[i] <= 109


```

## 中文翻译

给定两个等长字符串 s 和 t，以及 nextCost 和 previousCost 数组。可以循环移动字母（next或previous），代价按当前字母索引对应。求将 s 变成 t 的最小总代价。

## 解题思路

预计算前缀和。nextSum[i] = 从 a 移到 i-1 的 next 总代价（循环）；prevSum[i] = 从 a 移到 i+1 的 previous 总代价。对每对字符 (a,b)，计算正向和反向代价取较小值。用 BigInt 处理大数。

## Solution

[SourceCode](./solution.js)
