# [1585] Check If String Is Transformable With Substring Sort Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/description/)

* algorithms
* Hard (51.84%)
* Likes:    462
* Dislikes: 11
* Testcase Example:  '"84532"\n"34852"'

```md
Given two strings s and t, transform string s into string t using the following operation any number of times:

Choose a non-empty substring in s and sort it in place so the characters are in ascending order.

For example, applying the operation on the underlined substring in '14234' results in '12344'.



Return true if it is possible to transform s into t. Otherwise, return false.
A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = '84532', t = '34852'
Output: true
Explanation: You can transform s into t using the following sort operations:
'84532' (from index 2 to 3) -> '84352'
'84352' (from index 0 to 2) -> '34852'

Example 2:

Input: s = '34521', t = '23415'
Output: true
Explanation: You can transform s into t using the following sort operations:
'34521' -> '23451'
'23451' -> '23415'

Example 3:

Input: s = '12345', t = '12435'
Output: false


Constraints:

s.length == t.length
1 <= s.length <= 105
s and t consist of only digits.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

每次操作可选 s 的任意子串原地升序排序。判断 s 能否变成 t。

示例 1：`'84532'` → `'34852'` true；示例 2：`'34521'` → `'23415'` true；示例 3：`'12345'` → `'12435'` false

## 解题思路

经典贪心：每个数字 0-9 维护其在 s 中出现位置的队列。按 t 逐位取数字 c 的**最早未用位置 p**；若任何比 c 小的数字的队首位置 < p 则不可行（排序操作无法把 c 越过更小的数移到前面），否则消耗 p。可行性由该条件刻画。O(10n)。