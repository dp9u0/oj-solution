# [2168] 每个数字的频率都相同的不同子字符串的数量

## Description


```md
https://leetcode.cn/problems/unique-substrings-with-equal-digit-frequency/description/
* algorithms
* Medium (58.38%)
* Likes:    17
* Dislikes: -
* Testcase Example:  '"1212"'
给你一个由数字组成的字符串 s，返回 s 中 不同子字符串数量，其中的每一个数字出现的频率都相同。

示例1:
输入: s = "1212"
输出: 5
解释: 符合要求的子串有 "1", "2", "12", "21", "1212".
要注意，尽管"12"在s中出现了两次，但在计数的时候只计算一次。
示例 2:
输入: s = "12321"
输出: 9
解释: 符合要求的子串有 "1", "2", "3", "12", "23", "32", "21", "123", "321".

解释:
1 <= s.length <= 1000
s 只包含阿拉伯数字.
Hint 1: With the constraints, could we try every substring?
Hint 2: Yes, checking every substring has runtime O(n^2), which will pass.
Hint 3: How can we make sure we only count unique substrings?
Hint 4: Use a set to store previously counted substrings. Hashing a string s of length m takes O(m) time. Is there a fast way to compute the hash of s if we know the hash of s[0..m - 2]?
Hint 5: Use a rolling hash.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given a digit string `s`, return the number of distinct substrings in which every present digit occurs the same number of times.

Example 1:
Input: s = "1212"
Output: 5 ("1", "2", "12", "21", "1212")

Example 2:
Input: s = "12321"
Output: 9

Constraints: 1 <= s.length <= 1000.

## Approach

Enumerate all O(n^2) substrings from each start, extending the end with incremental counts; a substring qualifies when all 10 counts are either 0 or one common value. Deduplicate with a set of double rolling-hash keys (two mods; the pair is stored as a string to eliminate collision risk). Total O(n^2 * 10) checks and O(n^2) hashes.
