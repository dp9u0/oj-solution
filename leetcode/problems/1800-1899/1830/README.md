# [1830] Minimum Number of Operations to Make String Sorted

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/description/)

* algorithms
* Hard (50.46%)
* Likes:    189
* Dislikes: 132
* Testcase Example:  '"cba"'

```md
You are given a string s (0-indexed)​​​​​​. You are asked to perform the following operation on s​​​​​​ until you get a sorted string:

Find the largest index i such that 1 <= i < s.length and s[i] < s[i - 1].
Find the largest index j such that i <= j < s.length and s[k] < s[i - 1] for all the possible values of k in the range [i, j] inclusive.
Swap the two characters at indices i - 1​​​​ and j​​​​​.
Reverse the suffix starting at index i​​​​​​.

Return the number of operations needed to make the string sorted. Since the answer can be too large, return it modulo 109 + 7.

Example 1:

Input: s = 'cba'
Output: 5
Explanation: The simulation goes as follows:
Operation 1: i=2, j=2. Swap s[1] and s[2] to get s='cab', then reverse the suffix starting at 2. Now, s='cab'.
Operation 2: i=1, j=2. Swap s[0] and s[2] to get s='bac', then reverse the suffix starting at 1. Now, s='bca'.
Operation 3: i=2, j=2. Swap s[1] and s[2] to get s='bac', then reverse the suffix starting at 2. Now, s='bac'.
Operation 4: i=1, j=1. Swap s[0] and s[1] to get s='abc', then reverse the suffix starting at 1. Now, s='acb'.
Operation 5: i=2, j=2. Swap s[1] and s[2] to get s='abc', then reverse the suffix starting at 2. Now, s='abc'.

Example 2:

Input: s = 'aabaa'
Output: 2
Explanation: The simulation goes as follows:
Operation 1: i=3, j=4. Swap s[2] and s[4] to get s='aaaab', then reverse the substring starting at 3. Now, s='aaaba'.
Operation 2: i=4, j=4. Swap s[3] and s[4] to get s='aaaab', then reverse the substring starting at 4. Now, s='aaaab'.


Constraints:

1 <= s.length <= 3000
s​​​​​​ consists only of lowercase English letters.


```

## 翻译

给定字符串 s，反复执行"prev_permutation"操作直到字符串有序，求操作次数。模 10^9+7。

## 解题思路

这本质上是在求 s 在所有排列中的排名（按字典序降序排列时的位置）。等价于计算字典序严格大于 s 的排列数。

用康托展开的逆过程：从左到右遍历，对每个位置 i，统计右侧比 s[i] 小的字符数 less，则贡献 = less * (剩余长度的全排列数) / (各字符频率的阶乘之积)。即 less * n! / (cnt[a]! * cnt[b]! * ...)。需要预计算阶乘和逆元。

O(n * 26)。

## Solution

[SourceCode](./solution.js)
