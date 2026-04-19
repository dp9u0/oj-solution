# [2840] Check if Strings Can be Made Equal With Operations II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/description/)

* algorithms
* Medium (73.96%)
* Likes:    579
* Dislikes: 18
* Testcase Example:  '"abcdba"\n"cabdab"'

```md
You are given two strings s1 and s2, both of length n, consisting of lowercase English letters.
You can apply the following operation on any of the two strings any number of times:

Choose any two indices i and j such that i < j and the difference j - i is even, then swap the two characters at those indices in the string.

Return true if you can make the strings s1 and s2 equal, andfalse otherwise.

Example 1:

Input: s1 = 'abcdba', s2 = 'cabdab'
Output: true
Explanation: We can apply the following operations on s1:
- Choose the indices i = 0, j = 2. The resulting string is s1 = 'cbadba'.
- Choose the indices i = 2, j = 4. The resulting string is s1 = 'cbbdaa'.
- Choose the indices i = 1, j = 5. The resulting string is s1 = 'cabdab' = s2.

Example 2:

Input: s1 = 'abe', s2 = 'bea'
Output: false
Explanation: It is not possible to make the two strings equal.


Constraints:

n == s1.length == s2.length
1 <= n <= 105
s1 and s2 consist only of lowercase English letters.


```

## 题目翻译

给定两个等长字符串 s1 和 s2。操作：选择 i < j 且 j - i 为偶数的两个索引，交换字符。判断能否通过操作使 s1 等于 s2。

## 解题思路

关键观察：j - i 为偶数意味着只能交换同奇偶位置的字符。即偶数索引的字符只能在偶数索引之间交换，奇数索引同理。所以分别比较 s1 和 s2 在偶数位置和奇数位置的字符频率是否相同即可。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
