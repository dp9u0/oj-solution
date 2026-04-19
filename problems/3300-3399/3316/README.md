# [3316] Find Maximum Removals From Source String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-maximum-removals-from-source-string/description/)

* algorithms
* Medium (39.23%)
* Likes:    167
* Dislikes: 20
* Testcase Example:  '"abbaa"\n"aba"\n[0,1,2]'

```md
You are given a string source of size n, a string pattern that is a subsequence of source, and a sorted integer array targetIndices that contains distinct numbers in the range [0, n - 1].
We define an operation as removing a character at an index idx from source such that:

idx is an element of targetIndices.
pattern remains a subsequence of source after removing the character.

Performing an operation does not change the indices of the other characters in source. For example, if you remove &#39;c&#39; from 'acb', the character at index 2 would still be &#39;b&#39;.
Return the maximum number of operations that can be performed.

Example 1:

Input: source = 'abbaa', pattern = 'aba', targetIndices = [0,1,2]
Output: 1
Explanation:
We can&#39;t remove source[0] but we can do either of these two operations:

Remove source[1], so that source becomes 'a_baa'.
Remove source[2], so that source becomes 'ab_aa'.


Example 2:

Input: source = 'bcda', pattern = 'd', targetIndices = [0,3]
Output: 2
Explanation:
We can remove source[0] and source[3] in two operations.

Example 3:

Input: source = 'dda', pattern = 'dda', targetIndices = [0,1,2]
Output: 0
Explanation:
We can&#39;t remove any character from source.

Example 4:

Input: source = 'yeyeykyded', pattern = 'yeyyd', targetIndices = [0,2,3,4]
Output: 2
Explanation:
We can remove source[2] and source[3] in two operations.


Constraints:

1 <= n == source.length <= 3 * 103
1 <= pattern.length <= n
1 <= targetIndices.length <= n
targetIndices is sorted in ascending order.
The input is generated such that targetIndices contains distinct elements in the range [0, n - 1].
source and pattern consist only of lowercase English letters.
The input is generated such that pattern appears as a subsequence in source.


```

## 中文翻译

给定字符串 source、pattern（pattern 是 source 的子序列）和有序数组 targetIndices。每次操作可以从 targetIndices 中选一个下标 idx 删除 source[idx]，要求删除后 pattern 仍然是 source 的子序列。删除不改变其他字符的下标。求最多能执行多少次操作。

## 解题思路

二分答案 + 贪心验证。二分最多能删除多少个 targetIndices 中的位置。验证时，先删除前 mid 个 targetIndices 中的位置，然后用双指针检查 pattern 是否仍是 source 的子序列。

## Solution

[SourceCode](./solution.js)
