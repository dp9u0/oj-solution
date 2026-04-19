# [3258] Count Substrings That Satisfy K-Constraint I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/description/)

* algorithms
* Easy (78.90%)
* Likes:    183
* Dislikes: 37
* Testcase Example:  '"10101"\n1'

```md
You are given a binary string s and an integer k.
A binary string satisfies the k-constraint if either of the following conditions holds:

The number of 0&#39;s in the string is at most k.
The number of 1&#39;s in the string is at most k.

Return an integer denoting the number of substrings of s that satisfy the k-constraint.

Example 1:

Input: s = '10101', k = 1
Output: 12
Explanation:
Every substring of s except the substrings '1010', '10101', and '0101' satisfies the k-constraint.

Example 2:

Input: s = '1010101', k = 2
Output: 25
Explanation:
Every substring of s except the substrings with a length greater than 5 satisfies the k-constraint.

Example 3:

Input: s = '11111', k = 1
Output: 15
Explanation:
All substrings of s satisfy the k-constraint.


Constraints:

1 <= s.length <= 50
1 <= k <= s.length
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## 中文翻译

统计二进制字符串中满足 k-constraint 的子串数：0 的个数 <= k 或 1 的个数 <= k。

## 解题思路

n <= 50，直接暴力枚举所有子串即可。

时间复杂度：O(n^2)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
