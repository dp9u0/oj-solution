# [4104] 统计有效子字符串 II

## Description


```md
https://leetcode.cn/problems/count-valid-substrings-ii/description/
* algorithms
* Medium (54.65%)
* Dislikes: -
* Testcase Example:  '"abac"'
给你一个仅由字符 'a'、'b' 和 'c' 组成的字符串 s。
如果一个字符串不包含 "abc" 作为 子序列 ，那么它被称为 有效的 。
返回 s 中 有效子串 的数量。起始或结束下标不同的子串分别计数。
子串 是字符串内连续的 非空 字符序列。
子序列 是指从另一个字符串中删除一些或不删除字符，且不改变剩余字符顺序所得到的新字符串。

示例 1：
输入： s = "abac"
输出： 9
解释：
以下子串不包含 "abc" 作为子序列：
s[0..0] = "a"
s[0..1] = "ab"
s[0..2] = "aba"
s[1..1] = "b"
s[1..2] = "ba"
s[1..3] = "bac"
s[2..2] = "a"
s[2..3] = "ac"
s[3..3] = "c"
因此，答案是 9。
示例 2：
输入： s = "abc"
输出： 5
解释：
以下子串不包含 "abc" 作为子序列：
s[0..0] = "a"
s[0..1] = "ab"
s[1..1] = "b"
s[1..2] = "bc"
s[2..2] = "c"​​​​​​​
因此，答案是 5。
示例 3：
输入： s = "ac"
输出： 3
解释：
s 中的所有子串都不包含 "abc"​​​​​​​ 作为子序列。因此，答案是 3。

提示：
1 <= s.length <= 105​​​​​​​
s 仅由字符 'a'、'b' 和 'c' 组成。

```

## Solution

[SourceCode](./solution.js)

## English Translation

You are given a string s consisting only of the characters 'a', 'b' and 'c'.
A string is called valid if it does not contain "abc" as a subsequence.
Return the number of valid substrings of s. Substrings with different starting or ending indices are counted separately.
A subsequence is a string formed by deleting some (or no) characters without changing the order of the remaining characters.

Example 1: s = "abac" -> 9 (e.g. s[0..3] = "abac" is invalid: it contains a, b, c as a subsequence).
Example 2: s = "abc" -> 5.
Example 3: s = "ac" -> 3.

Constraints:
1 <= s.length <= 10^5
s consists only of 'a', 'b' and 'c'.

## Approach

For right end r, containment of the a-b-c subsequence in [l, r] is monotone in l (shrinking
the window can only destroy the pattern), so valid left bounds form a suffix. Let F(r) = the
largest l such that [l, r] contains an a-b-c subsequence; valid count ending at r = r - F(r).

F(r) = max over c-positions k <= r of lastA(lastB(k)), where lastB(k)/lastA(j) are the latest
'b' before k / latest 'a' before j. The greedy chain (latest c, latest b before it, latest a
before that) maximizes the 'a' position: any valid triple has its 'b' before k and hence
<= the latest 'b' before k, so its 'a' <= lastA(lastB(k)). Only r with s[r] == 'c' can raise F.

Precompute lastB/lastA in O(n); sweep r maintaining a running maximum. Answer <= n(n+1)/2 fits
in a double. O(n) time, O(n) space.
