# [1307] Verbal Arithmetic Puzzle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/verbal-arithmetic-puzzle/description/)

* algorithms
* Hard (34.89%)
* Likes:    531
* Dislikes: 138
* Testcase Example:  '["SEND","MORE"]\n"MONEY"'

```md
Given an equation, represented by words on the left side and the result on the right side.
You need to check if the equation is solvable under the following rules:

Each character is decoded as one digit (0 - 9).
No two characters can map to the same digit.
Each words[i] and result are decoded as one number without leading zeros.
Sum of numbers on the left side (words) will equal to the number on the right side (result).

Return true if the equation is solvable, otherwise return false.

Example 1:

Input: words = ['SEND','MORE'], result = 'MONEY'
Output: true
Explanation: Map &#39;S&#39;-> 9, &#39;E&#39;->5, &#39;N&#39;->6, &#39;D&#39;->7, &#39;M&#39;->1, &#39;O&#39;->0, &#39;R&#39;->8, &#39;Y&#39;->&#39;2&#39;
Such that: 'SEND' + 'MORE' = 'MONEY' ,  9567 + 1085 = 10652
Example 2:

Input: words = ['SIX','SEVEN','SEVEN'], result = 'TWENTY'
Output: true
Explanation: Map &#39;S&#39;-> 6, &#39;I&#39;->5, &#39;X&#39;->0, &#39;E&#39;->8, &#39;V&#39;->7, &#39;N&#39;->2, &#39;T&#39;->1, &#39;W&#39;->&#39;3&#39;, &#39;Y&#39;->4
Such that: 'SIX' + 'SEVEN' + 'SEVEN' = 'TWENTY' ,  650 + 68782 + 68782 = 138214
Example 3:

Input: words = ['LEET','CODE'], result = 'POINT'
Output: false
Explanation: There is no possible mapping to satisfy the equation, so we return false.
Note that two different characters cannot map to the same digit.


Constraints:

2 <= words.length <= 5
1 <= words[i].length, result.length <= 7
words[i], result contain only uppercase English letters.
The number of different characters used in the expression is at most 10.


```

## 中文翻译

给定等式 words = result（字母算术谜题），每个字母对应 0-9 中一个不同数字，首字母不能为 0。判断是否有解。

## 解题思路

**回溯 + 系数剪枝**：

1. 收集所有不同字母（最多10个），标记首字母
2. 计算每个字母的系数：word 字母系数为正，result 字母系数为负
3. 按 |系数| 降序排列字母，优先尝试高影响字母
4. 回溯赋值，剪枝：当前部分和 + 剩余范围必须包含 0

## Solution

[SourceCode](./solution.js)
