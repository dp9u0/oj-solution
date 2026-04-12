# [791] Custom Sort String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/custom-sort-string/description/)

* algorithms
* Medium (72.29%)
* Likes:    3833
* Dislikes: 431
* Testcase Example:  '"cba"\n"abcd"'

```md
You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.
Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.
Return any permutation of s that satisfies this property.

Example 1:

Input:   order = 'cba', s = 'abcd'
Output:   'cbad'
Explanation:  'a', 'b', 'c' appear in order, so the order of 'a', 'b', 'c' should be 'c', 'b', and 'a'.
Since 'd' does not appear in order, it can be at any position in the returned string. 'dcba', 'cdba', 'cbda' are also valid outputs.

Example 2:

Input:   order = 'bcafg', s = 'abcd'
Output:   'bcad'
Explanation:  The characters 'b', 'c', and 'a' from order dictate the order for the characters in s. The character 'd' in s does not appear in order, so its position is flexible.
Following the order of appearance in order, 'b', 'c', and 'a' from s should be arranged as 'b', 'c', 'a'. 'd' can be placed at any position since it&#39;s not in order. The output 'bcad' correctly follows this rule. Other arrangements like 'dbca' or 'bcda' would also be valid, as long as 'b', 'c', 'a' maintain their order.


Constraints:

1 <= order.length <= 26
1 <= s.length <= 200
order and s consist of lowercase English letters.
All the characters of order are unique.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定两个字符串 order 和 s。order 中的字符唯一且按某种自定义顺序排列。对 s 中的字符重新排列，使其符合 order 的顺序。不在 order 中的字符可放在任意位置。返回任意一个满足条件的排列。

## 解题思路

**计数 + 按 order 顺序构建**

1. 统计 s 中每个字符的出现次数
2. 按 order 的顺序依次添加字符到结果中
3. 最后添加 s 中不在 order 里的剩余字符

时间复杂度 O(|order| + |s|)，空间复杂度 O(1)。
