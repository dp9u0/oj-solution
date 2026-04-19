# [2287] Rearrange Characters to Make Target String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rearrange-characters-to-make-target-string/description/)

* algorithms
* Easy (61.19%)
* Likes:    533
* Dislikes: 38
* Testcase Example:  '"ilovecodingonleetcode"\n"code"'

```md
You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.
Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.

Example 1:

Input: s = 'ilovecodingonleetcode', target = 'code'
Output: 2
Explanation:
For the first copy of 'code', take the letters at indices 4, 5, 6, and 7.
For the second copy of 'code', take the letters at indices 17, 18, 19, and 20.
The strings that are formed are 'ecod' and 'code' which can both be rearranged into 'code'.
We can make at most two copies of 'code', so we return 2.

Example 2:

Input: s = 'abcba', target = 'abc'
Output: 1
Explanation:
We can make one copy of 'abc' by taking the letters at indices 0, 1, and 2.
We can make at most one copy of 'abc', so we return 1.
Note that while there is an extra &#39;a&#39; and &#39;b&#39; at indices 3 and 4, we cannot reuse the letter &#39;c&#39; at index 2, so we cannot make a second copy of 'abc'.

Example 3:

Input: s = 'abbaccaddaeea', target = 'aaaaa'
Output: 1
Explanation:
We can make one copy of 'aaaaa' by taking the letters at indices 0, 3, 6, 9, and 12.
We can make at most one copy of 'aaaaa', so we return 1.


Constraints:

1 <= s.length <= 100
1 <= target.length <= 10
s and target consist of lowercase English letters.


Note: This question is the same as  1189: Maximum Number of Balloons.

```

## 中文翻译

给定字符串 s 和 target，从 s 中取字母（可重排），求最多能组成多少个 target 的副本。

## 解题思路

统计 s 和 target 中每个字母的频率，对于 target 中的每个字母，s 中可提供的副本数为 floor(freq_s[c] / freq_target[c])，取最小值。

时间复杂度：O(n+m)，空间复杂度：O(26)

## Solution

[SourceCode](./solution.js)
