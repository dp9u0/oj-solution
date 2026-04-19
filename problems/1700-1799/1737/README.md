# [1737] Change Minimum Characters to Satisfy One of Three Conditions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/description/)

* algorithms
* Medium (37.85%)
* Likes:    339
* Dislikes: 346
* Testcase Example:  '"aba"\n"caa"'

```md
You are given two strings a and b that consist of lowercase letters. In one operation, you can change any character in a or b to any lowercase letter.
Your goal is to satisfy one of the following three conditions:

Every letter in a is strictly less than every letter in b in the alphabet.
Every letter in b is strictly less than every letter in a in the alphabet.
Both a and b consist of only one distinct letter.

Return the minimum number of operations needed to achieve your goal.

Example 1:

Input: a = 'aba', b = 'caa'
Output: 2
Explanation: Consider the best way to make each condition true:
1) Change b to 'ccc' in 2 operations, then every letter in a is less than every letter in b.
2) Change a to 'bbb' and b to 'aaa' in 3 operations, then every letter in b is less than every letter in a.
3) Change a to 'aaa' and b to 'aaa' in 2 operations, then a and b consist of one distinct letter.
The best way was done in 2 operations (either condition 1 or condition 3).

Example 2:

Input: a = 'dabadd', b = 'cda'
Output: 3
Explanation: The best way is to make condition 1 true by changing b to 'eee'.


Constraints:

1 <= a.length, b.length <= 105
a and b consist only of lowercase letters.


```

## 中文翻译

给定两个小写字母字符串 a 和 b，每次操作可以将任意字符改为任意小写字母。求满足以下三个条件之一的最少操作数：
1. a 中所有字母严格小于 b 中所有字母
2. b 中所有字母严格小于 a 中所有字母
3. a 和 b 都只包含一种字母

## 解题思路

统计两个字符串的字符频率，用前缀和枚举分割点：
- 条件1：枚举分割字符 c (a~z)，将 a 中 >=c 的字符改掉，将 b 中 <c 的字符改掉
- 条件2：同理，a 中 <=c 的改掉，b 中 >c 的改掉
- 条件3：枚举目标字符 c，统计 a 和 b 中非 c 字符的总数

时间复杂度：O(26*(n+m))，空间复杂度：O(26)

## Solution

[SourceCode](./solution.js)
