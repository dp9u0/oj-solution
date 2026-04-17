# [3389] Minimum Operations to Make Character Frequencies Equal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-character-frequencies-equal/description/)

* algorithms
* Hard (26.36%)
* Likes:    77
* Dislikes: 2
* Testcase Example:  '"acab"'

```md
You are given a string s.
A string t is called good if all characters of t occur the same number of times.
You can perform the following operations any number of times:

Delete a character from s.
Insert a character in s.
Change a character in s to its next letter in the alphabet.

Note that you cannot change &#39;z&#39; to &#39;a&#39; using the third operation.
Return the minimum number of operations required to make s good.

Example 1:

Input: s = 'acab'
Output: 1
Explanation:
We can make s good by deleting one occurrence of character &#39;a&#39;.

Example 2:

Input: s = 'wddw'
Output: 0
Explanation:
We do not need to perform any operations since s is initially good.

Example 3:

Input: s = 'aaabc'
Output: 2
Explanation:
We can make s good by applying these operations:

Change one occurrence of &#39;a&#39; to &#39;b&#39;
Insert one occurrence of &#39;c&#39; into s



Constraints:

3 <= s.length <= 2* 104
s contains only lowercase English letters.


```

## 题目翻译

给定字符串 s，通过删除、插入、变为下一字母三种操作，使所有字符出现频率相同。求最小操作数。

## 解题思路

**枚举目标频率 + 进位DP**

枚举目标频率 t。dp[carry] 表示当前有 carry 个字符从前一个字母流入的最小代价。保留字母时多余的字符可以删除（carry=0）或变为下一字母（carry=excess），代价相同但 carry 不同，需做范围更新。总 O(26 * n * maxCnt)。

## Solution

[SourceCode](./solution.js)
